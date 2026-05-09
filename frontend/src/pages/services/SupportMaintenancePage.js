import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function SupportMaintenancePage() {
  const services = [
    {
      title: '24/7 Technical Support',
      icon: '📞',
      description: 'Round-the-clock support with guaranteed response times for critical issues.'
    },
    {
      title: 'Proactive Monitoring',
      icon: '👁️',
      description: 'Continuous system monitoring to prevent issues before they impact users.'
    },
    {
      title: 'Bug Fixes & Patches',
      icon: '🔧',
      description: 'Rapid resolution of bugs and security patches with regular updates.'
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      description: 'Continuous optimization to ensure peak performance and reliability.'
    }
  ];

  const supportTiers = [
    {
      title: 'Startup',
      price: '$999',
      period: '/month',
      features: [
        'Business hours support (9am-6pm)',
        'Up to 48h response time',
        'Monthly performance reports',
        'Basic monitoring',
        'Up to 3 team members'
      ]
    },
    {
      title: 'Growth',
      price: '$2,499',
      period: '/month',
      features: [
        '24/7 Support available',
        'Up to 4h response time',
        'Weekly performance reports',
        'Advanced monitoring & alerts',
        'Up to 10 team members',
        'Quarterly optimization reviews'
      ],
      featured: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Dedicated support team',
        '30min critical response time',
        'Daily performance reports',
        'Custom SLA agreements',
        'Unlimited team members',
        'Monthly strategy sessions'
      ]
    }
  ];

  return (
    <>
      <SEOHelmet
        title="24/7 Support & Maintenance | AxentraLab - Keep Systems Running"
        description="Professional 24/7 technical support and maintenance services. Proactive monitoring, bug fixes, performance optimization, and security patches."
        keywords="24/7 support, maintenance services, technical support, system monitoring, bug fixes, performance optimization"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(59, 130, 246, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>🛡️</span>
            <span style={{ fontWeight: 700, color: '#3b82f6', fontSize: 15 }}>SUPPORT & MAINTENANCE</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Always Supported.<br />
            <span style={{ color: '#3b82f6' }}>Never Alone.</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Reliable 24/7 support and proactive maintenance to keep your systems 
            running smoothly and ensure maximum uptime.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Get Support
            </Link>
            <Link
              to="/pricing"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#3b82f6',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #3b82f6'
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Our Services */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Comprehensive Support Services
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{service.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tiers */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Support Tiers
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 30
          }}>
            {supportTiers.map((tier, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: tier.featured ? '2px solid #3b82f6' : '1px solid var(--border)',
                position: 'relative',
                transform: tier.featured ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s'
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute',
                    top: -15,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#3b82f6',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {tier.title}
                </h3>
                <div style={{ marginBottom: 30 }}>
                  <span style={{ fontSize: 36, fontWeight: 900, color: '#3b82f6' }}>
                    {tier.price}
                  </span>
                  <span style={{ color: 'var(--muted)', marginLeft: 10 }}>
                    {tier.period}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {tier.features.map((feature, i) => (
                    <li key={i} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid var(--border)',
                      color: 'var(--muted)',
                      fontSize: 15,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10
                    }}>
                      <span style={{ color: '#3b82f6', fontWeight: 700 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    marginTop: 30,
                    padding: '12px 24px',
                    background: tier.featured ? '#3b82f6' : 'var(--bg)',
                    color: tier.featured ? 'white' : '#3b82f6',
                    textDecoration: 'none',
                    borderRadius: 8,
                    fontWeight: 700,
                    textAlign: 'center',
                    border: tier.featured ? 'none' : '2px solid #3b82f6',
                    transition: 'all 0.3s'
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            What's Included
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center'
          }}>
            <div>
              {[
                'Proactive system monitoring',
                'Security patch management',
                'Performance optimization',
                'Regular backups and disaster recovery',
                'Documentation updates',
                'Team training and support'
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: 15,
                  marginBottom: 25,
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#dbeafe',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div style={{
              padding: 50,
              background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
              borderRadius: 16,
              border: '1px solid #bfdbfe',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 80, marginBottom: 20 }}>🎯</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                99.9% Uptime SLA
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: 30, fontSize: 16, lineHeight: 1.6 }}>
                We guarantee exceptional reliability with our industry-leading uptime commitment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Peace of Mind, 24/7
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Don't let technical issues slow you down. Let our expert team handle the support.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#3b82f6',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Start Support Now
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid white',
                fontWeight: 700,
                fontSize: 16
              }}
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}