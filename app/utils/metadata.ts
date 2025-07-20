import { Metadata } from 'next';
import defaultMetadata from '../metadata';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

/**
 * Generate metadata for pages in the App Router
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
}: GenerateMetadataParams): Metadata {
  // Create a new metadata object based on the default metadata
  const metadata: Metadata = {
    ...defaultMetadata,
    title: title ? `${title} | Chocolate_drop` : defaultMetadata.title,
  };

  // Override specific properties if provided
  if (description) {
    metadata.description = description;
  }

  if (keywords && keywords.length > 0) {
    metadata.keywords = [
      ...(defaultMetadata.keywords as string[]),
      ...keywords
    ];
  }

  // Update OpenGraph metadata
  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: title || metadata.openGraph.title,
      description: description || metadata.openGraph.description,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'Chocolate_drop Motivational Speaker',
        }
      ],
    };
  }

  // Update Twitter metadata
  if (metadata.twitter) {
    metadata.twitter = {
      ...metadata.twitter,
      title: title || (metadata.twitter.title as string),
      description: description || (metadata.twitter.description as string),
      images: [ogImage],
    };
  }

  return metadata;
}
