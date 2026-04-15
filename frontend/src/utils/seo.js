/**
 * SEO Utility Module
 * Manages meta tags, structured data, and SEO optimization across the site
 */

export const SEO = {
  // Base site configuration
  siteUrl: 'https://axentralab.com',
  siteName: 'Axentralab',
  twitterHandle: '@axentralab',
  defaultImage: 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/og-default.png',
  
  // Generate page metadata
  generatePageMeta: ({
    title,
    description,
    path = '/',
    image = null,
    type = 'website',
    author = 'Axentralab',
  }) => ({
    title: `${title} | Axentralab`,
    description,
    canonical: `${SEO.siteUrl}${path}`,
    og: {
      title: `${title} | Axentralab`,
      description,
      url: `${SEO.siteUrl}${path}`,
      type,
      image: image || SEO.defaultImage,
      siteName: SEO.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO.twitterHandle,
      title: `${title} | Axentralab`,
      description,
      image: image || SEO.defaultImage,
    },
  }),

  // Generate structured data (Schema.org JSON-LD)
  generateStructuredData: (schema) => ({
    '@context': 'https://schema.org',
    ...schema,
  }),

  // Organization schema
  organizationSchema: () =>
    SEO.generateStructuredData({
      '@type': 'Organization',
      name: 'Axentralab',
      url: SEO.siteUrl,
      logo: 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png',
      description: 'Web Dev, Cybersecurity & AI Automation Agency',
      sameAs: [
        'https://twitter.com/axentralab',
        'https://linkedin.com/company/axentralab',
        'https://github.com/axentralab',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Business Support',
        email: 'contact@axentralab.com',
      },
    }),

  // Service schema
  serviceSchema: ({
    name,
    description,
    serviceType,
  }) =>
    SEO.generateStructuredData({
      '@type': 'Service',
      name,
      description,
      serviceType,
      provider: {
        '@type': 'Organization',
        name: 'Axentralab',
        url: SEO.siteUrl,
      },
    }),

  // Product/SaaS schema
  productSchema: ({
    name,
    description,
    price,
    currency = 'USD',
    image,
  }) =>
    SEO.generateStructuredData({
      '@type': 'Product',
      name,
      description,
      image,
      brand: {
        '@type': 'Brand',
        name: 'Axentralab',
      },
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: currency,
        availability: 'https://schema.org/InStock',
      },
    }),

  // BlogPosting schema
  blogPostingSchema: ({
    title,
    description,
    image,
    datePublished,
    dateModified,
    author = 'Axentralab',
  }) =>
    SEO.generateStructuredData({
      '@type': 'BlogPosting',
      headline: title,
      description,
      image,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Organization',
        name: author,
        url: SEO.siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Axentralab',
        logo: {
          '@type': 'ImageObject',
          url: 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png',
        },
      },
    }),

  // LocalBusiness schema (if applicable)
  localBusinessSchema: ({
    businessName = 'Axentralab',
    address,
    phone,
    email,
  }) =>
    SEO.generateStructuredData({
      '@type': 'LocalBusiness',
      name: businessName,
      url: SEO.siteUrl,
      logo: 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png',
      description: 'Web Development, Cybersecurity & AI Automation Agency',
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
      telephone: phone,
      email,
      sameAs: [
        'https://twitter.com/axentralab',
        'https://linkedin.com/company/axentralab',
      ],
    }),

  // FAQ schema
  faqSchema: (faqs) =>
    SEO.generateStructuredData({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),

  // Breadcrumb schema
  breadcrumbSchema: (items) =>
    SEO.generateStructuredData({
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SEO.siteUrl}${item.path}`,
      })),
    }),
};

export default SEO;
