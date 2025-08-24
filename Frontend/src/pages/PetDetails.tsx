import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

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
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
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
    description: "Meet Teddy, a 2-year-old stray who's been through a lot but is now ready for a fresh start. He was found wandering the streets, hungry and scared, before being rescued by a kind-hearted foster family. Teddy is a gentle and sweet-natured dog who loves to be around people. He's in great health and has been adjusting well to his new life, although he can still be a bit shy in new situations. Teddy is house-trained and quickly learning basic commands, but he would benefit from a little more leash training. He's good with other dogs and would do well in a home with or without other pets. Teddy would thrive in a calm and loving environment, where he can feel safe and secure.",
    vaccinated: true,
    neutered: true,
    contactInfo: {
      name: "Sarah Johnson",
      phone: "+91 9876543210",
      email: "sarah.j@adoptails.com"
    }
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
    description: "Sheru is a vibrant 1-year-old Labrador with boundless energy and an infectious enthusiasm for life. Found abandoned and tied to a lamppost, he's transformed into a joyful companion who loves nothing more than playing fetch and swimming. Despite his rough start, Sheru has a heart of gold and shows remarkable intelligence, already mastering several basic commands. He's especially great with children and has a gentle nature that makes him perfect for family life. Sheru needs an active family who can match his energy levels and continue his training. He's shown great potential in agility exercises and would thrive with owners who can channel his energy into positive activities.",
    vaccinated: true,
    neutered: false,
    contactInfo: {
      name: "Raj Patel",
      phone: "+91 9876543211",
      email: "raj.p@adoptails.com"
    }
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
    description: "Enny is a graceful 3-year-old Persian cat with a regal demeanor and a gentle soul. Rescued from a hoarding situation, she's blossomed into a loving companion who adores peaceful environments. Her favorite activities include sunbathing by windows and receiving gentle brushing sessions. Enny is particularly fond of lap time and will often seek out her human companions for cuddles. She's well-behaved with her litter box habits and maintains her elegant coat with regular grooming. While she can be reserved at first, she warms up quickly and shows her affectionate side to those she trusts. Enny would do best in a quiet home where she can be the center of attention.",
    vaccinated: true,
    neutered: true,
    contactInfo: {
      name: "Priya Sharma",
      phone: "+91 9876543212",
      email: "priya.s@adoptails.com"
    }
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
    description: "Bunny is a delightful 2-year-old Beagle with an adventurous spirit and a nose for fun! Originally surrendered due to family circumstances, she's proven to be an absolute joy with her playful personality and keen intelligence. Bunny excels at nose work and would make an excellent companion for someone interested in scent training or tracking activities. She's already mastered basic commands and walks well on a leash, though she can get distracted by interesting scents. Bunny has a melodious howl (as Beagles do!) and would do best in a home where her voice won't disturb neighbors. She's great with other dogs and has a special fondness for children.",
    vaccinated: true,
    neutered: true,
    contactInfo: {
      name: "Alex Kumar",
      phone: "+91 9876543213",
      email: "alex.k@adoptails.com"
    }
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
    description: "Kaalu is a charming 1-year-old black cat with a playful personality that lights up any room. Rescued from a construction site as a tiny kitten, he's grown into a curious and affectionate young cat who brings joy wherever he goes. Despite the superstitions about black cats, Kaalu has proven to be nothing but lucky for those around him! He's incredibly agile and loves playing with interactive toys, especially anything with feathers or bells. Kaalu is also a window-watching expert and will spend hours observing birds and squirrels. He's good with other cats and has even shown a friendly interest in calm dogs.",
    vaccinated: true,
    neutered: false,
    contactInfo: {
      name: "Maya Reddy",
      phone: "+91 9876543214",
      email: "maya.r@adoptails.com"
    }
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
    description: "Softy is a precious 3-year-old Pomeranian whose name perfectly matches her fluffy coat and gentle personality. Found abandoned in a local park, she's maintained her sweet and trusting nature despite her past hardships. Softy is the perfect lap dog, always ready to curl up with her human for a cozy afternoon. She's excellent with children and other small dogs, though she can be a bit timid around larger breeds. Softy is fully house-trained and knows several cute tricks, including 'give paw' and 'spin'. She enjoys short walks but is equally content with indoor play sessions. Her favorite activities include playing with plush toys and receiving belly rubs.",
    vaccinated: true,
    neutered: true,
    contactInfo: {
      name: "Neha Singh",
      phone: "+91 9876543215",
      email: "neha.s@adoptails.com"
    }
  }
];

const PetDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pet = pets.find(p => p.id === Number(id));

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-100 p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 p-2 rounded-full hover:bg-purple-200 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-purple-900" />
      </button>
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button className="p-1 bg-white rounded-full shadow-lg">
                <ChevronLeft className="w-6 h-6 text-purple-900" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button className="p-1 bg-white rounded-full shadow-lg">
                <ChevronRight className="w-6 h-6 text-purple-900" />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">{pet.name}</h1>
            <p className="text-purple-700 mb-4">{pet.location}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-purple-600">Type</p>
                <p className="font-medium">{pet.type}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Age</p>
                <p className="font-medium">{pet.age}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Breed</p>
                <p className="font-medium">{pet.breed}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Size</p>
                <p className="font-medium">{pet.size}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Gender</p>
                <p className="font-medium">{pet.gender}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Vaccination Status</p>
                <p className="font-medium">{pet.vaccinated ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-purple-600">Neutered/Spayed</p>
                <p className="font-medium">{pet.neutered ? 'Yes' : 'No'}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-900 mb-2">About {pet.name}</h2>
              <p className="text-purple-800">{pet.description}</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-purple-900 mb-4">Contact Info</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {pet.contactInfo.name}</p>
                <p><span className="font-medium">Phone:</span> {pet.contactInfo.phone}</p>
                <p><span className="font-medium">Email:</span> {pet.contactInfo.email}</p>
              </div>
            </div>

            <p className="text-center text-2xl font-bold text-pink-500 hover:text-pink-600 transition-colors cursor-pointer">
              Adopt Me! 🐾
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;