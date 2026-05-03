import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/contact.config';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const location  = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const handleWhatsAppContact = () => {
    const message = 'Hi! I\'m interested in learning more about your services. Could you help me?';
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const NAVBAR_H = 70;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { 
    setMenuOpen(false); 
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { 
      label: 'Services', 
      dropdown: [
        { to: '/services', label: 'All Services' },
        { to: '/hosting', label: 'Managed Hosting' },
        { to: '/maintenance', label: 'Care Plans' },
        { to: '/pricing', label: 'Pricing' }
      ]
    },
    { to: '/portfolio',     label: 'Portfolio' },
    { to: '/case-studies',  label: 'Case Studies' },
    { to: '/support',       label: 'Support' },
    { to: '/contact',       label: 'Contact' },
  ];

  const active = (path) =>
    location.pathname === path ? 'var(--teal)' : 'var(--muted)';

  const isDropdownActive = (dropdown) => {
    return dropdown.some(d => location.pathname === d.to) ? 'var(--teal)' : 'var(--muted)';
  };

  return (
    <>
      <style>{`
        @media (min-width: 900px) { .mobile-nav  { display: none !important; } }
        @media (max-width: 899px) { .desktop-nav { display: none !important; } }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 8px 0;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
        }
        .nav-item:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 10px 20px;
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .dropdown-item:hover {
          background: rgba(37, 99, 235, 0.05);
          color: var(--teal);
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: NAVBAR_H, padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img 
            src="https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png"
            alt="AxentraLab Logo"
            style={{ 
              height: '36px', 
              width: 'auto',
              objectFit: 'contain'
            }}
          />      
          <span style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 20, color: 'var(--text)', letterSpacing: -0.5 }}>
            Axentra<span style={{ color: 'var(--teal)' }}>Lab</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((l, idx) => (
            <div key={idx} className="nav-item" style={{ position: 'relative' }}>
              {l.dropdown ? (
                <div style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  color: isDropdownActive(l.dropdown),
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = isDropdownActive(l.dropdown)}>
                  {l.label}
                  <span style={{ fontSize: 10, marginTop: 2 }}>▼</span>
                </div>
              ) : (
                <Link to={l.to} style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  color: active(l.to),
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = active(l.to)}>
                  {l.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {l.dropdown && (
                <div className="nav-dropdown">
                  {l.dropdown.map(d => (
                    <Link key={d.to} to={d.to} className="dropdown-item" style={{ color: active(d.to) }}>
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* User Auth & WhatsApp */}
          <div className="nav-item" style={{ position: 'relative', marginLeft: 16 }}>
            {isAuthenticated ? (
              <div style={{
                padding: '8px 16px', 
                borderRadius: 8, 
                background: 'rgba(37, 99, 235, 0.1)', 
                color: 'var(--teal)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 6,
                cursor: 'pointer', 
                transition: 'all 0.3s', 
                fontWeight: 600, 
                fontSize: 14,
              }}>
                My Account <span style={{ fontSize: 10 }}>▼</span>
                <div className="nav-dropdown" style={{ right: 0, left: 'auto', transform: 'translateY(10px)' }}>
                  <Link to={isAdmin ? '/admin' : '/dashboard'} className="dropdown-item">Dashboard</Link>
                  <button 
                    onClick={() => { logout(); navigate('/login'); }} 
                    className="dropdown-item" 
                    style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: 14 }}>
                Client Login
              </Link>
            )}
          </div>

          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" className="btn-outline" style={{ marginLeft: 8, padding: '8px 16px', gap: 6, fontSize: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.07.338-2.918.954l-.209.127-2.16-.56.569 2.08-.134.213a4.889 4.889 0 00-.747 2.491c0 2.7 2.201 4.9 4.9 4.9 1.308 0 2.53-.527 3.45-1.447a4.903 4.903 0 001.452-3.45c0-2.7-2.201-4.9-4.9-4.9m0-9.381C6.464 2.598 2.598 6.464 2.598 11.051S6.464 19.504 11.051 19.504c1.327 0 2.79-.294 4.051-.804l4.15 1.025-1.053-3.855c.571-1.285.889-2.714.889-4.092 0-4.587-3.866-8.453-8.453-8.453"/>
            </svg>
            WhatsApp
          </button>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mobile-nav">
          <button onClick={handleWhatsAppContact} title="Contact via WhatsApp" style={{ fontSize: 18, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', display: 'flex', alignItems: 'center', color: 'var(--teal)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.07.338-2.918.954l-.209.127-2.16-.56.569 2.08-.134.213a4.889 4.889 0 00-.747 2.491c0 2.7 2.201 4.9 4.9 4.9 1.308 0 2.53-.527 3.45-1.447a4.903 4.903 0 001.452-3.45c0-2.7-2.201-4.9-4.9-4.9m0-9.381C6.464 2.598 2.598 6.464 2.598 11.051S6.464 19.504 11.051 19.504c1.327 0 2.79-.294 4.051-.804l4.15 1.025-1.053-3.855c.571-1.285.889-2.714.889-4.092 0-4.587-3.866-8.453-8.453-8.453"/>
            </svg>
          </button>

          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 22, height: 2, background: 'var(--text)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? (i===0?'rotate(45deg) translate(5px,5px)':i===2?'rotate(-45deg) translate(5px,-5px)':'scaleX(0)') : 'none' }} />
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
          background: 'var(--bg2)',
          padding: '24px 6%',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {navLinks.map((l, idx) => (
            <div key={idx}>
              {l.dropdown ? (
                <>
                  <div style={{ padding: '14px 20px', fontFamily: "var(--font-h)", fontWeight: 700, fontSize: 17, color: 'var(--muted)' }}>
                    {l.label}
                  </div>
                  <div style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {l.dropdown.map(d => (
                      <Link key={d.to} to={d.to} onClick={() => setMenuOpen(false)} style={{ padding: '10px 20px', borderRadius: 12, fontFamily: "var(--font-h)", fontWeight: 500, fontSize: 15, color: location.pathname === d.to ? 'var(--teal)' : 'var(--text)', textDecoration: 'none', background: location.pathname === d.to ? 'rgba(37, 99, 235, 0.05)' : 'transparent' }}>
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={l.to} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 20px', borderRadius: 12, fontFamily: "var(--font-h)", fontWeight: 700, fontSize: 17, color: location.pathname === l.to ? 'var(--teal)' : 'var(--text)', textDecoration: 'none', background: location.pathname === l.to ? 'rgba(37, 99, 235, 0.05)' : 'transparent' }}>
                  {l.label}
                </Link>
              )}
            </div>
          ))}
          {/* Mobile Auth Button */}
          {isAuthenticated ? (
            <div style={{ marginTop: 20 }}>
              <Link to={isAdmin ? '/admin' : '/dashboard'} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 20px', borderRadius: 12, fontFamily: "var(--font-h)", fontWeight: 700, fontSize: 17, color: 'var(--teal)', background: 'rgba(37, 99, 235, 0.05)', textDecoration: 'none', textAlign: 'center' }}>
                Dashboard
              </Link>
              <button onClick={() => { logout(); navigate('/login'); setMenuOpen(false); }} style={{ width: '100%', textAlign: 'center', marginTop: 10, padding: '14px 20px', borderRadius: 12, fontFamily: "var(--font-h)", fontWeight: 700, fontSize: 17, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', border: 'none' }}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} style={{ marginTop: 20, display: 'block', padding: '14px 20px', borderRadius: 12, fontFamily: "var(--font-h)", fontWeight: 700, fontSize: 17, color: '#fff', background: 'var(--teal)', textDecoration: 'none', textAlign: 'center' }}>
              Client Login
            </Link>
          )}
        </div>
      )}
    </>
  );
}