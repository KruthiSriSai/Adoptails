import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-purple-100 rounded-lg w-full max-w-md relative h-[90vh] flex flex-col">
        <div className="sticky top-0 bg-purple-100 pt-4 px-6 pb-2 rounded-t-lg z-20">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-purple-900 hover:text-purple-700"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2">
            <Button
              variant={showLogin ? "primary" : "secondary"}
              onClick={() => setShowLogin(true)}
            >
              Login
            </Button>
            <Button
              variant={!showLogin ? "primary" : "secondary"}
              onClick={() => setShowLogin(false)}
            >
              Register
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {showLogin ? (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">Welcome Back, Hero!</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <img
                    src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg"
                    alt="AdopTails Logo"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-purple-900 font-bold mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full p-2 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-purple-900 font-bold mb-2">Password *</label>
                      <input
                        type="password"
                        className="w-full p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="mr-2"
                      />
                      <label htmlFor="remember" className="text-purple-900">Remember me</label>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                      Login
                    </Button>
                    <p className="text-center text-purple-900">
                      <a href="#forgot" className="hover:underline">Forgot Password?</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">Be the Hero they need- Register below!</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-900 font-bold mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-900 font-bold mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Date of Birth *</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 rounded-md" required>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select className="p-2 rounded-md" required>
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <select className="p-2 rounded-md" required>
                      {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full p-2 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Password *</label>
                  <input
                    type="password"
                    className="w-full p-2 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Gender *</label>
                  <div className="flex justify-center space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" value="male" className="mr-2" required />
                      <span className="text-purple-900">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" value="female" className="mr-2" required />
                      <span className="text-purple-900">Female</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" value="others" className="mr-2" required />
                      <span className="text-purple-900">Others</span>
                    </label>
                  </div>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Register
                </Button>
                <p className="text-center text-purple-900">
                  Already a Hero? <button onClick={() => setShowLogin(true)} className="text-purple-700 hover:underline">Login</button>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;