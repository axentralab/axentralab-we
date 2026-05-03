import { useState, useEffect, memo } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import api, { apiErrorMessage } from '../services/api';
import Sidebar from '../components/Sidebar';
import AdminGuard from '../components/AdminGuard';
import Skeleton, { SkeletonList } from '../components/Skeleton';
import { STATUS_COLORS } from '../constants/statusColors';
import {
  ORDER_STATUS_OPTIONS,
  LEAD_STATUS_OPTIONS,
} from '../constants/orderStatus';

function exportCSV(rows, filename) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const escape = val => {
    const str = String(val ?? '');
    return str.includes(',') || str.includes('"') || str.includes('\\n')
      ? `"${str.replace(/"/g, '""')}"`
      : str;
  };
  const csv = [
    headers.join(','),
    ...rows.map(r => headers.map(h => escape(r[h])).join(','))
  ].join('\\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

const OverviewTab = memo(function OverviewTab({ stats, leads, loading }) {
  if (loading) return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 36 }}>
        <Skeleton variant="stat" /><Skeleton variant="stat" /><Skeleton variant="stat" /><Skeleton variant="stat" />
      </div>
    </div>
  );
  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-h)", fontSize: 26, fontWeight: 900, color: 'var(--text)', marginBottom: 28 }}>Admin Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 36 }}>
        {[
          { icon: '👥', label: 'Total Users',   value: stats.totalUsers,   color: '#2563eb' },
          { icon: '📦', label: 'Total Orders',  value: stats.totalOrders,  color: '#8B5CF6' },
          { icon: '💰', label: 'Total Revenue', value: `$${(stats.totalRevenue || 0).toLocaleString()}`, color: '#F59E0B' },
          { icon: '📬', label: 'Leads',         value: leads.length,       color: '#8B5CF6' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: 22 }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{s.icon}</div>
            <div style={{ fontFamily: "var(--font-h)", fontSize: 26, fontWeight: 900, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <h3 style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 14 }}>Recent Leads</h3>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {leads.slice(0, 5).map((lead, i) => (
          <div key={lead._id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 100px 100px', gap: 12, padding: '14px 20px', borderBottom: i < 4 ? '1px solid var(--border)' : 'none', alignItems: 'center' }}>
            <div><div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{lead.name}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{lead.email}</div></div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>{lead.service || '—'}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{lead.budget || '—'}</div>
            <span className="badge" style={{ background: `${STATUS_COLORS[lead.status]}15`, color: STATUS_COLORS[lead.status] }}>
              {lead.status?.toUpperCase()}
            </span>
          </div>
        ))}
        {leads.length === 0 && <div style={{ padding: '24px 20px', textAlign: 'center', color: 'var(--muted)', fontSize: 14 }}>No leads yet</div>}
      </div>
    </div>
  );
});

