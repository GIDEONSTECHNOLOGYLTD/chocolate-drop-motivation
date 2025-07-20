import { NavLink, SocialLink, Testimonial, Service, SocialPost, BlogPost, SpeakingEvent } from '../types';

// Navigation Links
export const navLinks: NavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Media', href: '/media' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@_chocolate_drop_',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm2.757 14.255v1.787c0 1.136-.702 2.256-1.874 2.643-1.306.434-2.883-.151-3.302-1.487-.317-.983-.04-2.055.691-2.783 1.042-1.035 2.887-.835 3.604.405.138.241.301.472.485.685v-5.185c-.596-.347-1.267-.561-1.971-.588-2.692-.104-4.936 2.193-4.78 4.944.091 1.569.896 2.992 2.15 3.824 1.653 1.1 3.904.95 5.377-.363.688-.61 1.219-1.43 1.505-2.352.142-.462.214-.945.214-1.44v-3.325c1.609 1.156 3.041 2.653 3.929 4.363.888 1.724 1.309 3.68 1.128 5.592-.364 3.834-3.089 7.149-6.783 8.317-5.994 1.896-12.283-2.184-13.555-8.395-1.127-5.518 2.553-11.1 7.962-12.338 1.069-.243 2.172-.312 3.264-.203.498.049.988.13 1.468.246.224.055.447.124.666.198 0 .645-.005 1.292.001 1.936-.4-.14-.805-.254-1.227-.307-.673-.086-1.36-.043-2.018.134-3.307.896-5.122 4.529-3.964 7.729.683 1.886 2.293 3.263 4.273 3.562 2.344.353 4.548-.953 5.321-3.116.113-.317.171-.647.171-.982v-5.054c0-2.328 0-4.656.001-6.984 0-.028.004-.055.007-.082.070.027.143.053.213.081v1.873z'
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@Chocolate_drops',
    icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/cho_colate_drops?igsh=Z3EyMmdvbWc1ZXYz',
    icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z'
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'InnovateNow',
    quote: 'Chocolate_drop&apos;s keynote speech was exactly what our team needed. Her message on resilience and growth mindset transformed our company culture. Six months later, we&apos;re still seeing the positive impact.',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Thompson',
    title: 'Event Director',
    company: 'Global Leaders Summit',
    quote: 'Working with Chocolate_drop was a game-changer for our annual conference. Her energy and authenticity connected with our audience in a way I&apos;ve rarely seen. The feedback was overwhelmingly positive.',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Priya Patel',
    title: 'HR Director',
    company: 'TechForward',
    quote: 'The workshop Chocolate_drop conducted for our leadership team was transformative. She provided practical strategies that our managers are now using daily. I highly recommend her services.',
    image: '/images/testimonial-3.jpg'
  }
];

// Services
export const services: Service[] = [
  {
    id: 1,
    title: 'Keynote Speaking',
    description: 'Dynamic presentations customized to inspire, motivate, and drive positive change within your organization or event.',
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
  },
  {
    id: 2,
    title: 'Workshops & Training',
    description: 'Interactive sessions designed to develop specific skills in leadership, resilience, communication, and personal growth.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    id: 3,
    title: 'Corporate Programs',
    description: 'Long-term engagement programs to foster lasting cultural change and personal development within organizations.',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 4,
    title: 'Virtual Speaking',
    description: 'Engaging remote presentations designed specifically for online audiences, with interactive elements to maximize impact.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Ways to Build Unshakeable Resilience in Challenging Times",
    excerpt: "Discover practical strategies for developing inner strength and bouncing back stronger from setbacks.",
    image: "/images/blog-1.jpg",
    date: "July 15, 2025",
    category: "Personal Development",
    readTime: "5 min read",
    slug: "build-unshakeable-resilience"
  },
  {
    id: 2,
    title: "The Power of Purpose: Finding Your 'Why' in Life and Work",
    excerpt: "Learn how connecting with your deeper purpose can transform your motivation, satisfaction, and impact.",
    image: "/images/blog-2.jpg",
    date: "July 8, 2025",
    category: "Motivation",
    readTime: "7 min read",
    slug: "power-of-purpose"
  },
  {
    id: 3,
    title: "Breakthrough Habits: Small Changes That Create Remarkable Results",
    excerpt: "Explore the science-backed habits that can help you achieve your most ambitious goals one step at a time.",
    image: "/images/blog-3.jpg",
    date: "June 28, 2025",
    category: "Habits",
    readTime: "6 min read",
    slug: "breakthrough-habits"
  },
  {
    id: 4,
    title: "Leading Through Uncertainty: How to Guide Your Team in Turbulent Times",
    excerpt: "Essential strategies for leaders navigating their teams through periods of rapid change and uncertainty.",
    image: "/images/blog-4.jpg",
    date: "June 20, 2025",
    category: "Leadership",
    readTime: "8 min read",
    slug: "leading-through-uncertainty"
  }
];

