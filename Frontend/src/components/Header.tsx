import React, { useState } from 'react';
import { Home, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-200 rounded-full"></div>
          <h1 className="text-purple-900 font-bold text-xl">AdopTails!</h1>
        </div>
        <div className="flex gap-4">
          <button onClick={() => navigate('/')}>
            <Home className="w-5 h-5 text-purple-900" />
          </button>
          <button onClick={() => setIsAuthModalOpen(true)}>
            <User className="w-5 h-5 text-purple-900" />
          </button>
          <button onClick={() => navigate('/contact')}>
            <Phone className="w-5 h-5 text-purple-900" />
          </button>
        </div>
      </header>
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;