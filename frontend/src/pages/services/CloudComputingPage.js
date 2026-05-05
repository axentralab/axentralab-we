import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function CloudComputingPage() {
  return (
    <>
      <SEOHelmet
        title="Cloud Computing | AxentraLab"
        description="Design and implement cloud-native solutions with microservices, containerization, and serverless computing for maximum scalability and efficiency."
        keywords="cloud computing, cloud native, microservices, containerization, serverless, AWS, Azure"
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
            <span style={{ fontSize: 24 }}>🌩️</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>Cloud Computing</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Scale to the<br />
            <span style={{ color: 'var(--teal)' }}>Cloud</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Design and implement cloud-native solutions with microservices, containerization,
            and serverless computing for maximum scalability and operational efficiency.
          </p>
        </div>

        {/* Cloud Services */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Cloud Computing Solutions
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>🏗️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Cloud Architecture
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Design scalable, resilient cloud architectures using infrastructure as code,
                multi-region deployments, and disaster recovery strategies.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🐳</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Containerization
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement Docker containers and Kubernetes orchestration for
                portable, scalable, and maintainable application deployments.
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
                Serverless Computing
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build event-driven applications with serverless functions, API Gateway,
                and managed services for cost-effective, auto-scaling solutions.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🔄</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                DevOps & CI/CD
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement automated deployment pipelines, infrastructure monitoring,
                and continuous integration for reliable, fast delivery cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Migration Process */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Cloud Migration Process
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
                Evaluate current infrastructure, identify migration candidates,
                and create a comprehensive cloud adoption strategy.
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
                Proof of Concept
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build and test cloud-native versions of critical applications
                to validate architecture and performance expectations.
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
                Migration Execution
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Migrate applications and data using proven methodologies,
                ensuring minimal downtime and data integrity.
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
                Optimization & Management
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement monitoring, cost optimization, and automated scaling
                for ongoing cloud infrastructure management.
              </p>
            </div>
          </div>
        </div>

        {/* Cloud Providers */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            Cloud Platforms We Support
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 30,
            textAlign: 'center'
          }}>
            <div style={{
              padding: 40,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🟡</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                AWS
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Amazon Web Services - EC2, Lambda, S3, RDS, CloudFormation
              </p>
            </div>

            <div style={{
              padding: 40,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🔵</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Azure
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Microsoft Azure - App Service, Functions, Cosmos DB, AKS
              </p>
            </div>

            <div style={{
              padding: 40,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>⚪</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Google Cloud
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Google Cloud Platform - Compute Engine, Cloud Functions, BigQuery
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
            Ready to Move to the Cloud?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Let's design a cloud strategy that scales with your business needs.
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
              Start Cloud Migration
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
              View Cloud Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}