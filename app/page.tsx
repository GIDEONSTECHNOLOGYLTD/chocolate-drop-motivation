import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import Services from "./components/home/Services";
import SocialFeed from "./components/home/SocialFeed";
import CTA from "./components/home/CTA";
import NewsletterSignup from "./components/shared/NewsletterSignup";
import TestimonialsSection from "./components/shared/Testimonials";
import UpcomingEvents from "./components/shared/UpcomingEvents";
import { testimonials, speakingEvents } from "./data/mockData";
import { generateMetadata } from "./utils/metadata";

// Generate metadata for this page
export const metadata = generateMetadata({
  title: "Home",
  description: "Chocolate_drop is a professional motivational speaker inspiring audiences with powerful messages of resilience, purpose, and personal growth.",
  keywords: ["motivational speaker", "keynote speaker", "inspiration", "personal growth"]
});

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutPreview />
      <Services />
      <TestimonialsSection 
        testimonials={testimonials} 
        title="What Clients Are Saying"
        subtitle="Hear from individuals and organizations who have been transformed by my message"
      />
      <UpcomingEvents 
        events={speakingEvents}
        title="Where You Can Find Me"
        subtitle="Join me at these upcoming events for inspiration and motivation"
      />
      <SocialFeed />
      <NewsletterSignup />
      <CTA />
    </div>
  );
}
