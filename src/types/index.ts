export interface ServiceProps {
  title: string;
  price: string;
  description: string;
}

export interface GalleryItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

export interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface TestimonialProps {
  name: string;
  quote: string;
  rating: number;
  imageUrl: string;
}