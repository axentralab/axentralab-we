import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import referralService from '../services/referral.service';
import SEOHelmet from '../components/SEOHelmet';

export default function ReferralPage() {
  const { user } = useAuth();
  const [referralData, setReferralData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [inviting, setInviting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [refData, leaderboardData] = await Promise.all([
        referralService.getMyReferrals(),
        referralService.getLeaderboard(),
      ]);
      if (refData.success) setReferralData(refData);
      if (leaderboardData.success) setLeaderboard(leaderboardData.leaderboard);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Failed to load referral data');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    if (!newEmail) {
      setMessage('Please enter an email address');
      return;
    }

    setInviting(true);
    try {
      const response = await referralService.createReferral(newEmail);
      if (response.success) {
        setMessage('Referral invitation sent successfully!');
        setNewEmail('');
        setTimeout(() => {
          fetchData();
          setMessage('');
        }, 2000);
      } else {
        setMessage(response.message || 'Error sending invitation');
      }
    } catch (error) {
      setMessage(error.message || 'Error sending invitation');
    } finally {
      setInviting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 18, color: '#666' }}>Loading referral data...</div>
      </div>
    );
  }

  const stats = referralData?.statistics || {};
  const referrals = referralData?.referrals || [];
  const referralLink = referralData?.referralLink || '';
  const tierColors = {
    bronze: '#CD7F32',
    silver: '#C0C0C0',
    gold: '#FFD700',
    platinum: '#E5E4E2',
  };

  return (
    <>
      <SEOHelmet page="referral" />
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .hero-section { animation: fadeInUp 0.8s ease-out; }
        .stat-card { animation: fadeInUp 0.8s ease-out both; }
        .content-card { animation: slideInRight 0.6s ease-out; }
      `}</style>

      {/* ─── HERO SECTION ─────────────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 20% 50%, var(--border) 0%, transparent 50%)' }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
          <div style={{ fontSize: 60, marginBottom: 20, animation: 'bounce 2s infinite' }}>🎯</div>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: 900, color: 'var(--text)', margin: 0, marginBottom: 16, letterSpacing: -1 }}>
            Referral Program
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text)', margin: 0, marginBottom: 8 }}>
            Earn Unlimited Commissions While Growing Your Network
          </p>
          <p style={{ fontSize: 14, color: 'var(--text)', margin: 0 }}>
            {stats.referralTier === 'platinum' ? '20%' : stats.referralTier === 'gold' ? '20%' : stats.referralTier === 'silver' ? '17%' : '15%'} commission per referral + bonuses • Lifetime earnings • No limits
          </p>
        </div>
      </div>

      {/* ─── STATS SECTION ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '-60px auto 60px', position: 'relative', zIndex: 10, padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <StatCard title="Total Referrals" value={stats.totalReferrals || 0} icon="👥" delay="0s" />
          <StatCard title="Active Referrals" value={stats.activeReferrals || 0} icon="✅" delay="0.1s" />
          <StatCard title="Completed" value={stats.completedReferrals || 0} icon="🎉" delay="0.2s" />
          <StatCard title="Total Earnings" value={`$${(stats.totalCommission || 0).toFixed(2)}`} icon="💰" delay="0.3s" />
        </div>
      </div>

      {/* ─── TIER BADGE ───────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 60px', padding: '0 20px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          padding: '12px 28px',
          background: tierColors[stats.referralTier] || '#667eea',
          color: stats.referralTier === 'gold' ? '#333' : 'var(--text)',
          borderRadius: 50,
          fontWeight: 700,
          fontSize: 16,
          boxShadow: `0 4px 20px ${tierColors[stats.referralTier] || '#667eea'}40`,
        }}>
          {stats.referralTier?.charAt(0).toUpperCase() + stats.referralTier?.slice(1)} Partner 🏆
        </div>
      </div>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
          {/* Referral Link Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            borderRadius: 16,
            padding: 30,
            animation: 'slideInRight 0.6s ease-out'
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 20, color: 'var(--text)' }}>
              🔗 Your Referral Link
            </h2>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <input
                type="text"
                value={referralLink}
                readOnly
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  color: 'var(--text)',
                  fontSize: 14,
                  fontFamily: 'monospace',
                  fontWeight: 500,
                }}
              />
              <button
                onClick={() => copyToClipboard(referralLink)}
                style={{
                  padding: '12px 24px',
                  background: copied ? '#10b981' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>Share this link with friends and earn commission on their purchases</p>
          </div>

          {/* Invite Friends Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: 16,
            padding: 30,
            animation: 'slideInRight 0.7s ease-out'
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 20, color: 'var(--text)' }}>
              ✉️ Invite Friends
            </h2>
            <form onSubmit={handleInvite} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email"
                placeholder="Enter friend's email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                style={{
                  padding: '12px 16px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  color: 'var(--text)',
                  fontSize: 14,
                }}
              />
              <button
                type="submit"
                disabled={inviting}
                style={{
                  padding: '12px 24px',
                  background: inviting ? 'var(--border)' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  cursor: inviting ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                }}
              >
                {inviting ? '⏳ Sending...' : '📤 Send Invite'}
              </button>
            </form>
            {message && (
              <div style={{ marginTop: 12, padding: 12, background: message.includes('Error') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', border: `1px solid ${message.includes('Error') ? '#ef4444' : '#10b981'}`, borderRadius: 4, color: 'var(--text)', fontSize: 12 }}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── YOUR REFERRALS TABLE ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: 'var(--text)', marginBottom: 30, marginTop: 0 }}>
          📊 Your Referrals
        </h2>
        
        {referrals.length === 0 ? (
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            border: '1px dashed rgba(102, 126, 234, 0.2)',
            borderRadius: 16,
            padding: 60,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
            <p style={{ fontSize: 18, color: 'var(--muted)', margin: 0 }}>No referrals yet. Start inviting friends to earn commissions!</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '16px', color: 'var(--muted)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase' }}>Friend Name</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: 'var(--muted)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase' }}>Status</th>
                  <th style={{ textAlign: 'right', padding: '16px', color: 'var(--muted)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase' }}>Order Value</th>
                  <th style={{ textAlign: 'right', padding: '16px', color: 'var(--muted)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase' }}>Commission</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: 'var(--muted)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((ref, i) => {
                  const statusColors = {
                    completed: { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981' },
                    active: { bg: 'rgba(102, 126, 234, 0.1)', text: '#667eea' },
                    pending: { bg: 'rgba(245, 158, 11, 0.1)', text: '#f59e0b' },
                  };
                  const sc = statusColors[ref.status] || statusColors.pending;
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid var(--bg2)' }}>
                      <td style={{ padding: '16px', color: 'var(--text)' }}>{ref.referee?.name || 'Unknown'}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ display: 'inline-block', padding: '4px 12px', background: sc.bg, color: sc.text, borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                          {ref.status?.charAt(0).toUpperCase() + ref.status?.slice(1)}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', padding: '16px', color: 'var(--text)' }}>${(ref.referralOrderAmount || 0).toFixed(2)}</td>
                      <td style={{ textAlign: 'right', padding: '16px', color: '#10b981', fontWeight: 600 }}>${(ref.commissionEarned || 0).toFixed(2)}</td>
                      <td style={{ padding: '16px', color: 'var(--muted)', fontSize: 14 }}>{new Date(ref.createdAt).toLocaleDateString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── LEADERBOARD SECTION ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: 'var(--text)', marginBottom: 30, marginTop: 0 }}>
          🏆 Top Earners
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {leaderboard.slice(0, 6).map((person, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: 12,
                padding: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 60, opacity: 0.1 }}>{idx + 1 === 1 ? '🥇' : idx + 1 === 2 ? '🥈' : '🥉'}</div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ fontSize: 24 }}>{idx + 1 === 1 ? '🥇' : idx + 1 === 2 ? '🥈' : '🥉'}</div>
                  <div>
                    <div style={{ color: 'var(--text)', fontWeight: 700 }}>{person.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 12 }}>{person.company || 'Partner'}</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ color: 'var(--muted)', fontSize: 12 }}>Completed Referrals</div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#667eea' }}>{person.completedReferrals}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--muted)', fontSize: 12 }}>Total Earnings</div>
                    <div style={{ fontSize: 18, fontWeight: 900, color: '#10b981' }}>${(person.totalCommission || 0).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── HOW IT WORKS SECTION ────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 80px', padding: '60px 20px', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)', borderRadius: 20 }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: 'var(--text)', marginBottom: 40, marginTop: 0, textAlign: 'center' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 30 }}>
          {[
            { num: '1', title: 'Get Your Link', desc: 'Receive a unique referral code and shareable link' },
            { num: '2', title: 'Share with Friends', desc: 'Send to friends via email or social media' },
            { num: '3', title: 'They Sign Up', desc: 'Friends register using your referral link' },
            { num: '4', title: 'They Purchase', desc: 'When they make a purchase, you earn commission' },
            { num: '5', title: 'Get Paid', desc: 'Commissions paid monthly to your account' },
            { num: '6', title: 'Unlock Tiers', desc: 'Earn higher commissions at higher tiers' },
          ].map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: 60,
                height: 60,
                background: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                fontWeight: 900,
                color: 'var(--text)',
                margin: '0 auto 16px',
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, margin: '0 0 8px' }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function StatCard({ title, value, icon, delay }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
        border: '1px solid rgba(102, 126, 234, 0.3)',
        borderRadius: 16,
        padding: 28,
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        animation: `fadeInUp 0.8s ease-out ${delay} both`,
        transition: 'transform 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 32, fontWeight: 900, color: '#667eea', marginBottom: 8, letterSpacing: -1 }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>{title}</div>
    </div>
  );
}
