/**
 * Intensive Driving Institute - Dynamic WhatsApp Messaging System
 * Generates context-aware pre-filled WhatsApp links for courses, pricing, and general inquiries.
 */

(function () {
  'use strict';

  // Ensure config is loaded
  const config = window.SCHOOL_CONFIG || {
    whatsappNumber: "233243854314",
    name: "Intensive Driving Institute"
  };

  /**
   * Helper to format a WhatsApp link
   * @param {string} text - Message text to encode
   * @param {string} [phone] - Optional phone override
   * @returns {string} - wa.me URL
   */
  function buildWhatsAppUrl(text, phone) {
    const targetPhone = phone || config.whatsappNumber;
    const cleanPhone = targetPhone.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  }

  /**
   * Generates message based on context
   */
  function getContextMessage(type, dataset) {
    const schoolName = config.name || "Intensive Driving Institute";
    const packageName = dataset.packageName || dataset.courseTitle || '';
    const option = dataset.option || dataset.transmission || '';

    if (packageName && option) {
      return `Hello ${schoolName}, I would like to enquire about the ${packageName}, ${option} package.`;
    } else if (packageName) {
      return `Hello ${schoolName}, I would like to enquire about the ${packageName} package.`;
    }

    switch (type) {
      case 'course': {
        const courseName = dataset.courseTitle || 'Regular Course - 1 Month 3 Weeks';
        const trans = dataset.transmission ? `, ${dataset.transmission}` : '';
        return `Hello ${schoolName}, I would like to enquire about the ${courseName}${trans} package.`;
      }

      case 'pricing': {
        const pkg = dataset.packageName || 'Regular Course - 1 Month 3 Weeks';
        const opt = dataset.option ? `, ${dataset.option}` : '';
        return `Hello ${schoolName}, I would like to enquire about the ${pkg}${opt} package.`;
      }

      case 'general':
      default: {
        return `Hello ${schoolName}, I would like to enquire about your driving courses and available lesson slots.`;
      }
    }
  }

  /**
   * Initialize all WhatsApp buttons on the page
   */
  function initWhatsAppButtons() {
    const waButtons = document.querySelectorAll('[data-wa-type]');

    waButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        // If it's not a direct link or we want dynamic link generation
        const type = this.getAttribute('data-wa-type') || 'general';
        const message = getContextMessage(type, this.dataset);
        const url = buildWhatsAppUrl(message);

        // Open WhatsApp in new tab
        window.open(url, '_blank', 'noopener,noreferrer');
        e.preventDefault();
      });
    });

    // Handle static floating WhatsApp button if present
    const floatingBtn = document.getElementById('floatingWhatsAppBtn');
    if (floatingBtn) {
      const defaultUrl = buildWhatsAppUrl(config.defaultWhatsAppMessage || "Hello Intensive Driving Institute, I would like to enquire about your driving courses and available lesson slots.");
      floatingBtn.setAttribute('href', defaultUrl);
      floatingBtn.setAttribute('target', '_blank');
      floatingBtn.setAttribute('rel', 'noopener noreferrer');
    }
  }

  // Expose utility globally
  window.WhatsAppSystem = {
    buildUrl: buildWhatsAppUrl,
    getContextMessage: getContextMessage
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppButtons);
  } else {
    initWhatsAppButtons();
  }
})();
