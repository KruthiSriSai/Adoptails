import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const MainButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between gap-2 px-4 py-3">
      <Button 
        variant="primary" 
        className="flex-1"
        onClick={() => navigate('/browse')}
      >
        Adopt Now
      </Button>
      <Button 
        variant="primary" 
        className="flex-1"
        onClick={() => navigate('/list-pet')}
      >
        List a Pet
      </Button>
      <Button 
        variant="primary" 
        className="flex-1"
        onClick={() => navigate('/foster')}
      >
        Foster
      </Button>
    </div>
  );
};

export default MainButtons;