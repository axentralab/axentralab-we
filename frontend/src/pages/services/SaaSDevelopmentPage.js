import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function SaaSDevelopmentPage() {
  return (
    <>
      <SEOHelmet
        title="SaaS Development | AxentraLab"
        description="Build scalable software-as-a-service applications with our expert SaaS development services. Multi-tenant architecture, subscription management, and cloud deployment."
        keywords="SaaS development, software as a service, cloud applications, subscription software"
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
            <span style={{ fontSize: 24 }}>📊</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>SaaS Development</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Build Scalable<br />
            <span style={{ color: 'var(--teal)' }}>SaaS Solutions</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Create powerful software-as-a-service applications with multi-tenant architecture,
            subscription management, and seamless scaling capabilities.
          </p>
        </div>

        {/* SaaS Features */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            SaaS Development Expertise
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>🏢</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Multi-Tenant Architecture
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Design and implement secure, isolated multi-tenant systems that serve
                multiple customers while maintaining data privacy and performance.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>💳</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Subscription Management
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Integrate comprehensive billing systems with recurring payments,
                usage-based pricing, and automated invoicing.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>☁️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Cloud-Native Design
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build applications optimized for cloud deployment with auto-scaling,
                high availability, and global distribution capabilities.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🔐</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Enterprise Security
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement robust security measures including encryption, access controls,
                audit trails, and compliance with industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Our SaaS Development Process
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
                Requirements Analysis
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Define user personas, feature sets, pricing models, and technical
                requirements for your SaaS application.
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
                Architecture Design
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Design scalable multi-tenant architecture with microservices,
                APIs, and cloud infrastructure planning.
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
                MVP Development
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build core features with subscription management, user onboarding,
                and basic admin functionality.
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
                Scale & Optimize
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement advanced features, optimize performance, and scale
                infrastructure as your user base grows.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            SaaS Technology Stack
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 20,
            textAlign: 'center'
          }}>
            {[
              'React', 'Next.js', 'Node.js', 'Python', 'AWS',
              'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Stripe'
            ].map((tech, index) => (
              <div key={index} style={{
                padding: 20,
                background: 'var(--bg2)',
                borderRadius: 12,
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: 'var(--text)'
              }}>
                {tech}
              </div>
            ))}
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
            Ready to Build Your SaaS?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Let's create a scalable SaaS solution that grows with your business.
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
              Start SaaS Project
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
              View SaaS Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}