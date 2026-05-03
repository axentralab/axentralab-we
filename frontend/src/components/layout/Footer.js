import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '60px 5% 0', background: 'var(--bg2)', color: 'var(--text)' }}>
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
              <span style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 20, color: 'var(--text)' }}>Axentra<span style={{ color: 'var(--teal)' }}>Lab</span></span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 12 }}>
              Enterprise-grade web development, cloud infrastructure and automation for modern corporate teams.
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 16, fontFamily: "var(--font-h)" }}>📍 Contact</h4>
            <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 12 }}>
              <div>Dhaka, Bangladesh</div>
              <div>(Tech Hub, Business District)</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 6 }}>
              <div>📞 +880 1322695162</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)' }}>
              <div>📧 contact@axentralab.com</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 16, fontFamily: "var(--font-h)" }}>⚡ Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/about" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
              <Link to="/contact" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link>
              <Link to="/portfolio" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Portfolio</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 16, fontFamily: "var(--font-h)" }}>🛠️ Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/services" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Web Development</Link>
              <Link to="/services" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Cloud Infrastructure</Link>
              <Link to="/services" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>AI & Automation</Link>
            </div>
          </div>

        </div>

        {/* Middle Divider */}
        <div style={{ borderTop: '1px solid var(--border)', margin: '40px 0 30px', paddingTop: 30 }}></div>

        {/* Bottom Section - Copyright & Payment Methods */}
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>
            © {new Date().getFullYear()} AxentraLab. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