const LeadsTab = memo(function LeadsTab() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const controller = new AbortController();
    api.get('/leads', { signal: controller.signal })
      .then(r => setLeads(r.data.data))
      .catch(err => { if (err.name !== 'CanceledError' && err.name !== 'AbortError') {} })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  if (loading) return <div className="card" style={{ padding: 0, overflow: 'hidden' }}><SkeletonList count={5} variant="order-row" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h1 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 900, color: 'var(--text)' }}>Leads ({leads.length})</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Hot (80+)', color: '#EF4444', count: leads.filter(l => (l.leadScore?.score || 0) >= 80).length },
          { label: 'Warm (60+)', color: '#F59E0B', count: leads.filter(l => { const s = l.leadScore?.score || 0; return s >= 60 && s < 80; }).length },
          { label: 'Cool (40+)', color: '#2563eb', count: leads.filter(l => { const s = l.leadScore?.score || 0; return s >= 40 && s < 60; }).length },
          { label: 'Cold (<40)', color: '#8B5CF6', count: leads.filter(l => (l.leadScore?.score || 0) < 40).length },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '14px 16px', border: `1px solid ${s.color}30` }}>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: s.color, marginTop: 6 }}>{s.count}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 80px 1fr 100px 100px 120px', gap: 12, padding: '14px 24px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', fontSize: 12, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase' }}>
          <div>Contact</div><div>Score</div><div>Service</div><div>Budget</div><div>Status</div><div>Actions</div>
        </div>
        {leads.map((lead, i) => {
          const score = lead.leadScore?.score || 0;
          const scoreColor = score >= 80 ? '#EF4444' : score >= 60 ? '#F59E0B' : score >= 40 ? '#2563eb' : '#8B5CF6';
          return (
            <div key={lead._id} style={{ padding: '16px 24px', borderBottom: i < leads.length - 1 ? '1px solid var(--border)' : 'none', display: 'grid', gridTemplateColumns: '1.5fr 80px 1fr 100px 100px 120px', gap: 12, alignItems: 'center' }}>
              <div><div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{lead.name}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{lead.email}</div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ fontFamily: "var(--font-h)", fontWeight: 800, color: scoreColor, fontSize: 16 }}>{Math.round(score)}</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text)' }}>{lead.service || '—'}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{lead.budget || '—'}</div>

              <select value={lead.status} onChange={async e => {
                const newStatus = e.target.value;
                try {
                  await api.put(`/leads/${lead._id}`, { status: newStatus });
                  setLeads(leads.map(l => l._id === lead._id ? { ...l, status: newStatus } : l));
                  toast.success(`Lead status updated to ${newStatus}`);
                } catch (err) {
                  toast.error(apiErrorMessage(err, 'Failed to update lead status'));
                }
              }} style={{ padding: '6px 8px', borderRadius: 6, background: `${STATUS_COLORS[lead.status]}15`, border: `1px solid ${STATUS_COLORS[lead.status]}30`, color: STATUS_COLORS[lead.status], fontSize: 11, fontWeight: 700, outline: 'none', cursor: 'pointer' }}>
                {LEAD_STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
              </select>

              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={async () => {
                  try {
                    await api.post(`/leads/${lead._id}/proposal`);
                    toast.success(`Proposal sent to ${lead.name}`);
                  } catch (e) {
                    toast.error(apiErrorMessage(e, 'Failed to send proposal'));
                  }
                }} className="btn-outline" style={{ padding: '4px 10px', fontSize: 11, color: '#8B5CF6', borderColor: '#8B5CF6' }}>Propose</button>

                <button onClick={async () => {
                  try {
                    await api.post(`/leads/${lead._id}/followup`);
                    toast.success(`Follow-up sent to ${lead.name}`);
                  } catch (e) {
                    toast.error(apiErrorMessage(e, 'Failed to send follow-up'));
                  }
                }} className="btn-outline" style={{ padding: '4px 10px', fontSize: 11, color: '#2563eb', borderColor: '#2563eb' }}>Follow-up</button>
              </div>
            </div>
          );
        })}
        {leads.length === 0 && <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--muted)' }}>No leads yet</div>}
      </div>
    </div>
  );
});

const OrdersTab = memo(function OrdersTab() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const controller = new AbortController();
    api.get('/orders', { signal: controller.signal })
      .then(r => setOrders(r.data.data))
      .catch(err => { if (err.name !== 'CanceledError' && err.name !== 'AbortError') {} })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const handleExportCSV = () => {
    const rows = orders.map(o => ({
      OrderNumber: o.orderNumber,
      Customer: o.user?.name || '',
      Email: o.user?.email || '',
      Items: o.items?.map(i => i.serviceTitle).join('; ') || '',
      Total: o.total,
      Status: o.status,
      Date: new Date(o.createdAt).toLocaleDateString(),
    }));
    exportCSV(rows, `orders-${new Date().toISOString().slice(0, 10)}.csv`);
    toast.success('CSV downloaded!');
  };

  if (loading) return <div className="card" style={{ padding: 0, overflow: 'hidden' }}><SkeletonList count={5} variant="order-row" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h1 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 900, color: 'var(--text)' }}>All Orders ({orders.length})</h1>
        {orders.length > 0 && (
          <button onClick={handleExportCSV} className="btn-outline" style={{ padding: '8px 18px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            ↓ Export CSV
          </button>
        )}
      </div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {orders.map((order, i) => (
          <div key={order._id} style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '120px 1fr 1fr 100px 140px', gap: 12, alignItems: 'center' }}>
            <span style={{ fontFamily: "var(--font-m)", fontSize: 12, color: '#8B5CF6', fontWeight: 700 }}>{order.orderNumber}</span>
            <div><div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{order.user?.name}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{order.user?.email}</div></div>
            <div style={{ fontSize: 13, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.items?.map(i => i.serviceTitle).join(', ')}</div>
            <div style={{ fontFamily: "var(--font-h)", fontWeight: 800, color: 'var(--text)', fontSize: 15 }}>${order.total?.toLocaleString()}</div>

            <select value={order.status} onChange={async e => {
              const newStatus = e.target.value;
              try {
                await api.put(`/orders/${order._id}/status`, { status: newStatus });
                setOrders(orders.map(o => o._id === order._id ? { ...o, status: newStatus } : o));
                toast.success('Order status updated');
              } catch (err) {
                toast.error(apiErrorMessage(err, 'Failed to update order status'));
              }
            }} style={{ padding: '6px 8px', borderRadius: 8, background: `${STATUS_COLORS[order.status]}15`, border: `1px solid ${STATUS_COLORS[order.status]}30`, color: STATUS_COLORS[order.status], fontSize: 11, fontWeight: 700, outline: 'none', cursor: 'pointer' }}>
              {ORDER_STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
            </select>
          </div>
        ))}
        {orders.length === 0 && <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--muted)' }}>No orders yet</div>}
      </div>
    </div>
  );
});

