import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const DonationSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-6">
      <h2 className="text-purple-900 font-bold text-xl mb-4">Lend a Hand..</h2>
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3">
          <img
            src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg"
            alt="Dogs in need of help"
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 bg-purple-100 p-4 flex flex-col justify-center items-center text-center">
          <p className="text-purple-900 font-medium text-sm">
            Can't adopt or foster? You can still be their Hero- Donate to save lives!
          </p>
          <Button 
            variant="secondary" 
            className="mt-4"
            onClick={() => navigate('/donate')}
          >
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;