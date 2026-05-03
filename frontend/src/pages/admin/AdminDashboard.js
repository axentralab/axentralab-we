import { useAuth } from '../../context/AuthContext';
import SEOHelmet from '../../components/SEOHelmet';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <>
      <SEOHelmet title="Admin Dashboard | Axentralab" description="Admin Console Overview" />
      
      <div style={{ animation: 'fadeUp 0.5s ease' }}>
        <h1 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: -0.5 }}>
          Admin Console
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, marginBottom: 32 }}>System Overview and Metrics.</p>

        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 40 }}>
          <StatCard title="Total Revenue" value="$12,450" delta="+15%" icon="💰" color="#a855f7" />
          <StatCard title="Active Clients" value="48" delta="+4" icon="👥" color="#3b82f6" />
          <StatCard title="Open Projects" value="12" delta="-1" icon="🚀" color="#00d4aa" />
          <StatCard title="Downtime Blocked" value="1,204" delta="+12%" icon="🛡️" color="#ef4444" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          {/* Main Chart Area (Placeholder) */}
          <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding: 24, minHeight: 300 }}>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Revenue Overview</h2>
            <div style={{ height: 200, display: 'flex', alignItems: 'flex-end', gap: 10, paddingBottom: 20, borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <div key={i} style={{ flex: 1, background: 'linear-gradient(180deg, #a855f7, rgba(168,85,247,0.2))', height: `${h}%`, borderRadius: '4px 4px 0 0' }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding: 24 }}>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Recent Signups</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[1, 2, 3].map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(168,85,247,0.1)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    N
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>New Client {i+1}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>client{i+1}@example.com</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
    </>
  );
}

function StatCard({ title, value, delta, icon, color }) {
  const isPositive = delta.startsWith('+');
  return (
    <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
          {icon}
        </div>
        <span style={{ padding: '4px 8px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: isPositive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: isPositive ? '#10b981' : '#ef4444' }}>
          {delta}
        </span>
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, marginBottom: 4 }}>{title}</div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff' }}>{value}</div>
    </div>
  );
}
