import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReferralPromoAd from '../components/ui/ReferralPromoAd';
import { getWhatsAppUrl } from '../config/contact.config';

const GREEN  = '#10b981';
const BLUE   = '#2563eb';
const PURPLE = '#8b5cf6';
const AMBER  = '#f59e0b';
const CYAN   = '#06b6d4';
const HERO_BG_IMAGE = process.env.REACT_APP_HERO_BG_IMAGE || '';

const PACKS = [
  {
    id: 'startup', badge: 'Entry Point', label: 'Startup Pack', tagline: 'Perfect for new businesses & MVPs',
    price: '$160 / ৳20,000', priceMax: '$500 / ৳50,000', delivery: '7–10 days', support: '1 month post-launch',
    pages: '1–3 responsive pages', tech: 'WordPress / HTML + CSS', color: BLUE, icon: '🚀', category: 'webdev',
    features: ['Mobile-friendly responsive design', 'Basic on-page SEO setup', 'Contact form integration', 'Social media links & icons', 'Clean, professional UI', 'Hosting setup guidance'],
    addons: ['Extra page +৳5,000', 'Logo design +৳8,000', 'Domain setup +৳2,000'], popular: false,
  },
  {
    id: 'sme', badge: 'Most Popular', label: 'SME Pack', tagline: 'For growing businesses & brands',
    price: '$400 / ৳50,000', priceMax: '$1,200 / ৳1,50,000', delivery: '10–20 days', support: '3 months post-launch',
    pages: '4–10 pages + blog', tech: 'WordPress + custom JS / Next.js', color: BLUE, icon: '⚡', category: 'webdev',
    features: ['Custom design & UI/UX system', 'Full on-page SEO optimization', 'Core Web Vitals & PageSpeed tuning', 'Blog / news integration', 'Email subscription & newsletter setup', 'Basic analytics & tracking setup', 'Advanced custom JS features'],
    addons: ['eCommerce +$500', 'CRM integration +৳20,000', 'Maintenance contract'], popular: true,
  },
  {
    id: 'enterprise', badge: 'Full Power', label: 'Enterprise Pack', tagline: 'Custom platforms, SaaS & dashboards',
    price: '$1,500 / ৳1,50,000', priceMax: null, delivery: '20+ days', support: '6 months + optional contract',
    pages: 'Unlimited / custom scope', tech: 'React / Next.js + Node.js / WordPress', color: PURPLE, icon: '🛡️', category: 'webdev',
    features: ['Custom eCommerce / POS system', 'Admin dashboards & analytics', 'Advanced UI/UX with animations', 'Full SEO + performance optimization', 'Payment gateway integrations', 'API, CRM & third-party integrations', 'Reporting & data dashboards', 'Ongoing maintenance contract option'],
    addons: ['Mobile app (React Native)', 'AI feature integrations', 'White-label solution'], popular: false,
  },
  {
    id: 'sec-premium', badge: '🔥 High Value', label: 'Business Scaling Pack', tagline: 'Full scaling for live businesses',
    price: '$500 / ৳55,000', priceMax: '$1,500 / ৳1,50,000', delivery: '7–14 days', support: '3 months monitoring',
    pages: 'Full infrastructure', tech: 'WAF + Linux + Cloud', color: AMBER, icon: '🛡️', category: 'security',
    features: ['Performance optimization & cleanup', 'Global CDN setup & configuration', 'Server performance tuning (Linux/Cloud)', 'Load testing (Basic/Advanced)', 'API & SaaS load testing', 'Uptime monitoring & alert system', 'Monthly performance report'],
    addons: ['24/7 monitoring +৳10,000/mo', 'SaaS security testing +$200', 'NDA included'], popular: true,
  },
  {
    id: 'automation', badge: 'Hidden Gold 💎', label: 'Automation Pack', tagline: 'Save time, increase efficiency',
    price: '$300 / ৳33,000', priceMax: '$2,000 / ৳2,00,000', delivery: '5–15 days', support: '2 months',
    pages: 'Process / workflow scope', tech: 'Zapier / Make / Node.js', color: CYAN, icon: '⚙️', category: 'automation',
    features: ['Business process automation', 'CRM setup & integration', 'API integration (3rd party)', 'Chatbot development', 'Workflow automation (Zapier, Make)', 'Custom reporting & alerts'],
    addons: ['AI chatbot upgrade +$200', 'Custom CRM +৳25,000', 'Ongoing automation support'], popular: false,
  },
  {
    id: 'whitelabel', badge: 'Best for Agencies 🔥', label: 'White-Label Partner', tagline: 'Scale your agency without hiring',
    price: '$500 / mo', priceMax: '$5,000 / mo', delivery: 'Ongoing retainer', support: 'Dedicated dev/Cloud Expert',
    pages: 'Unlimited projects', tech: 'Full stack + Security', color: PURPLE, icon: '💼', category: 'whitelabel',
    features: ['Full web dev outsourcing', 'Cloud Infrastructure support for agencies', 'Emergency bug fix team (48h SLA)', 'Dedicated developer on demand', 'Dedicated Cloud Expert on demand', 'NDA & white-label delivery', 'BDT & USD invoicing'],
    addons: ['Priority SLA +$200/mo', 'Extra dev seat +$300/mo', 'Monthly strategy call'], popular: false,
  }
];

