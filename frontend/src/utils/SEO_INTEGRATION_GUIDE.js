/**
 * SEO INTEGRATION GUIDE
 * 
 * This guide explains how to use the SEO utilities throughout your React pages
 */

// ============================================================================
// 1. BASIC SETUP - Import SEO Components
// ============================================================================

// In any page component:
import SEOHelmet from '../components/SEOHelmet';
import { getSEOConfig } from '../config/seo.config';
import SEO from '../utils/seo';

// ============================================================================
// 2. SIMPLE PAGE (HomePage, AboutPage, etc.)
// ============================================================================

// Example: HomePage.js
function HomePage() {
  const seoConfig = getSEOConfig('home');
  const structuredData = SEO.organizationSchema();

  return (
    <>
      <SEOHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        path={seoConfig.path}
        image={seoConfig.image}
        structuredData={structuredData}
      />
      {/* Rest of page content */}
    </>
  );
}

// ============================================================================
// 3. BLOG POST PAGE (BlogPostPage.jsx)
// ============================================================================

// Example: BlogPostPage.jsx
function BlogPostPage() {
  const post = {
    title: 'How to Build Scalable Web Apps',
    description: 'Learn best practices for building web applications...',
    image: 'https://...',
    datePublished: '2026-03-15',
    dateModified: '2026-04-10',
  };

  const structuredData = SEO.blogPostingSchema({
    title: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: 'Axentralab',
  });

  return (
    <>
      <SEOHelmet
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        keywords="web development, scalability, best practices"
        structuredData={structuredData}
      />
      {/* Blog post content */}
    </>
  );
}

// ============================================================================
// 4. PRODUCT PAGE (ProductsPage.js)
// ============================================================================

// Example: ProductsPage.js
function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'AI Automation Suite',
      description: 'Enterprise-grade automation platform...',
      price: '999',
      image: 'https://...',
    },
  ];

  const productSchemas = products.map((product) =>
    SEO.productSchema({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    })
  );

  const seoConfig = getSEOConfig('products');

  return (
    <>
      <SEOHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        path={seoConfig.path}
        keywords={seoConfig.keywords}
        structuredData={productSchemas[0]}
      />
      {/* Products content */}
    </>
  );
}

// ============================================================================
// 5. CONTACT PAGE WITH FAQ SCHEMA
// ============================================================================

// Example: ContactPage.js
function ContactPage() {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project duration varies based on scope and complexity...',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and bank transfers...',
    },
  ];

  const faqSchema = SEO.faqSchema(faqs);
  const seoConfig = getSEOConfig('contact');

  return (
    <>
      <SEOHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        path={seoConfig.path}
        keywords={seoConfig.keywords}
        structuredData={faqSchema}
      />
      {/* Contact form and FAQs */}
    </>
  );
}

// ============================================================================
// 6. SERVICE PAGE WITH BREADCRUMBS
// ============================================================================

// Example: ServiceDetailPage.js
function ServiceDetailPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Web Development', path: '/services/web-development' },
  ];

  const breadcrumbSchema = SEO.breadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHelmet
        title="Web Development Services"
        description="Custom web development solutions for startups and enterprises..."
        path="/services/web-development"
        keywords="web development, custom software, web applications"
        structuredData={breadcrumbSchema}
      />
      {/* Service details */}
    </>
  );
}

// ============================================================================
// 7. DYNAMIC PAGES AND SLUGS
// ============================================================================

// Example: Dynamic Blog Post
import { useParams } from 'react-router-dom';

function DynamicBlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post by slug
    fetchPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const structuredData = SEO.blogPostingSchema({
    title: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
  });

  return (
    <>
      <SEOHelmet
        title={post.title}
        description={post.description}
        path={`/blog/${slug}`}
        image={post.coverImage}
        type="article"
        structuredData={structuredData}
      />
      {/* Post content */}
    </>
  );
}

// ============================================================================
// 8. SEO BEST PRACTICES CHECKLIST
// ============================================================================

/*
✅ ON-PAGE OPTIMIZATION:
  - Add SEOHelmet to every page
  - Use descriptive titles (50-60 characters)
  - Write compelling descriptions (150-160 characters)
  - Use keywords naturally in content
  - Use heading hierarchy (h1 > h2 > h3)
  - Add alt text to all images
  - Use semantic HTML5 tags

✅ TECHNICAL SEO:
  - ✅ robots.txt configured (/frontend/public/robots.txt)
  - ✅ sitemap.xml created (/frontend/public/sitemap.xml)
  - ✅ site.webmanifest for PWA (/frontend/public/site.webmanifest)
  - ✅ Canonical URLs configured
  - ✅ Mobile-friendly (responsive design)
  - ✅ Fast loading times
  - ✅ SSL/HTTPS enabled

✅ STRUCTURED DATA:
  - ✅ Organization schema
  - ✅ Product schema for e-commerce
  - ✅ BlogPosting schema for articles
  - ✅ FAQ schema for help pages
  - ✅ Breadcrumb schema for navigation
  - ✅ LocalBusiness schema if applicable

✅ LINK BUILDING:
  - Internal linking strategy
  - Quality backlinks
  - Anchor text optimization

✅ CONTENT OPTIMIZATION:
  - Keyword research and placement
  - Content length (minimum 300 words)
  - Regular content updates
  - Proper use of headers
  - Media optimization (images, videos)

✅ MONITORING & ANALYTICS:
  - Google Search Console setup
  - Google Analytics 4 tracking
  - Core Web Vitals monitoring
  - Ranking position tracking
  - Backlink monitoring

*/

// ============================================================================
// 9. ADDITIONAL CONFIGURATION
// ============================================================================

// Update /frontend/src/config/seo.config.js to add new pages:
export const SEO_CONFIG = {
  customPage: {
    title: 'Custom Page Title',
    description: 'Page description for meta tags...',
    path: '/custom-page',
    image: 'https://...',
    keywords: 'keyword1, keyword2, keyword3',
  },
};

// Use in your component:
const seoConfig = getSEOConfig('customPage');

export default 'SEO Integration Guide';
