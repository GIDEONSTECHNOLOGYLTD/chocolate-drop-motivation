import { Metadata } from 'next';
import LegalPage from '../components/shared/LegalPage';
import { generateMetadata } from '../utils/metadata';

// Generate metadata for this page
export const metadata: Metadata = generateMetadata({
  title: 'Accessibility Statement',
  description: 'Learn about Chocolate_drop\'s commitment to digital accessibility for all users.',
  keywords: ['accessibility', 'WCAG', 'ADA compliance', 'inclusive design']
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" lastUpdated="July 20, 2025">
      <h2>Our Commitment</h2>
      <p>
        Chocolate_drop is committed to ensuring digital accessibility for people with disabilities. 
        We are continually improving the user experience for everyone and applying the relevant 
        accessibility standards.
      </p>
      
      <h2>Conformance Status</h2>
      <p>
        We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
        These guidelines explain how to make web content more accessible to people with disabilities.
      </p>
      
      <h2>Measures We Take</h2>
      <ul>
        <li>Semantic HTML structure for better screen reader navigation</li>
        <li>Sufficient color contrast ratios for text visibility</li>
        <li>Alt text for all informative images</li>
        <li>Keyboard accessible navigation and functionality</li>
        <li>ARIA landmarks and labels where appropriate</li>
        <li>Clear and consistent navigation</li>
        <li>Resizable text without loss of content or functionality</li>
        <li>Focus indicators for keyboard users</li>
      </ul>
      
      <h2>Technologies We Use</h2>
      <p>
        Our website relies on the following technologies to work with your browser or device:
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Next.js (React framework)</li>
        <li>Tailwind CSS</li>
      </ul>
      
      <h2>Accessibility at Events</h2>
      <p>
        Beyond our digital presence, we strive to make all speaking engagements and workshops 
        accessible to everyone. If you plan to attend an event and require accommodations, 
        please contact us in advance so we can make appropriate arrangements.
      </p>
      
      <h2>Limitations and Alternatives</h2>
      <p>
        Despite our efforts to ensure the accessibility of our website, there may still be 
        some content limitations. We are working to address these issues and provide 
        alternatives. Please contact us if you encounter accessibility barriers.
      </p>
      
      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of the Chocolate_drop website. If you 
        encounter accessibility barriers or have suggestions for improvement, please email us at:
      </p>
      <p>
        <a href="mailto:accessibility@chocolatedrop.com" className="text-purple-600 hover:text-purple-800">
          accessibility@chocolatedrop.com
        </a>
      </p>
      <p>
        We aim to respond to feedback within 3 business days.
      </p>
      
      <h2>Assessment</h2>
      <p>
        We self-evaluated our website according to WCAG 2.1 standards. We also conduct 
        periodic audits with automated testing tools and manual testing by users with disabilities.
      </p>
    </LegalPage>
  );
}
