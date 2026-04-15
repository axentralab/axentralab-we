/**
 * SEO Configuration for each page
 * Centralized meta data and structured data definitions
 */

export const SEO_CONFIG = {
  home: {
    title: 'Web Dev, Cybersecurity & AI Automation',
    description: 'Axentralab builds high-performance web apps, SaaS platforms, and AI automation tools — and secures them with enterprise-grade cybersecurity. 150+ projects delivered worldwide.',
    path: '/',
    image: 'https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/og-default.png',
  },
  about: {
    title: 'About Axentralab',
    description: 'Discover how Axentralab became the go-to agency for web development, cybersecurity, and AI automation. 10+ years of excellence and 150+ successful projects.',
    path: '/about',
    keywords: 'web development agency, cybersecurity, AI automation, software development company',
  },
  portfolio: {
    title: 'Portfolio & Case Studies',
    description: 'Explore 150+ successful projects across web development, mobile apps, SaaS platforms, and AI automation solutions.',
    path: '/portfolio',
    keywords: 'portfolio, case studies, projects, web development portfolio, SaaS projects',
  },
  services: {
    title: 'Services',
    description: 'Web Development, SaaS Solutions, Cybersecurity, AI Automation, Cloud Infrastructure, and Technical Consulting.',
    path: '/services',
    keywords: 'web development, SaaS development, cybersecurity, AI automation, cloud services',
  },
  products: {
    title: 'Products & Solutions',
    description: 'Discover our ready-to-use SaaS products and AI automation tools designed to scale your business.',
    path: '/products',
    keywords: 'SaaS products, AI tools, business automation, software solutions',
  },
  shop: {
    title: 'Shop',
    description: 'Browse and purchase our premium services, products, and software solutions.',
    path: '/shop',
    keywords: 'shop, buy services, software products, SaaS pricing',
  },
  blog: {
    title: 'Blog & Resources',
    description: 'Expert insights on web development, cybersecurity, AI automation, and technology trends.',
    path: '/blog',
    keywords: 'blog, technology insights, web development tips, cybersecurity articles, AI automation',
  },
  team: {
    title: 'Our Team',
    description: 'Meet the talented engineers, designers, and specialists behind Axentralab.',
    path: '/team',
    keywords: 'team, engineers, designers, developers, specialists',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with the Axentralab team. We\'re ready to discuss your next project.',
    path: '/contact',
    keywords: 'contact, get in touch, project inquiry, consultation',
  },
  referral: {
    title: 'Referral Program',
    description: 'Join our referral program and earn commissions by recommending Axentralab to others.',
    path: '/referral',
    keywords: 'referral program, affiliate program, earn commissions, partnership',
  },
  meetingWithCEO: {
    title: 'Schedule a Meeting with CEO',
    description: 'Book a one-on-one consultation with our CEO to discuss your project goals and vision.',
    path: '/meeting-with-ceo',
    keywords: 'CEO meeting, consultation, business meeting, strategy session',
  },
};

/**
 * Get SEO config for a specific page
 * @param {string} page - Page key from SEO_CONFIG
 * @returns {object} SEO configuration
 */
export const getSEOConfig = (page) => SEO_CONFIG[page] || {};

export default SEO_CONFIG;
