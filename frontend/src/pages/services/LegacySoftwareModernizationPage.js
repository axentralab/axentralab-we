import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function LegacySoftwareModernizationPage() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Enhanced Security',
      description: 'Protect from vulnerabilities in outdated systems with modern security standards.'
    },
    {
      icon: '⚡',
      title: 'Improved Performance',
      description: 'Boost system speed, reliability, and user experience with optimized code.'
    },
    {
      icon: '📈',
      title: 'Scalability',
      description: 'Adapt to growing needs with cloud-native solutions that scale seamlessly.'
    },
    {
      icon: '💰',
      title: 'Cost Efficiency',
      description: 'Reduce maintenance costs and total cost of ownership with modern systems.'
    }
  ];

  const modernizationApproaches = [
    {
      title: 'Rehost (Lift & Shift)',
      description: 'Move applications to cloud with minimal changes'
    },
    {
      title: 'Replatform',
      description: 'Optimize for cloud without changing core architecture'
    },
    {
      title: 'Refactor/Rearchitect',
      description: 'Redesign application for cloud-native architecture'
    },
    {
      title: 'Rebuild',
      description: 'Completely rewrite application with modern technologies'
    }
  ];

  return (
    <>
      <SEOHelmet
        title="Legacy Software Modernization | AxentraLab - Future-Proof Your Systems"
        description="Expert legacy software modernization services. Modernize outdated systems with improved security, performance, scalability, and cost efficiency."
        keywords="legacy modernization, software modernization, system upgrade, digital transformation, cloud migration"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(244, 63, 94, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>🔄</span>
            <span style={{ fontWeight: 700, color: '#f43f5e', fontSize: 15 }}>LEGACY MODERNIZATION</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Modernize Your<br />
            <span style={{ color: '#f43f5e' }}>Legacy Systems</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Transform outdated software into modern, scalable solutions that meet today's 
            business demands and prepare you for future growth.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#f43f5e',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Get Assessment
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#f43f5e',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #f43f5e'
              }}
            >
              View Case Studies
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
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f43f5e', marginBottom: 10 }}>200+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Systems Modernized</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f43f5e', marginBottom: 10 }}>35%</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Avg Cost Reduction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f43f5e', marginBottom: 10 }}>0</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Data Loss Cases</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f43f5e', marginBottom: 10 }}>6 Months</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Avg Time to ROI</p>
          </div>
        </div>

        {/* Why Modernize */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Why Modernize Your Legacy Systems?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{benefit.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modernization Approaches */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Modernization Approaches
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {modernizationApproaches.map((approach, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f43f5e 0%, #e0305c 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 900,
                  margin: '0 auto 25px'
                }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {approach.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Our Modernization Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {[
              {
                number: '1',
                title: 'Assessment & Planning',
                description: 'Comprehensive analysis and modernization strategy.'
              },
              {
                number: '2',
                title: 'Migration Strategy',
                description: 'Phased migration plan with risk mitigation.'
              },
              {
                number: '3',
                title: 'Implementation',
                description: 'Rebuild/refactor using modern technologies.'
              },
              {
                number: '4',
                title: 'Testing & Deployment',
                description: 'Comprehensive testing and gradual rollout.'
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
                  background: 'linear-gradient(135deg, #f43f5e 0%, #e0305c 100%)',
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
            Modern Technologies We Use
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 15
          }}>
            {[
              'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java',
              'AWS', 'Azure', 'Kubernetes', 'Docker', 'PostgreSQL', 'MongoDB',
              'Microservices', 'GraphQL', 'REST API', 'CI/CD'
            ].map((tech, index) => (
              <div key={index} style={{
                padding: 24,
                background: 'var(--bg2)',
                borderRadius: 12,
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: '#f43f5e',
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
          background: 'linear-gradient(135deg, #f43f5e 0%, #e0305c 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Modernize Your Systems?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Let's assess your legacy systems and create a modernization plan that works for your business.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#f43f5e',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Get Assessment
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