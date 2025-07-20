import { Metadata } from 'next';

// Default metadata configuration for the entire site
const defaultMetadata: Metadata = {
  metadataBase: new URL('https://chocolate-drop.com'),
  title: {
    default: 'Chocolate_drop | Motivational Speaker',
    template: '%s | Chocolate_drop',
  },
  description: 'Professional motivational speaker inspiring audiences with powerful messages of resilience, purpose, and growth.',
  keywords: [
    'motivational speaker',
    'professional speaker',
    'inspirational speaker',
    'Chocolate_drop',
    'keynote speaker',
    'corporate speaker',
    'workshop facilitator',
    'resilience',
    'purpose',
    'leadership',
    'growth mindset'
  ],
  authors: [{ name: 'Chocolate_drop' }],
  creator: 'Chocolate_drop',
  publisher: 'Chocolate_drop Motivation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chocolate-drop.com',
    siteName: 'Chocolate_drop | Motivational Speaker',
    title: 'Chocolate_drop | Motivational Speaker',
    description: 'Professional motivational speaker inspiring audiences with powerful messages of resilience, purpose, and growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chocolate_drop Motivational Speaker',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chocolate_drop | Motivational Speaker',
    description: 'Professional motivational speaker inspiring audiences with powerful messages of resilience, purpose, and growth.',
    images: ['/images/twitter-image.jpg'],
    creator: '@Chocolate_drops',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default defaultMetadata;
