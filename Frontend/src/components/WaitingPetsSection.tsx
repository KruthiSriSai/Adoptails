import React from 'react';
import { Link } from 'react-router-dom';

const pets = [
  { id: 1, name: 'Teddy', age: '2Y', image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg' },
  { id: 2, name: 'Sheru', age: '1Y', image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg' },
  { id: 3, name: 'Enny', age: '3Y', image: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg' },
];

const WaitingPetsSection: React.FC = () => {
  return (
    <div className="bg-purple-200 mx-4 my-6 rounded-lg p-4">
      <h2 className="text-purple-900 font-bold text-xl mb-4 text-center">
        Tails waiting to share their Tales..
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <Link 
            key={pet.id} 
            to={`/pet/${pet.id}`}
            className="flex flex-col items-center transform transition-transform hover:scale-105"
          >
            <div className="border-2 border-purple-900 p-1 mb-1">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-24 md:h-32 object-cover"
              />
            </div>
            <p className="text-purple-900 font-medium text-sm">
              {pet.name}, {pet.age}
            </p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/browse" className="text-purple-900 font-medium underline">
          View more..
        </Link>
      </div>
    </div>
  );
};

export default WaitingPetsSection;