import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function DigitalProductEngineeringPage() {
  return (
    <>
      <SEOHelmet
        title="Digital Product Engineering | AxentraLab"
        description="Transform your business vision into innovative digital products with our comprehensive product engineering services. From ideation to deployment."
        keywords="digital product engineering, product development, software engineering, digital transformation"
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
            <span style={{ fontSize: 24 }}>🌐</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>Digital Product Engineering</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Turn Your Vision Into<br />
            <span style={{ color: 'var(--teal)' }}>Digital Reality</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We transform your business ideas into innovative digital products that drive growth,
            enhance user experience, and deliver measurable results.
          </p>
        </div>

        {/* What We Offer */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Our Engineering Approach
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>🎯</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Product Strategy
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Define your product vision, identify target markets, and create a roadmap
                that aligns with your business objectives.
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
                Rapid Prototyping
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build functional prototypes quickly to validate ideas, gather feedback,
                and iterate before full development.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🚀</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Full-Stack Development
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                End-to-end development using modern technologies, scalable architectures,
                and best practices for long-term success.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>📊</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Analytics & Optimization
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement tracking, analyze user behavior, and continuously optimize
                your product for better performance and user satisfaction.
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
            Technologies We Use
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 20,
            textAlign: 'center'
          }}>
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker',
              'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'TypeScript'
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
            Ready to Build Your Digital Product?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Let's discuss your project and create something amazing together.
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
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
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
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}