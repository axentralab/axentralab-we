import { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

const SUPPORT_CHANNELS = [
  {
    icon: '💬',
    title: 'Live Chat',
    desc: 'Instant support for urgent issues',
    availability: 'Available 24/7',
  },
  {
    icon: '📧',
    title: 'Email Support',
    desc: 'Detailed responses for complex issues',
    availability: 'Response within 24 hours',
  },
  {
    icon: '📞',
    title: 'Phone Support',
    desc: 'Talk directly to our support team',
    availability: 'Mon-Fri, 9 AM - 6 PM',
  },
  {
    icon: '🎫',
    title: 'Support Tickets',
    desc: 'Track your issues from start to resolution',
    availability: 'Manage from your dashboard',
  },
];

const KNOWLEDGE_BASE_TOPICS = [
  'Getting Started with Your Services',
  'Domain Management & Setup',
  'SSL Certificates Explained',
  'WordPress Installation & Setup',
  'Email Forwarding Configuration',
  'Database Management',
  'FTP Access & File Upload',
  'Website Backup & Restore',
  'Performance Optimization Tips',
  'Security Best Practices',
  'Managing Multiple Domains',
  'Client Portal Dashboard Guide',
];

const COMMON_ISSUES = [
  {
    q: 'How do I access my Client Portal?',
    a: 'Log in to our client portal using your email and password. Navigate to the top right and click "Dashboard".',
  },
  {
    q: 'Where do I find my invoices?',
    a: 'Invoices are available in your Dashboard under the "Billing" section.',
  },
  {
    q: 'How do I track my project progress?',
    a: 'Use the "Projects" tab in the client portal to view milestones, tasks, and real-time status updates.',
  },
  {
    q: 'How do I submit a new request?',
    a: 'Navigate to "Support" in the portal and click "New Ticket". Provide as much detail as possible.',
  },
  {
    q: 'What if I need urgent help?',
    a: 'Contact our support team immediately via live chat or phone. We prioritize critical issues with a 1-hour SLA.',
  },
];

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <SEOHelmet
        title="Support Center | Axentralab"
        description="24/7 customer support. Live chat, email, phone, and knowledge base for all your engineering needs."
        keywords="customer support, help desk, support ticket, knowledge base"
      />

      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: 16 }}>Support Center</span>
            <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
              We're here to <br />
              <span style={{ color: 'var(--teal)' }}>help you succeed.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 32px' }}>
              Get support through multiple channels. Our engineering and support team is ready to assist you 24/7.
            </p>
          </div>
        </section>

        {/* SUPPORT CHANNELS */}
        <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>How to Reach Us</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '12px auto 0' }}>Choose the channel that works best for you.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {SUPPORT_CHANNELS.map((channel, i) => (
              <div key={i} className="card" style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(37,99,235,0.08)', color: 'var(--teal)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {channel.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>{channel.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>{channel.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                  <span className="badge" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--teal)' }}>{channel.availability}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KNOWLEDGE BASE PREVIEW */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Knowledge Base</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 600, margin: '12px auto 0' }}>Browse our comprehensive guides and tutorials to find answers instantly.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {KNOWLEDGE_BASE_TOPICS.map((topic, i) => (
                <a
                  key={i}
                  href="#kb"
                  className="card"
                  style={{
                    padding: '20px 24px',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  <span>{topic}</span>
                  <span style={{ color: 'var(--teal)', fontSize: 18 }}>→</span>
                </a>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button className="btn-outline">View All Articles</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 5%', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>Common Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {COMMON_ISSUES.map((faq, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '24px', background: 'transparent', border: 'none',
                    color: 'var(--text)', textAlign: 'left', cursor: 'pointer',
                    fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 24, color: 'var(--teal)', fontWeight: '300' }}>
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div style={{ padding: '0 24px 24px', color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, letterSpacing: -0.5 }}>
              Can't Find Your Answer?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Submit a support ticket and our team will get back to you as soon as possible.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>Submit Ticket</button>
              <button className="btn-outline" style={{ padding: '14px 32px', fontSize: 16 }}>Start Live Chat</button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}
