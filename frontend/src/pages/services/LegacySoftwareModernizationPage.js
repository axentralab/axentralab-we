import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function LegacySoftwareModernizationPage() {
  return (
    <>
      <SEOHelmet
        title="Legacy Software Modernization | AxentraLab"
        description="Modernize your outdated software systems with our legacy modernization services. Improve performance, security, and scalability."
        keywords="legacy modernization, software modernization, system upgrade, digital transformation"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(37, 99, 235, 0.1)',
            padding: '8px 16px',
            borderRadius: 20,
            marginBottom: 20
          }}>
            <span style={{ fontSize: 24 }}>🔄</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>Legacy Software Modernization</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Modernize Your<br />
            <span style={{ color: 'var(--teal)' }}>Legacy Systems</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Transform outdated software into modern, scalable solutions that meet today's
            business demands and prepare you for future growth.
          </p>
        </div>

        {/* Why Modernize */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Why Modernize Your Legacy Systems?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 30
          }}>
            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🛡️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Enhanced Security
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Protect your business from vulnerabilities in outdated systems with modern
                security standards and compliance requirements.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>⚡</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Improved Performance
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Boost system speed, reliability, and user experience with modern architectures
                and optimized code.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>📈</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Scalability & Flexibility
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Adapt to growing business needs with cloud-native solutions that scale
                seamlessly and integrate with modern technologies.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>💰</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Cost Efficiency
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Reduce maintenance costs, improve operational efficiency, and lower total
                cost of ownership with modern, maintainable systems.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Our Modernization Approach
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 30
          }}>
            <div style={{
              textAlign: 'center',
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'var(--teal)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>1</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Assessment & Planning
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Comprehensive analysis of your current systems, identification of modernization
                opportunities, and strategic planning.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'var(--teal)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>2</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Migration Strategy
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Develop a phased migration plan that minimizes disruption while ensuring
                data integrity and system availability.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'var(--teal)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>3</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Implementation
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Rebuild or refactor systems using modern technologies, frameworks, and
                architectural patterns.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'var(--teal)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>4</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Testing & Deployment
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Comprehensive testing, gradual rollout, and post-deployment support to
                ensure smooth transition.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 60,
          background: 'linear-gradient(135deg, var(--teal) 0%, #059669 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 20
          }}>
            Ready to Modernize Your Systems?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Let's assess your legacy systems and create a modernization plan that works for your business.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '12px 24px',
                background: 'white',
                color: 'var(--teal)',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Get Assessment
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '12px 24px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid white',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}