// Social Posts
export const socialPosts: SocialPost[] = [
  {
    id: 1,
    platform: 'tiktok',
    thumbnail: '/images/tiktok-1.jpg',
    caption: "When you realize your greatest obstacles are actually your best teachers #motivation #growth #mindset",
    likes: "14.2K",
    comments: "357",
    url: "https://www.tiktok.com/@_chocolate_drop_/video1"
  },
  {
    id: 2,
    platform: 'instagram',
    thumbnail: '/images/instagram-1.jpg',
    caption: "Today&apos;s reminder: Your journey is unique. Stop comparing yourself to others and start embracing your own path. #motivationmonday #personalgrowth",
    likes: "8.7K",
    comments: "432",
    url: "https://www.instagram.com/cho_colate_drops?igsh=Z3EyMmdvbWc1ZXYz/p/chocolate_drop1"
  },
  {
    id: 3,
    platform: 'tiktok',
    thumbnail: '/images/tiktok-2.jpg',
    caption: "3 things successful people do before 8am #morningroutine #success #motivation",
    likes: "22.4K",
    comments: "892",
    url: "https://www.tiktok.com/@_chocolate_drop_/video2"
  },
  {
    id: 4,
    platform: 'instagram',
    thumbnail: '/images/instagram-2.jpg',
    caption: "The energy in the room was ELECTRIC yesterday! Thank you Seattle for an amazing event. Can&apos;t wait to come back! #speakingtour #gratitude",
    likes: "12.3K",
    comments: "278",
    url: "https://www.instagram.com/cho_colate_drops?igsh=Z3EyMmdvbWc1ZXYz/p/chocolate_drop2"
  },
  {
    id: 5,
    platform: 'youtube',
    thumbnail: '/images/youtube-1.jpg',
    caption: "How to Turn Your Biggest Setbacks Into Your Greatest Comebacks | Motivational Talk",
    likes: "8.6K",
    comments: "547",
    url: "https://www.youtube.com/@Chocolate_drops/video1"
  }
];

// Speaking Events
export const speakingEvents: SpeakingEvent[] = [
  {
    id: 1,
    title: "Breakthrough Leadership Summit",
    date: "August 15-16, 2025",
    location: "Chicago, IL",
    description: "Keynote address on resilience and leadership in times of change",
    image: "/images/event-1.jpg",
    url: "https://breakthroughleadership.com"
  },
  {
    id: 2,
    title: "Future of Work Conference",
    date: "September 8, 2025",
    location: "Virtual Event",
    description: "Panel discussion on building high-performance remote teams",
    image: "/images/event-2.jpg",
    url: "https://futureofworkcon.com"
  },
  {
    id: 3,
    title: "Women in Business Forum",
    date: "October 22, 2025",
    location: "Atlanta, GA",
    description: "Workshop on overcoming imposter syndrome and building confidence",
    image: "/images/event-3.jpg",
    url: "https://womeninbusinessforum.com"
  }
];
