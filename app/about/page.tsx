import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Chocolate_drop Motivational Speaker',
  description: 'Learn about Chocolate_drop\'s journey, philosophy and approach to motivational speaking.',
};

export default function About() {
  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-background.jpg"
            alt="Background pattern"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Chocolate_drop</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Inspiring individuals and organizations to reach their full potential through powerful storytelling and actionable insights.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl bg-gray-50">
              <Image
                src="/images/speakers/speaker-profile.svg"
                alt="Chocolate_drop portrait"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">My Journey</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Hello, I&apos;m Chocolate_drop, an international motivational speaker with a passion for inspiring 
                  individuals to break through their limitations and achieve greatness in both personal and professional realms.
                </p>
                <p>
                  My journey began in Accra, Ghana, where I discovered my passion for empowering others through powerful 
                  storytelling and authentic communication. Through perseverance and a growth mindset, I&apos;ve transformed 
                  challenges into opportunities and developed a unique approach to personal development.
                </p>
                <p>
                  With over 10 years of experience in motivational speaking, I&apos;ve had the privilege of sharing 
                  my message with thousands of people across 15 countries, connecting with audiences ranging from 
                  Fortune 500 executives to university students and community organizations.
                </p>
                <p>
                  My approach combines powerful storytelling with practical strategies that listeners can 
                  immediately apply to their lives. I believe that everyone has untapped potential waiting 
                  to be unleashed, and my mission is to help them access it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">My Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I believe in the power of mindset, intentional action, and community to create transformative change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Growth Mindset</h3>
              <p className="text-gray-700">
                I believe that our abilities and intelligence can be developed through dedication and hard work.
                This perspective creates a love of learning and resilience essential for accomplishment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Authentic Leadership</h3>
              <p className="text-gray-700">
                True leadership comes from authenticity. When we lead from our genuine selves, we inspire others
                to do the same, creating environments where innovation and excellence flourish.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Purposeful Action</h3>
              <p className="text-gray-700">
                I advocate for deliberate, purpose-driven action. When we align our daily choices with our core values
                and long-term vision, we create momentum that transforms dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Credentials & Recognition</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Author of &quot;Drops of Wisdom&quot; - a bestselling book on personal development and leadership excellence
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Featured keynote speaker at TEDx Accra and Global Leadership Summit
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Master&apos;s Degree in Communications and Certified Professional Speaker (CPS)
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Over 500,000 social media followers across TikTok, YouTube and Instagram
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Africa Inspirational Speaker Award recipient for contributions to youth empowerment
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Clients</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow-md">
                  <Image 
                    src="/images/clients/client-logo-1.svg" 
                    alt="Global Innovations" 
                    width={180} 
                    height={90} 
                  />
                </div>
                <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow-md">
                  <Image 
                    src="/images/clients/client-logo-2.svg" 
                    alt="Tech Sphere" 
                    width={180} 
                    height={90} 
                  />
                </div>
                <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow-md">
                  <Image 
                    src="/images/clients/client-logo-3.svg" 
                    alt="Leadership Academy" 
                    width={180} 
                    height={90} 
                  />
                </div>
                <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow-md">
                  <Image 
                    src="/images/clients/client-logo-4.svg" 
                    alt="Peak Performance" 
                    width={180} 
                    height={90} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where You Can Find Me - Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Where You Can Find Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join me at these upcoming events for inspiration and motivation!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Event - Ghana with Emmanuel Kwarteng */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-purple-500">
              <div className="relative h-48 bg-purple-100">
                <Image
                  src="/images/event-1.jpg"
                  alt="African Youth Leadership Conference"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Event
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">African Youth Leadership Conference</h3>
                <p className="text-purple-700 font-medium mb-4">August 5-7, 2025 • Kumawu, Ghana</p>
                <p className="text-gray-700 mb-6">
                  <span className="font-semibold">Special collaboration with Emmanuel Kwarteng</span>: Join us in Ghana 
                  for an inspiring event focused on empowering the next generation of African leaders.
                </p>
                <a 
                  href="https://africanyouthleadership.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors"
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Other upcoming events */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Other Upcoming Events</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Breakthrough Leadership Summit</h4>
                    <p className="text-purple-700 mb-1">August 15-16, 2025 • Chicago, IL</p>
                    <p className="text-gray-700">Keynote address on resilience and leadership in times of change</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Future of Work Conference</h4>
                    <p className="text-purple-700 mb-1">September 8, 2025 • Virtual Event</p>
                    <p className="text-gray-700">Panel discussion on building high-performance remote teams</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Women in Business Forum</h4>
                    <p className="text-purple-700 mb-1">October 22, 2025 • Atlanta, GA</p>
                    <p className="text-gray-700">Workshop on overcoming imposter syndrome and building confidence</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact" className="text-purple-700 font-medium hover:text-purple-900 transition-colors inline-flex items-center">
                    Book me for your event
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Let&apos;s create an unforgettable experience for your next event that will inspire and motivate your audience.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-3 rounded-full font-medium text-lg transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
