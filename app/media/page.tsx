'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import { fadeIn, fadeInUp, staggerChildren } from '../utils/animations';

export default function Media() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">  
      <PageHeader
        title="Media Gallery"
        subtitle="Videos, interviews, and appearances featuring Chocolate_drop"
        backgroundImage="/images/hero-background.jpg"
      />

      {/* Featured Video Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Featured Videos" 
            subtitle="Watch highlights from my recent speaking engagements"
          />
          
          <motion.div 
            className="aspect-w-16 aspect-h-9 mb-8 bg-gray-100 rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="mt-4 text-gray-500">Featured Video Placeholder</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="mt-8" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlocking Your Full Potential</h3>
            <p className="text-lg text-gray-700 mb-6">
              In this keynote speech delivered at TEDx Innovation Summit, I discuss how to identify and break through the mental 
              barriers that prevent us from achieving our goals. Learn practical strategies for developing a growth 
              mindset and building resilience in the face of challenges.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Gallery */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Video Gallery" 
            subtitle="Browse my collection of speaking engagements and inspirational talks"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {/* Video 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">The Power of Purpose</h3>
                <p className="text-gray-600 mb-4">Conference keynote on finding and living your purpose.</p>
                <p className="text-sm text-gray-500">Duration: 18:45</p>
              </div>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Resilience in Challenging Times</h3>
                <p className="text-gray-600 mb-4">Workshop highlights on building resilience strategies.</p>
                <p className="text-sm text-gray-500">Duration: 24:10</p>
              </div>
            </motion.div>
            
            {/* Video 3 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Leadership Mindset</h3>
                <p className="text-gray-600 mb-4">Corporate training session on effective leadership.</p>
                <p className="text-sm text-gray-500">Duration: 32:18</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Podcast Appearances */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Podcast Appearances" 
            subtitle="Listen to my conversations on popular podcasts"
          />
          
          <motion.div 
            className="space-y-8"
            variants={staggerChildren}
          >
            {/* Podcast 1 */}
            <motion.div 
              className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl"
              variants={fadeInUp}
            >
              <div className="md:w-1/4 bg-purple-100 flex items-center justify-center p-6">
                <svg className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="font-bold text-xl mb-2">The Growth Mindset Podcast</h3>
                <p className="text-gray-600 mb-4">Episode 42: Transforming Challenges into Opportunities</p>
                <p className="text-gray-700 mb-4">
                  In this episode, I discuss my journey from [background] to becoming a motivational speaker,
                  and share insights on how to reframe challenges as opportunities for growth.
                </p>
                <div className="flex items-center">
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    Listen Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Podcast 2 */}
            <motion.div 
              className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl"
              variants={fadeInUp}
            >
              <div className="md:w-1/4 bg-purple-100 flex items-center justify-center p-6">
                <svg className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="font-bold text-xl mb-2">Success Strategies</h3>
                <p className="text-gray-600 mb-4">Episode 87: Building a Personal Brand with Purpose</p>
                <p className="text-gray-700 mb-4">
                  I join host [Name] to discuss how I built my personal brand as Chocolate_drop,
                  and provide insights on creating an authentic online presence that resonates with your audience.
                </p>
                <div className="flex items-center">
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    Listen Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Press Coverage */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Press Coverage" 
            subtitle="See what the media is saying about my work"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
          >
            {/* Press Item 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 w-16 h-8 flex items-center justify-center rounded">
                  <span className="text-xs font-medium text-gray-500">LOGO</span>
                </div>
                <p className="ml-3 text-sm text-gray-500">Publication Name</p>
              </div>
              <h3 className="font-bold text-xl mb-3">Rising Star in Motivational Speaking</h3>
              <p className="text-gray-700 mb-4">
                &quot;Chocolate_drop brings a fresh perspective to the motivational speaking circuit, 
                combining authentic storytelling with practical advice that resonates with audiences 
                across generations.&quot;
              </p>
              <div className="flex items-center">
                <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Press Item 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 w-16 h-8 flex items-center justify-center rounded">
                  <span className="text-xs font-medium text-gray-500">LOGO</span>
                </div>
                <p className="ml-3 text-sm text-gray-500">Publication Name</p>
              </div>
              <h3 className="font-bold text-xl mb-3">Impact Through Inspiration</h3>
              <p className="text-gray-700 mb-4">
                &quot;Through a combination of personal anecdotes and evidence-based strategies, 
                Chocolate_drop is changing the landscape of motivational speaking and making a 
                lasting impact on audiences worldwide.&quot;
              </p>
              <div className="flex items-center">
                <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Media Inquiries
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            For press kits, interview requests, or any media-related questions, please get in touch.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <button className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-3 rounded-full font-medium text-lg transition duration-300 transform hover:scale-105">
                Contact Media Relations
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
