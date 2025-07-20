'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Chocolate_drop's speech at our annual conference was transformative. Our team left feeling inspired and ready to tackle new challenges.",
    name: "Sarah Johnson",
    title: "HR Director, Tech Innovations Inc.",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "The energy and authenticity that Chocolate_drop brings to the stage is unmatched. Our students are still talking about the presentation months later.",
    name: "Michael Thompson",
    title: "Principal, Westlake High School",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "I've attended many motivational talks, but Chocolate_drop's message resonated with me on a personal level. It was exactly what our organization needed.",
    name: "Jennifer Williams",
    title: "Events Coordinator, Global Leadership Summit",
    image: "/images/testimonial-3.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Hear from individuals and organizations whose lives have been transformed through my speaking engagements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-10">
          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 text-purple-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983V18H0Z" />
              </svg>
            </div>
            <blockquote>
              <p className="text-xl md:text-2xl font-medium mb-8">&ldquo;{testimonials[activeIndex].quote}&rdquo;</p>
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-purple-200">{testimonials[activeIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
