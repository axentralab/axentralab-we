import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function SaaSDevelopmentPage() {
  const features = [
    {
      title: 'Multi-Tenant Architecture',
      icon: '🏢',
      description: 'Secure, isolated multi-tenant systems serving multiple customers with complete data privacy.'
    },
    {
      title: 'Subscription Management',
      icon: '💳',
      description: 'Complete billing systems with recurring payments, usage-based pricing, and invoicing.'
    },
    {
      title: 'Cloud-Native Design',
      icon: '☁️',
      description: 'Auto-scaling, high availability, and global distribution for seamless growth.'
    },
    {
      title: 'Enterprise Security',
      icon: '🔐',
      description: 'Encryption, access controls, audit trails, and compliance with industry standards.'
    }
  ];

  const technologies = [
    'React', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'FastAPI',
    'AWS', 'Azure', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
    'Stripe', 'Auth0', 'GraphQL', 'WebSocket', 'Docker', 'Elasticsearch'
  ];

  return (
    <>
      <SEOHelmet
        title="SaaS Development | AxentraLab - Build Scalable Solutions"
        description="Expert SaaS development services. Multi-tenant architecture, subscription management, and cloud deployment for scalable software solutions."
        keywords="SaaS development, software as a service, cloud applications, subscription software, multi-tenant architecture"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>📊</span>
            <span style={{ fontWeight: 700, color: '#8b5cf6', fontSize: 15 }}>SaaS DEVELOPMENT</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Build Scalable<br />
            <span style={{ color: '#8b5cf6' }}>SaaS Solutions</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Create powerful software-as-a-service applications with enterprise-grade architecture, 
            recurring revenue models, and unlimited growth potential.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#8b5cf6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Build Your SaaS
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#8b5cf6',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #8b5cf6'
              }}
            >
              View SaaS Projects
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 30,
          marginBottom: 80,
          padding: '40px',
          background: 'var(--bg2)',
          borderRadius: 16,
          border: '1px solid var(--border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#8b5cf6', marginBottom: 10 }}>30+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>SaaS Platforms Built</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#8b5cf6', marginBottom: 10 }}>$2B+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Processed Annually</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#8b5cf6', marginBottom: 10 }}>5M+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Active Users</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#8b5cf6', marginBottom: 10 }}>99.99%</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Uptime Guarantee</p>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            SaaS Development Expertise
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Phases */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Our SaaS Development Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {[
              {
                number: '1',
                title: 'Requirements Analysis',
                description: 'Define user personas, features, pricing models, and technical requirements.'
              },
              {
                number: '2',
                title: 'Architecture Design',
                description: 'Design scalable multi-tenant systems with microservices and cloud planning.'
              },
              {
                number: '3',
                title: 'MVP Development',
                description: 'Build core features with subscription management and admin functionality.'
              },
              {
                number: '4',
                title: 'Scale & Optimize',
                description: 'Advanced features, performance optimization, and infrastructure scaling.'
              }
            ].map((phase, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 900,
                  margin: '0 auto 25px'
                }}>
                  {phase.number}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {phase.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            SaaS Technology Stack
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 15
          }}>
            {technologies.map((tech, index) => (
              <div key={index} style={{
                padding: 24,
                background: 'var(--bg2)',
                borderRadius: 12,
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: '#8b5cf6',
                textAlign: 'center',
                fontSize: 14,
                transition: 'all 0.3s'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Build Your SaaS?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Let's create a scalable SaaS solution that grows with your business and delights your customers.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#8b5cf6',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Start SaaS Project
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
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}