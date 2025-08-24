import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-100 p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 p-2 rounded-full hover:bg-purple-200 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-purple-900" />
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-100 rounded-lg p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Our Vision</h1>
          <p className="text-xl text-purple-800 mb-6">
            Creating a world where every stray finds their forever home
          </p>
          <img
            src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
            alt="Happy adopted pets"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-purple-800 text-lg">
            AdopTails! is more than just a platform - it's a movement to transform the lives of stray animals and create lasting bonds between pets and their new families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-pink-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Our Mission</h2>
            <img
              src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg"
              alt="Rescue mission"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-2 text-purple-800">
              <li>• Rescue and rehabilitate stray animals</li>
              <li>• Provide medical care and shelter</li>
              <li>• Connect pets with loving families</li>
              <li>• Promote responsible pet ownership</li>
              <li>• Support foster care programs</li>
            </ul>
          </div>

          <div className="bg-orange-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">How We Help</h2>
            <img
              src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg"
              alt="Helping animals"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-2 text-purple-800">
              <li>• Online adoption platform</li>
              <li>• Foster care network</li>
              <li>• Veterinary partnerships</li>
              <li>• Community education</li>
              <li>• Emergency rescue services</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Join Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1189673/pexels-photo-1189673.jpeg"
                alt="Adopt"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-bold text-purple-900 mb-2">Adopt</h3>
              <p className="text-purple-800">Give a loving home to a pet in need</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg"
                alt="Foster"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-bold text-purple-900 mb-2">Foster</h3>
              <p className="text-purple-800">Provide temporary care and love</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg"
                alt="Donate"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-bold text-purple-900 mb-2">Donate</h3>
              <p className="text-purple-800">Support our rescue efforts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;