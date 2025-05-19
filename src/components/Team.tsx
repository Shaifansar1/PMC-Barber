import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { TeamMemberProps } from '../types';

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, bio, imageUrl, socialLinks }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-8 group-hover:translate-y-0">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600 transition-colors">
              <Instagram size={20} />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600 transition-colors">
              <Facebook size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600 transition-colors">
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-secondary-950 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-4">{title}</p>
        <p className="text-secondary-700">{bio}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Jason Miller",
      title: "Master Barber & Founder",
      bio: "With over 15 years of experience, Jason combines traditional techniques with modern styles to create unique looks for each client.",
      imageUrl: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Johnson",
      title: "Senior Barber",
      bio: "Marcus specializes in precision fades and beard styling, bringing 8 years of expertise to create sharp, clean looks for our clients.",
      imageUrl: "https://images.pexels.com/photos/1599242/pexels-photo-1599242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socialLinks: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      name: "Daniel Rodriguez",
      title: "Color Specialist",
      bio: "Daniel's artistic eye and technical skill make him our go-to expert for all color services, from subtle gray blending to bold transformations.",
      imageUrl: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Anthony Parker",
      title: "Style Consultant",
      bio: "Anthony's background in fashion gives him a unique perspective on creating cohesive looks that complement each client's personal style.",
      imageUrl: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-950 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Our experienced barbers bring artistry, precision, and personality to every service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;