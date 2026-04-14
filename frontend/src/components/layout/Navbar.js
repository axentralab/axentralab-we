import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/contact.config';

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const location  = useLocation();

  const handleWhatsAppContact = () => {
    const message = 'Hi! I\'m interested in learning more about your services. Could you help me?';
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const NAVBAR_H = 64;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About' },
    { to: '/services',  label: 'Services' },
    { to: '/products',  label: 'Products' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/team',      label: 'Team' },
    { to: '/contact',   label: 'Contact' },
  ];

  const active = (path) =>
    location.pathname === path ? '#8B5CF6' : 'rgba(255,255,255,0.65)';

  return (
    <>
      <style>{`
        @media (min-width: 900px) { .mobile-nav  { display: none !important; } }
        @media (max-width: 899px) { .desktop-nav { display: none !important; } }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: NAVBAR_H, padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(2,6,23,0.97)' : 'transparent',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.1)' : 'none',
        transition: 'all 0.3s',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img 
          src="https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png"
          alt="AxentraLab Logo"
          style={{ 
            height: '40px', 
            width: 'auto',
            objectFit: 'contain'
          }}
        />      
        <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: -0.5 }}>
          AxentraLab
        </span>
      </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '6px 14px',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              color: l.highlight ? '#fff' : active(l.to),
              background: l.highlight ? 'rgba(139,92,246,0.15)' : 'transparent',
              border: l.highlight ? '1px solid rgba(139,92,246,0.3)' : 'none',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
              onMouseEnter={e => {
                e.target.style.color = '#fff';
                if (l.highlight) e.target.style.background = 'rgba(139,92,246,0.25)';
              }}
              onMouseLeave={e => {
                e.target.style.color = l.highlight ? '#fff' : active(l.to);
                if (l.highlight) e.target.style.background = 'rgba(139,92,246,0.15)';
              }}>
              {l.label}
            </Link>
          ))}

          {/* WhatsApp */}
          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" style={{ marginLeft: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366', fontSize: 16, cursor: 'pointer', transition: 'all 0.2s', fontWeight: 600 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)'; }}>
            💬
          </button>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mobile-nav">
          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" style={{ fontSize: 18, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}>
            💬
          </button>
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 22, height: 2, background: 'rgba(255,255,255,0.7)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? (i===0?'rotate(45deg) translate(5px,5px)':i===2?'rotate(-45deg) translate(5px,-5px)':'scaleX(0)') : 'none' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: NAVBAR_H,
          left: 0, right: 0, bottom: 0,
          zIndex: 999,
          background: 'rgba(2,6,23,0.98)',
          backdropFilter: 'blur(20px)',
          padding: '24px 6%',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{ padding: '14px 20px', borderRadius: 12, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, color: location.pathname === l.to ? '#8B5CF6' : 'rgba(255,255,255,0.8)', border: '1px solid transparent', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}