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
    { to: '/',              label: 'Home' },
    { to: '/services',      label: 'Services' },
    { to: '/hosting',       label: 'Hosting' },
    { to: '/maintenance',   label: 'Care Plans' },
    { to: '/pricing',       label: 'Pricing' },
    { to: '/portfolio',     label: 'Portfolio' },
    { to: '/case-studies',  label: 'Case Studies' },
    { to: '/support',       label: 'Support' },
    { to: '/contact',       label: 'Contact' },
  ];

  const active = (path) =>
    location.pathname === path ? '#00d4aa' : 'rgba(255,255,255,0.65)';

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
        background: scrolled || menuOpen ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 170, 0.2)' : 'none',
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
        <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: -0.5 }}>
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
              background: l.highlight ? 'rgba(0, 212, 170, 0.15)' : 'transparent',
              border: l.highlight ? '1px solid rgba(0, 212, 170, 0.3)' : 'none',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
              onMouseEnter={e => {
                e.target.style.color = '#fff';
                if (l.highlight) e.target.style.background = 'rgba(0, 212, 170, 0.25)';
              }}
              onMouseLeave={e => {
                e.target.style.color = l.highlight ? '#fff' : active(l.to);
                if (l.highlight) e.target.style.background = 'rgba(0, 212, 170, 0.15)';
              }}>
              {l.label}
            </Link>
          ))}

          {/* WhatsApp & Login */}
          <Link 
            to="/login"
            style={{ 
              marginLeft: 16,
              padding: '8px 16px', 
              borderRadius: 8, 
              background: '#00d4aa', 
              border: 'none', 
              color: '#000', 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              transition: 'all 0.3s', 
              fontWeight: 700, 
              fontSize: 13,
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#00c99d'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#00d4aa'; }}>
            Client Login
          </Link>
          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" style={{ marginLeft: 8, padding: '8px 14px', borderRadius: 8, background: 'rgba(0, 212, 170, 0.15)', border: '1px solid rgba(0, 212, 170, 0.3)', color: '#00d4aa', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', transition: 'all 0.3s', fontWeight: 600, fontSize: 13 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0, 212, 170, 0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0, 212, 170, 0.15)'; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.07.338-2.918.954l-.209.127-2.16-.56.569 2.08-.134.213a4.889 4.889 0 00-.747 2.491c0 2.7 2.201 4.9 4.9 4.9 1.308 0 2.53-.527 3.45-1.447a4.903 4.903 0 001.452-3.45c0-2.7-2.201-4.9-4.9-4.9m0-9.381C6.464 2.598 2.598 6.464 2.598 11.051S6.464 19.504 11.051 19.504c1.327 0 2.79-.294 4.051-.804l4.15 1.025-1.053-3.855c.571-1.285.889-2.714.889-4.092 0-4.587-3.866-8.453-8.453-8.453"/>
            </svg>
            WhatsApp
          </button>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mobile-nav">
          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" style={{ fontSize: 18, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', display: 'flex', alignItems: 'center', color: '#00d4aa' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.07.338-2.918.954l-.209.127-2.16-.56.569 2.08-.134.213a4.889 4.889 0 00-.747 2.491c0 2.7 2.201 4.9 4.9 4.9 1.308 0 2.53-.527 3.45-1.447a4.903 4.903 0 001.452-3.45c0-2.7-2.201-4.9-4.9-4.9m0-9.381C6.464 2.598 2.598 6.464 2.598 11.051S6.464 19.504 11.051 19.504c1.327 0 2.79-.294 4.051-.804l4.15 1.025-1.053-3.855c.571-1.285.889-2.714.889-4.092 0-4.587-3.866-8.453-8.453-8.453"/>
            </svg>
          </button>

          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid rgba(0, 212, 170, 0.3)', borderRadius: 8, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer' }}>
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
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '24px 6%',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{ padding: '14px 20px', borderRadius: 12, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 17, color: location.pathname === l.to ? '#00d4aa' : 'rgba(255,255,255,0.8)', border: '1px solid transparent', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}