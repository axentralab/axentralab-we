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

      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: 16 }}>Enterprise Hosting</span>
            <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
              Hosting that powers <br />
              <span style={{ color: 'var(--teal)' }}>your growth.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 32px' }}>
              Reliable, fast, and secure hosting solutions. From startups to enterprise scale, we provide the infrastructure your digital products need to thrive.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#plans" className="btn-primary" style={{ padding: '12px 28px', textDecoration: 'none' }}>View Plans</a>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Why Choose Axentralab Hosting?</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Built for speed, security, and absolute reliability.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {HOSTING_FEATURES.map((f, i) => (
              <div key={i} className="card" style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(37,99,235,0.08)', color: 'var(--teal)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANS SECTION */}
        <section id="plans" style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Choose Your Hosting Plan</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Scale seamlessly as your traffic grows.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, alignItems: 'start' }}>
              {HOSTING_PLANS.map(plan => (
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
                      <span className="badge" style={{ background: 'var(--teal)', color: '#fff', border: 'none' }}>MOST POPULAR</span>
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
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '80px 5%', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {HOSTING_FAQS.map((faq, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '24px', background: 'transparent', border: 'none',
                    color: 'var(--text)', textAlign: 'left', cursor: 'pointer',
                    fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 24, color: 'var(--teal)', fontWeight: '300' }}>
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div style={{ padding: '0 24px 24px', color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, letterSpacing: -0.5 }}>
              Ready to Get Started?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Join thousands of businesses that trust Axentralab for their hosting infrastructure.
            </p>
            <a href="#plans" className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>
              Choose Your Plan Now
            </a>
          </div>
        </section>
        
      </div>
    </>
  );
}
