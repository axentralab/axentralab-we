import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO Helmet Component
 * Manages meta tags, canonical URLs, and structured data
 */
const SEOHelmet = ({
  title,
  description,
  path = '/',
  image = 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/og-default.png',
  type = 'website',
  keywords = '',
  author = 'Axentralab',
  structuredData = null,
}) => {
  const canonicalUrl = `https://axentralab.com${path}`;
  const ogTitle = `${title} | Axentralab`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{ogTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Axentralab" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@axentralab" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta property="og:locale" content="en_US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