const PORTFOLIO = [
  { name: 'Travel Agency',     cat: 'Startup',    icon: '✈️', color: CYAN,      tech: 'MERN',            desc: 'Tour booking site with custom itinerary builder.' },
  { name: 'AgroTech BD',       cat: 'Startup',    icon: '🌾', color: GREEN,     tech: 'WordPress',       desc: 'Agricultural marketplace for rural Bangladesh farmers.' },
  { name: 'MediConnect',       cat: 'SME',        icon: '🏥', color: BLUE,      tech: 'Next.js',         desc: 'Doctor appointment booking platform with telemedicine.' },
  { name: 'EduFlow LMS',       cat: 'Enterprise', icon: '📚', color: PURPLE,    tech: 'React + Node.js', desc: 'Full learning management system with live classes.' },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function PackCard({ pack, idx }) {
  const [ref, visible] = useInView();
  
  return (
    <div
      ref={ref}
      className="card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.55s ${idx * 0.1}s, transform 0.55s ${idx * 0.1}s, box-shadow 0.3s, border-color 0.3s`,
        display: 'flex', flexDirection: 'column', height: '100%',
        borderTop: pack.popular ? `4px solid ${pack.color}` : '1px solid var(--border)',
        position: 'relative'
      }}
    >
      {pack.popular && (
        <span className="badge" style={{ position: 'absolute', top: 16, right: 16, background: `${pack.color}15`, color: pack.color }}>
          Most Popular
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${pack.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
          {pack.icon}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: pack.color, fontWeight: 700, textTransform: 'uppercase' }}>{pack.badge}</div>
          <h3 style={{ fontFamily: "var(--font-h)", fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>{pack.label}</h3>
        </div>
      </div>
      
      <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20 }}>{pack.tagline}</p>
      
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase' }}>Starting at</div>
        <div style={{ fontFamily: "var(--font-h)", fontSize: 28, fontWeight: 900, color: pack.color }}>{pack.price}</div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
        {pack.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text)', marginBottom: 8 }}>
            <span style={{ color: pack.color, fontWeight: 'bold' }}>✓</span> {f}
          </li>
        ))}
      </ul>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
        <Link to="/contact" className="btn-primary" style={{ background: pack.popular ? pack.color : 'transparent', color: pack.popular ? '#fff' : pack.color, border: pack.popular ? 'none' : `1px solid ${pack.color}`, fontSize: 13, padding: '10px 0' }}>
          Get Started
        </Link>
        <button onClick={() => window.open(getWhatsAppUrl(`Hi, I'm interested in the ${pack.label}.`), '_blank')} className="btn-outline" style={{ borderColor: '#25D366', color: '#25D366', fontSize: 13, padding: '10px 0' }}>
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [packCat, setPackCat] = useState('all');
  const filteredPacks = packCat === 'all' ? PACKS : PACKS.filter(p => p.category === packCat);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span className="badge" style={{ marginBottom: 16 }}>Services & Pricing</span>
          <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
            Transparent pricing.<br />
            <span style={{ color: 'var(--teal)' }}>Real results.</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
            From startup landing pages to full-stack SaaS platforms — fixed-price packages with no hidden fees.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['✓ Free consultation', '✓ Fixed-price quotes', '✓ NDA on request', '✓ BDT & USD accepted'].map((t, i) => (
              <span key={i} style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "var(--font-m)", padding: '6px 14px', borderRadius: 999, background: 'var(--bg)', border: '1px solid var(--border)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 5% 100px', maxWidth: 1200, margin: '0 auto' }}>
        
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          {[
            { id: 'all', label: 'All Services' },
            { id: 'webdev', label: 'Web Dev' },
            { id: 'security', label: 'Cloud Infrastructure' },
            { id: 'automation', label: 'Automation' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setPackCat(cat.id)}
              style={{
                padding: '8px 16px', borderRadius: 999, fontFamily: "var(--font-m)", fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                background: packCat === cat.id ? 'var(--teal)' : 'var(--bg2)',
                color: packCat === cat.id ? '#fff' : 'var(--muted)',
                border: packCat === cat.id ? 'none' : '1px solid var(--border)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {filteredPacks.map((pack, i) => <PackCard key={pack.id} pack={pack} idx={i} />)}
        </div>

      </section>
    </div>
  );
}