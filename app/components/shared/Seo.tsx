import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'Chocolate_drop | Motivational Speaker',
  description = 'Professional motivational speaker inspiring audiences with powerful messages of resilience, purpose, and growth.',
  keywords = ['motivational speaker', 'inspirational speaker', 'professional speaker'],
  ogImage = '/images/og-image.jpg',
  ogUrl,
  ogType = 'website',
}) => {
  const router = useRouter();
  const currentUrl = ogUrl || `https://chocolate-drop.com${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={currentUrl} />
    </Head>
  );
};

export default Seo;
