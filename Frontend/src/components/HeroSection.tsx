import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="px-4 flex flex-col md:flex-row overflow-hidden">
      <div className="relative w-full md:w-2/3 h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg"
          alt="Stray dog in poor conditions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
          <h2 className="text-orange-400 font-bold text-xl md:text-2xl">
            WHERE DID SHE EAT LAST NIGHT?
          </h2>
          <p className="text-white text-sm md:text-base">You can change this.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-orange-200 p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-purple-900 font-bold text-lg md:text-xl">BE THEIR HERO.</h3>
        <p className="text-purple-900 font-bold text-lg md:text-xl">ADOPT</p>
        <p className="text-purple-900 font-bold text-lg md:text-xl">AND MAKE</p>
        <p className="text-purple-900 font-bold text-lg md:text-xl">THEIR LIFE</p>
        <p className="text-purple-900 font-bold text-lg md:text-xl">GLOW!</p>
      </div>
    </div>
  );
};

export default HeroSection;