/**
 * Intensive Driving Institute - Core Interactive Behaviors & UI Logic
 */

(function () {
  'use strict';

  const config = window.SCHOOL_CONFIG || {};

  /**
   * 1. Sticky Navigation on Scroll
   */
  function initStickyNav() {
    if (document.getElementById('site-header-root')) return;
    const header = document.querySelector('.site-header');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /**
   * 2. Mobile Drawer Navigation
   */
  function initMobileDrawer() {
    if (document.getElementById('site-header-root')) return;
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
    const closeBtn = document.querySelector('.mobile-drawer-close');
    const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

    if (!toggleBtn || !drawerOverlay) return;

    function openDrawer() {
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    }

    toggleBtn.addEventListener('click', openDrawer);

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    drawerOverlay.addEventListener('click', function (e) {
      if (e.target === drawerOverlay) {
        closeDrawer();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawerOverlay.classList.contains('open')) {
        closeDrawer();
      }
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /**
   * 2b. Programs Mega-Dropdown (Keyboard and Touch accessible)
   */
  function initProgramsDropdown() {
    if (document.getElementById('site-header-root')) return;
    const dropdownItem = document.querySelector('.nav-item-dropdown');
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
    const megaMenu = document.querySelector('.programs-mega-menu');

    if (dropdownToggle && dropdownItem) {
      dropdownToggle.addEventListener('click', function (e) {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!isExpanded));
        dropdownItem.classList.toggle('open', !isExpanded);
      });

      document.addEventListener('click', function (e) {
        if (!dropdownItem.contains(e.target)) {
          dropdownToggle.setAttribute('aria-expanded', 'false');
          dropdownItem.classList.remove('open');
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && dropdownItem.classList.contains('open')) {
          dropdownToggle.setAttribute('aria-expanded', 'false');
          dropdownItem.classList.remove('open');
          dropdownToggle.focus();
        }
      });
    }

    // Mobile drawer accordion for Programs
    const accordionBtn = document.querySelector('.mobile-drawer-accordion-btn');
    const submenu = document.querySelector('.mobile-drawer-submenu');
    if (accordionBtn && submenu) {
      accordionBtn.addEventListener('click', function () {
        const isOpen = submenu.classList.contains('open');
        submenu.classList.toggle('open', !isOpen);
        this.setAttribute('aria-expanded', String(!isOpen));
      });
    }
  }

  /**
   * 3. Highlight Active Navigation Link
   */
  function initActiveNav() {
    if (document.getElementById('site-header-root')) return;
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFile = href.split('/').pop().split('#')[0] || 'index.html';
      if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * 4. Pricing Category Tabs Switcher
   */
  function initPricingTabs() {
    const tabButtons = document.querySelectorAll('.pricing-tab-btn');
    const tabPanes = document.querySelectorAll('.pricing-pane');

    if (!tabButtons.length || !tabPanes.length) return;

    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target-pane');

        tabButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        tabPanes.forEach(pane => pane.classList.remove('active'));

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const activePane = document.getElementById(targetId);
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
  }

  /**
   * 5. Accessible FAQ Accordion
   */
  function initFaqAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const item = this.closest('.accordion-item');
        const content = item ? item.querySelector('.accordion-content') : null;
        if (!item || !content) return;

        const isCurrentlyOpen = item.classList.contains('active');

        // Optional: close other accordions in the same group
        const parentAccordion = item.closest('.faq-accordion');
        if (parentAccordion) {
          const siblings = parentAccordion.querySelectorAll('.accordion-item');
          siblings.forEach(sib => {
            if (sib !== item) {
              sib.classList.remove('active');
              const sibBtn = sib.querySelector('.accordion-trigger');
              const sibContent = sib.querySelector('.accordion-content');
              if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
              if (sibContent) sibContent.style.maxHeight = null;
            }
          });
        }

        if (isCurrentlyOpen) {
          item.classList.remove('active');
          this.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // Dynamically calculate height for pre-expanded accordion items
    const activeItems = document.querySelectorAll('.accordion-item.active .accordion-content');
    activeItems.forEach(content => {
      content.style.maxHeight = content.scrollHeight + 'px';
    });

    // Re-adjust heights on screen resize / orientation change
    window.addEventListener('resize', function () {
      const openContents = document.querySelectorAll('.accordion-item.active .accordion-content');
      openContents.forEach(content => {
        content.style.maxHeight = content.scrollHeight + 'px';
      });
    });
  }

  /**
   * 6. Statistics Counter Animation with IntersectionObserver
   */
  function initStatCounters() {
    const statElements = document.querySelectorAll('[data-target-stat]');
    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-target-stat');
          const isPercent = targetStr.includes('%');
          const isPlus = targetStr.includes('+');
          const cleanTarget = parseFloat(targetStr.replace(/[^0-9.]/g, ''));

          let current = 0;
          const duration = 1800; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = cleanTarget / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= cleanTarget) {
              current = cleanTarget;
              clearInterval(timer);
            }

            let formatted = Math.floor(current).toLocaleString();
            if (isPercent) formatted += '%';
            if (isPlus) formatted += '+';

            el.textContent = formatted;
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    statElements.forEach(el => observer.observe(el));
  }

  /**
   * 7. Auto-populate School Details from config.js
   */
  function populateConfigData() {
    // Current Year for Footer
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);

    // Business Name
    const nameElements = document.querySelectorAll('[data-config="name"]');
    nameElements.forEach(el => el.textContent = config.name || "Intensive Driving Institute");

    // Phone Elements
    const phoneDisplayElements = document.querySelectorAll('[data-config="phoneDisplay"]');
    phoneDisplayElements.forEach(el => el.textContent = config.phoneDisplay || "0243 854 314");

    const phoneLinkElements = document.querySelectorAll('[data-config="phoneLink"]');
    phoneLinkElements.forEach(el => el.setAttribute('href', `tel:${config.phoneIntl || config.phone || "+233243854314"}`));

    // WhatsApp Elements
    const waDisplayElements = document.querySelectorAll('[data-config="whatsappDisplay"]');
    waDisplayElements.forEach(el => el.textContent = config.whatsappDisplay || "0243 854 314");

    // Email Elements
    const emailElements = document.querySelectorAll('[data-config="email"]');
    emailElements.forEach(el => {
      el.textContent = config.email || "info@intensivedrivinggh.com";
      if (el.tagName === 'A') {
        el.setAttribute('href', `mailto:${config.email || "info@intensivedrivinggh.com"}`);
      }
    });

    // Address
    const addressElements = document.querySelectorAll('[data-config="address"]');
    addressElements.forEach(el => {
      if (config.address) {
        el.textContent = `${config.address.street}, ${config.address.city}, ${config.address.country}`;
      }
    });
  }

  /**
   * 8. Reference Pricing Table Switcher (media_1790357889531.png)
   */
  function initPricingReferenceTable() {
    const wrappers = document.querySelectorAll('.pricing-ref-wrapper');
    if (!wrappers.length) return;

    wrappers.forEach(wrapper => {
      const tabs = wrapper.querySelectorAll('.pricing-ref-tab');
      const tableBodies = wrapper.querySelectorAll('.pricing-table-body');
      if (!tabs.length || !tableBodies.length) return;

      tabs.forEach(tab => {
        tab.addEventListener('click', function () {
          const targetCategory = this.getAttribute('data-target-tbody');

          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tableBodies.forEach(tb => {
            tb.style.display = 'none';
          });

          this.classList.add('active');
          this.setAttribute('aria-selected', 'true');

          const activeTbody = wrapper.querySelector('#' + targetCategory) || document.getElementById(targetCategory);
          if (activeTbody) {
            activeTbody.style.display = 'table-row-group';
          }
        });
      });
    });
  }

  /**
   * 9. Skeleton Loaders Manager (Zero Layout Shift)
   */
  function initSkeletonLoaders() {
    const images = document.querySelectorAll('.skeleton-img');
    images.forEach(img => {
      const container = img.closest('.skeleton-box');

      function markLoaded() {
        img.classList.add('loaded');
        if (container) {
          container.classList.add('loaded');
        }
      }

      if (img.complete && img.naturalHeight !== 0) {
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded);
        img.addEventListener('error', function () {
          if (container) container.classList.add('loaded');
        });
      }
    });
  }

  // ==========================================================================
  // HERO VIDEO SOUND & PLAYBACK CONTROLLER
  // ==========================================================================
  function initHeroVideo() {
    var video = document.getElementById('heroVideoPlayer');
    var soundBtn = document.getElementById('videoSoundBtn');
    var soundIcon = document.getElementById('videoSoundIcon');
    var soundLabel = document.getElementById('videoSoundLabel');

    if (!video || !soundBtn) return;

    soundBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (video.muted) {
        video.muted = false;
        if (soundIcon) soundIcon.className = 'fa-solid fa-volume-high';
        if (soundLabel) soundLabel.textContent = 'Mute';
        soundBtn.setAttribute('aria-label', 'Mute video sound');
      } else {
        video.muted = true;
        if (soundIcon) soundIcon.className = 'fa-solid fa-volume-xmark';
        if (soundLabel) soundLabel.textContent = 'Tap to Unmute';
        soundBtn.setAttribute('aria-label', 'Unmute video sound');
      }
    });

    // Tap video to toggle play/pause
    video.addEventListener('click', function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  // ==========================================================================
  // GALLERY FILTER & LIGHTBOX CONTROLLER
  // ==========================================================================
  function initGalleryAndLightbox() {
    var filterBtns = document.querySelectorAll('.gallery-filter-btn');
    var galleryCards = document.querySelectorAll('.gallery-card');
    var lightbox = document.getElementById('lightboxModal');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var closeBtn = document.getElementById('lightboxCloseBtn');
    var prevBtn = document.getElementById('lightboxPrevBtn');
    var nextBtn = document.getElementById('lightboxNextBtn');

    // 1. Category Filtering
    if (filterBtns.length > 0 && galleryCards.length > 0) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetCat = this.getAttribute('data-filter');
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          this.classList.add('active');

          galleryCards.forEach(function (card) {
            var cardCat = card.getAttribute('data-category');
            if (targetCat === 'all' || cardCat === targetCat) {
              card.classList.remove('gallery-hidden');
            } else {
              card.classList.add('gallery-hidden');
            }
          });
        });
      });
    }

    // 2. Lightbox functionality
    if (!lightbox || !lightboxImg) return;

    var currentIndex = -1;
    var visibleCards = [];

    function updateVisibleCards() {
      visibleCards = Array.from(document.querySelectorAll('.gallery-card:not(.gallery-hidden), [data-lightbox]:not(.gallery-hidden)'));
    }

    function openLightbox(index) {
      updateVisibleCards();
      if (index < 0 || index >= visibleCards.length) return;
      currentIndex = index;
      var el = visibleCards[currentIndex];
      var img = el.querySelector('img') || el;
      var title = el.getAttribute('data-title') || img.getAttribute('alt') || '';
      var src = el.getAttribute('data-full-src') || img.currentSrc || img.src;

      lightboxImg.src = src;
      lightboxImg.alt = title;
      if (lightboxCaption) lightboxCaption.textContent = title;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
    }

    function showPrev() {
      updateVisibleCards();
      if (visibleCards.length === 0) return;
      var newIndex = (currentIndex - 1 + visibleCards.length) % visibleCards.length;
      openLightbox(newIndex);
    }

    function showNext() {
      updateVisibleCards();
      if (visibleCards.length === 0) return;
      var newIndex = (currentIndex + 1) % visibleCards.length;
      openLightbox(newIndex);
    }

    // Attach click listeners to cards
    document.querySelectorAll('.gallery-card, [data-lightbox]').forEach(function (item) {
      item.addEventListener('click', function (e) {
        updateVisibleCards();
        var idx = visibleCards.indexOf(item);
        if (idx !== -1) {
          openLightbox(idx);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); showNext(); });

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    });
  }

  // Initialize all features on DOM Ready
  function init() {
    initStickyNav();
    initMobileDrawer();
    initProgramsDropdown();
    initActiveNav();
    initPricingTabs();
    initPricingReferenceTable();
    initFaqAccordion();
    initStatCounters();
    initSkeletonLoaders();
    initHeroVideo();
    initGalleryAndLightbox();
    populateConfigData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

