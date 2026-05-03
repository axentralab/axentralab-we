import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEOHelmet from '../../components/SEOHelmet';
import { useToast } from '../../context/ToastContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please fill in all fields');
    
    const res = await login(email, password);
    if (res.success) {
      toast.success('Welcome back!');
      navigate(res.user.role === 'admin' ? '/admin' : from, { replace: true });
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <SEOHelmet title="Login | Axentralab" description="Access your client portal." />
      
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        position: 'relative',
        padding: '40px 20px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 420,
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: '48px 40px',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: "var(--font-h)", fontWeight: 900, fontSize: 28, color: 'var(--text)', letterSpacing: -1 }}>
                Axentra<span style={{ color: 'var(--teal)' }}>lab</span>
              </span>
            </Link>
            <p style={{ color: 'var(--muted)', marginTop: 8, fontSize: 15 }}>Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', color: 'var(--text)', fontSize: 13, marginBottom: 8, fontWeight: 600 }}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
            
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text)', fontSize: 13, marginBottom: 8, fontWeight: 600 }}>
                <span>Password</span>
                <Link to="/forgot-password" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Forgot?</Link>
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{
                marginTop: 10,
                width: '100%',
                padding: '14px',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--muted)' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 600 }}>Create one</Link>
          </p>
        </div>
      </div>
    </>
  );
}
