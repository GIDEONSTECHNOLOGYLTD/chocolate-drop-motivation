import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Speaking Services | Chocolate_drop Motivational Speaker',
  description: 'Professional speaking services offered by Chocolate_drop including keynotes, workshops, corporate training, and virtual events.',
};

export default function Services() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Speaking Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Inspiring presentations tailored to your audience&apos;s needs and goals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Customized Programs</h2>
              <p className="text-lg text-gray-700 mb-6">
                Each speaking engagement is tailored to meet your specific needs and objectives. 
                I take the time to understand your audience, organization culture, and desired 
                outcomes to create a powerful, relevant experience.
              </p>
              <p className="text-lg text-gray-700">
                Whether you&apos;re looking for a high-energy keynote to kick off your conference, 
                an interactive workshop to develop your team&apos;s skills, or ongoing coaching, 
                I&apos;ll work with you to design the perfect program.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/speaker-profile.jpg"
                alt="Chocolate_drop speaking"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
            Services Offered
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Keynote Speeches */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Keynote Speeches</h3>
              <p className="text-gray-700 mb-4">
                Dynamic, inspiring presentations designed to energize your audience and drive 
                meaningful change. My keynotes blend storytelling, humor, and actionable insights.
              </p>
              <p className="font-medium text-purple-700">Popular topics include:</p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unleashing Your Potential: Breaking Through Limiting Beliefs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Resilience: Thriving Through Change and Uncertainty
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Purpose-Driven Leadership: Making an Impact That Matters
                </li>
              </ul>
            </div>

            {/* Workshops & Training */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Workshops & Training</h3>
              <p className="text-gray-700 mb-4">
                Interactive sessions focused on skill development and practical application.
                These workshops can be half-day, full-day, or multi-day programs.
              </p>
              <p className="font-medium text-purple-700">Workshop offerings include:</p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Effective Communication & Public Speaking
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Goal Setting & Achievement Strategies
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Team Building & Collaborative Excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Contact me today to discuss how I can help make your next event unforgettable.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-3 rounded-full font-medium text-lg transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