const UsersTab = memo(function UsersTab() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const controller = new AbortController();
    api.get('/users', { signal: controller.signal })
      .then(r => setUsers(r.data.data))
      .catch(err => { if (err.name !== 'CanceledError' && err.name !== 'AbortError') {} })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  if (loading) return <div className="card" style={{ padding: 0, overflow: 'hidden' }}><SkeletonList count={6} variant="order-row" /></div>;

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 900, color: 'var(--text)', marginBottom: 24 }}>All Users ({users.length})</h1>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {users.map(u => (
          <div key={u._id} style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--font-h)", fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>{u.name?.[0]}</div>
              <div><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{u.name}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{u.email}</div></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="badge" style={{ background: u.role === 'admin' ? 'rgba(239,68,68,0.1)' : 'rgba(37,99,235,0.1)', color: u.role === 'admin' ? '#EF4444' : '#2563eb' }}>{u.role.toUpperCase()}</span>
              <span className="badge" style={{ background: u.isActive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: u.isActive ? '#10b981' : '#EF4444' }}>{u.isActive ? 'ACTIVE' : 'SUSPENDED'}</span>

              <button onClick={async () => {
                try {
                  await api.put(`/users/${u._id}/toggle`);
                  setUsers(users.map(us => us._id === u._id ? { ...us, isActive: !us.isActive } : us));
                  toast.info(`${u.name} ${u.isActive ? 'suspended' : 'activated'}`);
                } catch (err) {
                  toast.error(apiErrorMessage(err, 'Failed to update user status'));
                }
              }} className="btn-outline" style={{ padding: '6px 12px', fontSize: 12 }}>
                {u.isActive ? 'Suspend' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats]   = useState({ totalUsers: 0, totalOrders: 0, totalRevenue: 0 });
  const [recentLeads, setRecentLeads] = useState([]);
  const [overviewLoading, setOverviewLoading] = useState(true);

  const isLeads  = useMatch('/admin/leads');
  const isOrders = useMatch('/admin/orders');
  const isUsers  = useMatch('/admin/users');
  const tab = isLeads ? 'leads' : isOrders ? 'orders' : isUsers ? 'users' : 'overview';

  useEffect(() => {
    if (tab !== 'overview') return;
    const controller = new AbortController();
    setOverviewLoading(true);
    Promise.all([
      api.get('/users/stats', { signal: controller.signal }),
      api.get('/leads',       { signal: controller.signal }),
    ])
      .then(([statsRes, leadsRes]) => {
        setStats(statsRes.data.data);
        setRecentLeads(leadsRes.data.data);
      })
      .catch(err => { if (err.name !== 'CanceledError' && err.name !== 'AbortError') {} })
      .finally(() => setOverviewLoading(false));
    return () => controller.abort();
  }, [tab]);

  const navItems = [
    { icon: '📊', label: 'Overview', path: '/admin' },
    { icon: '📬', label: 'Leads',    path: '/admin/leads' },
    { icon: '📦', label: 'Orders',   path: '/admin/orders' },
    { icon: '👥', label: 'Users',    path: '/admin/users' },
    { icon: '🌐', label: 'Website',  path: '/' },
  ];

  return (
    <AdminGuard>
      <div style={{ display: 'flex', minHeight: '100vh', paddingTop: 64, background: 'var(--bg)' }}>
        <Sidebar navItems={navItems} user={user} badge="ADMIN PANEL" onLogout={() => { logout(); navigate('/'); }} />
        <main style={{ flex: 1, padding: '36px 40px', overflow: 'auto' }}>
          {tab === 'overview' && <OverviewTab stats={stats} leads={recentLeads} loading={overviewLoading} />}
          {tab === 'leads'    && <LeadsTab />}
          {tab === 'orders'   && <OrdersTab />}
          {tab === 'users'    && <UsersTab />}
        </main>
      </div>
    </AdminGuard>
  );
}