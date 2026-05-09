import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function MVPDevelopmentPage() {
  const whyMVP = [
    {
      icon: '🎯',
      title: 'Focused Approach',
      description: 'Build only essential features to solve your core problem and deliver maximum value quickly.'
    },
    {
      icon: '⚡',
      title: 'Speed to Market',
      description: 'Launch your product in weeks instead of months, capturing market opportunities faster.'
    },
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Gather real user feedback and metrics to guide your development roadmap.'
    },
    {
      icon: '💰',
      title: 'Cost Efficient',
      description: 'Minimize investment while maximizing learning and validation opportunities.'
    }
  ];

  return (
    <>
      <SEOHelmet
        title="MVP Development | AxentraLab - Launch Fast"
        description="Build and launch your minimum viable product quickly. Validate ideas, gather user feedback, and accelerate time-to-market with expert MVP development."
        keywords="MVP development, minimum viable product, startup development, product validation, rapid prototyping"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(239, 68, 68, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>🚀</span>
            <span style={{ fontWeight: 700, color: '#ef4444', fontSize: 15 }}>MVP DEVELOPMENT</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Launch Your<br />
            <span style={{ color: '#ef4444' }}>MVP in Weeks</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Build and launch your minimum viable product fast. Validate your ideas, gather user feedback, 
            and accelerate your path to market success.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#ef4444',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Start Your MVP
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#ef4444',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #ef4444'
              }}
            >
              Success Stories
            </Link>
          </div>
        </div>

        {/* Why MVP */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Why MVP Development?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {whyMVP.map((item, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {item.description}
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
            Our MVP Development Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {[
              {
                number: '1',
                title: 'Discovery & Planning',
                description: 'Understand your vision, define core features, create development roadmap.'
              },
              {
                number: '2',
                title: 'Design & Prototype',
                description: 'Create wireframes, mockups, interactive prototypes for validation.'
              },
              {
                number: '3',
                title: 'Agile Development',
                description: 'Build core features using agile with weekly demos and iterations.'
              },
              {
                number: '4',
                title: 'Launch & Learn',
                description: 'Deploy to market, collect user feedback, analyze metrics.'
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
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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

        {/* Timeline */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            MVP Timeline
          </h2>

          <div style={{
            padding: 40,
            background: 'linear-gradient(135deg, #fef2f2 0%, #fef5f5 100%)',
            borderRadius: 16,
            border: '1px solid #fed7d7'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 20 }}>
              {[
                { phase: 'Discovery', duration: '1 week' },
                { phase: 'Design', duration: '2 weeks' },
                { phase: 'Development', duration: '4-6 weeks' },
                { phase: 'Testing', duration: '1 week' },
                { phase: 'Launch', duration: 'Day 1' }
              ].map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: 20,
                  background: 'white',
                  borderRadius: 12,
                  border: '1px solid #fed7d7'
                }}>
                  <p style={{ fontSize: 12, color: '#ef4444', fontWeight: 700, marginBottom: 8 }}>
                    {item.duration}
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                    {item.phase}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: 30, color: 'var(--muted)', fontSize: 15 }}>
              Total: 8-10 weeks from discovery to launch
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Launch Your MVP?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Turn your idea into a market-ready product. Get started with a free consultation today.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#ef4444',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Start Your MVP
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