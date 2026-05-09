import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function IoTDevelopmentPage() {
  const services = [
    {
      icon: '📱',
      title: 'Connected Devices',
      description: 'Smart devices with embedded systems, wireless connectivity, and power-efficient hardware integration.'
    },
    {
      icon: '🌐',
      title: 'IoT Platforms',
      description: 'Scalable platforms for device management, data collection, and real-time analytics.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Advanced analytics for predictive maintenance, anomaly detection, and actionable insights.'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Encryption, secure boot, over-the-air updates, and industry standard compliance.'
    }
  ];

  const industries = [
    { title: 'Smart Home', icon: '🏠', description: 'Connected home automation systems' },
    { title: 'Industrial 4.0', icon: '🏭', description: 'Manufacturing automation and control' },
    { title: 'Healthcare', icon: '🏥', description: 'Medical devices and monitoring systems' },
    { title: 'Agriculture', icon: '🌾', description: 'Precision farming and monitoring' },
    { title: 'Smart City', icon: '🏙️', description: 'Urban infrastructure management' },
    { title: 'Energy', icon: '⚡', description: 'Power management and optimization' }
  ];

  return (
    <>
      <SEOHelmet
        title="IoT Development | AxentraLab - Build Connected Solutions"
        description="Expert IoT development services. Connected devices, IoT platforms, sensor integration, data analytics, and real-time monitoring solutions."
        keywords="IoT development, internet of things, connected devices, sensor integration, IoT platforms, IoT analytics"
      />

      <div style={{ padding: '80px 5% 60px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(249, 115, 22, 0.1)',
            padding: '10px 20px',
            borderRadius: 30,
            marginBottom: 30
          }}>
            <span style={{ fontSize: 28 }}>📡</span>
            <span style={{ fontWeight: 700, color: '#f97316', fontSize: 15 }}>IOT DEVELOPMENT</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 56,
            fontWeight: 900,
            color: 'var(--text)',
            marginBottom: 30,
            lineHeight: 1.2
          }}>
            Build the<br />
            <span style={{ color: '#f97316' }}>Internet of Things</span>
          </h1>

          <p style={{
            fontSize: 20,
            color: 'var(--muted)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            Create connected devices and IoT platforms with sensor integration, real-time data processing, 
            and intelligent automation capabilities.
          </p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: '#f97316',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15
              }}
            >
              Start IoT Project
            </Link>
            <Link
              to="/case-studies"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#f97316',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                border: '2px solid #f97316'
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
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f97316', marginBottom: 10 }}>50+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>IoT Solutions Built</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f97316', marginBottom: 10 }}>1M+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Connected Devices</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f97316', marginBottom: 10 }}>10B+</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Data Points/Day</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#f97316', marginBottom: 10 }}>6</div>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Industry Verticals</p>
          </div>
        </div>

        {/* Services */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            IoT Development Services
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
                transition: 'all 0.3s'
              }}>
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

        {/* Development Process */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            IoT Development Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 30
          }}>
            {[
              {
                number: '1',
                title: 'Concept & Planning',
                description: 'Define IoT use case, select sensors, plan device architecture.'
              },
              {
                number: '2',
                title: 'Hardware Design',
                description: 'Design circuit boards, select microcontrollers, optimize power consumption.'
              },
              {
                number: '3',
                title: 'Firmware Development',
                description: 'Develop embedded software, wireless communication, over-the-air updates.'
              },
              {
                number: '4',
                title: 'Cloud Integration',
                description: 'Connect to cloud platforms, implement data pipelines, build dashboards.'
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
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
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

        {/* Industry Applications */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 44,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 50,
            color: 'var(--text)'
          }}>
            IoT Industry Applications
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 25
          }}>
            {industries.map((industry, index) => (
              <div key={index} style={{
                padding: 35,
                background: 'var(--bg2)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: 48, marginBottom: 15 }}>{industry.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>
                  {industry.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>
                  {industry.description}
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
            IoT Technologies
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 15
          }}>
            {[
              'Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'AWS IoT',
              'Azure IoT', 'Google IoT', 'Node-RED', 'InfluxDB', 'Grafana',
              'TensorFlow', 'Python', 'C++', 'Node.js'
            ].map((tech, index) => (
              <div key={index} style={{
                padding: 24,
                background: 'var(--bg2)',
                borderRadius: 12,
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: '#f97316',
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
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          borderRadius: 20,
          color: 'white'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 20
          }}>
            Ready to Build IoT Solutions?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 40,
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Let's create connected devices and platforms that transform your business and deliver real value.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 32px',
                background: 'white',
                color: '#f97316',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16
              }}
            >
              Start IoT Project
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