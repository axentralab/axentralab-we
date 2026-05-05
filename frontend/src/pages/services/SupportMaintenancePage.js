import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function SupportMaintenancePage() {
  return (
    <>
      <SEOHelmet
        title="Support and Maintenance | AxentraLab"
        description="Comprehensive technical support and maintenance services including bug fixes, performance optimization, and feature enhancements for your applications."
        keywords="technical support, maintenance, bug fixes, performance optimization, application support"
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
            <span style={{ fontSize: 24 }}>🛠️</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>Support and Maintenance</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Keep Your<br />
            <span style={{ color: 'var(--teal)' }}>Systems Running</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Comprehensive technical support and maintenance services to ensure your
            applications remain secure, performant, and up-to-date.
          </p>
        </div>

        {/* Support Services */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Our Support Services
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>🐛</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Bug Fixes & Troubleshooting
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Rapid identification and resolution of software bugs, errors, and
                unexpected behavior across all platforms and environments.
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
                Performance Optimization
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Improve application speed, responsiveness, and resource utilization
                through code optimization and infrastructure tuning.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🔒</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Security Updates
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Regular security patches, vulnerability assessments, and updates
                to protect against emerging threats and compliance requirements.
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
                Feature Enhancements
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Add new features, improve user experience, and implement user-requested
                enhancements to keep your application competitive.
              </p>
            </div>
          </div>
        </div>

        {/* Support Plans */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Support Plans
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'var(--teal)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600
              }}>
                BASIC
              </div>
              <div style={{ fontSize: 32, marginBottom: 10, color: 'var(--text)' }}>💼</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: 'var(--text)' }}>
                Basic Support
              </h3>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--teal)', marginBottom: 20 }}>
                $99<span style={{ fontSize: 16, fontWeight: 600 }}>/month</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Email support (48h response)</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Bug fixes & patches</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Security updates</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Monthly health check</span>
                </li>
              </ul>
            </div>

            <div style={{
              padding: 30,
              background: 'linear-gradient(135deg, var(--teal) 0%, #059669 100%)',
              borderRadius: 16,
              border: '2px solid var(--teal)',
              position: 'relative',
              color: 'white'
            }}>
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600
              }}>
                PREMIUM
              </div>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🚀</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
                Premium Support
              </h3>
              <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>
                $299<span style={{ fontSize: 16, fontWeight: 600 }}>/month</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✓</span>
                  <span>24/7 priority support</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✓</span>
                  <span>Dedicated support engineer</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✓</span>
                  <span>Performance optimization</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✓</span>
                  <span>Feature enhancements</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✓</span>
                  <span>Emergency response (4h)</span>
                </li>
              </ul>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'var(--teal)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600
              }}>
                ENTERPRISE
              </div>
              <div style={{ fontSize: 32, marginBottom: 10, color: 'var(--text)' }}>🏢</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: 'var(--text)' }}>
                Enterprise Support
              </h3>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--teal)', marginBottom: 20 }}>
                Custom<span style={{ fontSize: 16, fontWeight: 600 }}> Pricing</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>24/7 dedicated team</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>SLA guarantees</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>Custom integrations</span>
                </li>
                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--teal)' }}>✓</span>
                  <span style={{ color: 'var(--muted)' }}>On-site support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Our Support Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                Issue Reporting
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Report issues through our support portal with detailed information
                and priority classification.
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
                Investigation
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Our team investigates the issue, reproduces the problem, and
                identifies the root cause.
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
                Resolution
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement fixes, provide workarounds, and deploy updates
                with minimal disruption.
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
                Follow-up
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Verify the solution, provide documentation, and ensure
                customer satisfaction with the resolution.
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
            Need Ongoing Support?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Choose the right support plan for your business needs and keep your applications running smoothly.
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
              Get Support Quote
            </Link>
            <Link
              to="/pricing"
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
              View All Plans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}