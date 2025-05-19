import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TestimonialProps } from '../types';

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          fill={i < rating ? "#a17a46" : "none"} 
          strokeWidth={1} 
          className={i < rating ? "text-primary-600" : "text-gray-400"} 
        />
      ))}
    </div>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ name, quote, rating, imageUrl }) => {
  return (
    <div className="bg-secondary-900 rounded-lg p-8 text-white shadow-lg">
      <RatingStars rating={rating} />
      <p className="text-lg mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">Client</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Michael Thompson",
      quote: "PMC Barber provides the most professional haircut experience I've ever had. The attention to detail and the relaxing atmosphere make every visit exceptional.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "David Wilson",
      quote: "I've been coming to PMC for three years now, and I've never had a bad experience. The barbers are true artists who take pride in their work.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Robert Garcia",
      quote: "Finding a barber who can properly handle a beard is rare, but the team at PMC are experts. The hot towel shave is an experience every man should try.",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their PMC Barber experience.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <Testimonial {...testimonials[currentIndex]} />
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="bg-secondary-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="bg-secondary-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-primary-600" : "bg-secondary-700"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;