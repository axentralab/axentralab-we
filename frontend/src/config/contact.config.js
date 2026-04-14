/**
 * Contact Information Configuration
 * Centralized contact details for WhatsApp, Email, and Phone
 */

export const CONTACT_INFO = {
  PHONE_PRIMARY: '01322695162',
  PHONE_SECONDARY: '01329478744',
  PHONE_WHATSAPP: '01322695162', // Use primary for WhatsApp
  EMAIL: 'axentralab@gmail.com',
  LOCATION: 'Dhaka, Bangladesh',
  TIMEZONE: 'Asia/Dhaka',
};

/**
 * Generate WhatsApp contact URL
 * @param {string} message - Pre-filled message for WhatsApp
 * @param {string} phone - Phone number (with or without +88)
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (message = '', phone = CONTACT_INFO.PHONE_WHATSAPP) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('88') ? cleanPhone : '88' + cleanPhone;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

/**
 * Generate email contact URL
 * @param {string} subject - Email subject
 * @param {string} body - Email body
 * @returns {string} Mailto URL
 */
export const getEmailUrl = (subject = 'Service Inquiry', body = '') => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${CONTACT_INFO.EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Format phone number
 * @param {string} phone
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  return phone?.replace(/(\d{4})(\d)/, '$1-$2') || '';
};

export default CONTACT_INFO;
