import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import { ServiceProps } from '../types';

const ServiceCard: React.FC<ServiceProps> = ({ title, price, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-serif font-bold text-secondary-950">{title}</h3>
        <span className="text-primary-600 font-bold">{price}</span>
      </div>
      <p className="text-secondary-700 mb-6">{description}</p>
      <button 
        onClick={() => scrollToSection('contact')}
        className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors w-full"
      >
        Book Now
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "Classic Haircut",
      price: "$35",
      description: "Precision cut tailored to your style, includes hot towel and styling."
    },
    {
      title: "Beard Trim",
      price: "$25",
      description: "Shape and style your beard with precision tools and expert technique."
    },
    {
      title: "Hot Towel Shave",
      price: "$40",
      description: "Traditional straight razor shave with hot towel treatment and aftercare."
    },
    {
      title: "Haircut & Beard Combo",
      price: "$55",
      description: "Complete grooming package with haircut and beard service at a special rate."
    },
    {
      title: "Hair Coloring",
      price: "$65+",
      description: "Professional color services from grey coverage to complete color transformations."
    },
    {
      title: "Kid's Haircut",
      price: "$25",
      description: "Friendly service for young gentlemen aged 12 and under."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-950 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            From classic cuts to premium grooming treatments, experience our comprehensive range of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;