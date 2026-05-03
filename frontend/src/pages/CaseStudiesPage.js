import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const CASE_STUDIES = [
  {
    id: 1,
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    challenge: 'Outdated website causing poor conversions',
    solution: 'Complete website redesign with modern UX',
    result: 'increased conversion rates by 145%',
    resultNumber: '145%',
    resultMetric: 'Conversion Increase',
    timeline: '8 weeks',
    services: ['Web Development', 'UX Design', 'Cloud Infrastructure'],
    image: 'https://via.placeholder.com/500x300?text=TechFlow+Solutions',
  },
  {
    id: 2,
    company: 'Global E-commerce Inc',
    industry: 'Ecommerce',
    challenge: 'Slow website causing customer abandonment',
    solution: 'Performance optimization and cloud hosting',
    result: 'reduced page load time by 68%',
    resultNumber: '68%',
    resultMetric: 'Speed Improvement',
    timeline: '4 weeks',
    services: ['Cloud Hosting', 'Performance Optimization', 'Maintenance'],
    image: 'https://via.placeholder.com/500x300?text=Global+Ecommerce',
  },
  {
    id: 3,
    company: 'SecureBank Corp',
    industry: 'Finance',
    challenge: 'Security vulnerabilities and compliance issues',
    solution: 'Infrastructure Audit, hardening, and monitoring',
    result: 'passed all Infrastructure Audits',
    resultNumber: '100%',
    resultMetric: 'Compliance Score',
    timeline: '6 weeks',
    services: ['Infrastructure Audit', 'Server Tuning', 'Monitoring'],
    image: 'https://via.placeholder.com/500x300?text=SecureBank+Corp',
  },
  {
    id: 4,
    company: 'StartupHub',
    industry: 'Startup Ecosystem',
    challenge: 'No web presence, limited budget',
    solution: 'MVP website and managed hosting solution',
    result: '10,000+ visitors in first month',
    resultNumber: '10K+',
    resultMetric: 'Monthly Visitors',
    timeline: '3 weeks',
    services: ['Web Development', 'Shared Hosting', 'SEO'],
    image: 'https://via.placeholder.com/500x300?text=StartupHub',
  },
  {
    id: 5,
    company: 'LuxuryRetail Group',
    industry: 'Retail',
    challenge: 'Complex inventory management needed',
    solution: 'Custom ecommerce platform with API integration',
    result: '$2M revenue in first year',
    resultNumber: '$2M',
    resultMetric: 'First Year Revenue',
    timeline: '12 weeks',
    services: ['Custom Web App', 'Ecommerce', 'Integration'],
    image: 'https://via.placeholder.com/500x300?text=LuxuryRetail+Group',
  },
  {
    id: 6,
    company: 'HealthTech Innovations',
    industry: 'Healthcare',
    challenge: 'Need HIPAA-compliant infrastructure',
    solution: 'Secure cloud hosting with compliance monitoring',
    result: '99.99% uptime, zero downtime',
    resultNumber: '99.99%',
    resultMetric: 'Uptime SLA',
    timeline: '8 weeks',
    services: ['Cloud Hosting', 'Infrastructure', 'Compliance'],
    image: 'https://via.placeholder.com/500x300?text=HealthTech+Innovations',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Axentralab transformed our online presence. Their engineering team is professional, responsive, and truly cares about our success.',
    author: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    role: 'CEO',
  },
  {
    quote: 'The hosting performance is incredible, and their support team goes above and beyond. Highly recommended for enterprise projects!',
    author: 'Mike Chen',
    company: 'Global E-commerce Inc',
    role: 'CTO',
  },
  {
    quote: 'Infrastructure was our top concern, and they delivered. The audit and scaling process was thorough and extremely professional.',
    author: 'Lisa Martinez',
    company: 'SecureBank Corp',
    role: 'Director of Engineering',
  },
];

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [filterService, setFilterService] = useState(null);

  const allServices = [...new Set(CASE_STUDIES.flatMap(cs => cs.services))];
  const filteredStudies = filterService
    ? CASE_STUDIES.filter(cs => cs.services.includes(filterService))
    : CASE_STUDIES;

  return (
    <>
      <SEOHelmet
        title="Case Studies & Success Stories | Axentralab"
        description="See how we've helped businesses like yours. Real results from real projects across web development and cloud infrastructure."
        keywords="case studies, project portfolio, success stories, web development results"
      />

      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 80 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '80px 5% 60px', textAlign: 'center', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: 16 }}>Success Stories</span>
            <h1 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
              Real results from <br />
              <span style={{ color: 'var(--teal)' }}>real projects.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 32px' }}>
              See how we've helped businesses achieve their goals through cutting-edge technology, enterprise architecture, and strategic development.
            </p>
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section style={{ padding: '80px 5%', maxWidth: 1400, margin: '0 auto' }}>
          
          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 50, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setFilterService(null)}
              className={!filterService ? "btn-primary" : "btn-outline"}
              style={{ padding: '8px 16px', borderRadius: 999, fontSize: 13, textDecoration: 'none' }}
            >
              All Projects
            </button>
            {allServices.map(service => (
              <button
                key={service}
                onClick={() => setFilterService(service)}
                className={filterService === service ? "btn-primary" : "btn-outline"}
                style={{ padding: '8px 16px', borderRadius: 999, fontSize: 13, textDecoration: 'none' }}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 30 }}>
            {filteredStudies.map(study => (
              <div
                key={study.id}
                className="card"
                onClick={() => setSelectedStudy(selectedStudy?.id === study.id ? null : study)}
                style={{ overflow: 'hidden', cursor: 'pointer', padding: 0 }}
              >
                {/* Image */}
                <div style={{ height: 220, background: `url(${study.image}) center/cover`, borderBottom: '1px solid var(--border)' }} />

                {/* Content */}
                <div style={{ padding: 30 }}>
                  <h3 style={{ fontFamily: "var(--font-h)", color: 'var(--text)', marginBottom: 8, fontSize: 20, fontWeight: 800 }}>{study.company}</h3>
                  <p style={{ color: 'var(--teal)', fontSize: 13, fontWeight: 700, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>{study.industry}</p>

                  {/* Result Highlight */}
                  <div style={{ padding: 20, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12, marginBottom: 20, textAlign: 'center' }}>
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 36, fontWeight: 900, color: 'var(--teal)', marginBottom: 4, letterSpacing: -1 }}>{study.resultNumber}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase' }}>{study.resultMetric}</div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {study.services.slice(0, 3).map((service, i) => (
                      <span key={i} className="badge" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>{service}</span>
                    ))}
                    {study.services.length > 3 && (
                      <span className="badge" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>+{study.services.length - 3}</span>
                    )}
                  </div>

                  {/* Expandable Details */}
                  {selectedStudy?.id === study.id && (
                    <div style={{ paddingTop: 20, marginTop: 20, borderTop: '1px solid var(--border)' }}>
                      <div style={{ marginBottom: 16 }}>
                        <p style={{ color: 'var(--text)', fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase' }}>Challenge</p>
                        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{study.challenge}</p>
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <p style={{ color: 'var(--text)', fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase' }}>Solution</p>
                        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{study.solution}</p>
                      </div>
                      <div style={{ display: 'flex', gap: 24, background: 'var(--bg2)', padding: 16, borderRadius: 8 }}>
                        <div>
                          <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase' }}>Timeline</p>
                          <p style={{ color: 'var(--text)', fontWeight: 700, margin: 0 }}>{study.timeline}</p>
                        </div>
                        <div>
                          <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase' }}>Outcome</p>
                          <p style={{ color: 'var(--teal)', fontWeight: 700, margin: 0 }}>{study.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '60px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, textAlign: 'center' }}>
              {[
                { number: '200+', label: 'Successful Projects' },
                { number: '500+', label: 'Happy Clients' },
                { number: '15+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-h)", fontSize: 48, fontWeight: 900, color: 'var(--teal)', marginBottom: 8, letterSpacing: -2 }}>{stat.number}</div>
                  <p style={{ color: 'var(--muted)', fontSize: 15, fontWeight: 600 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ padding: '80px 5%', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5 }}>What Our Clients Say</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 24, color: 'var(--teal)', marginBottom: 20 }}>★★★★★</div>
                <p style={{ color: 'var(--text)', fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic', fontWeight: 500 }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(37,99,235,0.1)', color: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: 700, margin: '0 0 2px' }}>{testimonial.author}</p>
                    <p style={{ color: 'var(--muted)', fontSize: 13, margin: 0 }}>{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, letterSpacing: -0.5 }}>
              Ready to write your success story?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
              Let's discuss your project and show you what we can achieve together.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>
              Start a Project
            </Link>
          </div>
        </section>
        
      </div>
    </>
  );
}
