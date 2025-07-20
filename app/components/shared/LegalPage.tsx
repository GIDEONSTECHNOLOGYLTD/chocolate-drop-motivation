import React from 'react';
import PageHeader from './PageHeader';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title={title} 
        subtitle="Important legal information about our services"
        backgroundImage="/images/legal-bg.jpg"
      />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-500 text-sm mb-8">Last Updated: {lastUpdated}</p>
          
          {children}
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Have questions?</h3>
            <p className="mb-4">If you have any questions about these policies, please contact us at <a href="mailto:legal@chocolatedrop.com" className="text-purple-600 hover:text-purple-800">legal@chocolatedrop.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
