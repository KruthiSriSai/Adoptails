import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface FormData {
  type: string;
  location: string;
  age: string;
  breed: string;
  size: string;
  gender: string;
  vaccinationStatus: string;
  neuteredStatus: string;
  images: FileList | null;
  description: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

const ListPet: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    type: '',
    location: '',
    age: '',
    breed: '',
    size: '',
    gender: '',
    vaccinationStatus: '',
    neuteredStatus: '',
    images: null,
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // For demo purposes, we'll just set a generic location in India
          setFormData(prev => ({ ...prev, location: 'Hyderabad, India' }));
          setShowMap(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          setShowMap(true);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setShowMap(true);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 p-2 rounded-full hover:bg-purple-200 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-purple-900" />
      </button>

      <h1 className="text-2xl font-bold text-purple-900 mb-6 text-center">List A Pet below</h1>

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Select Location</h2>
            <div className="mb-4">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Search location in India..."
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="h-64 bg-gray-100 rounded mb-4 flex items-center justify-center">
              <p className="text-gray-500">Map of India would be displayed here</p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowMap(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowMap(false)}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Confirm Location
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="bg-pink-200 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Type *</label>
              <div className="relative">
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Location *</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-2 rounded-md pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 hover:text-purple-700"
                >
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Age *</label>
              <input
                type="text"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Breed *</label>
              <input
                type="text"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Size *</label>
              <div className="relative">
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Gender *</label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Vaccination Status *</label>
              <div className="relative">
                <select
                  value={formData.vaccinationStatus}
                  onChange={(e) => setFormData({ ...formData, vaccinationStatus: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="partial">Partial</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Neutered/Spayed *</label>
              <div className="relative">
                <select
                  value={formData.neuteredStatus}
                  onChange={(e) => setFormData({ ...formData, neuteredStatus: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Images *</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFormData({ ...formData, images: e.target.files })}
                className="w-full p-2 rounded-md bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 rounded-md h-32 resize-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-orange-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-900 mb-4">Contact Info</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-purple-900 font-bold mb-2">Name *</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Phone no. *</label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Email address *</label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ListPet;