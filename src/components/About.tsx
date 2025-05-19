import React from 'react';
import { Scissors, Trophy, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-950 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Founded in 2015, PMC Barber has been delivering premium grooming experiences with unmatched expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-4 aspect-h-3 relative">
              <img 
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="PMC Barber Shop Interior" 
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-xl font-bold">Since</p>
                <p className="font-serif text-4xl font-bold">2015</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary-950 mb-6">
              Premium Grooming Experience
            </h3>
            <p className="text-lg text-secondary-700 mb-8">
              At PMC Barber, we believe that a great haircut is more than just a service—it's an experience. Our master barbers combine traditional techniques with modern styling to create looks that are uniquely tailored to each client.
            </p>
            <p className="text-lg text-secondary-700 mb-8">
              We've built our reputation on attention to detail, exceptional customer service, and a passion for the craft of barbering. Whether you're looking for a classic cut or a contemporary style, our team has the expertise to deliver results that exceed your expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Scissors className="text-primary-600" size={24} />, text: "Expert Barbers" },
                { icon: <Trophy className="text-primary-600" size={24} />, text: "Award Winning" },
                { icon: <Users className="text-primary-600" size={24} />, text: "Satisfied Clients" },
                { icon: <Clock className="text-primary-600" size={24} />, text: "Years of Experience" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-secondary-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;