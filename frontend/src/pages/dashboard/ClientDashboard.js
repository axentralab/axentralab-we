import { useAuth } from '../../context/AuthContext';
import SEOHelmet from '../../components/SEOHelmet';

export default function ClientDashboard() {
  const { user } = useAuth();

  return (
    <>
      <SEOHelmet title="Dashboard | Axentralab" description="Client Portal Overview" />
      
      <div style={{ animation: 'fadeUp 0.5s ease' }}>
        <h1 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: -0.5 }}>
          Welcome back, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, marginBottom: 32 }}>Here is what's happening with your projects today.</p>

        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 40 }}>
          <StatCard title="Active Projects" value="1" icon="🚀" color="#00d4aa" />
          <StatCard title="Pending Invoices" value="$0.00" icon="💳" color="#f59e0b" />
          <StatCard title="Open Support Tickets" value="0" icon="🎫" color="#ef4444" />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {/* Active Project Card */}
          <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 18, fontWeight: 700, color: '#fff' }}>Recent Projects</h2>
              <button style={{ background: 'none', border: 'none', color: '#00d4aa', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}>View All</button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(0, 212, 170, 0.1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0, 212, 170, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                🌐
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Web Application Setup</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Requested on {new Date().toLocaleDateString()}</p>
              </div>
              <span style={{ padding: '4px 12px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
    </>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, marginBottom: 4 }}>{title}</div>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 24, fontWeight: 800, color: '#fff' }}>{value}</div>
      </div>
    </div>
  );
}
