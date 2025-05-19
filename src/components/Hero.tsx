import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  return (
    <div id="home" className="h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            The Art of <span className="text-primary-600">Refined</span> Grooming
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 font-light">
            Premium Barber Experience Since 2015
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white px-6 py-3 rounded hover:bg-primary-700 transition-colors font-medium text-lg"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-secondary-950 transition-colors font-medium text-lg"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;