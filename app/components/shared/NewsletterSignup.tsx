'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerChildren } from '../../utils/animations';

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  title = 'Stay Inspired with Weekly Motivation', 
  subtitle = 'Join my newsletter and receive weekly insights, motivational quotes, and exclusive resources directly to your inbox.',
  bgColor = 'bg-purple-100',
  textColor = 'text-gray-900',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateEmail = (email: string): boolean => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(email);
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError('');
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call to subscribe user
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.section 
      className={`py-16 ${bgColor}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          variants={staggerChildren}
        >
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-xl mx-auto"
          variants={fadeInUp}
        >
          {isSubmitted ? (
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">You&apos;ll now receive weekly motivation and updates straight to your inbox.</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="mt-4 text-purple-600 hover:text-purple-800 transition duration-300"
              >
                Subscribe another email
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className={`w-full px-4 py-3 rounded-lg border-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring-purple-500 outline-none transition duration-300`}
                  aria-describedby="email-error"
                  disabled={isSubmitting}
                  required
                />
                {error && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">{error}</p>
                )}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : 'Subscribe'}
              </button>
            </form>
          )}
          <motion.p 
            className="text-sm text-gray-500 mt-3 text-center"
            variants={fadeInUp}
          >
            I respect your privacy and will never share your information with third parties.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsletterSignup;
