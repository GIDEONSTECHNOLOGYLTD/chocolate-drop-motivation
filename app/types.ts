// Common Types for Chocolate_drop Website

// Navigation Link Type
export interface NavLink {
  title: string;
  href: string;
}

// Social Media Type
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // SVG path or component reference
}

// Testimonial Type
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

// Service Type
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // SVG path or component reference
}

// Social Media Post Type
export interface SocialPost {
  id: number;
  platform: 'tiktok' | 'instagram' | 'youtube';
  thumbnail: string;
  caption: string;
  likes: string;
  comments: string;
  url: string;
}

// Blog Post Type
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug?: string;
}

// Speaker Event Type
export interface SpeakingEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  url?: string;
}
