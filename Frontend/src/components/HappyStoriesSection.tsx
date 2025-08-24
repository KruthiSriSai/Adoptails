import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "From 'Stray' to 'Safe'!",
    image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
    content: "Once afraid and alone, now surrounded by love in a forever home."
  },
  {
    id: 2,
    title: "A Tail of Second Chances",
    image: "https://images.pexels.com/photos/38008/pexels-photo-38008.jpeg",
    content: "Rescued just in time, living her best life with her new family."
  },
  {
    id: 3,
    title: "Love Knows No Bounds",
    image: "https://images.pexels.com/photos/1959055/pexels-photo-1959055.jpeg",
    content: "Despite challenges, this special pet found their perfect match."
  }
];

const HappyStoriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-purple-900 font-bold text-xl mb-4">Happy Stories!</h2>
      <div className="flex flex-col md:flex-row overflow-hidden bg-blue-100 rounded-lg">
        <div className="relative w-full md:w-1/2 h-48">
          <img
            src={stories[activeIndex].image}
            alt="Happy pet with new family"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-orange-200 p-4 flex flex-col justify-center">
          <h3 className="text-purple-900 font-bold text-lg">{stories[activeIndex].title}</h3>
          <p className="text-purple-900 mt-2">{stories[activeIndex].content}</p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button 
          onClick={goToPrev}
          className="text-purple-900 focus:outline-none hover:text-purple-700 transition-colors"
          aria-label="Previous story"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext}
          className="text-purple-900 focus:outline-none hover:text-purple-700 transition-colors"
          aria-label="Next story"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HappyStoriesSection;