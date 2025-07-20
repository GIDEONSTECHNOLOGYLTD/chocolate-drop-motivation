'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks, socialLinks } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/images/logos/chocolate-drop-logo.svg" 
                alt="Chocolate_drop" 
                width={100}
                height={100}
                className="mb-2" 
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Inspiring audiences worldwide with powerful messages that transform lives and unlock potential. Professional keynote speaker specializing in resilience, leadership, and personal growth.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.platform}`}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: social.icon }} />
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Site Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition duration-300 inline-block py-1"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-2">Ready to book a speaking engagement?</p>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 inline-block mb-4"
              aria-label="Book a speaking engagement"
            >
              Book Now
            </Link>
            <address className="text-gray-300 not-italic">
              <p className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:Kartcasper@gmail.com" className="hover:underline">Kartcasper@gmail.com</a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+233591049836" className="hover:underline">+233591049836 (WhatsApp available)</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Chocolate_drop Motivational Speaking. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="/accessibility" className="hover:text-white transition duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
