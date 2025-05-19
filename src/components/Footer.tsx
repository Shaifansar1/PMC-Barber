import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Scissors className="text-primary-600 mr-2" size={28} />
              <span className="font-serif text-2xl font-bold">PMC <span className="text-primary-600">Barber</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering premium grooming experiences since 2015. Our commitment to quality and service excellence sets us apart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['about', 'services', 'gallery', 'team', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-primary-600 transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Classic Haircut',
                'Beard Trim',
                'Hot Towel Shave',
                'Haircut & Beard Combo',
                'Hair Coloring',
                'Kid\'s Haircut'
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Barber Street, New York, NY 10001</li>
              <li>(212) 555-1234</li>
              <li>info@pmcbarber.com</li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors mt-4"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} PMC Barber Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;