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
  'Getting Started with Your Hosting',
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
  'cPanel Dashboard Guide',
];

const COMMON_ISSUES = [
  {
    q: 'How do I access my cPanel?',
    a: 'Log in to our client portal using your email and password. Navigate to Services > Hosting and click "cPanel Access".',
  },
  {
    q: 'Where do I find my FTP credentials?',
    a: 'FTP credentials are available in your cPanel dashboard under "FTP Accounts".',
  },
  {
    q: 'How do I upload my website files?',
    a: 'Use FTP or use the File Manager in cPanel to upload files to the public_html directory.',
  },
  {
    q: 'How do I set up my email?',
    a: 'Navigate to "Email Accounts" in cPanel and create a new email. Then configure your email client with the credentials provided.',
  },
  {
    q: 'What if my website is down?',
    a: 'Contact our support team immediately via live chat or phone. We\'ll investigate and restore your site ASAP.',
  },
  {
    q: 'How do I renew my domain?',
    a: 'Log into your client portal, go to Domains, and select "Renew". You can set auto-renewal to avoid missing renewal dates.',
  },
];

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <SEOHelmet
        title="Support Center | Axentralab"
        description="24/7 customer support. Live chat, email, phone, and knowledge base for all your hosting needs."
        keywords="customer support, help desk, support ticket, knowledge base"
      />

      {/* Hero */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '100px 5% 50px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, #00d4aa 0%, transparent 70%)',
              top: '10%',
              right: '5%',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div style={{ maxWidth: '800px', zIndex: 2, textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 20,
            }}
          >
            We're Here to Help
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Get support through multiple channels. Our team is ready to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 50,
            }}
          >
            How to Reach Us
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 30,
            }}
          >
            {SUPPORT_CHANNELS.map((channel, i) => (
              <div
                key={i}
                style={{
                  padding: 40,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 20 }}>{channel.icon}</div>
                <h3 style={{ color: '#fff', marginBottom: 10, fontSize: 20, fontWeight: 700 }}>
                  {channel.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 12 }}>
                  {channel.desc}
                </p>
                <p style={{ color: '#00d4aa', fontSize: 13, fontWeight: 600 }}>
                  {channel.availability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Preview */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 50,
            }}
          >
            Knowledge Base
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              maxWidth: 600,
              margin: '0 auto 40px',
            }}
          >
            Browse our comprehensive guides and tutorials to find answers to common questions.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {KNOWLEDGE_BASE_TOPICS.map((topic, i) => (
              <a
                key={i}
                href="#kb"
                style={{
                  padding: 24,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 8,
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.4)';
                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 170, 0.15)';
                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)';
                }}
              >
                <span>{topic}</span>
                <span style={{ color: '#00d4aa', fontSize: 20 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 50,
            }}
          >
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {COMMON_ISSUES.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: 20,
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: 16,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 20, transition: 'transform 0.3s' }}>
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div
                    style={{
                      padding: '0 20px 20px',
                      borderTop: '1px solid rgba(0, 212, 170, 0.1)',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Ticket CTA */}
      <section
        style={{
          padding: '80px 5%',
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
          textAlign: 'center',
          border: '2px solid rgba(0, 212, 170, 0.3)',
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.3rem)', color: '#fff', marginBottom: 20 }}>
          Can't Find Your Answer?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 16,
            marginBottom: 30,
            maxWidth: 600,
            margin: '0 auto 30px',
          }}
        >
          Submit a support ticket and our team will get back to you as soon as possible.
        </p>
        <button
          style={{
            padding: '14px 36px',
            background: '#00d4aa',
            color: '#000',
            border: 'none',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginRight: 12,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 170, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Submit Ticket
        </button>
        <button
          style={{
            padding: '14px 36px',
            background: 'rgba(0, 212, 170, 0.2)',
            color: '#00d4aa',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0, 212, 170, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0, 212, 170, 0.2)';
          }}
        >
          Start Live Chat
        </button>
      </section>
    </>
  );
}
