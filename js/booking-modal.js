/**
 * Intensive Driving Institute - Universal Booking Modal & Validation Controller
 */

(function () {
  'use strict';

  let modalBackdrop = null;
  let bookingForm = null;
  let successBox = null;
  let triggerButtons = [];

  const config = window.SCHOOL_CONFIG || {
    whatsappNumber: "233243854314",
    name: "Intensive Driving Institute"
  };

  /**
   * Phone Number Validator for Ghana Numbers
   * Matches: 02X, 05X, 03X followed by 7 digits, or +233 2X/5X/3X
   */
  function isValidGhanaPhone(phone) {
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    const ghanaPattern = /^(?:\+?233|0)[235][0-9]{8}$/;
    return ghanaPattern.test(cleanPhone);
  }

  /**
   * Open the Booking Modal
   * @param {Object} [prefillData] - Pre-selected course, package, or gearbox
   */
  function openModal(prefillData = {}) {
    if (!modalBackdrop) return;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset view state
    if (bookingForm) bookingForm.style.display = 'block';
    if (successBox) successBox.style.display = 'none';

    // Handle Prefills if provided
    if (prefillData.course && bookingForm) {
      const courseSelect = bookingForm.querySelector('#modalCourse');
      if (courseSelect) {
        courseSelect.value = prefillData.course;
      }
    }
    if (prefillData.transmission && bookingForm) {
      const transSelect = bookingForm.querySelector('#modalTransmission');
      if (transSelect) {
        transSelect.value = prefillData.transmission;
      }
    }

    // Set minimum date to today
    const dateInput = bookingForm ? bookingForm.querySelector('#modalDate') : null;
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    // Focus the first input for accessibility
    setTimeout(() => {
      const firstInput = bookingForm ? bookingForm.querySelector('#modalFullName') : null;
      if (firstInput) firstInput.focus();
    }, 100);
  }

  /**
   * Close the Booking Modal
   */
  function closeModal() {
    if (!modalBackdrop) return;

    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';

    // Clear form error states
    if (bookingForm) {
      const errorGroups = bookingForm.querySelectorAll('.has-error');
      errorGroups.forEach(g => g.classList.remove('has-error'));
    }
  }

  /**
   * Validates Form and handles WhatsApp dispatch
   */
  function handleFormSubmit(e) {
    e.preventDefault();

    let isValid = true;

    // Elements
    const nameInput = document.getElementById('modalFullName');
    const phoneInput = document.getElementById('modalPhone');
    const whatsappInput = document.getElementById('modalWhatsApp');
    const emailInput = document.getElementById('modalEmail');
    const courseSelect = document.getElementById('modalCourse');
    const transmissionSelect = document.getElementById('modalTransmission');
    const locationSelect = document.getElementById('modalLocation');
    const dateInput = document.getElementById('modalDate');
    const timeSelect = document.getElementById('modalTime');
    const notesInput = document.getElementById('modalNotes');

    // Validation helper
    function setFieldState(input, valid, message) {
      const group = input.closest('.form-group');
      if (!group) return;
      const errorMsg = group.querySelector('.form-error-msg');

      if (!valid) {
        group.classList.add('has-error');
        if (errorMsg && message) errorMsg.textContent = message;
        isValid = false;
      } else {
        group.classList.remove('has-error');
      }
    }

    // Name check
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldState(nameInput, false, 'Please enter your full name.');
    } else {
      setFieldState(nameInput, true);
    }

    // Phone check (Ghana format)
    if (!nameInput.value.trim() || !isValidGhanaPhone(phoneInput.value)) {
      setFieldState(phoneInput, false, 'Enter a valid Ghanaian phone number (e.g. 0244123456 or +233244123456).');
    } else {
      setFieldState(phoneInput, true);
    }

    // Course selection check
    if (!courseSelect.value) {
      setFieldState(courseSelect, false, 'Please choose a preferred driving course.');
    } else {
      setFieldState(courseSelect, true);
    }

    // Location check
    if (!locationSelect.value) {
      setFieldState(locationSelect, false, 'Please select your preferred pickup or training location.');
    } else {
      setFieldState(locationSelect, true);
    }

    if (!isValid) {
      return;
    }

    // Build Formatted WhatsApp Message
    const schoolName = config.name || "Intensive Driving Institute";
    const fullName = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const waPhone = (whatsappInput && whatsappInput.value.trim()) ? whatsappInput.value.trim() : phone;
    const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : 'Not provided';
    const course = courseSelect.options[courseSelect.selectedIndex].text;
    const transmission = transmissionSelect ? transmissionSelect.value : 'Manual or Automatic';
    const location = locationSelect.options[locationSelect.selectedIndex].text;
    const date = (dateInput && dateInput.value) ? dateInput.value : 'Flexible / Soonest available';
    const time = (timeSelect && timeSelect.value) ? timeSelect.value : 'Flexible';
    const notes = (notesInput && notesInput.value.trim()) ? notesInput.value.trim() : 'None';

    const dispatchMessage = 
`Hello ${schoolName}, I would like to enquire about the ${course} (${transmission}).

Enquiry Details:
Name: ${fullName}
Phone: ${phone}
WhatsApp: ${waPhone}
Preferred Location: ${location}
Preferred Time: ${time}
Target Start Date: ${date}
Additional Notes: ${notes}

Sent via ${schoolName} Website`;

    const waUrl = window.WhatsAppSystem 
      ? window.WhatsAppSystem.buildUrl(dispatchMessage) 
      : `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(dispatchMessage)}`;

    // Show confirmation UI inside modal
    if (bookingForm) bookingForm.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';

      const waDirectBtn = document.getElementById('modalSuccessWhatsAppBtn');
      if (waDirectBtn) {
        waDirectBtn.setAttribute('href', waUrl);
      }
    }

    // Automatically open WhatsApp in background / new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  /**
   * Initialize Modal Controls
   */
  function initBookingModal() {
    modalBackdrop = document.getElementById('bookingModalBackdrop');
    if (!modalBackdrop) return;

    bookingForm = document.getElementById('modalBookingForm');
    successBox = document.getElementById('modalSuccessBox');

    // Close buttons inside modal
    const closeBtns = modalBackdrop.querySelectorAll('[data-close-modal]');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    // Close when clicking on backdrop outside modal window
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    // ESC key closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });

    // Form submit listener
    if (bookingForm) {
      bookingForm.addEventListener('submit', handleFormSubmit);
    }

    // Bind all buttons on the page with data-open-modal="booking"
    triggerButtons = document.querySelectorAll('[data-open-modal="booking"]');
    triggerButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const prefill = {
          course: this.getAttribute('data-prefill-course') || '',
          transmission: this.getAttribute('data-prefill-trans') || ''
        };
        openModal(prefill);
      });
    });
  }

  // Expose global methods
  window.BookingModal = {
    open: openModal,
    close: closeModal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingModal);
  } else {
    initBookingModal();
  }
})();
