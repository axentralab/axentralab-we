import { useState } from 'react';
import api from '../services/api';

const HERO_BG_IMAGE = process.env.REACT_APP_CONTACT_HERO_BG_IMAGE || '';

const SERVICES = ['AI Automation','Web Development','Cloud Infrastructure','DevOps & Cloud','SaaS Development','IT Consulting','Other'];
const BUDGETS  = ['Under $5k','$5k – $15k','$15k – $50k','$50k+','Let\'s discuss'];

const TRUST_POINTS = [
  { icon:'⚡', label:'24hr Response',   sub:'Guaranteed reply within one business day' },
  { icon:'🔒', label:'NDA on Request',  sub:'Your project details stay strictly private' },
  { icon:'🌍', label:'Local + Remote',  sub:'Based in Dhaka, serving clients worldwide' },
  { icon:'💯', label:'Results-Driven',  sub:'We focus on delivery, not just promises' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', company:'', service:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [focused, setFocused]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await api.post('/leads', form);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle = (k) => ({
    width: '100%',
    background: '#ffffff',
    border: `1px solid ${focused === k ? 'var(--teal)' : 'var(--border)'}`,
    borderRadius: 8,
    padding: '12px 14px',
    color: 'var(--text)',
    fontSize: 14,
    fontFamily: "var(--font-b)",
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
    boxShadow: focused === k ? '0 0 0 3px rgba(37, 99, 235, 0.15)' : 'none',
  });

  const labelStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: 'var(--muted)',
    display: 'block',
    marginBottom: 6,
    fontFamily: "var(--font-b)",
  };

  return (
    <>
      <style>{`
        @keyframes spin   { to{transform:rotate(360deg)} }
        .contact-input::placeholder { color: #94a3b8; }
        .contact-input option { color: var(--text); }
      `}</style>

      <div style={{ minHeight:'100vh', padding:'clamp(70px,10vw,90px) 0 0', position:'relative', overflow:'hidden', background: 'var(--bg)' }}>

        <div style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'0 auto', padding:'0 clamp(16px,5%,5%)' }}>

          {/* ── HERO SECTION ── */}
          <section style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, marginBottom: 56, padding: '56px 20px', background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            <div style={{ position: 'relative', zIndex: 2, textAlign:'center' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 14px', borderRadius:999, border:'1px solid rgba(37, 99, 235, 0.2)', background:'rgba(37, 99, 235, 0.05)', marginBottom:18 }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--teal)', display:'inline-block' }} />
                <span style={{ fontFamily:"var(--font-m)", fontSize:10, color:'var(--teal)', letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>Secure Channel Open</span>
              </div>
              <h1 style={{ fontFamily:"var(--font-h)", fontSize:'clamp(32px,5.5vw,64px)', fontWeight:900, color:'var(--text)', letterSpacing:-2, lineHeight:1.05, margin:'0 0 16px' }}>
                Let's Build<br />
                <span style={{ color:'var(--teal)' }}>Something Real</span>
              </h1>
              <p style={{ color:'var(--muted)', fontSize:16, maxWidth:400, margin:'0 auto', lineHeight:1.8, fontFamily:"var(--font-b)" }}>
                Tell us about your project. We respond within 24 hours with a tailored proposal — no generic templates.
              </p>
            </div>
          </section>

          {/* ── Main Content ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 32, alignItems: 'start' }} className="contact-main-grid">

            {/* ── LEFT PANEL ── */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>

              {/* Contact details */}
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {[
                  { icon:'📧', label:'Email',    val:'axentralab@gmail.com',       color:'#2563eb' },
                  { icon:'📞', label:'Phone',    val:'01322695162 / 01329478744',   color:'#10b981' },
                  { icon:'📍', label:'Location', val:'Dhaka, Bangladesh',           color:'#8b5cf6' },
                ].map((c,i) => (
                  <div key={i} className="card" style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 18px', cursor:'default' }}>
                    <div style={{ width:40, height:40, borderRadius:12, background:`${c.color}15`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily:"var(--font-m)", fontSize:10, color:'var(--muted)', letterSpacing:1, textTransform:'uppercase', marginBottom:3 }}>{c.label}</div>
                      <div style={{ fontSize:14, color:'var(--text)', fontWeight:600 }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {TRUST_POINTS.map((t,i) => (
                  <div key={i} className="card" style={{ padding:'16px 14px' }}>
                    <div style={{ fontSize:22, marginBottom:8 }}>{t.icon}</div>
                    <div style={{ fontFamily:"var(--font-h)", fontSize:14, fontWeight:800, color:'var(--text)', marginBottom:4 }}>{t.label}</div>
                    <div style={{ fontSize:12, color:'var(--muted)', lineHeight:1.5 }}>{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: FORM ── */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding:'24px 28px' }}>
                {submitted ? (
                  <div style={{ textAlign:'center', padding:'48px 0' }}>
                    <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(16, 185, 129, 0.1)', border:'2px solid rgba(16, 185, 129, 0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:32, margin:'0 auto 20px' }}>✅</div>
                    <h2 style={{ fontFamily:"var(--font-h)", color:'#10b981', fontSize:24, fontWeight:900, marginBottom:10 }}>Message Received!</h2>
                    <p style={{ color:'var(--muted)', fontSize:15, lineHeight:1.7, maxWidth:320, margin:'0 auto' }}>
                      We'll reach out within 24 hours with a personalised proposal tailored to your project.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: "var(--font-h)", fontSize: 24, fontWeight: 800, color: "var(--text)", marginBottom: 24 }}>Send a Message</h2>
                    {error && (
                      <div style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', borderRadius:12, padding:'12px 16px', marginBottom:20, fontSize:13, color:'#EF4444', display:'flex', alignItems:'center', gap:8 }}>
                        <span>⚠️</span> {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        {[{ k:'name', l:'Your Name', ph:'John Smith', type:'text', req:true }, { k:'email', l:'Email Address', ph:'john@company.com', type:'email', req:true }].map(f => (
                          <div key={f.k}>
                            <label style={labelStyle}>{f.l}</label>
                            <input className="contact-input" type={f.type} placeholder={f.ph} required={f.req}
                              value={form[f.k]} onChange={e => set(f.k, e.target.value)}
                              onFocus={() => setFocused(f.k)} onBlur={() => setFocused('')}
                              style={inputStyle(f.k)} />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label style={labelStyle}>Company <span style={{ color:'var(--muted)', fontWeight:400 }}>(optional)</span></label>
                        <input className="contact-input" placeholder="Acme Inc." value={form.company}
                          onChange={e => set('company', e.target.value)}
                          onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                          style={inputStyle('company')} />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        {[{ k:'service', l:'Service Needed', opts:SERVICES }, { k:'budget', l:'Budget Range', opts:BUDGETS }].map(f => (
                          <div key={f.k}>
                            <label style={labelStyle}>{f.l}</label>
                            <select className="contact-input" value={form[f.k]}
                              onChange={e => set(f.k, e.target.value)}
                              onFocus={() => setFocused(f.k)} onBlur={() => setFocused('')}
                              style={{ ...inputStyle(f.k), cursor:'pointer' }}>
                              <option value="">Select…</option>
                              {f.opts.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                          </div>
                        ))}
                      </div>

                      <div>
                        <label style={labelStyle}>Project Details</label>
                        <textarea className="contact-input" rows={5} placeholder="Tell us what you're building, the problem you're solving, and any technical context that would help us scope the work…"
                          required value={form.message} onChange={e => set('message', e.target.value)}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          style={{ ...inputStyle('message'), resize:'none' }} />
                      </div>

                      <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
                        {loading ? 'Sending...' : 'Send Message →'}
                      </button>

                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop:'80px', paddingBottom:40, textAlign: 'center' }}>
            <span style={{ fontFamily:"var(--font-h)", fontWeight:900, fontSize:20, color:'var(--text)', letterSpacing:-0.4 }}>Axentralab</span>
            <div style={{ marginTop: 12, fontSize:13, color:'var(--muted)' }}>
              © 2025 · All rights reserved
            </div>
          </div>

        </div>
      </div>
    </>
  );
}