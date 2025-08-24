import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowLeft, Filter } from 'lucide-react';

interface Pet {
  id: number;
  name: string;
  age: string;
  type: string;
  breed: string;
  size: string;
  gender: string;
  image: string;
  location: string;
  description: string;
  vaccinated: boolean;
  neutered: boolean;
}

const pets: Pet[] = [
  {
    id: 1,
    name: 'Teddy',
    age: '2Y',
    type: 'Dog',
    breed: 'Indie',
    size: 'Medium',
    gender: 'Male',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
    location: 'Kompally, Hyd',
    description: "Meet Teddy, a 2-year-old stray who's been through a lot but is now ready for a fresh start. He was found wandering the streets, hungry and scared, before being rescued by a kind-hearted foster family. Teddy is a gentle and sweet-natured dog who loves to be around people.",
    vaccinated: true,
    neutered: true
  },
  {
    id: 2,
    name: 'Sheru',
    age: '1Y',
    type: 'Dog',
    breed: 'Labrador',
    size: 'Large',
    gender: 'Male',
    image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg',
    location: 'Gachibowli, Hyd',
    description: "Sheru is an energetic 1-year-old Labrador with a heart of gold. Found tied to a lamppost, he's overcome his past and now spreads joy wherever he goes. He's great with kids and loves playing fetch in the park.",
    vaccinated: true,
    neutered: false
  },
  {
    id: 3,
    name: 'Enny',
    age: '3Y',
    type: 'Cat',
    breed: 'Persian',
    size: 'Small',
    gender: 'Female',
    image: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg',
    location: 'Madhapur, Hyd',
    description: "Enny is a graceful 3-year-old Persian cat who was rescued from a hoarding situation. Despite her rough start, she's incredibly affectionate and loves to curl up in laps. She's looking for a quiet home where she can be the queen she is.",
    vaccinated: true,
    neutered: true
  },
  {
    id: 4,
    name: 'Bunny',
    age: '2Y',
    type: 'Dog',
    breed: 'Beagle',
    size: 'Medium',
    gender: 'Female',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
    location: 'Jubilee Hills, Hyd',
    description: "Bunny is a cheerful Beagle who was surrendered due to family circumstances. She's incredibly smart, already knows basic commands, and has a nose for adventure! She'd make a perfect companion for an active family.",
    vaccinated: true,
    neutered: true
  },
  {
    id: 5,
    name: 'Kaalu',
    age: '1Y',
    type: 'Cat',
    breed: 'Indie',
    size: 'Small',
    gender: 'Male',
    image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg',
    location: 'Kukatpally, Hyd',
    description: "Kaalu is a playful black cat who brings good luck wherever he goes! Rescued from a construction site, he's grown into a curious and affectionate young cat. He loves playing with toys and watching birds from the window.",
    vaccinated: true,
    neutered: false
  },
  {
    id: 6,
    name: 'Softy',
    age: '3Y',
    type: 'Dog',
    breed: 'Pomeranian',
    size: 'Small',
    gender: 'Female',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg',
    location: 'Banjara Hills, Hyd',
    description: "Softy lives up to her name with her gentle personality and fluffy coat. She was found abandoned in a park but hasn't lost her trust in humans. She's a perfect lap dog who loves cuddles and short walks.",
    vaccinated: true,
    neutered: true
  }
];

const BrowsePets: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    size: '',
    gender: '',
    age: ''
  });

  const clearFilters = () => {
    setActiveFilters({
      type: '',
      size: '',
      gender: '',
      age: ''
    });
  };

  const hasActiveFilters = Object.values(activeFilters).some(value => value !== '');

  const filteredPets = pets.filter(pet => {
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const matchesSearch = searchTerms.every(term => 
      pet.name.toLowerCase().includes(term) ||
      pet.type.toLowerCase().includes(term) ||
      pet.breed.toLowerCase().includes(term) ||
      pet.size.toLowerCase().includes(term) ||
      pet.gender.toLowerCase().includes(term)
    );

    const matchesType = !activeFilters.type || pet.type === activeFilters.type;
    const matchesSize = !activeFilters.size || pet.size === activeFilters.size;
    const matchesGender = !activeFilters.gender || pet.gender === activeFilters.gender;
    const matchesAge = !activeFilters.age || (
      activeFilters.age === 'Young' ? parseInt(pet.age) <= 1 :
      activeFilters.age === 'Adult' ? parseInt(pet.age) > 1 && parseInt(pet.age) <= 5 :
      parseInt(pet.age) > 5
    );

    return matchesSearch && matchesType && matchesSize && matchesGender && matchesAge;
  });

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-purple-200 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 text-purple-900" />
          </button>
          <div className="relative flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pets (e.g., 'dog', 'small cat', 'female')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pr-24 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-purple-100 rounded-full"
                  >
                    <X className="w-5 h-5 text-purple-500" />
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-1 hover:bg-purple-100 rounded-full"
                  aria-label="Toggle filters"
                >
                  <Filter className={`w-5 h-5 text-purple-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                <Search className="w-5 h-5 text-purple-500" />
              </div>
            </div>

            {showFilters && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-semibold text-purple-900">Filters</h3>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-red-600 hover:text-red-800 font-medium"
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Close Filters
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-purple-600 mb-2">Type</p>
                    <div className="flex flex-wrap gap-2">
                      {['Dog', 'Cat'].map(type => (
                        <button
                          key={type}
                          onClick={() => setActiveFilters(f => ({
                            ...f,
                            type: f.type === type ? '' : type
                          }))}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeFilters.type === type
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 mb-2">Size</p>
                    <div className="flex flex-wrap gap-2">
                      {['Small', 'Medium', 'Large'].map(size => (
                        <button
                          key={size}
                          onClick={() => setActiveFilters(f => ({
                            ...f,
                            size: f.size === size ? '' : size
                          }))}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeFilters.size === size
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 mb-2">Age</p>
                    <div className="flex flex-wrap gap-2">
                      {['Young', 'Adult', 'Senior'].map(age => (
                        <button
                          key={age}
                          onClick={() => setActiveFilters(f => ({
                            ...f,
                            age: f.age === age ? '' : age
                          }))}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeFilters.age === age
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 mb-2">Gender</p>
                    <div className="flex flex-wrap gap-2">
                      {['Male', 'Female'].map(gender => (
                        <button
                          key={gender}
                          onClick={() => setActiveFilters(f => ({
                            ...f,
                            gender: f.gender === gender ? '' : gender
                          }))}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeFilters.gender === gender
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPets.map((pet) => (
            <Link to={`/pet/${pet.id}`} key={pet.id} className="relative group">
              <div className="border-2 border-purple-300 rounded-lg overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 bg-white">
                  <h3 className="font-bold text-purple-900">{pet.name}</h3>
                  <p className="text-sm text-purple-700">{pet.breed}, {pet.age}</p>
                  <p className="text-xs text-purple-600">{pet.type} • {pet.size} • {pet.gender}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePets;