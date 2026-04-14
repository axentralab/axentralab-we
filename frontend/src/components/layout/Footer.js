import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 5% 0', background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(13,27,42,0.8) 100%)', color: 'rgba(255,255,255,0.8)' }}>
      {/* Main Footer Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top Section - Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 50, marginBottom: 50 }}>
          
          {/* Left - Logo & Company Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img 
                src="https://res.cloudinary.com/dwrlbuej9/image/upload/v1775726329/Screenshot_2026-04-09_151038-removebg-preview_tsvt42.png"
                alt="Axentralab Logo"
                style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'contain' }}
              />
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 18, color: '#fff' }}>Axentralab</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
              🚀 AI automation, secure development and cloud infrastructure for modern companies.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: "'Sora',sans-serif" }}>📍 Address</h4>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
              <div>Dhaka, Bangladesh</div>
              <div>(Tech Hub, Business District)</div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
              <div>📞 Helpline: +880 1322695162</div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              <div>📧 Email: contact@axentralab.com</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: "'Sora',sans-serif" }}>⚡ Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/about" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>👉 About Us</Link>
              <Link to="/contact" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>👉 Contact</Link>
              <Link to="/ceo-meeting" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>👉 Book a Meeting</Link>
              <a href="#faq" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>👉 FAQ</a>
              <Link to="/portfolio" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>👉 Portfolio</Link>
              <button onClick={() => window.location.href = '#pricing'} style={{ fontSize: 13, color: '#4285F4', textDecoration: 'none', transition: 'color 0.2s', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: 6, cursor: 'pointer', fontWeight: 600, marginTop: 4 }} onMouseEnter={e => e.target.style.opacity = '0.9'} onMouseLeave={e => e.target.style.opacity = '1'}>💳 Get Quote</button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: "'Sora',sans-serif" }}>🛠️ Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>✓ Web Development</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>✓ Cybersecurity</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>✓ AI & Automation</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>✓ Cloud Infrastructure</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>✓ DevOps Solutions</Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: "'Sora',sans-serif" }}>📋 Important Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#terms" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Terms & Condition</a>
              <a href="#return" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Return Policy</a>
              <a href="#support" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Support Policy</a>
              <a href="#privacy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Privacy Policy</a>
              <a href="#security" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Security</a>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: "'Sora',sans-serif" }}>🤝 Connect</h4>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; e.target.style.boxShadow = '0 0 15px rgba(24,119,242,0.5)'; }} onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>f</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, background: '#0A66C2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; e.target.style.boxShadow = '0 0 15px rgba(10,102,194,0.5)'; }} onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>in</a>
              <a href="https://wa.me/8801322695162" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; e.target.style.boxShadow = '0 0 15px rgba(37,211,102,0.5)'; }} onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>w</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, background: '#FF0000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; e.target.style.boxShadow = '0 0 15px rgba(255,0,0,0.5)'; }} onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>▶</a>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <img src="https://img.shields.io/badge/DMCA_Protected-blue?style=flat" alt="DMCA Protected" style={{ height: 20 }} />
              <img src="https://img.shields.io/badge/SSL_Secure-green?style=flat" alt="SSL Secure" style={{ height: 20 }} />
            </div>
          </div>
        </div>

        {/* Middle Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '40px 0 30px', paddingTop: 30 }}></div>

        {/* Bottom Section - Copyright & Payment Methods */}
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
            © Since 2024 - 2026 Axentralab. All Rights Reserved | Advanced Technology License
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginRight: 10 }}>💳 Accepted Payments:</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>💳 bKash | 💳 Nagad | 💳 Stripe | 💳 Card | 🏦 Bank Transfer</span>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            🚀 Trusted by 200+ companies | 4400+ projects delivered | 98% client satisfaction
          </p>
        </div>
      </div>
    </footer>
  );
}
