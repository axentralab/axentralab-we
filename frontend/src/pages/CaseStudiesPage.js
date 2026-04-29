import { useState } from 'react';
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
    services: ['Web Development', 'UX Design', 'Hosting'],
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
    solution: 'Security audit, hardening, and monitoring',
    result: 'passed all security audits',
    resultNumber: '100%',
    resultMetric: 'Compliance Score',
    timeline: '6 weeks',
    services: ['Security Audit', 'Website Hardening', 'Monitoring'],
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
    result: '99.99% uptime, zero breaches',
    resultNumber: '99.99%',
    resultMetric: 'Uptime SLA',
    timeline: '8 weeks',
    services: ['Cloud Hosting', 'Security', 'Compliance'],
    image: 'https://via.placeholder.com/500x300?text=HealthTech+Innovations',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Axentralab transformed our online presence. Their team is professional, responsive, and truly cares about our success.',
    author: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    role: 'CEO',
  },
  {
    quote: 'The hosting performance is incredible, and their support team goes above and beyond. Highly recommended!',
    author: 'Mike Chen',
    company: 'Global E-commerce Inc',
    role: 'CTO',
  },
  {
    quote: 'Security was our top concern, and they delivered. The audit and hardening process was thorough and professional.',
    author: 'Lisa Martinez',
    company: 'SecureBank Corp',
    role: 'Security Director',
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
        title="Case Studies | Axentralab"
        description="See how we've helped businesses like yours. Real results from real projects."
        keywords="case studies, project portfolio, success stories, web development results"
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
            Success Stories
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            See how we've helped businesses achieve their goals through technology and strategy.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 40,
            }}
          >
            Featured Projects
          </h2>

          {/* Filter */}
          <div
            style={{
              display: 'flex',
              gap: 10,
              marginBottom: 40,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setFilterService(null)}
              style={{
                padding: '8px 16px',
                background: !filterService ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                color: !filterService ? '#000' : '#00d4aa',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              All
            </button>
            {allServices.map(service => (
              <button
                key={service}
                onClick={() => setFilterService(service)}
                style={{
                  padding: '8px 16px',
                  background: filterService === service ? '#00d4aa' : 'rgba(0, 212, 170, 0.2)',
                  color: filterService === service ? '#000' : '#00d4aa',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: 30,
            }}
          >
            {filteredStudies.map(study => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(selectedStudy?.id === study.id ? null : study)}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  cursor: 'pointer',
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
                {/* Image */}
                <div
                  style={{
                    height: 200,
                    background: `url(${study.image}) center/cover`,
                    borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
                  }}
                />

                {/* Content */}
                <div style={{ padding: 30 }}>
                  <h3 style={{ color: '#fff', marginBottom: 8, fontSize: 18, fontWeight: 700 }}>
                    {study.company}
                  </h3>
                  <p style={{ color: '#00d4aa', fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
                    {study.industry}
                  </p>

                  {/* Result Highlight */}
                  <div
                    style={{
                      padding: 16,
                      background: 'rgba(0, 212, 170, 0.08)',
                      border: '1px solid rgba(0, 212, 170, 0.15)',
                      borderRadius: 8,
                      marginBottom: 16,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 32, fontWeight: 800, color: '#00d4aa', marginBottom: 4 }}>
                      {study.resultNumber}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                      {study.resultMetric}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                    {study.services.slice(0, 2).map((service, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(0, 212, 170, 0.1)',
                          color: '#00d4aa',
                          fontSize: 11,
                          borderRadius: 4,
                          fontWeight: 600,
                        }}
                      >
                        {service}
                      </span>
                    ))}
                    {study.services.length > 2 && (
                      <span
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(0, 212, 170, 0.1)',
                          color: '#00d4aa',
                          fontSize: 11,
                          borderRadius: 4,
                          fontWeight: 600,
                        }}
                      >
                        +{study.services.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Expandable Details */}
                  {selectedStudy?.id === study.id && (
                    <div
                      style={{
                        paddingTop: 16,
                        borderTop: '1px solid rgba(0, 212, 170, 0.1)',
                      }}
                    >
                      <div style={{ marginBottom: 12 }}>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 4 }}>
                          Challenge
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                          {study.challenge}
                        </p>
                      </div>
                      <div style={{ marginBottom: 12 }}>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 4 }}>
                          Solution
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                          {study.solution}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: 16 }}>
                        <div>
                          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 4 }}>
                            Timeline
                          </p>
                          <p style={{ color: '#00d4aa', fontWeight: 700 }}>{study.timeline}</p>
                        </div>
                        <div>
                          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 4 }}>
                            Result
                          </p>
                          <p style={{ color: '#00d4aa', fontWeight: 700 }}>{study.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            What Our Clients Say
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 30,
            }}
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                style={{
                  padding: 30,
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(0, 212, 170, 0.15)',
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 24, color: '#00d4aa', marginBottom: 16 }}>★★★★★</div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 20,
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <p style={{ color: '#fff', fontWeight: 700 }}>{testimonial.author}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: '80px 5%',
          background: '#0f172a',
          borderBottom: '1px solid rgba(0, 212, 170, 0.1)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 30,
              textAlign: 'center',
            }}
          >
            {[
              { number: '200+', label: 'Successful Projects' },
              { number: '500+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#00d4aa', marginBottom: 10 }}>
                  {stat.number}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 5%',
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
          textAlign: 'center',
          border: '2px solid rgba(0, 212, 170, 0.3)',
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.3rem)', color: '#fff', marginBottom: 20 }}>
          Ready to Write Your Success Story?
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
          Let's discuss your project and show you what we can achieve together.
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
          Start a Project
        </button>
      </section>
    </>
  );
}
