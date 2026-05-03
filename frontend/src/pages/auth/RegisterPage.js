import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEOHelmet from '../../components/SEOHelmet';
import { useToast } from '../../context/ToastContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return toast.error('Please fill in all fields');
    
    const res = await register(name, email, password);
    if (res.success) {
      toast.success('Account created! Welcome to Axentralab.');
      navigate('/dashboard');
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <SEOHelmet title="Register | Axentralab" description="Create a new client account." />
      
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
            <p style={{ color: 'var(--muted)', marginTop: 8, fontSize: 15 }}>Create your client account</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', color: 'var(--text)', fontSize: 13, marginBottom: 8, fontWeight: 600 }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="input"
                required
              />
            </div>

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
              <label style={{ display: 'block', color: 'var(--text)', fontSize: 13, marginBottom: 8, fontWeight: 600 }}>Password</label>
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
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--muted)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 600 }}>Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
