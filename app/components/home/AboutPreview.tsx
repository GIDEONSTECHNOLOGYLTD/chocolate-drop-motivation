'use client';

import Link from 'next/link';
import Image from 'next/image';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/speaker-profile.jpg"
              alt="Chocolate_drop speaking on stage"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Meet <span className="text-purple-700">Chocolate_drop</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              As a passionate motivational speaker with over 5 years of experience,
              I&apos;ve inspired thousands of individuals to break through their
              limitations and achieve their dreams.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey from [your background] to becoming a renowned speaker has
              equipped me with unique insights and powerful stories that resonate
              with audiences from all walks of life.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether speaking at corporate events, schools, or conferences,
              my mission remains the same: to ignite the spark of possibility
              in every person I meet.
            </p>
            <Link href="/about">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-medium transition duration-300">
                Learn My Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
