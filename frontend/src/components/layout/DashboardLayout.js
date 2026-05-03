import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function DashboardLayout({ children }) {
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const clientLinks = [
    { label: 'Overview', path: '/dashboard', icon: '📊' },
    { label: 'My Projects', path: '/dashboard/projects', icon: '🚀' },
    { label: 'Invoices', path: '/dashboard/invoices', icon: '💳' },
    { label: 'Support Tickets', path: '/dashboard/support', icon: '🎫' },
    { label: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
  ];

  const adminLinks = [
    { label: 'Dashboard', path: '/admin', icon: '📈' },
    { label: 'Users & Clients', path: '/admin/users', icon: '👥' },
    { label: 'All Projects', path: '/admin/projects', icon: '🚀' },
    { label: 'Transactions', path: '/admin/transactions', icon: '💳' },
    { label: 'AI Settings', path: '/admin/ai', icon: '🤖' },
  ];

  const navLinks = isAdmin ? adminLinks : clientLinks;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a' }}>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40, backdropFilter: 'blur(4px)' }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: 260,
        background: 'rgba(30, 41, 59, 0.5)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: sidebarOpen ? 0 : -260,
        zIndex: 50,
        transition: 'left 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        '@media (minWidth: 1024px)': { left: 0 }
      }} className="dashboard-sidebar">
        <div style={{ padding: '24px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 24, color: '#fff', letterSpacing: -1 }}>
              Axentra<span style={{ color: isAdmin ? '#a855f7' : '#00d4aa' }}>lab</span>
            </span>
          </Link>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Mono',monospace", marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
            {isAdmin ? 'Admin Console' : 'Client Portal'}
          </div>
        </div>

        <nav style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                      borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s',
                      background: active ? (isAdmin ? 'rgba(168,85,247,0.1)' : 'rgba(0,212,170,0.1)') : 'transparent',
                      color: active ? (isAdmin ? '#a855f7' : '#00d4aa') : 'rgba(255,255,255,0.6)',
                      fontWeight: active ? 600 : 500,
                    }}
                  >
                    <span style={{ fontSize: 18, filter: active ? 'none' : 'grayscale(1)' }}>{link.icon}</span>
                    <span style={{ fontSize: 14 }}>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ padding: 20, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%', padding: '12px 16px', background: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444', border: 'none', borderRadius: 12, display: 'flex',
              alignItems: 'center', gap: 12, cursor: 'pointer', fontSize: 14, fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }} className="dashboard-main">
        {/* Topbar */}
        <header style={{
          height: 70, borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px', position: 'sticky', top: 0, zIndex: 30
        }}>
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', display: 'none' }}
          >
            ☰
          </button>
          
          <div className="topbar-spacer" />

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', width: 36, height: 36, borderRadius: '50%', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🔔
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 20, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>{user?.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{user?.email}</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: isAdmin ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'linear-gradient(135deg, #00d4aa, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '32px 24px', flex: 1, overflowY: 'auto' }}>
          {children}
        </main>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .dashboard-sidebar { left: 0 !important; }
          .dashboard-main { margin-left: 260px; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .mobile-menu-btn { display: block !important; }
          .topbar-spacer { flex: 1; }
        }
      `}</style>
    </div>
  );
}
