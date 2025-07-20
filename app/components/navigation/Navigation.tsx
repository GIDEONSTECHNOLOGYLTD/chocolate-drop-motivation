'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Chocolate_drop</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-200 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-purple-200 transition duration-300">About</Link>
          <Link href="/services" className="hover:text-purple-200 transition duration-300">Speaking</Link>
          <Link href="/media" className="hover:text-purple-200 transition duration-300">Media</Link>
          <Link href="/blog" className="hover:text-purple-200 transition duration-300">Resources</Link>
          <Link href="/contact" className="hover:text-purple-200 transition duration-300">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full font-medium transition duration-300">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-indigo-900 text-white p-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>Speaking</Link>
            <Link href="/media" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>Media</Link>
            <Link href="/blog" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>Resources</Link>
            <Link href="/contact" className="hover:text-purple-200 transition duration-300" onClick={toggleMenu}>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 w-full">
                Book Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
