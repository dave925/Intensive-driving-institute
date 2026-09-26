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

    switch (type) {
      case 'course': {
        const courseName = dataset.courseTitle || 'Driving Lessons';
        const transmission = dataset.transmission || 'Manual/Automatic';
        return `Hello ${schoolName}! 🚗\n\nI am interested in enrolling in the *${courseName}* (${transmission}).\n\nPlease provide me with available lesson schedules, requirements, and next batch start dates.\n\nThank you!`;
      }

      case 'pricing': {
        const packageName = dataset.packageName || 'Driving Package';
        const price = dataset.packagePrice ? `(GH₵ ${dataset.packagePrice})` : '';
        return `Hello ${schoolName}! 📋\n\nI would like to sign up for the *${packageName}* ${price}.\n\nCould you kindly confirm the 70% deposit breakdown and available training slots in Accra?\n\nThank you!`;
      }

      case 'instructor': {
        const instructorName = dataset.instructorName || 'an instructor';
        return `Hello ${schoolName}! 👋\n\nI would like to request *${instructorName}* as my primary driving instructor for my lessons. Please let me know their current schedule availability.`;
      }

      case 'campus': {
        const campus = dataset.campusName || 'University of Ghana';
        return `Hello ${schoolName}! 🎓\n\nI am a student/resident near *${campus}* and would like to inquire about your campus pick-up routes and student discount package.`;
      }

      case 'general':
      default: {
        return `Hello ${schoolName}! 👋\n\nI would like to book driving lessons. Please provide me with the available packages, prices, and lesson schedules.\n\nThank you!`;
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
      const defaultUrl = buildWhatsAppUrl(config.defaultWhatsAppMessage || "Hello Intensive Driving Institute! I would like to inquire about driving lessons.");
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
