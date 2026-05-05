export default function ProcessSection() {
  const steps = [
    { step: 1, title: 'Discovery & Planning',  icon: '🔍', desc: 'We deep-dive into your business goals, audience, and technical requirements to create a solid roadmap.' },
    { step: 2, title: 'Design & Prototyping',  icon: '🎨', desc: 'Wireframes and interactive prototypes — you see exactly what you\'re getting before a single line of code is written.' },
    { step: 3, title: 'Development',           icon: '⚙️', desc: 'Clean, scalable code built with modern stacks. Weekly updates so you\'re never left in the dark.' },
    { step: 4, title: 'Testing & QA',          icon: '✅', desc: 'Rigorous cross-browser, cross-device testing and performance audits before anything goes live.' },
    { step: 5, title: 'Deployment & Launch',   icon: '🚀', desc: 'Zero-downtime deployment with CDN setup, DNS config, and a full go-live checklist.' },
    { step: 6, title: 'Support & Growth',      icon: '📈', desc: 'Ongoing monitoring, maintenance, and feature additions — we grow with your business.' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
      {steps.map((s, i) => (
        <div
          key={i}
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '28px 24px',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--teal)';
            e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontSize: 30, marginBottom: 16 }}>{s.icon}</div>
          <div style={{
            fontFamily: 'var(--font-h)',
            fontSize: 16,
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 8,
            letterSpacing: -0.2,
          }}>
            {s.title}
          </div>
          <p style={{
            fontSize: 13,
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginBottom: 16,
          }}>
            {s.desc}
          </p>
          <div style={{
            fontSize: 12,
            color: 'var(--teal)',
            fontFamily: 'var(--font-m)',
            fontWeight: 700,
            letterSpacing: 0.5,
          }}>
            Step {s.step}
          </div>
        </div>
      ))}
    </div>
  );
}