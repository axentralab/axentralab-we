import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const PORTAL_FEATURES = [
  {
    icon: '📊',
    title: 'Service Dashboard',
    desc: 'View all your services, domains, and hosting plans in one place',
  },
  {
    icon: '📄',
    title: 'Invoice Management',
    desc: 'Download invoices, track payments, and manage billing',
  },
  {
    icon: '🎫',
    title: 'Support Tickets',
    desc: 'Submit, track, and resolve support issues with history',
  },
  {
    icon: '📈',
    title: 'Performance Analytics',
    desc: 'Monitor your website uptime, speed, and security metrics',
  },
  {
    icon: '🔐',
    title: 'Security Control',
    desc: 'Manage SSL certificates, backups, and security settings',
  },
  {
    icon: '🚀',
    title: 'Project Tracking',
    desc: 'Track the status of websites being built or redesigned',
  },
  {
    icon: '📧',
    title: 'Email Management',
    desc: 'Manage your email accounts and forwarding addresses',
  },
  {
    icon: '💰',
    title: 'Renewal Management',
    desc: 'Track domain and hosting renewals with auto-renewal options',
  },
];

const PORTAL_BENEFITS = [
  'Complete visibility into all your services and contracts',
  '24/7 access to manage your account anytime, anywhere',
  'Real-time notifications about your services and payments',
  'Quick onboarding for new projects and services',
  'Mobile-responsive interface for on-the-go management',
  'Secure single sign-on (SSO) for easy access',
];

export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Invoices', icon: '💳' },
    { label: 'Support', icon: '🎫' },
    { label: 'Projects', icon: '🚀' },
  ];

  return (
    <>
      <SEOHelmet
        title="Client Portal | Axentralab"
        description="Manage your services, invoices, support tickets, and projects in one place. 24/7 access to your account."
        keywords="client portal, account management, invoices, support tickets"
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
              color: 'var(--text)',
              marginBottom: 20,
            }}
          >
            Your Business Hub
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'var(--text)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Manage everything from your Axentralab client portal. Services, invoices, projects,
            and support—all in one place.
          </p>
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'var(--teal)',
              color: '#000',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              transition: 'all 0.3s',
              marginRight: 12,
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
            Access Portal
          </Link>
          <button
            style={{
              padding: '12px 32px',
              background: 'rgba(0, 212, 170, 0.15)',
              color: 'var(--teal)',
              border: '1px solid rgba(0, 212, 170, 0.3)',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0, 212, 170, 0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0, 212, 170, 0.15)';
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Portal Features Grid */}
      <section
        style={{
          padding: '80px 5%',
          background: 'var(--bg)',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 50,
            }}
          >
            Portal Features
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 30,
            }}
          >
            {PORTAL_FEATURES.map((feature, i) => (
              <div
                key={i}
                style={{
                  padding: 30,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ color: 'var(--text)', marginBottom: 10, fontSize: 18, fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Preview */}
      <section
        style={{
          padding: '80px 5%',
          background: 'var(--bg)',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 50,
            }}
          >
            See Your Portal in Action
          </h2>

          {/* Tab Navigation */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 40,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '10px 20px',
                  background: activeTab === i ? 'var(--teal)' : 'rgba(0, 212, 170, 0.2)',
                  color: activeTab === i ? '#000' : 'var(--teal)',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Preview */}
          <div
            style={{
              padding: 40,
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(0, 212, 170, 0.15)',
              borderRadius: 12,
              minHeight: 300,
            }}
          >
            {activeTab === 0 && (
              <div>
                <h3 style={{ color: 'var(--text)', marginBottom: 20 }}>Your Services Overview</h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                  }}
                >
                  {['Hosting', 'Domain', 'SSL Certificate', 'Care Plan'].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding: 20,
                        background: 'rgba(0, 212, 170, 0.05)',
                        border: '1px solid rgba(0, 212, 170, 0.15)',
                        borderRadius: 8,
                        color: 'var(--text)',
                      }}
                    >
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>Active</p>
                      <p style={{ fontWeight: 700, marginTop: 8 }}>{item}</p>
                      <p style={{ fontSize: 12, marginTop: 8 }}>Renews: 2026-12-31</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 style={{ color: 'var(--text)', marginBottom: 20 }}>Recent Invoices</h3>
                <div style={{ color: 'var(--text)' }}>
                  {[
                    { id: 'INV-001', date: '2026-03-15', amount: '$99.00', status: 'Paid' },
                    { id: 'INV-002', date: '2026-02-15', amount: '$49.00', status: 'Paid' },
                    { id: 'INV-003', date: '2026-01-15', amount: '$199.00', status: 'Paid' },
                  ].map((inv, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: 600 }}>{inv.id}</p>
                        <p style={{ fontSize: 12, color: 'var(--muted)' }}>{inv.date}</p>
                      </div>
                      <p style={{ fontWeight: 600 }}>{inv.amount}</p>
                      <p style={{ color: 'var(--teal)' }}>{inv.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 style={{ color: 'var(--text)', marginBottom: 20 }}>Your Support Tickets</h3>
                <div style={{ color: 'var(--text)' }}>
                  {[
                    { id: 'TKT-045', subject: 'SSL Certificate Setup', status: 'Resolved' },
                    {
                      id: 'TKT-044',
                      subject: 'Database Access Issue',
                      status: 'In Progress',
                    },
                    { id: 'TKT-043', subject: 'Performance Optimization', status: 'Open' },
                  ].map((tkt, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: 600 }}>{tkt.id}</p>
                        <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                          {tkt.subject}
                        </p>
                      </div>
                      <p style={{ color: 'var(--teal)' }}>{tkt.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3 style={{ color: 'var(--text)', marginBottom: 20 }}>Your Projects</h3>
                <div style={{ color: 'var(--text)' }}>
                  {[
                    { name: 'Website Redesign', status: 'In Development', progress: 65 },
                    { name: 'Ecommerce Site', status: 'In Design', progress: 30 },
                    { name: 'Custom Web App', status: 'Planning', progress: 10 },
                  ].map((proj, i) => (
                    <div key={i} style={{ marginBottom: 24 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <p style={{ fontWeight: 600 }}>{proj.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--teal)' }}>{proj.status}</p>
                      </div>
                      <div
                        style={{
                          background: 'rgba(0, 212, 170, 0.1)',
                          height: 8,
                          borderRadius: 4,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            background: 'var(--teal)',
                            height: '100%',
                            width: `${proj.progress}%`,
                            transition: 'width 0.3s',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        style={{
          padding: '80px 5%',
          background: 'var(--bg)',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 50,
            }}
          >
            Why You'll Love It
          </h2>
          <div>
            {PORTAL_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: 20,
                  borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
                }}
              >
                <span style={{ color: 'var(--teal)', fontSize: '1.5rem', minWidth: 30 }}>✓</span>
                <p style={{ color: 'var(--text)', lineHeight: 1.6 }}>{benefit}</p>
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
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.3rem)', color: 'var(--text)', marginBottom: 20 }}>
          Ready to Access Your Portal?
        </h2>
        <p
          style={{
            color: 'var(--text)',
            fontSize: 16,
            marginBottom: 30,
            maxWidth: 600,
            margin: '0 auto 30px',
          }}
        >
          Log in to your client portal today and manage your services with ease.
        </p>
        <Link
          to="/login"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: 'var(--teal)',
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
          Login to Portal
        </Link>
      </section>
    </>
  );
}
