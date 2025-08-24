import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  type: string;
  duration: string;
  housingType: string;
  hasOtherPets: string;
  notes: string;
}

const Foster: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    type: '',
    duration: '',
    housingType: '',
    hasOtherPets: '',
    notes: '',
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

      <div className="max-w-2xl mx-auto">
        <div className="bg-orange-200 rounded-lg p-6 mb-6 text-center">
          <h1 className="text-2xl font-bold text-purple-900 mb-2">
            Can't adopt? You can still make a difference –
          </h1>
          <p className="text-xl text-purple-900">
            sign up to foster! Share your details below, and we'll reach out when a stray baby needs a loving temporary home..
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-pink-200 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-purple-900 font-bold mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Phone no. *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Email address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 rounded-md"
                required
              />
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
                  <option value="any">Any</option>
                  <option value="dog">Dogs</option>
                  <option value="cat">Cats</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Duration *</label>
              <div className="relative">
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="short">Short term (days)</option>
                  <option value="mid">Mid term (weeks)</option>
                  <option value="long">Long term (months)</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Housing Type *</label>
              <div className="relative">
                <select
                  value={formData.housingType}
                  onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select housing type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">Independent House</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-purple-900 font-bold mb-2">Do you have other pets? *</label>
              <div className="relative">
                <select
                  value={formData.hasOtherPets}
                  onChange={(e) => setFormData({ ...formData, hasOtherPets: e.target.value })}
                  className="w-full p-2 rounded-md bg-white pr-10 appearance-none"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-900 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block text-purple-900 font-bold mb-2">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2 rounded-md h-32 resize-none"
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full text-lg py-3 shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl bg-purple-500 text-white hover:bg-purple-600 active:scale-95"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Foster;