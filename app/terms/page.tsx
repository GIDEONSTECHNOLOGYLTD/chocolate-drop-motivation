import { Metadata } from 'next';
import LegalPage from '../components/shared/LegalPage';
import { generateMetadata } from '../utils/metadata';

// Generate metadata for this page
export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service',
  description: 'Review the terms and conditions for using Chocolate_drop services and website.',
  keywords: ['terms of service', 'conditions', 'legal agreement', 'user terms']
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="July 20, 2025">
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using the Chocolate_drop website and services, you agree to be bound 
        by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, 
        you may not access or use our services.
      </p>
      
      <h2>Description of Services</h2>
      <p>
        Chocolate_drop provides motivational speaking, workshops, coaching, and related 
        content through our website, events, and various platforms. We reserve the right to 
        modify, suspend, or discontinue any part of our services at any time.
      </p>
      
      <h2>User Conduct</h2>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Use our services for any illegal purposes</li>
        <li>Infringe upon intellectual property rights</li>
        <li>Attempt to gain unauthorized access to any part of our services</li>
        <li>Harass, abuse, or harm others through our services</li>
        <li>Impersonate any person or entity or falsely state your affiliation</li>
      </ul>
      
      <h2>Intellectual Property</h2>
      <p>
        All content, including text, graphics, logos, images, audio, and video material 
        on our website or provided through our services is the property of Chocolate_drop 
        or its licensors and is protected by copyright, trademark, and other intellectual 
        property laws.
      </p>
      <p>
        You may not use, reproduce, distribute, modify, create derivative works of, 
        publicly display or perform, or commercially exploit any content from our services 
        without our prior written consent.
      </p>
      
      <h2>Booking and Payments</h2>
      <p>
        All booking arrangements and payment terms for speaking engagements, workshops, 
        and coaching services are subject to separate agreements. Deposits and fees may be 
        non-refundable as specified in your individual service agreement.
      </p>
      
      <h2>Cancellation Policy</h2>
      <p>
        For speaking engagements and workshops, cancellation policies will be outlined in 
        your specific contract. Generally, cancellations made with less than 30 days notice 
        may result in forfeiture of any deposit paid.
      </p>
      
      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Chocolate_drop shall not be liable for any 
        indirect, incidental, special, consequential or punitive damages, including without 
        limitation, loss of profits, data, use, goodwill, or other intangible losses, 
        resulting from your access to or use of or inability to access or use the services.
      </p>
      
      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. It is your responsibility to review these 
        Terms periodically. Your continued use of our services following the posting of 
        revised Terms means that you accept and agree to the changes.
      </p>
      
      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of 
        the jurisdiction in which Chocolate_drop operates, without regard to its conflict 
        of law provisions.
      </p>
    </LegalPage>
  );
}
