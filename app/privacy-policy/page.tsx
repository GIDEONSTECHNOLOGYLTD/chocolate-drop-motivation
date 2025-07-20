import { Metadata } from 'next';
import LegalPage from '../components/shared/LegalPage';
import { generateMetadata } from '../utils/metadata';

// Generate metadata for this page
export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Learn how Chocolate_drop collects, uses, and protects your personal information.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'cookies']
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 20, 2025">
      <h2>Introduction</h2>
      <p>
        This Privacy Policy explains how Chocolate_drop (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, 
        and shares your personal information when you visit our website, use our services, 
        or otherwise interact with us.
      </p>
      
      <h2>Information We Collect</h2>
      <p>
        We may collect personal information that you provide directly to us, such as when you:
      </p>
      <ul>
        <li>Contact us through our website</li>
        <li>Subscribe to our newsletter</li>
        <li>Register for events or speaking engagements</li>
        <li>Purchase products or services</li>
        <li>Complete surveys or provide feedback</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Send you technical notices, updates, and administrative messages</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Communicate with you about products, services, offers, and events</li>
      </ul>
      
      <h2>Information Sharing</h2>
      <p>
        We may share your personal information with:
      </p>
      <ul>
        <li>Service providers who perform services on our behalf</li>
        <li>Professional advisors, such as lawyers and accountants</li>
        <li>Third parties in connection with a business transaction</li>
        <li>When required by law or to protect our rights</li>
      </ul>
      
      <h2>Your Choices</h2>
      <p>
        You have several choices regarding the use of your information:
      </p>
      <ul>
        <li>Opt-out of marketing communications</li>
        <li>Update or correct your personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to our processing of your information</li>
      </ul>
      
      <h2>Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to collect and use information 
        about you and your interaction with our website. You can set your browser to refuse 
        all or some browser cookies or to alert you when cookies are being sent.
      </p>
      
      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information. 
        However, no security system is impenetrable, and we cannot guarantee the absolute 
        security of your information.
      </p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices 
        or for other operational, legal, or regulatory reasons. We will post the updated 
        Privacy Policy on this page.
      </p>
    </LegalPage>
  );
}
