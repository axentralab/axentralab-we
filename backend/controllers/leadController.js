const Lead = require('../models/Lead');

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * Create Service Contact Inquiry
 * Called when users contact via WhatsApp/Email from cart/checkout
 * @Body { name, email, phone, services: [], preferredContact: 'whatsapp' | 'email' }
 */
exports.createServiceInquiry = async (req, res) => {
  try {
    const { name, email, phone, services, preferredContact } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    // Format the message
    const servicesList = services && services.length > 0 
      ? services.map(s => `${s.serviceTitle} (${s.plan})`).join(', ')
      : 'Not specified';

    const message = `Service Inquiry - ${servicesList}. Contact via: ${preferredContact}. Phone: ${phone || 'Not provided'}`;

    const lead = await Lead.create({
      name,
      email,
      phone: phone || '',
      company: '',
      message,
      service: servicesList,
      source: 'service-inquiry',
      status: 'new',
      automationHistory: [{
        action: 'service_contact_initiated',
        details: {
          preferredContact,
          servicesCount: services?.length || 0,
          services: servicesList,
        },
      }],
    });

    res.status(201).json({ 
      success: true, 
      data: lead,
      message: 'Your inquiry has been recorded. We will contact you shortly via ' + preferredContact + '.'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort('-createdAt');
    res.json({ success: true, data: leads, count: leads.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
