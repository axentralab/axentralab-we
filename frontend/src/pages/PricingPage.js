import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      'Server Tuning',
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
      'Infrastructure Audit',
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
      'Infrastructure Audit & Tuning',
      'SSL Certificate',
      'Daily Backups',
      'Performance Optimization',
    ],
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('development');

  const tabs = [
    { id: 'development', label: 'Web Development', icon: '💻' },
    { id: 'bundles', label: 'Agency Bundles', icon: '📦' },
    { id: 'hosting', label: 'Hosting Plans', icon: '🏠', link: '/hosting' },
    { id: 'maintenance', label: 'Care Plans', icon: '🔧', link: '/maintenance' },
  ];

  return (
    <>
      <SEOHelmet
        title="Pricing | Axentralab"
        description="Simple, transparent pricing for web development, hosting, and maintenance. Check our affordable packages."
        keywords="pricing, web development costs, hosting plans, care plans"
      />

      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
        
        {/* HERO */}
        <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: 16 }}>Plans & Pricing</span>
            <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
              Simple, transparent pricing.
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 32px' }}>
              Choose the perfect plan for your business. No hidden fees, no surprises. World-class engineering at a predictable cost.
            </p>
          </div>
        </section>

        {/* TABS NAVIGATION */}
        <section style={{ padding: '20px 5%', background: 'var(--bg)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 70, zIndex: 10 }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {tabs.map(tab => (
              tab.link ? (
                <Link
                  key={tab.id}
                  to={tab.link}
                  className="btn-outline"
                  style={{
                    padding: '10px 20px',
                    borderRadius: 999,
                    fontSize: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    textDecoration: 'none'
                  }}
                >
                  {tab.icon} {tab.label}
                </Link>
              ) : (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 20px',
                    background: activeTab === tab.id ? 'var(--teal)' : 'var(--bg2)',
                    color: activeTab === tab.id ? '#fff' : 'var(--muted)',
                    border: activeTab === tab.id ? '1px solid var(--teal)' : '1px solid var(--border)',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              )
            ))}
          </div>
        </section>

        {/* WEB DEVELOPMENT TAB */}
        {activeTab === 'development' && (
          <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Web Development Packages</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Everything you need to launch a fast, modern digital presence.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {DEVELOPMENT_PACKAGES.map((pkg, i) => (
                <div key={i} className="card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', borderTop: pkg.highlighted ? '4px solid var(--teal)' : '1px solid var(--border)', position: 'relative' }}>
                  {pkg.highlighted && (
                    <div style={{ position: 'absolute', top: 16, right: 16 }}>
                      <span className="badge" style={{ background: 'var(--teal)', color: '#fff', border: 'none' }}>RECOMMENDED</span>
                    </div>
                  )}
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{pkg.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>{pkg.description}</p>
                  
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, color: pkg.highlighted ? 'var(--teal)' : 'var(--text)', letterSpacing: -1 }}>${pkg.price}</span>
                  </div>
                  
                  <div style={{ marginBottom: 30, background: 'var(--bg)', padding: '12px', borderRadius: 8, border: '1px solid var(--border)' }}>
                    <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 4, textTransform: 'uppercase', fontWeight: 600 }}>Estimated Timeline</p>
                    <p style={{ color: 'var(--teal)', fontWeight: 700, margin: 0 }}>{pkg.timeline}</p>
                  </div>
                  
                  <Link to="/contact" className={pkg.highlighted ? "btn-primary" : "btn-outline"} style={{ width: '100%', marginBottom: 32, padding: '12px', textAlign: 'center' }}>
                    Get Started
                  </Link>
                  
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>WHAT'S INCLUDED:</p>
                    {pkg.deliverables.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
                        <span style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BUNDLES TAB */}
        {activeTab === 'bundles' && (
          <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Agency Bundles</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Save big when you combine development with hosting and care plans.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
              {BUNDLES.map((bundle, i) => (
                <div key={i} className="card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', borderTop: bundle.highlighted ? '4px solid var(--teal)' : '1px solid var(--border)', position: 'relative' }}>
                  {bundle.highlighted && (
                    <div style={{ position: 'absolute', top: 16, right: 16 }}>
                      <span className="badge" style={{ background: 'var(--teal)', color: '#fff', border: 'none' }}>BEST VALUE</span>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <h3 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 800, color: 'var(--text)', margin: 0 }}>{bundle.name}</h3>
                    <span className="badge" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--teal)', border: 'none' }}>{bundle.savings}</span>
                  </div>
                  
                  <div style={{ marginBottom: 30 }}>
                    <span style={{ fontSize: 46, fontWeight: 900, color: bundle.highlighted ? 'var(--teal)' : 'var(--text)', letterSpacing: -1 }}>${bundle.price}</span>
                  </div>
                  
                  <Link to="/contact" className={bundle.highlighted ? "btn-primary" : "btn-outline"} style={{ width: '100%', marginBottom: 32, padding: '12px', textAlign: 'center' }}>
                    Claim Bundle
                  </Link>
                  
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>BUNDLE INCLUDES:</p>
                    {bundle.includes.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
                        <span style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, letterSpacing: -0.5 }}>
              Not sure which plan is right for you?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Let's discuss your project and find the perfect solution for your business. We also offer custom quotes.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>
              Book a Free Consultation
            </Link>
          </div>
        </section>
        
      </div>
    </>
  );
}
