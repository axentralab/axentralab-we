import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ReferralTierComparison from '../components/sections/ReferralTierComparison';
import { ReferralCtaBanner } from '../components/ui/ReferralPromoAd';
import { STATS, HERO_WORDS, ENGINEERING_SERVICES, ENGAGEMENT_MODELS, CERTIFICATIONS, CASE_STUDIES, PARTNERS } from '../config/homePageData';

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useCounter(target, duration = 1800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let i = 0;
        const tick = setInterval(() => {
          i++;
          const ease = 1 - Math.pow(1 - i / steps, 3);
          setVal(Math.floor(target * ease));
          if (i >= steps) { setVal(target); clearInterval(tick); }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [val, ref];
}

function useTypewriter(words, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === word.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplay(word.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(word.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat }) {
  const [val, ref] = useCounter(stat.value);
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '32px 24px' }}>
      <div style={{ fontFamily: 'var(--font-h)', fontSize: 42, fontWeight: 900, color: 'var(--text)', letterSpacing: -2, lineHeight: 1 }}>
        {val}{stat.suffix}
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8, fontFamily: 'var(--font-m)', letterSpacing: 0.3 }}>
        {stat.label}
      </div>
    </div>
  );
}

function ServiceCard({ svc, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={svc.link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        padding: '36px 32px',
        background: hovered ? 'var(--teal)' : 'var(--bg2)',
        border: '1px solid',
        borderColor: hovered ? 'var(--teal)' : 'var(--border)',
        borderRadius: 'var(--radius)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 20px 40px -10px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 20 }}>{svc.icon}</div>
      <div style={{
        fontFamily: 'var(--font-h)',
        fontWeight: 800,
        fontSize: 18,
        color: hovered ? '#fff' : 'var(--text)',
        marginBottom: 12,
        letterSpacing: -0.3,
        transition: 'color 0.25s',
      }}>
        {svc.title}
      </div>
      <p style={{
        fontSize: 14,
        color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--muted)',
        lineHeight: 1.7,
        marginBottom: 24,
        transition: 'color 0.25s',
      }}>
        {svc.desc}
      </p>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        color: hovered ? '#fff' : 'var(--teal)',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        transition: 'color 0.25s',
      }}>
        Learn more <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none', display: 'inline-block' }}>→</span>
      </div>
    </Link>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function HomePage() {
  const typedWord = useTypewriter(HERO_WORDS);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }
        @keyframes lineGrow { from{width:0} to{width:60px} }

        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.55s ease both; }
        .fade-up-5 { animation: fadeUp 0.7s 0.7s ease both; }

        .cursor { display:inline-block; width:3px; height:1em; background:var(--teal); margin-left:4px; vertical-align:middle; animation:blink 0.8s infinite; }

        .marquee-track { display:flex; gap:60px; animation:marquee 22s linear infinite; white-space:nowrap; }
        .marquee-wrap  { overflow:hidden; }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-family: var(--font-m);
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 20px;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--teal);
          border-radius: 2px;
        }

        .stat-divider { border-right: 1px solid var(--border); }
        .stat-divider:last-child { border-right: none; }

        .engagement-card {
          padding: 36px 32px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg2);
          transition: border-color 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .engagement-card:hover {
          border-color: var(--teal);
          box-shadow: 0 0 0 1px var(--teal), 0 20px 40px -10px rgba(0,0,0,0.1);
        }

        .cert-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: var(--bg2);
          text-align: center;
          padding: 16px;
          transition: border-color 0.2s;
        }
        .cert-pill:hover { border-color: var(--teal); }

        .case-card {
          padding: 36px 32px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg2);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .engage-grid { grid-template-columns: 1fr !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '160px 5% 120px',
        minHeight: '88vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Grid BG */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',
          backgroundSize: '64px 64px', opacity: 0.45, pointerEvents: 'none',
        }} />
        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>

          {/* Live badge */}
          <div className="fade-up-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 999, border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.06)', marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontFamily: 'var(--font-m)', color: 'var(--teal)', fontWeight: 700, letterSpacing: 0.8 }}>Your AI-powered Engineering Partner</span>
          </div>

          {/* H1 */}
          <h1 className="fade-up-2 hero-h1" style={{
            fontFamily: 'var(--font-h)',
            fontSize: 'clamp(40px,6.5vw,78px)',
            fontWeight: 900,
            color: 'var(--text)',
            letterSpacing: -3,
            lineHeight: 1.05,
            margin: '0 auto 28px',
            maxWidth: 860,
          }}>
            Software Development<br />
            Company built for<br />
            <span style={{ color: 'var(--teal)' }}>{typedWord}<span className="cursor" /></span>
          </h1>

          {/* Sub */}
          <p className="fade-up-3" style={{
            fontSize: 19,
            color: 'var(--muted)',
            lineHeight: 1.75,
            marginBottom: 44,
            maxWidth: 560,
            margin: '0 auto 44px',
          }}>
            Elite web development, cloud infrastructure, and automation solutions — fast, secure, and built to dominate the corporate landscape.
          </p>

          {/* CTAs */}
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: 15, fontWeight: 700 }}>
              Get Free Estimation →
            </Link>
            <Link to="/services" className="btn-outline" style={{ padding: '16px 32px', fontSize: 15 }}>
              Recent Projects
            </Link>
          </div>

          {/* Stats row */}
          <div className="fade-up-5 stats-row" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'var(--bg2)',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            boxShadow: '0 8px 40px -12px rgba(0,0,0,0.08)',
            maxWidth: 860,
            margin: '0 auto',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-divider">
                <StatCard stat={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS MARQUEE ─────────────────────────────────────────────── */}
      <div style={{ padding: '28px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i} style={{ fontSize: 14, fontFamily: 'var(--font-m)', fontWeight: 600, color: 'var(--muted)', opacity: 0.6, letterSpacing: 0.5 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ENGINEERING SERVICES ─────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="section-label">Engineering Services</div>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.5, lineHeight: 1.1, maxWidth: 520, margin: 0 }}>
                Engineering services<br />and featured competencies
              </h2>
            </div>
            <Link to="/services" className="btn-outline" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end' }}>
              View all services →
            </Link>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ENGINEERING_SERVICES.map((svc, i) => (
              <ServiceCard key={i} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ISO CERTIFICATIONS ───────────────────────────────────────────── */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Standards & Trust</div>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, marginBottom: 16 }}>
            Certified to the highest ISO standards
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
            These aren't just badges. They're how we ensure every project is secure, sustainable, and delivered to the highest standards.
          </p>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className="cert-pill">
                <div style={{ fontFamily: 'var(--font-h)', fontWeight: 900, fontSize: 13, color: 'var(--text)', letterSpacing: -0.3 }}>{c.label}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.4 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 52 }}>
            <div className="section-label">We Produce Value</div>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.5, lineHeight: 1.1, maxWidth: 480, margin: 0 }}>
              How we help our clients transform and innovate
            </h2>
          </div>
          <div className="cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="case-card">
                <span style={{ fontSize: 12, fontFamily: 'var(--font-m)', fontWeight: 700, color: c.color, letterSpacing: 0.8, textTransform: 'uppercase' }}>{c.tag}</span>
                <div style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: 20, color: 'var(--text)', letterSpacing: -0.4, lineHeight: 1.25 }}>{c.title}</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{c.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 900, color: c.color, letterSpacing: -1 }}>{c.metric}</span>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/portfolio" className="btn-outline">View all projects →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Client Voices</div>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.2, textAlign: 'center', marginBottom: 52 }}>
            Partnerships built on trust
          </h2>
          <TestimonialsSection />
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 52, textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>How We Work</div>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.5, lineHeight: 1.1, maxWidth: 520, margin: '0 auto 16px' }}>
              Transparent and flexible engagement models
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
              Choose how you want to work with us — from a single developer to a full dedicated team.
            </p>
          </div>
          <div className="engage-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {ENGAGEMENT_MODELS.map((m, i) => (
              <div key={i} className="engagement-card">
                <div style={{ fontSize: 13, color: m.color, fontFamily: 'var(--font-m)', fontWeight: 700, marginBottom: 12, letterSpacing: 0.3 }}>{m.tag}</div>
                <div style={{ fontSize: 24, marginBottom: 14 }}>{m.icon}</div>
                <div style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 14, letterSpacing: -0.3 }}>{m.title}</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>{m.desc}</p>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: m.color, textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>How We Deliver</div>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.2, textAlign: 'center', marginBottom: 52 }}>
            Our delivery framework
          </h2>
          <ProcessSection />
        </div>
      </section>

      {/* ── REFERRAL ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ReferralCtaBanner />
          <div style={{ marginTop: 60 }}>
            <ReferralTierComparison />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 5%', textAlign: 'center', background: 'var(--bg2)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Get Started Today</div>
          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 'clamp(32px,5vw,58px)',
            fontWeight: 900,
            color: 'var(--text)',
            margin: '0 auto 20px',
            letterSpacing: -2,
            lineHeight: 1.05,
          }}>
            Ready to build, secure<br />
            <span style={{ color: 'var(--teal)' }}>& scale your business?</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 40, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 40px' }}>
            Tell us what you need — we'll respond within 24 hours with a clear proposal and honest pricing. No hidden fees. No BS.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '17px 40px', fontSize: 15, fontWeight: 700 }}>
              🔍 Get Free Audit →
            </Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '17px 36px', fontSize: 15 }}>
              📞 Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}