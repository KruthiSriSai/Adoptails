import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 p-2 rounded-full hover:bg-purple-200 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-purple-900" />
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-100 rounded-lg p-6 mb-6">
          <img
            src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg"
            alt="AdopTails Logo"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-center text-2xl font-bold text-purple-900">
            AdopTails!
          </h2>
          <p className="text-center text-pink-500 font-medium">
            Rescue. Love. Repeat
          </p>
          <p className="text-center mt-2">
            <Link to="/about" className="text-purple-900 underline hover:text-purple-700">
              About us..
            </Link>
          </p>
        </div>

        <div className="bg-orange-200 rounded-lg p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-2">
            Questions? Connect with our Heroes working behind the scenes!
          </h2>
          <p className="text-purple-900">
            Got any doubts or want to help a furry friend? We're here to assist! Reach out to us through the form below or connect via email, phone or Instagram
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-pink-200 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-purple-900 font-bold mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Subject *</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-md h-32 resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full text-lg py-3 shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl bg-purple-500 text-white hover:bg-purple-600 active:scale-95"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Ring us @</h2>
          <div className="space-y-2">
            <p className="text-purple-900 font-medium">📞 : +91- 630384537X</p>
            <p className="text-purple-900 font-medium">📞 : +91- 630384538X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;