import { useState } from 'react';
import { CONTACT_INFO, getWhatsAppUrl, getEmailUrl } from '../../config/contact.config';
import { useToast } from '../../context/ToastContext';
import api from '../../services/api';

const PRIMARY  = '#6366F1';
const ACCENT   = '#8B5CF6';
const PRIMARY2 = '#A78BFA';

export default function ContactModal({ isOpen, onClose, cartItems = [] }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'whatsapp', // 'whatsapp' or 'email'
  });
  const toast = useToast();

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const generateServicesList = () => {
    return cartItems
      .map(item => `${item.serviceTitle} (${item.plan})`)
      .join('\n');
  };

  const handleContactViaWhatsApp = async () => {
    if (!contactForm.name || !contactForm.email) {
      toast.error('Please fill in name and email');
      return;
    }

    // Track the inquiry in backend
    try {
      await api.post('/leads/service-inquiry', {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        services: cartItems,
        preferredContact: 'whatsapp',
      });
    } catch (err) {
      console.error('Error tracking inquiry:', err);
      // Continue even if tracking fails
    }

    const servicesList = generateServicesList();
    const message = `Hi, I'm interested in your services:\n\n${servicesList}\n\nMy name: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone}\n\nPlease get in touch to discuss pricing and details.`;
    
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
    toast.success('Opening WhatsApp...');
    setTimeout(() => onClose(), 1000);
  };

  const handleContactViaEmail = async () => {
    if (!contactForm.name || !contactForm.email) {
      toast.error('Please fill in name and email');
      return;
    }

    // Track the inquiry in backend
    try {
      await api.post('/leads/service-inquiry', {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        services: cartItems,
        preferredContact: 'email',
      });
    } catch (err) {
      console.error('Error tracking inquiry:', err);
      // Continue even if tracking fails
    }

    const servicesList = generateServicesList();
    const body = `Hi,\n\nI'm interested in the following services:\n\n${servicesList}\n\nMy Details:\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone}\n\nPlease get in touch to discuss pricing and details. I look forward to hearing from you.\n\nBest regards,\n${contactForm.name}`;
    
    const url = getEmailUrl('Service Inquiry - ' + cartItems.map(i => i.plan).join(', '), body);
    window.location.href = url;
    toast.success('Opening email client...');
    setTimeout(() => onClose(), 1000);
  };

  const inputStyle = (name) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '10px 14px',
    color: '#fff',
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  });

  return (
    <>
      <style>{`
        @keyframes modalOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        
        .contact-modal-overlay { 
          animation: modalOverlay 0.3s ease; 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: '20px';
        }
        
        .contact-modal-content { 
          animation: modalSlideUp 0.4s ease; 
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 32px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .contact-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        
        .contact-modal-title {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
        }
        
        .contact-modal-close {
          background: rgba(255,255,255,0.06);
          border: none;
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .contact-modal-close:hover {
          background: rgba(255,255,255,0.12);
          transform: rotate(90deg);
        }
        
        .contact-form-group {
          margin-bottom: 16px;
        }
        
        .contact-form-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 8px;
          display: block;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .contact-option-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }
        
        .contact-btn {
          padding: 12px 16px;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .contact-btn-whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #20BA5D 100%);
          color: #fff;
        }
        
        .contact-btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(37, 211, 102, 0.3);
        }
        
        .contact-btn-email {
          background: linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%);
          color: #fff;
        }
        
        .contact-btn-email:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
        }
        
        .contact-services-list {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 20px;
          max-height: 200px;
          overflow-y: auto;
        }
        
        .contact-service-item {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          padding: 6px 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .contact-info-box {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 16px;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
      `}</style>

      <div className="contact-modal-overlay" onClick={onClose}>
        <div className="contact-modal-content" onClick={e => e.stopPropagation()}>
          <div className="contact-modal-header">
            <h2 className="contact-modal-title">📞 Get in Touch</h2>
            <button className="contact-modal-close" onClick={onClose}>✕</button>
          </div>

          <div className="contact-info-box">
            ✨ <strong>Let's discuss your service needs!</strong> Fill in your details below and reach out via your preferred channel.
          </div>

          {cartItems.length > 0 && (
            <>
              <label className="contact-form-label">Your Services</label>
              <div className="contact-services-list">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="contact-service-item">
                    <span>•</span>
                    <span>{item.serviceTitle} ({item.plan})</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="contact-form-group">
            <label className="contact-form-label">Your Name *</label>
            <input
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              placeholder="e.g., John Doe"
              style={inputStyle('name')}
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
              placeholder="e.g., john@company.com"
              style={inputStyle('email')}
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={contactForm.phone}
              onChange={handleInputChange}
              placeholder="e.g., +880 1234 567890"
              style={inputStyle('phone')}
            />
          </div>

          <div className="contact-option-group">
            <button 
              className="contact-btn contact-btn-whatsapp" 
              onClick={handleContactViaWhatsApp}
            >
              💬 WhatsApp
            </button>
            <button 
              className="contact-btn contact-btn-email" 
              onClick={handleContactViaEmail}
            >
              📧 Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
