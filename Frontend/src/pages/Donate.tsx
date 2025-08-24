import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Donate: React.FC = () => {
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

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">Small Help- Big Difference!</h1>
        <h2 className="text-3xl font-bold text-purple-900 mb-8">Please Donate</h2>

        <div className="bg-pink-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg"
              alt="Cute animals illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/donate"
              alt="Donation QR Code"
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;