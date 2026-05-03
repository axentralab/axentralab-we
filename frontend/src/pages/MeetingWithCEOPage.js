import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MeetingWithCEOPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    mainChallenge: '',
    monthlyRevenue: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/leads/ceo-meeting`, formData);
      setSubmitted(true);
      console.log('✅ Meeting request submitted:', response.data);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', businessType: '', mainChallenge: '', monthlyRevenue: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = 'Hi! I\'d like to book a meeting with your CEO for business consultation.';
    window.open(`https://wa.me/8801700000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2634 50%, #162332 100%)' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 5% 60px', textAlign: 'center', position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        {/* Background Glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 999, border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)', marginBottom: 24 }}>
            <span style={{ fontSize: 18 }}>🧠</span>
            <span style={{ color: '#8B5CF6', fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Limited Slots Available</span>
          </div>

          {/* Main Headline */}
          <h1 style={{ fontFamily: "var(--font-h)", fontSize: '3.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: 16, lineHeight: 1.2, letterSpacing: -1 }}>
            Direct Consultation with Our <span style={{ color: '#8B5CF6', backgroundImage: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CEO</span>
          </h1>

          {/* Subheading */}
          <p style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: 32, lineHeight: 1.6 }}>
            Free consultation, no costs. Get a custom growth strategy for your business.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            <div style={{ padding: '16px', background: 'rgba(139,92,246,0.1)', borderRadius: 12, border: '1px solid rgba(139,92,246,0.2)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#8B5CF6' }}>4+</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Years Experience</div>
            </div>
            <div style={{ padding: '16px', background: 'rgba(59,130,246,0.1)', borderRadius: 12, border: '1px solid rgba(59,130,246,0.2)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3B82F6' }}>2600+</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Projects Completed</div>
            </div>
            <div style={{ padding: '16px', background: 'rgba(168,85,247,0.1)', borderRadius: 12, border: '1px solid rgba(168,85,247,0.2)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#A855F7' }}>98%</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '16px 32px', borderRadius: 12, background: 'linear-gradient(135deg, #8B5CF6, #A855F7)', border: 'none', color: 'var(--text)', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 20px 40px rgba(139,92,246,0.3)' }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
              📅 Book a Meeting
            </button>
            <button onClick={handleWhatsApp} style={{ padding: '16px 32px', borderRadius: 12, background: 'transparent', border: '2px solid rgba(37,211,102,0.4)', color: '#25D366', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(37,211,102,1)'; e.target.style.background = 'rgba(37,211,102,0.1)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(37,211,102,0.4)'; e.target.style.background = 'transparent'; }}>
              💬 Contact via WhatsApp
            </button>
          </div>

          {/* Trust Message */}
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span>✓</span> Your information is completely secure | No spam
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section style={{ padding: '80px 5%', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--bg2)', borderBottom: '1px solid var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', textAlign: 'center', marginBottom: 50, fontFamily: "var(--font-h)" }}>
            What You'll Get in This Meeting
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              { icon: '🚀', title: 'Custom Growth Strategy', desc: 'A specially designed growth plan tailored to your business' },
              { icon: '📊', title: 'Real Data Insights', desc: 'Practical experience and tips from 4400+ completed projects' },
              { icon: '💼', title: 'Direct CEO Access', desc: 'Talk directly with leadership, not a middleman' },
              { icon: '🎯', title: 'Actionable Plan', desc: 'A clear roadmap that can be implemented in the next 90 days' },
              { icon: '⏱️', title: '1-on-1 Personalized Session', desc: 'Your time, your pace - no pressure' },
              { icon: '📞', title: 'Follow-up Support', desc: 'Get the support you need even after the meeting' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 32, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 16, transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'; }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10, fontFamily: "var(--font-h)" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', textAlign: 'center', marginBottom: 50, fontFamily: "var(--font-h)" }}>
            Why Trust Us?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            {[
              { label: '2600+', desc: 'Successful Projects' },
              { label: '1500+', desc: 'Happy Clients' },
              { label: '4+', desc: 'Years of Excellence' },
              { label: '24/7', desc: 'Dedicated Support' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, color: 'var(--muted)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" style={{ padding: '100px 5%', background: 'linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(59,130,246,0.05) 100%)', borderTop: '1px solid rgba(139,92,246,0.2)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text)', marginBottom: 12, textAlign: 'center', fontFamily: "var(--font-h)" }}>
            Book Your Meeting
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', textAlign: 'center', marginBottom: 40 }}>
            We typically contact you within 24 hours.
          </p>

          {submitted ? (
            <div style={{ padding: 40, background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)', borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22C55E', marginBottom: 8 }}>Thank You!</h3>
              <p style={{ color: 'var(--text)' }}>We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>📝 Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., John Smith"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'var(--bg2)', color: 'var(--text)', fontSize: 14, fontFamily: "var(--font-h)", outline: 'none', transition: 'all 0.2s' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.background = 'rgba(139,92,246,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(139,92,246,0.3)'; e.target.style.background = 'var(--bg2)'; }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>📧 Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'var(--bg2)', color: 'var(--text)', fontSize: 14, fontFamily: "var(--font-h)", outline: 'none', transition: 'all 0.2s' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.background = 'rgba(139,92,246,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(139,92,246,0.3)'; e.target.style.background = 'var(--bg2)'; }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>📱 Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'var(--bg2)', color: 'var(--text)', fontSize: 14, fontFamily: "var(--font-h)", outline: 'none', transition: 'all 0.2s' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.background = 'rgba(139,92,246,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(139,92,246,0.3)'; e.target.style.background = 'var(--bg2)'; }}
                />
              </div>

              {/* Business Type */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>💼 Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'var(--bg2)', color: 'var(--text)', fontSize: 14, fontFamily: "var(--font-h)", outline: 'none', transition: 'all 0.2s' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.background = 'rgba(139,92,246,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(139,92,246,0.3)'; e.target.style.background = 'var(--bg2)'; }}
                >
                  <option value="" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Select...</option>
                  <option value="ecommerce" style={{ background: '#0D1B2A', color: 'var(--text)' }}>E-Commerce</option>
                  <option value="service" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Service Business</option>
                  <option value="startup" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Startup</option>
                  <option value="corporate" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Corporate</option>
                  <option value="agency" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Agency</option>
                  <option value="other" style={{ background: '#0D1B2A', color: 'var(--text)' }}>Other</option>
                </select>
              </div>

              {/* Main Challenge */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>🎯 What's Your Main Challenge?</label>
                <textarea
                  name="mainChallenge"
                  value={formData.mainChallenge}
                  onChange={handleChange}
                  placeholder="What problems or challenges is your business facing?"
                  rows="3"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'var(--bg2)', color: 'var(--text)', fontSize: 14, fontFamily: "var(--font-h)", outline: 'none', transition: 'all 0.2s', resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.background = 'rgba(139,92,246,0.08)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(139,92,246,0.3)'; e.target.style.background = 'var(--bg2)'; }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{ padding: '14px', borderRadius: 10, background: 'linear-gradient(135deg, #8B5CF6, #A855F7)', border: 'none', color: 'var(--text)', fontWeight: 700, fontSize: 15, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.3s', opacity: loading ? 0.6 : 1, marginTop: 8 }}
                onMouseEnter={e => !loading && (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => !loading && (e.target.style.transform = 'translateY(0)')}
              >
                {loading ? '⏳ Processing...' : '✅ Request a Meeting'}
              </button>

              {/* Trust Message */}
              <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
                ✓ We protect your privacy | No spam
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 5%', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', textAlign: 'center', marginBottom: 50, fontFamily: "var(--font-h)" }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: 20 }}>
            {[
              { q: 'Is this meeting really free?', a: 'Yes, completely free. It\'s our commitment to help first, then think about business.' },
              { q: 'How long does the meeting take?', a: 'Usually 30-45 minutes. You can take as much time as you need.' },
              { q: 'How will the meeting happen - online or offline?', a: 'Both are possible. You can choose between a video call or face-to-face meeting.' },
              { q: 'What happens after the meeting?', a: 'We\'ll provide you with a custom action plan you can implement. If needed, we can also offer additional services.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 20, background: 'var(--bg2)', border: '1px solid rgba(139,92,246,0.1)', borderRadius: 12 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#8B5CF6', marginBottom: 10 }}>❓ {item.q}</h3>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 5%', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.1) 100%)', borderTop: '1px solid rgba(139,92,246,0.2)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', marginBottom: 16, fontFamily: "var(--font-h)" }}>
            Ready to Take Your Business to the Next Level?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text)', marginBottom: 32, lineHeight: 1.6 }}>
            Book a meeting with our CEO today and get a clear growth roadmap for your business.
          </p>
          <button onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '16px 40px', borderRadius: 12, background: 'linear-gradient(135deg, #8B5CF6, #A855F7)', border: 'none', color: 'var(--text)', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 20px 40px rgba(139,92,246,0.3)' }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
            Get Started Now 🚀
          </button>
        </div>
      </section>
    </div>
  );
}
