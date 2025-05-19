import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-950 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scissors className="text-primary-600 mr-2" size={28} />
            <span className="font-serif text-2xl font-bold text-white">PMC <span className="text-primary-600">Barber</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'services', 'gallery', 'team', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavLinkClick(item)}
                className="text-white hover:text-primary-600 capitalize font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => handleNavLinkClick('contact')}
              className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-secondary-950 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 space-y-4 flex flex-col">
          {['about', 'services', 'gallery', 'team', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavLinkClick(item)}
              className="text-white hover:text-primary-600 capitalize py-2 font-medium text-left transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => handleNavLinkClick('contact')}
            className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors w-full mt-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;