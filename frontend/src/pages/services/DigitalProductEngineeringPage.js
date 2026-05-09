import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function DigitalProductEngineeringPage() {
  const services = [
    {
      title: 'Product Strategy & Discovery',
      icon: '🎯',
      description: 'Define your product vision, identify target markets, create roadmaps, and validate market demand through research.'
    },
    {
      title: 'UX/UI Design',
      icon: '🎨',
      description: 'Create intuitive user experiences with wireframing, prototyping, and design systems that delight users.'
    },
    {
      title: 'Full-Stack Development',
      icon: '⚙️',
      description: 'End-to-end development using modern tech stacks, microservices architecture, and cloud-native solutions.'
    },
    {
      title: 'Data & Analytics',
      icon: '📊',
      description: 'Implement analytics, tracking systems, and dashboards to measure success and drive product decisions.'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery & Strategy',
      description: 'Market analysis, competitive research, user personas, and product roadmap development.'
    },
    {
      number: '2',
      title: 'Design & Prototyping',
      description: 'Wireframes, mockups, interactive prototypes, and user testing for validation.'
    },
    {
      number: '3',
      title: 'Development',
      description: 'Agile development, sprint-based delivery, continuous integration, and quality assurance.'
    },
    {
      number: '4',
      title: 'Launch & Iterate',
      description: 'Go-to-market strategy, user feedback collection, metrics tracking, and continuous improvement.'
    }
  ];

  const technologies = [
    'React', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'FastAPI',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL',
    'MongoDB', 'Redis', 'Elasticsearch', 'Stripe', 'Auth0', 'GraphQL'
  ];

  return (
    <>
      <SEOHelmet
        title="Digital Product Engineering | AxentraLab - Transform Your Vision Into Reality"
        description="Expert digital product engineering services. From ideation to deployment, we build innovative products that drive business growth and user engagement."
        keywords="digital product engineering, product development, software engineering, product strategy, app development, SaaS development"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>🌐</span>
            <span style={{ fontWeight: 700, color: '#10b981', fontSize: 15 }}>DIGITAL PRODUCT ENGINEERING</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Transform Your<br />
            <span style={{ color: '#10b981' }}>Idea Into Reality</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            We design and build innovative digital products that solve real problems, 
            delight users, and drive measurable business growth.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#10b981',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.background = '#059669'}
              onMouseOut={(e) => e.target.style.background = '#10b981'}
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#10b981',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #10b981',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.background = '#f0fdf4'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              View Our Work
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
            <div style={{ fontSize: 36, fontWeight: 900, color: '#10b981', marginBottom: 10 }}>50+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Digital Products Built</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#10b981', marginBottom: 10 }}>$500M+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Combined Product Value</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#10b981', marginBottom: 10 }}>12 Years</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Industry Experience</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#10b981', marginBottom: 10 }}>95%</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Client Satisfaction Rate</p>
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
            Our Engineering Approach
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
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
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
            Our Development Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <div style={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 900,
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.2)'
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Technology Stack
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
                color: '#10b981',
                textAlign: 'center',
                fontSize: 14,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.background = '#f0fdf4';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg2)';
              }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Why Choose AxentraLab?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'center'
          }}>
            <div>
              {[
                'Proven track record with successful launches',
                'Agile methodology for fast iterations',
                'Full-stack expertise across all technologies',
                'User-centric design approach',
                'Transparent communication throughout',
                'Post-launch support and scaling'
              ].map((point, index) => (
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
                    background: '#f0fdf4',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: 2
                  }}>
                    ✓
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6 }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div style={{
              padding: 50,
              background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
              borderRadius: 16,
              border: '1px solid #d1fae5',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 80, marginBottom: 20 }}>🚀</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Ready to Launch?
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: 30, fontSize: 16, lineHeight: 1.6 }}>
                Let's discuss your product vision and create a roadmap for success.
              </p>
              <Link
                to="/contact"
                style={{
                  padding: '12px 28px',
                  background: '#10b981',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  display: 'inline-block',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#059669'}
                onMouseOut={(e) => e.target.style.background = '#10b981'}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Build Your Next Digital Product?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Join 50+ companies that have transformed their ideas into market-leading products with us.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#10b981',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                transition: 'all 0.3s',
                fontSize: 16
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid white',
                fontWeight: 700,
                transition: 'all 0.3s',
                fontSize: 16
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}