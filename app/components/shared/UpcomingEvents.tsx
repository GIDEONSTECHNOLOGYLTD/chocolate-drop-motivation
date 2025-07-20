import React from 'react';
import Image from 'next/image';
import { SpeakingEvent } from '../../types';
import Button from './Button';

interface UpcomingEventsProps {
  title?: string;
  subtitle?: string;
  events: SpeakingEvent[];
  limit?: number;
  showViewAllButton?: boolean;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  title = "Upcoming Speaking Events",
  subtitle = "Join me at these upcoming events for inspiration and motivation",
  events,
  limit = 3,
  showViewAllButton = true
}) => {
  // Show only the specified number of events
  const displayedEvents = events.slice(0, limit);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image 
                  src={event.image || '/images/event-placeholder.jpg'} 
                  alt={event.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">
                  <svg className="w-4 h-4 inline-block mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {event.location}
                </p>
                <p className="text-gray-600 mb-6">{event.description}</p>
                {event.url && (
                  <Button 
                    href={event.url} 
                    variant="outline" 
                    size="sm"
                    target="_blank"
                  >
                    Event Details
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {showViewAllButton && events.length > limit && (
          <div className="mt-12 text-center">
            <Button href="/events" variant="primary">
              View All Events
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
