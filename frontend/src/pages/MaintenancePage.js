import { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

const CARE_PLANS = [
  {
    id: 'basic',
    name: 'Basic Care',
    price: 49,
    period: '/month',
    description: 'For small websites',
    features: [
      'Weekly Security Scans',
      'Monthly Updates',
      '1 GB Storage Backups',
      'Email Support',
      'Uptime Monitoring',
      'Basic Performance Reports',
      'Response Time: 24-48 hours',
    ],
    cta: 'Start Care Plan',
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Professional Care',
    price: 99,
    period: '/month',
    description: 'For growing businesses (RECOMMENDED)',
    features: [
      'Daily Security Scans',
      'Bi-weekly Updates',
      '10 GB Storage Backups',
      'Priority Email & Chat Support',
      '24/7 Uptime Monitoring',
      'Weekly Performance Reports',
      'Response Time: 4-8 hours',
      'SEO Monitoring',
      'Speed Optimization',
      'Free Minor Updates',
    ],
    cta: 'Start Professional Care',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Care',
    price: 199,
    period: '/month',
    description: 'For mission-critical websites',
    features: [
      'Hourly Security Scans',
      'Real-time Updates',
      'Unlimited Storage Backups',
      '24/7 Phone, Email & Chat Support',
      'Real-time Uptime Monitoring',
      'Daily Performance Reports',
      'Response Time: 1 hour',
      'Advanced SEO Optimization',
      'Dedicated Account Manager',
      'Unlimited Updates & Fixes',
      'Custom Security Hardening',
      'Malware Removal (if needed)',
    ],
    cta: 'Start Enterprise Care',
    highlighted: false,
  },
];

const SERVICES_INCLUDED = [
  {
    icon: '🔄',
    title: 'Regular Updates',
    desc: 'Keep your CMS, plugins, and themes always up-to-date',
  },
  {
    icon: '🔐',
    title: 'Security Monitoring',
    desc: 'Continuous scanning for vulnerabilities and threats',
  },
  {
    icon: '💾',
    title: 'Automated Backups',
    desc: 'Regular backups ensure you never lose your data',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    desc: 'Optimization services to keep your site fast',
  },
  {
    icon: '🐛',
    title: 'Bug Fixes',
    desc: 'Quick fixes for any issues that arise',
  },
  {
    icon: '📊',
    title: 'Performance Reports',
    desc: 'Regular reports on site health and performance',
  },
];

const WHY_CARE_PLANS = [
  'Stop worrying about maintenance and focus on your business',
  'Reduce downtime and security risks significantly',
  'Save money compared to hiring in-house developers',
  'Get expert support 24/7 when issues arise',
  'Ensure your website is always optimized for performance',
  'Stay compliant with security standards',
];

export default function MaintenancePage() {
  const [expandedPlan, setExpandedPlan] = useState('professional');

  return (
    <>
      <SEOHelmet
        title="Website Care Plans | Axentralab"
        description="Monthly website maintenance plans. Keep your site secure, fast, and updated. Recurring revenue solution."
        keywords="website maintenance, care plans, website monitoring, site support"
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
            Website Care Plans
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Stop worrying about maintenance. Let us handle the technical side while you focus on
            growing your business.
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

      {/* Why Care Plans */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 50,
            }}
          >
            Why Website Care Plans?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {WHY_CARE_PLANS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 24,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 8,
                  display: 'flex',
                  gap: 16,
                }}
              >
                <span style={{ fontSize: '1.5rem', color: '#00d4aa', minWidth: 30 }}>✓</span>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
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
            What's Included in Every Plan
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 30,
            }}
          >
            {SERVICES_INCLUDED.map((service, i) => (
              <div
                key={i}
                style={{
                  padding: 30,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ color: '#fff', marginBottom: 12, fontSize: 18, fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
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
            Choose Your Care Plan
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 30,
              alignItems: 'start',
            }}
          >
            {CARE_PLANS.map(plan => (
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
                    RECOMMENDED
                  </div>
                )}
                <h3 style={{ color: '#fff', marginBottom: 8, fontSize: 22, fontWeight: 800 }}>
                  {plan.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 20 }}>
                  {plan.description}
                </p>
                <div style={{ marginBottom: 30 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: '#00d4aa' }}>
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
                      <span style={{ color: '#00d4aa' }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
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
          Never Worry About Website Maintenance Again
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
          Get started with a care plan today and enjoy peace of mind knowing your website is in
          good hands.
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
          Get Your Care Plan
        </button>
      </section>
    </>
  );
}
