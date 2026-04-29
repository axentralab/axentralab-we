import { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

const DEVELOPMENT_PACKAGES = [
  {
    name: 'Landing Pages',
    price: 1499,
    description: 'Single-page high-converting landing pages',
    deliverables: [
      'Custom Design & Layout',
      'Mobile Responsive',
      'SEO Optimized',
      'Contact Form',
      'Google Analytics',
      '2 Revisions',
    ],
    timeline: '1-2 weeks',
  },
  {
    name: 'Business Website',
    price: 2999,
    description: 'Professional 5-7 page business site',
    deliverables: [
      'Custom Design',
      'Content Management',
      'Mobile Responsive',
      'SEO Setup',
      'Contact Forms',
      'Blog Section',
      '5 Revisions',
      'Free Hosting (1 year)',
    ],
    timeline: '3-4 weeks',
    highlighted: true,
  },
  {
    name: 'E-Commerce Site',
    price: 4999,
    description: 'Full-featured online store',
    deliverables: [
      'Product Catalog',
      'Shopping Cart',
      'Payment Gateway',
      'Inventory Management',
      'Order Management',
      'Customer Accounts',
      'Email Notifications',
      'Analytics Dashboard',
    ],
    timeline: '4-6 weeks',
  },
  {
    name: 'Custom Web App',
    price: 7999,
    description: 'Bespoke web application development',
    deliverables: [
      'Custom Architecture',
      'Database Design',
      'User Authentication',
      'Advanced Features',
      'API Integration',
      'Performance Optimization',
      'Security Hardening',
      'Deployment',
    ],
    timeline: '8-12 weeks',
  },
];

const BUNDLES = [
  {
    name: 'Startup Launch',
    price: 3499,
    savings: '15% OFF',
    includes: [
      'Business Website',
      'Free Domain (1 year)',
      'Free Hosting (1 year)',
      'Shared Hosting Plan',
      'Monthly Care Plan (3 months)',
    ],
  },
  {
    name: 'Business Growth',
    price: 6999,
    savings: '20% OFF',
    includes: [
      'E-Commerce Website',
      'Free Domain (1 year)',
      'Managed WordPress Hosting',
      'Professional Care Plan (6 months)',
      'Security Audit',
      'SEO Optimization',
    ],
    highlighted: true,
  },
  {
    name: 'Secure Managed Stack',
    price: 9999,
    savings: '25% OFF',
    includes: [
      'Custom Web App',
      'Cloud Hosting Plan',
      'Enterprise Care Plan (12 months)',
      'Security Audit & Hardening',
      'SSL Certificate',
      'Daily Backups',
      'Performance Optimization',
    ],
  },
];

const COMPARISON_FEATURES = [
  'Mobile Responsive Design',
  'SEO Optimization',
  'Unlimited Revisions',
  'Source Code Included',
  'Lifetime Support',
  'Custom Integration',
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('development');
  const [expandedBundle, setExpandedBundle] = useState(null);

  const tabs = [
    { id: 'development', label: 'Web Development', icon: '💻' },
    { id: 'hosting', label: 'Hosting Plans', icon: '🏠' },
    { id: 'maintenance', label: 'Care Plans', icon: '🔧' },
    { id: 'bundles', label: 'Bundles', icon: '📦' },
  ];

  return (
    <>
      <SEOHelmet
        title="Pricing | Axentralab"
        description="Simple, transparent pricing for web development, hosting, and maintenance. Check our affordable packages."
        keywords="pricing, web development costs, hosting plans, care plans"
      />

      {/* Hero */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '100px 5% 50px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, #00d4aa 0%, transparent 70%)',
              top: '10%',
              right: '5%',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div style={{ maxWidth: '800px', zIndex: 2, textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 20,
            }}
          >
            Simple, Transparent Pricing
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        style={{
          padding: '40px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  background: activeTab === tab.id ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                  color: activeTab === tab.id ? '#000' : '#00d4aa',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'rgba(0, 212, 170, 0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'rgba(0, 212, 170, 0.2)';
                  }
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'development' && (
        <section
          style={{
            padding: '80px 5%',
            background: '#0f172a',
            borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 50,
              }}
            >
              Web Development Packages
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 30,
              }}
            >
              {DEVELOPMENT_PACKAGES.map((pkg, i) => (
                <div
                  key={i}
                  style={{
                    padding: 30,
                    background: pkg.highlighted
                      ? 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)'
                      : 'rgba(30, 41, 59, 0.6)',
                    border: pkg.highlighted
                      ? '2px solid rgba(0, 212, 170, 0.6)'
                      : '1px solid rgba(0, 212, 170, 0.15)',
                    borderRadius: 12,
                    position: 'relative',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    if (!pkg.highlighted) {
                      e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!pkg.highlighted) {
                      e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                    }
                  }}
                >
                  {pkg.highlighted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#00d4aa',
                        color: '#000',
                        padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      RECOMMENDED
                    </div>
                  )}
                  <h3 style={{ color: '#fff', marginBottom: 8, fontSize: 20, fontWeight: 700 }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 20 }}>
                    {pkg.description}
                  </p>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: 36, fontWeight: 800, color: '#00d4aa' }}>
                      ${pkg.price}
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 8 }}>
                      Timeline
                    </p>
                    <p style={{ color: '#00d4aa', fontWeight: 700 }}>{pkg.timeline}</p>
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      background: pkg.highlighted ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                      color: pkg.highlighted ? '#000' : '#00d4aa',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: 14,
                      transition: 'all 0.3s',
                      marginBottom: 20,
                    }}
                  >
                    Get Started
                  </button>
                  <div style={{ borderTop: '1px solid rgba(0, 212, 170, 0.1)', paddingTop: 20 }}>
                    {pkg.deliverables.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 10,
                          marginBottom: 12,
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: 13,
                        }}
                      >
                        <span style={{ color: '#00d4aa' }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'hosting' && (
        <section
          style={{
            padding: '80px 5%',
            background: '#0f172a',
            borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 20,
              }}
            >
              Hosting Plans
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 50,
                maxWidth: 600,
                margin: '0 auto 50px',
              }}
            >
              Fast, reliable, and secure hosting solutions for every need. Free domain for the first year on all plans.
            </p>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
                View detailed hosting plans
              </p>
              <a
                href="/hosting"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  background: '#00d4aa',
                  color: '#000',
                  textDecoration: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 170, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Hosting Plans
              </a>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'maintenance' && (
        <section
          style={{
            padding: '80px 5%',
            background: '#0f172a',
            borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 20,
              }}
            >
              Website Care Plans
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 50,
                maxWidth: 600,
                margin: '0 auto 50px',
              }}
            >
              Monthly maintenance plans to keep your website secure, fast, and up-to-date.
            </p>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
                View detailed care plan details
              </p>
              <a
                href="/maintenance"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  background: '#00d4aa',
                  color: '#000',
                  textDecoration: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 170, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Care Plans
              </a>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'bundles' && (
        <section
          style={{
            padding: '80px 5%',
            background: '#0f172a',
            borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 50,
              }}
            >
              Special Bundles
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 30,
                alignItems: 'start',
              }}
            >
              {BUNDLES.map((bundle, i) => (
                <div
                  key={i}
                  style={{
                    padding: 30,
                    background: bundle.highlighted
                      ? 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)'
                      : 'rgba(30, 41, 59, 0.6)',
                    border: bundle.highlighted
                      ? '2px solid rgba(0, 212, 170, 0.6)'
                      : '1px solid rgba(0, 212, 170, 0.15)',
                    borderRadius: 12,
                    position: 'relative',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {bundle.highlighted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#00d4aa',
                        color: '#000',
                        padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      BEST VALUE
                    </div>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <h3 style={{ color: '#fff', marginBottom: 8, fontSize: 22, fontWeight: 700 }}>
                        {bundle.name}
                      </h3>
                    </div>
                    <div
                      style={{
                        background: 'rgba(0, 212, 170, 0.15)',
                        color: '#00d4aa',
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {bundle.savings}
                    </div>
                  </div>
                  <div style={{ marginBottom: 30 }}>
                    <span style={{ fontSize: 42, fontWeight: 800, color: '#00d4aa' }}>
                      ${bundle.price}
                    </span>
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      background: bundle.highlighted ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                      color: bundle.highlighted ? '#000' : '#00d4aa',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: 14,
                      transition: 'all 0.3s',
                      marginBottom: 20,
                    }}
                  >
                    Get Bundle
                  </button>
                  <div style={{ borderTop: '1px solid rgba(0, 212, 170, 0.1)', paddingTop: 20 }}>
                    {bundle.includes.map((item, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 10,
                          marginBottom: 12,
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: 13,
                        }}
                      >
                        <span style={{ color: '#00d4aa' }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          padding: '80px 5%',
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
          textAlign: 'center',
          border: '2px solid rgba(0, 212, 170, 0.3)',
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.3rem)', color: '#fff', marginBottom: 20 }}>
          Ready to Get Started?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 16,
            marginBottom: 30,
            maxWidth: 600,
            margin: '0 auto 30px',
          }}
        >
          Let's discuss your project and find the perfect solution for your business.
        </p>
        <button
          style={{
            padding: '14px 36px',
            background: '#00d4aa',
            color: '#000',
            border: 'none',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 170, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get a Quote
        </button>
      </section>
    </>
  );
}
