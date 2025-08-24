import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-blue-100 mx-4 my-6 rounded-lg p-4 text-center relative overflow-hidden">
      <div className="flex justify-center">
        <h2 className="text-blue-400 font-bold text-3xl md:text-4xl">
          Adop<span className="text-blue-500">Tails!</span>
        </h2>
      </div>
      <p className="text-pink-500 font-medium mt-1">
        Rescue. Love. Repeat <span className="text-pink-400">🐾</span>
      </p>
      <div className="absolute -bottom-6 -left-6 w-16 h-16">
        <div className="w-full h-full bg-orange-200 rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute -top-6 -right-6 w-16 h-16">
        <div className="w-full h-full bg-green-200 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 -right-4 w-10 h-10">
        <div className="w-full h-full bg-blue-200 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 -left-2 w-8 h-8">
        <div className="w-full h-full bg-yellow-200 rounded-full"></div>
      </div>
      <div className="mt-4">
        <Link to="/about" className="text-purple-900 font-medium underline">
          About us...
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;