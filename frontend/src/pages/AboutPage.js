import { Link } from 'react-router-dom';

const TEAM = [
  { name: 'Nazat Hossain Adi',    role: 'CEO & Lead Architect',   emoji: '🧠', color: '#2563eb' },
  { name: 'Arifin Hasan',   role: 'Head of Engineering',  emoji: '🛡️', color: '#2563eb' },
  { name: 'Tanvir Ahmed',  role: 'AI/ML Engineer',         emoji: '🤖', color: '#2563eb' },
  { name: 'Shakil Ahmed',role: 'DevOps Lead',            emoji: '☁️', color: '#2563eb' },
];

const VALUES = [
  { icon: '🎯', title: 'Precision',    desc: 'Every line of code and every security control is crafted with exactness.'    },
  { icon: '🔒', title: 'Trust',        desc: 'NDA on day one. SOC 2 processes by default. Transparency always.'            },
  { icon: '⚡', title: 'Speed',        desc: 'Project kickoff within 24 hours. Weekly updates. Zero surprise delays.'      },
  { icon: '🌍', title: 'Global Reach', desc: 'Dhaka-based team delivering world-class tech to 40+ countries.'             },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-hero-title { font-size: clamp(32px, 5vw, 68px); }
        @media (max-width:768px) {
          .about-hero-title { font-size: clamp(28px, 6vw, 48px); }
          .about-values-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .about-team-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
        @media (max-width:480px) {
          .about-values-grid { grid-template-columns: 1fr !important; }
          .about-team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="page" style={{ background: 'var(--bg)', paddingTop: 80 }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ padding: '120px 5% 100px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', animation: 'fadeUp 0.7s ease both' }}>
            <span className="badge" style={{ marginBottom: 24 }}>Our Story</span>
            <h1 className="about-hero-title" style={{ fontFamily: "var(--font-h)", fontWeight: 900, letterSpacing: -2, lineHeight: 1.1, color: 'var(--text)', marginBottom: 22 }}>
              Built by engineers.<br />
              <span style={{ color: 'var(--teal)' }}>Trusted by teams worldwide.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
              AxentraLab was founded with a single mission: deliver enterprise-grade technology without the enterprise overhead. From cloud infrastructure to AI — we build things that matter.
            </p>
          </div>
        </section>

        {/* ── MISSION ─────────────────────────────────────────── */}
        <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ marginBottom: 18 }}>Mission & Vision</span>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: -1.2, color: 'var(--text)', marginBottom: 20, lineHeight: 1.15 }}>
                Technology that<br />serves humanity.
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>
                We believe great software should be accessible to businesses of all sizes. From early-stage startups to established enterprises, we bring the same rigor, craft, and care to every project.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8 }}>
                Our vision is a world where every organization can protect itself, automate intelligently, and scale confidently — regardless of geography or budget.
              </p>
            </div>
            
            <div className="card" style={{ padding: 40 }}>
              {[
                ['2019', 'Founded in Dhaka'],
                ['40+', 'Countries served'],
                ['150+', 'Projects delivered'],
                ['98%', 'Client retention rate'],
              ].map(([v, l], i) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i !== 3 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--muted)', fontSize: 15, fontWeight: 500 }}>{l}</span>
                  <span style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 24, color: 'var(--teal)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ─────────────────────────────────────────── */}
        <section style={{ padding: '100px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16 }}>Core Values</span>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: -1.2, color: 'var(--text)' }}>
                What drives us every day.
              </h2>
            </div>
            <div className="about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {VALUES.map((v, i) => (
                <div key={i} className="card" style={{ padding: 32 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ───────────────────────────────────────────── */}
        <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 16 }}>The Team</span>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: -1.2, color: 'var(--text)' }}>
                The people behind the code.
              </h2>
            </div>
            <div className="about-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {TEAM.map((m, i) => (
                <div key={i} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 20px' }}>
                    {m.emoji}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{m.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 600 }}>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section style={{ padding: '100px 5%', textAlign: 'center', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: -1, color: 'var(--text)', marginBottom: 16 }}>
            Want to work with us?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32 }}>We'd love to hear about your project.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
              Get in touch →
            </Link>
            <Link to="/portfolio" className="btn-outline" style={{ padding: '14px 32px' }}>
              View our work
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}