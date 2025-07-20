'use client';

import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Event or Organization</span>?
          </h2>
          <p className="text-xl text-purple-200 mb-10">
            Book Chocolate_drop for your next conference, corporate gathering, or school event and experience the power of transformative motivation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block">
              <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition duration-300 w-full">
                Book Now
              </button>
            </Link>
            <Link href="/services" className="inline-block">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition duration-300 w-full">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
