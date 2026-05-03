import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ReferralTierComparison from '../components/sections/ReferralTierComparison';
import { ReferralCtaBanner } from '../components/ui/ReferralPromoAd';

// ─── Constants ────────────────────────────────────────────────────────────────

const STATS = [
  { value: 2400,  suffix: '+', label: 'Projects Completed',    color: 'var(--teal)' },
  { value: 1500,  suffix: '+', label: 'Happy Clients',         color: 'var(--teal)' },
  { value: 99,  suffix: '%', label: 'Client Satisfaction',   color: 'var(--teal)' },
  { value: 24,  suffix: '/7', label: 'Security Monitoring',  color: 'var(--teal)' },
];

const HERO_BG_IMAGE = process.env.REACT_APP_HOME_HERO_BG_IMAGE || '';

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat }) {
  const [val, ref] = useCounter(stat.value);
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '28px 20px', borderRight: '1px solid var(--border)' }}>
      <div style={{ fontFamily: "var(--font-h)", fontSize: 36, fontWeight: 900, color: stat.color, letterSpacing: -1, lineHeight: 1 }}>
        {val}{stat.suffix}
      </div>
      <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, fontFamily: "var(--font-m)", letterSpacing: 0.5, textTransform: 'uppercase' }}>{stat.label}</div>
    </div>
  );
}

// ─── New Section Data ─────────────────────────────────────────────────────────

const TOOLS_GRID = [
  { icon: '🌐', name: 'Business Website',      tag: 'Web Development',    desc: 'Clean, fast and professional websites for businesses, corporates and startups — responsive, SEO-ready and conversion-focused.',         features: ['5+ pages', 'Mobile responsive', 'SEO setup'],         price: 10000, tier: 'From ৳', color: '#2563eb' },
  { icon: '🛒', name: 'E-commerce Store',      tag: 'Online Shop',        desc: 'Full-featured online stores with product management, cart, checkout and local payment gateway (bKash/Nagad/Stripe) integration.',         features: ['Product filters', 'Cart & checkout', 'Admin panel'],  price: 30000, tier: 'From ৳', color: '#2563eb' },
  { icon: '⚙️', name: 'Custom Web System',     tag: 'POS / SaaS / Custom',desc: 'Tailor-made web apps — POS systems, courier platforms, SaaS dashboards built for your specific workflow.',                            features: ['Custom logic', 'Role-based access', 'Dashboard'],      price: 50000, tier: 'From ৳', color: '#2563eb' },
  { icon: '🔐', name: 'Infrastructure Audit',        tag: 'Cloud Infrastructure',      desc: 'Full Lighthouse-based performance scan, Bugs detection, CDN setup and server hardening — before Downtime cost you money.',              features: ['Lighthouse scan', 'CDN setup', 'Load testing'],              price: 22000, tier: 'From ৳', color: '#2563eb' },
  { icon: '🤖', name: 'Business Automation',   tag: 'Automation & AI',    desc: 'Automate your business processes — CRM setup, API integrations, chatbots and workflow automation using Zapier & Make.',                features: ['CRM setup', 'Chatbot', 'Workflow auto'],               price: 33000, tier: 'From ৳', color: '#2563eb' },
  { icon: '💼', name: 'White-Label Services',  tag: 'Agency Partner',     desc: 'Scale your agency without hiring — outsource web dev, cloud infrastructure support and emergency bug fixes under your brand.',                  features: ['Dev outsourcing', 'Security support', 'NDA included'], price: 500,   tier: 'From $', color: '#8b5cf6' },
];

