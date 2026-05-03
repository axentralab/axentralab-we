import { Link, useLocation } from 'react-router-dom';

/**
 * Shared sidebar component.
 *
 * Props:
 *  - navItems: [{ icon, label, path, external? }]
 *  - user: { name, role? }
 *  - badge: optional string shown above user name (e.g. "ADMIN PANEL")
 *  - onLogout: function
 */
export default function Sidebar({ navItems, user, badge, onLogout }) {
  const location = useLocation();

  return (
    <aside style={{
      width: 220,
      background: 'var(--bg2)',
      borderRight: '1px solid var(--border)',
      padding: '28px 14px',
      flexShrink: 0,
      position: 'sticky',
      top: 64,
      height: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header: badge + user name OR avatar */}
      <div style={{ padding: '0 8px', marginBottom: 28 }}>
        {badge ? (
          <>
            <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: 'var(--teal)', letterSpacing: 2, marginBottom: 4, textTransform: 'uppercase', fontWeight: 700 }}>
              {badge}
            </div>
            <div style={{ fontFamily: "var(--font-h)", fontSize: 15, fontWeight: 800, color: 'var(--text)' }}>
              {user?.name}
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--teal)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "var(--font-h)", fontWeight: 900, fontSize: 16,
              color: '#fff', flexShrink: 0,
            }}>
              {user?.name?.[0]}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 14, color: 'var(--text)' }}>
                {user?.name?.split(' ')[0]}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>
                {user?.role || 'Client'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nav links */}
      <nav style={{ flex: 1 }}>
        {navItems.map(item => {
          const isHome = item.path === '/dashboard' || item.path === '/admin';
          const active = isHome
            ? location.pathname === item.path
            : location.pathname.startsWith(item.path) && item.path !== '/';

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 8, marginBottom: 4,
                background: active ? 'rgba(37,99,235,0.08)' : 'transparent',
                color: active ? '#2563eb' : 'var(--muted)',
                fontSize: 14, fontWeight: active ? 700 : 500,
                textDecoration: 'none', transition: 'all 0.15s',
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={onLogout}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 12px', borderRadius: 8, width: '100%',
          background: 'none', border: 'none',
          color: 'var(--muted)', fontSize: 14, fontWeight: 500,
          textAlign: 'left', marginTop: 8, cursor: 'pointer',
          transition: 'all 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#EF4444'; e.currentTarget.style.background = 'rgba(239,68,68,0.05)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'none'; }}
      >
        🚪 Logout
      </button>
    </aside>
  );
}