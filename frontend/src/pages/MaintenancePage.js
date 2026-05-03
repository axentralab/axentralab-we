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
      'Performance optimization (if needed)',
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
    desc: 'Continuous scanning for vulnerabilities and Downtime',
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
  return (
    <>
      <SEOHelmet
        title="Website Care Plans | Axentralab"
        description="Monthly website maintenance plans. Keep your site secure, fast, and updated. Recurring revenue solution."
        keywords="website maintenance, care plans, website monitoring, site support"
      />

      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: 16 }}>Website Care & Support</span>
            <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
              Peace of mind for your <br />
              <span style={{ color: 'var(--teal)' }}>online business.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 32px' }}>
              Stop worrying about maintenance. Let our engineering team handle updates, security, and performance so you can focus on growing your business.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['✓ 24/7 Monitoring', '✓ Daily Backups', '✓ Priority Support'].map((t, i) => (
                <span key={i} style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "var(--font-m)", padding: '6px 14px', borderRadius: 999, background: 'var(--bg)', border: '1px solid var(--border)' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CARE PLANS */}
        <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Why Website Care Plans?</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Proactive maintenance saves you thousands in emergency repairs and lost sales.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {WHY_CARE_PLANS.map((item, i) => (
              <div key={i} className="card" style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>✓</div>
                <p style={{ color: 'var(--text)', lineHeight: 1.6, fontSize: 15, margin: 0, fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INCLUDED SERVICES */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>What's Included in Every Plan</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Standard features that guarantee your platform's stability.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {SERVICES_INCLUDED.map((service, i) => (
                <div key={i} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(37,99,235,0.08)', color: 'var(--teal)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING PLANS */}
        <section id="plans" style={{ padding: '100px 5%', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Choose Your Care Plan</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Transparent pricing, cancel anytime.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30, alignItems: 'start' }}>
            {CARE_PLANS.map(plan => (
              <div
                key={plan.id}
                className="card"
                style={{
                  padding: '40px 30px',
                  borderTop: plan.highlighted ? `4px solid var(--teal)` : '1px solid var(--border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {plan.highlighted && (
                  <div style={{ position: 'absolute', top: 16, right: 16 }}>
                    <span className="badge" style={{ background: 'var(--teal)', color: '#fff', border: 'none' }}>RECOMMENDED</span>
                  </div>
                )}
                
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{plan.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>{plan.description}</p>
                
                <div style={{ marginBottom: 30, display: 'flex', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "var(--font-h)", fontSize: 42, fontWeight: 900, color: plan.highlighted ? 'var(--teal)' : 'var(--text)', letterSpacing: -1 }}>${plan.price}</span>
                  <span style={{ color: 'var(--muted)', fontSize: 14, marginLeft: 4, fontWeight: 500 }}>{plan.period}</span>
                </div>
                
                <button className={plan.highlighted ? "btn-primary" : "btn-outline"} style={{ width: '100%', marginBottom: 32, padding: '12px' }}>
                  {plan.cta}
                </button>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, flex: 1 }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 'bold', fontSize: 14 }}>✓</span>
                      <span style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.4, fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, letterSpacing: -0.5 }}>
              Ready to automate your maintenance?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Get started with a care plan today and enjoy peace of mind knowing your platform is secure, fast, and up-to-date.
            </p>
            <a href="#plans" className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>
              View Care Plans
            </a>
          </div>
        </section>
        
      </div>
    </>
  );
}
