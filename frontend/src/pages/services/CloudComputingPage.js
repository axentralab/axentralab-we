import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function CloudComputingPage() {
  const solutions = [
    {
      icon: '🏗️',
      title: 'Cloud Architecture',
      description: 'Scalable, resilient architectures with infrastructure as code and multi-region deployments.'
    },
    {
      icon: '🐳',
      title: 'Containerization',
      description: 'Docker containers and Kubernetes orchestration for portable, scalable deployments.'
    },
    {
      icon: '⚡',
      title: 'Serverless Computing',
      description: 'Event-driven applications with auto-scaling and cost-effective managed services.'
    },
    {
      icon: '🔄',
      title: 'DevOps & CI/CD',
      description: 'Automated pipelines, monitoring, and continuous integration for reliable delivery.'
    }
  ];

  const providers = [
    { name: 'AWS', icon: '🟡', services: 'EC2, Lambda, S3, RDS, CloudFormation' },
    { name: 'Azure', icon: '🔵', services: 'App Service, Functions, Cosmos DB, AKS' },
    { name: 'Google Cloud', icon: '⚪', services: 'Compute Engine, Cloud Functions, BigQuery' }
  ];

  return (
    <>
      <SEOHelmet
        title="Cloud Computing Solutions | AxentraLab - Scale Your Business"
        description="Expert cloud computing services. Cloud architecture, containerization, serverless computing, and DevOps for AWS, Azure, and Google Cloud."
        keywords="cloud computing, cloud migration, AWS, Azure, Google Cloud, microservices, containerization, serverless"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(34, 197, 94, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>☁️</span>
            <span style={{ fontWeight: 700, color: '#22c55e', fontSize: 15 }}>CLOUD COMPUTING</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Scale to the<br />
            <span style={{ color: '#22c55e' }}>Cloud</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Design and implement cloud-native solutions with microservices, containerization, 
            and serverless computing for maximum scalability and efficiency.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#22c55e',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Start Migration
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#22c55e',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #22c55e'
              }}
            >
              View Projects
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
            <div style={{ fontSize: 36, fontWeight: 900, color: '#22c55e', marginBottom: 10 }}>100+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Cloud Migrations</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#22c55e', marginBottom: 10 }}>40%</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Avg Cost Reduction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#22c55e', marginBottom: 10 }}>99.99%</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Uptime Average</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#22c55e', marginBottom: 10 }}>3 Days</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Avg Migration Time</p>
          </div>
        </div>

        {/* Solutions */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Cloud Computing Solutions
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {solutions.map((solution, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{solution.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {solution.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Process */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Cloud Migration Process
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
                description: 'Evaluate infrastructure, identify candidates, create adoption strategy.'
              },
              {
                number: '2',
                title: 'Proof of Concept',
                description: 'Build and test cloud-native versions, validate architecture.'
              },
              {
                number: '3',
                title: 'Migration Execution',
                description: 'Migrate applications and data, ensure minimal downtime.'
              },
              {
                number: '4',
                title: 'Optimization & Management',
                description: 'Monitoring, cost optimization, automated scaling setup.'
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
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
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

        {/* Cloud Providers */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Cloud Platforms We Support
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30
          }}>
            {providers.map((provider, index) => (
              <div key={index} style={{
                padding: 40,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{provider.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                  {provider.name}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 14 }}>
                  {provider.services}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            Why Move to Cloud?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center'
          }}>
            <div>
              {[
                'Scalability and flexibility',
                'Reduce infrastructure costs',
                'Enhanced security and compliance',
                'Global reach and distribution',
                'High availability and disaster recovery',
                'Automatic updates and patches'
              ].map((benefit, index) => (
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
                    background: '#dcfce7',
                    border: '2px solid #22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22c55e',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6 }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <div style={{
              padding: 50,
              background: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
              borderRadius: 16,
              border: '1px solid #86efac'
            }}>
              <div style={{ fontSize: 80, marginBottom: 20, textAlign: 'center' }}>🌍</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: 'var(--text)', textAlign: 'center' }}>
                Global Infrastructure
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: 30, fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
                Deploy your applications worldwide with guaranteed low latency and high availability.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Move to the Cloud?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Let's design a cloud strategy that scales with your business needs and maximizes ROI.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#22c55e',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Start Migration
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
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}