const CORE_SERVICES = [
  {
    icon: '🌐', title: 'Web Development', label: 'Websites · eCommerce · SaaS',
    color: '#8B5CF6', price: '$100 / ৳10,000+',
    desc: 'We build fast, modern websites that actually convert visitors into customers — from simple landing pages to full-stack SaaS platforms.',
    features: ['Business & corporate sites', 'E-commerce (Shopify/WooCommerce)', 'Custom web apps & SaaS dashboards', 'Landing pages (conversion-focused)', 'Speed optimization & SEO-ready setup', 'Bug fixing & performance improvement'],
  },
  {
    icon: '🔐', title: 'Cloud Infrastructure', label: 'Audit · WAF · Load testing',
    color: '#F59E0B', price: '$200 / ৳22,000+',
    desc: 'We protect your business from real-world performance bottlenecks before they cost you money — full audits, Performance optimization, and 24/7 monitoring.',
    features: ['Website Infrastructure Audit (Web Vitals)', 'Performance optimization & cleanup', 'Global CDN setup & configuration', 'Load testing (Basic/Advanced)', 'Server hardening (Linux/Cloud)', 'API & SaaS load testing'],
  },
  {
    icon: '⚙️', title: 'Automation & AI', label: 'Workflows · CRM · Chatbots',
    color: '#06B6D4', price: '$300 / ৳33,000+',
    desc: 'We automate your business processes to save time and increase efficiency — CRM setup, API integrations, chatbots, and workflow automation.',
    features: ['Business process automation', 'CRM setup & integration', 'API integration (3rd party)', 'Chatbot development', 'Workflow automation (Zapier, Make)', 'Custom reporting & alerts'],
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        @keyframes slideInLeft  { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:none} }

        .hero-left  { animation: slideInLeft  0.7s 0.1s ease both; }
        .hero-badge { animation: fadeUp 0.6s 0s ease both; }
        .hero-h1    { animation: fadeUp 0.6s 0.15s ease both; }
        .hero-sub   { animation: fadeUp 0.6s 0.25s ease both; }
        .hero-ctas  { animation: fadeUp 0.6s 0.35s ease both; }
        .hero-trust { animation: fadeUp 0.6s 0.45s ease both; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '150px 5% 100px', minHeight: '90vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {/* light grid background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', opacity: 0.5 }} />

        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center', textAlign: 'center' }}>

            <div className="hero-left" style={{ margin: '0 auto' }}>
              <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(37, 99, 235, 0.2)', background: 'rgba(37, 99, 235, 0.05)', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
                <span style={{ fontSize: 12, fontFamily: "var(--font-m)", color: 'var(--teal)', fontWeight: 600, letterSpacing: 0.5 }}>Award Winning IT Company</span>
              </div>

              <h1 className="hero-h1" style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(38px,6vw,72px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -2, lineHeight: 1.1, margin: '0 auto 22px', maxWidth: 800 }}>
                WE BUILD.<br />
                WE SECURE.<br />
                <span style={{ color: 'var(--teal)' }}>YOU SCALE.</span>
              </h1>

              <p className="hero-sub" style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
                Elite web development & cloud infrastructure solutions that are fast, secure, and built to dominate the corporate landscape.
              </p>

              <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
                <Link to="/contact" className="btn-primary" style={{ padding: '15px 32px', fontSize: 16 }}>
                  LAUNCH A PROJECT →
                </Link>
                <Link to="/services" className="btn-outline" style={{ padding: '15px 28px', fontSize: 16 }}>
                  VIEW SERVICES
                </Link>
              </div>
              
              <div className="stats-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'var(--bg2)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {STATS.map((s, idx) => (
                  <div key={s.label} style={{ borderRight: idx !== STATS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <StatCard stat={s} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="badge" style={{ marginBottom: 16 }}>Our Services</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.2, marginBottom: 14 }}>Build. Secure. Scale.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 460, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>Web development, cloud infrastructure and automation — everything your business needs, all under one roof.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24, maxWidth: 1200, margin: '0 auto' }}>
          {TOOLS_GRID.map((tool, i) => (
            <div key={i} className="card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${tool.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{tool.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 16, color: 'var(--text)', letterSpacing: -0.2 }}>{tool.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "var(--font-m)", marginTop: 2 }}>{tool.tag}</div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 24, flex: 1 }}>{tool.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {tool.features.map((f, fi) => (
                  <span key={fi} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{f}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontFamily: "var(--font-h)", fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>
                  {tool.tier} {tool.price.toLocaleString()}
                </span>
                <Link to="/contact" style={{ color: tool.color, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                  Contact Us →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/services" className="btn-outline">View all products →</Link>
        </div>
      </section>

      {/* ── SERVICES (3-card focused) ─────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="badge" style={{ marginBottom: 16 }}>Core Expertise</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1.2, marginBottom: 14 }}>3 services. Unlimited impact.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>Web development, cloud infrastructure and automation — each one custom-built, production-ready and ROI-positive.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
          {CORE_SERVICES.map((s, i) => (
            <div key={i} className="card" style={{ padding: '36px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 20, color: 'var(--text)' }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: s.color, fontFamily: "var(--font-m)", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text)' }}>
                    <span style={{ color: s.color, fontWeight: 'bold' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', background: s.color }}>
                  Get Started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      {/* <TestimonialsSection /> */}

      {/* ── PROCESS SECTION ────────────────────────────────────────────────── */}
      {/* <ProcessSection /> */}

      {/* ── MAIN CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', textAlign: 'center', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <span className="badge" style={{ marginBottom: 16 }}>Get Started Today</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, color: 'var(--text)', margin: '0 auto 16px', letterSpacing: -1.5, lineHeight: 1.1 }}>
            Ready to build, secure<br /><span style={{ color: 'var(--teal)' }}>&amp; scale your business?</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Tell us what you need — we'll respond within 24 hours with a clear proposal and honest pricing. No hidden fees. No BS.</p>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: 16 }}>
              🔍 Get Free Infrastructure Audit →
            </Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '16px 36px', fontSize: 16 }}>
              📞 Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}