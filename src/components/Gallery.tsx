import React, { useState } from 'react';
import { GalleryItemProps } from '../types';

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-secondary-950 to-transparent opacity-70 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.9 : 0.5 }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300" style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}>
        <h3 className="text-xl font-serif font-bold text-white mb-2">{title}</h3>
        <p className="text-white opacity-0 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }}>{description}</p>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const galleryItems: GalleryItemProps[] = [
    {
      imageUrl: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Fade",
      description: "Clean, sharp fade with textured top styling."
    },
    {
      imageUrl: "https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Classic Pompadour",
      description: "Timeless style with modern execution and volume."
    },
    {
      imageUrl: "https://images.pexels.com/photos/1906964/pexels-photo-1906964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Textured Crop",
      description: "Low-maintenance style with natural texture and movement."
    },
    {
      imageUrl: "https://images.pexels.com/photos/2531625/pexels-photo-2531625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beard Styling",
      description: "Precision beard shaping and maintenance."
    },
    {
      imageUrl: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Slick Back",
      description: "Sophisticated style with clean sides and slicked back top."
    },
    {
      imageUrl: "https://images.pexels.com/photos/1453006/pexels-photo-1453006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Modern Quiff",
      description: "Contemporary take on a classic style with height and texture."
    },
    {
      imageUrl: "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Buzz Cut",
      description: "Clean, low-maintenance style with precise execution."
    },
    {
      imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Full Beard & Cut",
      description: "Comprehensive grooming with haircut and full beard maintenance."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-950 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Browse our gallery of premium haircuts and styles created by our expert barbers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;