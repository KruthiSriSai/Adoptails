import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import vision from '@google-cloud/vision';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads2', express.static(path.join(__dirname, 'uploads2')));

// MySQL pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'animal_rescue',
});

// Google Vision client
const client = new vision.ImageAnnotatorClient({
  keyFilename: path.join(__dirname, 'google-vision-key.json'),
});
const UPLOAD_DIR = path.resolve(process.cwd(), 'uploads2');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
// Multer for image uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });


// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'HELLOWORLD';

// --- Routes ---

// Register user
app.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { firstname, lastname, email, password, phone, gender } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);

    if ((existing as any[]).length > 0) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    }

    await pool.query(
      'INSERT INTO users (first_name, last_name, email, password, phone_number, gender) VALUES (?, ?, ?, ?, ?, ?)',
      [firstname, lastname, email, hashed, phone, gender]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = (rows as any[])[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// List animal
app.post(
  '/list-animal',
  upload.single('images'),
  async (req: Request, res: Response): Promise<void> => {
    const { name, breed, age, description = '', location } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: 'No image uploaded' });
      return;
    }

    // file.path is the correct absolute path versus manual join
    const filePath = file.path;
    console.log('Saved file at:', filePath);

    try {
      // Vision check uses the same filePath
      const [result] = await client.labelDetection(filePath);
      const labels = result.labelAnnotations || [];
      const isAnimal = labels.some(l =>
        /dog|cat|animal|pet/.test(l.description?.toLowerCase() || '')
      );
      if (!isAnimal) {
        res.status(400).json({ message: 'Image not recognized as an animal' });
        return;
      }

      // Build Google Maps URL
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`;

      // Insert matching your table schema
      await pool.query(
        `INSERT INTO animals
         (name, breed, age, description, image_path, status, location, google_maps_url)
         VALUES (?, ?, ?, ?, ?, 'Rescued', ?, ?)`,
        [
          name,
          breed,
          parseInt(age, 10),
          description,
          path.basename(filePath),
          location,
          googleMapsUrl,
        ]
      );

      res.status(201).json({ message: 'Animal listed successfully' });
    } catch (err) {
      console.error('Listing error:', err);
      res.status(500).json({ error: 'Failed to list animal' });
    }
  }
);

// Get all animals
app.get('/animals', async (_req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await pool.query('SELECT * FROM animals');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch animals' });
  }
});

// Foster application
app.post('/foster', async (req: Request, res: Response): Promise<void> => {
  const { name, phone, email, location, type, duration, housingType, hasOtherPets, notes } = req.body;

  try {
    await pool.query(
      'INSERT INTO fosterers (name, phone, email, location, type, duration, housingType, hasOtherPets, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, phone, email, location, type, duration, housingType, hasOtherPets, notes]
    );

    res.status(201).json({ message: 'Foster application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Foster application failed' });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
