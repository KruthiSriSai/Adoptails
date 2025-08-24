import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-800 p-4 flex justify-center items-center gap-6">
      <Link 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-purple-200 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </Link>
      <Link 
        href="mailto:adoptailssupport@gmail.com"
        className="text-white hover:text-purple-200 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </Link>
    </footer>
  );
};

export default Footer;