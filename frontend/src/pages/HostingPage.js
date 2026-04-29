import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const HOSTING_PLANS = [
  {
    id: 'shared',
    name: 'Shared Hosting',
    price: 9.99,
    period: '/month',
    description: 'Perfect for startups & small businesses',
    features: [
      '50 GB Storage',
      '100 GB Bandwidth',
      'Free SSL Certificate',
      'Free Domain (1st Year)',
      'Email Accounts',
      'cPanel Control Panel',
      'Uptime: 99.5%',
      '24/7 Support',
    ],
    cta: 'Start Hosting',
    highlighted: false,
  },
  {
    id: 'managed-wordpress',
    name: 'Managed WordPress',
    price: 19.99,
    period: '/month',
    description: 'Optimized for WordPress sites',
    features: [
      '200 GB Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Free Domain (1st Year)',
      'Daily Automated Backups',
      'WordPress Pre-installed',
      'Uptime: 99.9%',
      'Priority Support',
      'Auto Security Updates',
    ],
    cta: 'Start WordPress Hosting',
    highlighted: true,
  },
  {
    id: 'cloud',
    name: 'Cloud Hosting',
    price: 29.99,
    period: '/month',
    description: 'Scale as your business grows',
    features: [
      '500 GB Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Free Domain (1st Year)',
      'Hourly Backups',
      'Scalable Resources',
      'Uptime: 99.99%',
      '24/7 Premium Support',
      'DDoS Protection',
      'Performance Monitoring',
    ],
    cta: 'Start Cloud Hosting',
    highlighted: false,
  },
  {
    id: 'reseller',
    name: 'Reseller Hosting',
    price: 39.99,
    period: '/month',
    description: 'Build your own hosting business',
    features: [
      '1000 GB Storage',
      'Unlimited Bandwidth',
      'Free SSL for Resold Domains',
      'Reseller cPanel',
      'White Label Available',
      'Unlimited Accounts',
      'Uptime: 99.95%',
      'API Access',
      'Billing Management',
    ],
    cta: 'Start Reselling',
    highlighted: false,
  },
];

const HOSTING_FEATURES = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'SSD storage and optimized servers for maximum speed' },
  { icon: '🔐', title: 'Secure & Safe', desc: 'SSL certificates, DDoS protection, and 24/7 monitoring' },
  { icon: '⏱️', title: '99.9% Uptime', desc: 'Guaranteed uptime with automated redundancy' },
  { icon: '🔄', title: 'Daily Backups', desc: 'Automatic backups ensure your data is always safe' },
  { icon: '📞', title: '24/7 Support', desc: 'Expert support team ready to help anytime' },
  { icon: '🚀', title: 'Easy Migration', desc: 'Free migration service from your current host' },
];

const HOSTING_FAQS = [
  {
    q: 'Can I upgrade my hosting plan?',
    a: 'Yes! You can upgrade anytime. We\'ll scale your resources without any downtime.',
  },
  {
    q: 'Do you provide SSL certificates?',
    a: 'Yes, all plans include free SSL certificates. We also support multiple domains.',
  },
  {
    q: 'How are backups handled?',
    a: 'Backups are automatic and scheduled daily. You can restore anytime from the control panel.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees! You pay only for the hosting plan you choose.',
  },
  {
    q: 'Can you migrate my existing site?',
    a: 'Absolutely! We offer free migration service for all new customers.',
  },
  {
    q: 'What if I need technical help?',
    a: 'Our 24/7 support team is available via chat, email, and phone. Response time under 1 hour.',
  },
];

export default function HostingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <SEOHelmet
        title="Web Hosting Solutions | Axentralab"
        description="Reliable, fast, and secure hosting for your website. Shared, WordPress, Cloud, and Reseller hosting plans."
        keywords="web hosting, managed hosting, cloud hosting, WordPress hosting"
      />

      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
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
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 20,
            }}
          >
            Hosting That Powers Your Growth
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Reliable, fast, and secure hosting solutions. From startups to enterprise, we have the
            right plan for you.
          </p>
          <a
            href="#plans"
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
            View Plans
          </a>
        </div>
      </section>

      {/* Features Grid */}
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
            Why Choose Axentralab Hosting?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 30,
            }}
          >
            {HOSTING_FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: 30,
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 170, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: '#fff', marginBottom: 10, fontSize: 18, fontWeight: 700 }}>
                  {f.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section
        id="plans"
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
            Choose Your Hosting Plan
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 30,
              alignItems: 'start',
            }}
          >
            {HOSTING_PLANS.map(plan => (
              <div
                key={plan.id}
                style={{
                  padding: 30,
                  background: plan.highlighted
                    ? 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)'
                    : 'rgba(30, 41, 59, 0.6)',
                  border: plan.highlighted
                    ? '2px solid rgba(0, 212, 170, 0.6)'
                    : '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  position: 'relative',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                  }
                }}
              >
                {plan.highlighted && (
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
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ color: '#fff', marginBottom: 8, fontSize: 20, fontWeight: 700 }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 20 }}>
                  {plan.description}
                </p>
                <div style={{ marginBottom: 30 }}>
                  <span style={{ fontSize: 32, fontWeight: 800, color: '#00d4aa' }}>
                    ${plan.price}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: 8 }}>
                    {plan.period}
                  </span>
                </div>
                <button
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    background: plan.highlighted ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                    color: plan.highlighted ? '#000' : '#00d4aa',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: 14,
                    transition: 'all 0.3s',
                    marginBottom: 20,
                  }}
                  onMouseEnter={e => {
                    if (plan.highlighted) {
                      e.currentTarget.style.background = '#00c99d';
                    } else {
                      e.currentTarget.style.background = 'rgba(0, 212, 170, 0.3)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (plan.highlighted) {
                      e.currentTarget.style.background = '#00d4aa';
                    } else {
                      e.currentTarget.style.background = 'rgba(0, 212, 170, 0.2)';
                    }
                  }}
                >
                  {plan.cta}
                </button>
                <div style={{ borderTop: '1px solid rgba(0, 212, 170, 0.1)', paddingTop: 20 }}>
                  {plan.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 10,
                        marginBottom: 12,
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 13,
                      }}
                    >
                      <span style={{ color: '#00d4aa', marginTop: 2 }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 50,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {HOSTING_FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: 20,
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: 16,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 20, transition: 'transform 0.3s' }}>
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div
                    style={{
                      padding: '0 20px 20px',
                      borderTop: '1px solid rgba(0, 212, 170, 0.1)',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
          Join thousands of businesses that trust Axentralab for their hosting needs.
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
          Choose Your Plan Now
        </button>
      </section>
    </>
  );
}
