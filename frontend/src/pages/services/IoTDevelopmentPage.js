import { Link } from 'react-router-dom';
import SEOHelmet from '../../components/SEOHelmet';

export default function IoTDevelopmentPage() {
  return (
    <>
      <SEOHelmet
        title="IoT Development | AxentraLab"
        description="Develop connected IoT solutions with sensor integration, data analytics, and real-time monitoring. Build smart devices and IoT platforms."
        keywords="IoT development, internet of things, connected devices, sensor integration, IoT platforms"
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
            <span style={{ fontSize: 24 }}>📡</span>
            <span style={{ fontWeight: 600, color: 'var(--teal)' }}>IoT Development</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 48,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 20,
            lineHeight: 1.2
          }}>
            Build the<br />
            <span style={{ color: 'var(--teal)' }}>Internet of Things</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Create connected devices and IoT platforms with sensor integration,
            real-time data processing, and intelligent automation capabilities.
          </p>
        </div>

        {/* IoT Solutions */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 40,
            color: 'var(--text)'
          }}>
            IoT Development Services
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>📱</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                Connected Devices
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Design and develop smart devices with embedded systems, wireless connectivity,
                and power-efficient hardware integration.
              </p>
            </div>

            <div style={{
              padding: 30,
              background: 'var(--bg2)',
              borderRadius: 16,
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🌐</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: 'var(--text)' }}>
                IoT Platforms
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Build scalable IoT platforms for device management, data collection,
                and real-time analytics with cloud integration.
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
                Data Analytics
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Implement advanced analytics for IoT data including predictive maintenance,
                anomaly detection, and actionable insights.
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
                Security & Compliance
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Ensure IoT security with encryption, secure boot, over-the-air updates,
                and compliance with industry standards.
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
            IoT Development Process
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
                Concept & Planning
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Define IoT use case, select appropriate sensors and connectivity,
                and plan device architecture and data flow.
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
                Hardware Design
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Design circuit boards, select microcontrollers, integrate sensors,
                and optimize for power consumption and reliability.
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
                Firmware Development
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Develop embedded software for device control, data collection,
                wireless communication, and over-the-air updates.
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
                Cloud Integration
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                Connect devices to cloud platforms, implement data processing pipelines,
                and build monitoring and management interfaces.
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
            IoT Technologies
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 20,
            textAlign: 'center'
          }}>
            {[
              'Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'AWS IoT',
              'Azure IoT', 'Google IoT', 'Node-RED', 'InfluxDB', 'Grafana'
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
            Ready to Build IoT Solutions?
          </h2>
          <p style={{
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9
          }}>
            Let's create connected devices and platforms that transform your business.
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
              Start IoT Project
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
              View IoT Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}