import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorks from './components/HowItWorks';
import WaitingPetsSection from './components/WaitingPetsSection';
import DonationSection from './components/DonationSection';
import HappyStoriesSection from './components/HappyStoriesSection';
import Footer from './components/Footer';
import BrowsePets from './pages/BrowsePets';
import PetDetails from './pages/PetDetails';
import ListPet from './pages/ListPet';
import Foster from './pages/Foster';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-100 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="flex-1">
              <MainButtons />
              <HeroSection />
              <AboutSection />
              <HowItWorks />
              <WaitingPetsSection />
              <DonationSection />
              <HappyStoriesSection />
            </main>
          } />
          <Route path="/browse" element={<BrowsePets />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/list-pet" element={<ListPet />} />
          <Route path="/foster" element={<Foster />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App