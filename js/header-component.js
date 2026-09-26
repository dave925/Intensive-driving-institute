/**
 * Intensive Driving Institute - Reusable Header & Navigation Component
 * Single authoritative source of truth for the site header, navigation, and mobile drawer.
 */

(function () {
  'use strict';

  const NAV_LINKS = [
    { id: 'home', label: 'Home', href: 'index.html', icon: 'fa-solid fa-house' },
    { id: 'about', label: 'About Us', href: 'about.html', icon: 'fa-solid fa-circle-info' },
    {
      id: 'courses',
      label: 'Programs',
      href: 'courses.html',
      icon: 'fa-solid fa-graduation-cap',
      isDropdown: true,
      subItems: [
        {
          title: 'Regular Learning',
          href: 'courses.html#beginner',
          desc: 'Comprehensive 6-week foundational practical & theory training.',
          img: 'assets/images/student-driving-wheel.jpg',
          alt: 'Regular Learning Course'
        },
        {
          title: 'Express Learning',
          href: 'courses.html#refresher',
          desc: 'Intensive 3-week fast-track daily road lessons.',
          img: 'assets/images/mechanics-inspection.jpg',
          alt: 'Express Learning Course'
        },
        {
          title: 'Polishing / Refresher',
          href: 'courses.html#refresher',
          desc: 'Overcome driving hesitation, tight parking & roundabout anxiety.',
          img: 'assets/images/maintenance-jumper-cables.jpg',
          alt: 'Polishing and Refresher Lessons'
        },
        {
          title: 'License Acquisition',
          href: 'courses.html#licensing',
          desc: 'Complete DVLA eye test, computer prep & test car rental.',
          img: 'assets/images/student-license-car.jpg',
          alt: "Driver's License Acquisition"
        }
      ]
    },
    { id: 'gallery', label: 'Gallery', href: 'gallery.html', icon: 'fa-solid fa-camera' },
    { id: 'pricing', label: 'Pricing', href: 'pricing.html', icon: 'fa-solid fa-tags' },
    { id: 'instructors', label: 'Instructors', href: 'instructors.html', icon: 'fa-solid fa-user-tie' },
    { id: 'faq', label: 'FAQs', href: 'faq.html', icon: 'fa-solid fa-circle-question' },
    { id: 'contact', label: 'Contact', href: 'contact.html', icon: 'fa-solid fa-envelope' }
  ];

  function getActivePageKey(rootEl) {
    if (rootEl && rootEl.dataset && rootEl.dataset.activePage) {
      return rootEl.dataset.activePage.toLowerCase();
    }
    const path = window.location.pathname.split('/').pop().toLowerCase();
    if (!path || path === 'index.html' || path === '') return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('courses')) return 'courses';
    if (path.includes('gallery')) return 'gallery';
    if (path.includes('pricing')) return 'pricing';
    if (path.includes('instructors')) return 'instructors';
    if (path.includes('faq')) return 'faq';
    if (path.includes('contact')) return 'contact';
    if (path.includes('404')) return '404';
    return '';
  }

  function generateHeaderHTML(activePage) {
    // Generate desktop nav links
    let desktopNavHtml = '';
    NAV_LINKS.forEach(item => {
      const isActive = item.id === activePage;
      const activeClass = isActive ? ' active' : '';
      const ariaCurrent = isActive ? ' aria-current="page"' : '';

      if (item.isDropdown) {
        desktopNavHtml += `
        <div class="nav-item-dropdown">
          <button type="button" class="nav-dropdown-toggle${activeClass}"${ariaCurrent} aria-expanded="false" aria-haspopup="true">
            <span>${item.label}</span>
            <i class="fa-solid fa-chevron-down dropdown-chevron" aria-hidden="true"></i>
          </button>
          <div class="programs-mega-menu" role="region" aria-label="Programs Menu">
            <div class="programs-mega-grid">
              ${item.subItems.map(sub => `
              <a href="${sub.href}" class="mega-program-card">
                <div class="mega-program-img-wrap skeleton-box">
                  <div class="skeleton-shimmer" aria-hidden="true"></div>
                  <img src="${sub.img}" alt="${sub.alt}" class="mega-program-img skeleton-img" width="180" height="110" loading="lazy">
                </div>
                <h4 class="mega-program-title">${sub.title}</h4>
                <span class="mega-program-link">↳ Learn more</span>
              </a>
              `).join('')}
            </div>
          </div>
        </div>`;
      } else {
        desktopNavHtml += `
        <a href="${item.href}" class="nav-link${activeClass}"${ariaCurrent}>${item.label}</a>`;
      }
    });

    // Generate mobile drawer links
    let mobileNavHtml = '';
    NAV_LINKS.forEach(item => {
      const isActive = item.id === activePage;
      const activeClass = isActive ? ' active' : '';
      const ariaCurrent = isActive ? ' aria-current="page"' : '';

      if (item.isDropdown) {
        mobileNavHtml += `
        <div class="mobile-drawer-accordion-item">
          <button type="button" class="mobile-drawer-accordion-btn${activeClass}"${ariaCurrent} aria-expanded="false">
            <span><i class="${item.icon}"></i> ${item.label}</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="mobile-drawer-submenu">
            ${item.subItems.map(sub => `
            <a href="${sub.href}" class="mobile-drawer-sublink">${sub.title}</a>
            `).join('')}
            <a href="${item.href}" class="mobile-drawer-sublink" style="color: var(--color-accent); font-weight: 600;">View All Programs &rarr;</a>
          </div>
        </div>`;
      } else {
        mobileNavHtml += `
        <a href="${item.href}" class="mobile-drawer-link${activeClass}"${ariaCurrent}>
          <span><i class="${item.icon}" style="margin-right: 0.5rem; opacity: 0.75;"></i> ${item.label}</span>
          <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
        </a>`;
      }
    });

    return `
  <!-- Top Quick Info Bar -->
  <aside class="top-bar" aria-label="Quick Contact &amp; Operating Hours">
    <div class="container top-bar-container">
      <div class="top-bar-left">
        <a href="tel:+233243854314" class="top-bar-link" aria-label="Call Intensive Driving Institute admissions desk">
          <i class="fa-solid fa-phone" aria-hidden="true"></i>
          <span>0243 854 314</span>
        </a>
        <a href="tel:+233555652433" class="top-bar-link hide-mobile" aria-label="Call secondary line">
          <i class="fa-solid fa-phone" aria-hidden="true"></i>
          <span>0555 652 433</span>
        </a>
        <a href="https://wa.me/233243854314" class="top-bar-link" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          <span>WhatsApp Desk</span>
        </a>
        <span class="top-bar-item hide-mobile">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span>INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija</span>
        </span>
      </div>
      <div class="top-bar-right">
        <span class="top-bar-item">
          <i class="fa-solid fa-clock" aria-hidden="true"></i>
          <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
        </span>
      </div>
    </div>
  </aside>

  <!-- Sticky Main Navigation -->
  <header class="site-header">
    <div class="container nav-container">
      <a href="index.html" class="brand-logo" aria-label="Intensive Driving Institute Home">
        <img src="assets/logo.jpg" alt="Intensive Driving Institute Logo" class="brand-logo-img">
        <div class="logo-text">
          <span class="logo-title">INTENSIVE <span>DRIVING</span></span>
          <span class="logo-tagline">INSTITUTE • GHANA</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-menu" aria-label="Primary Navigation">
        ${desktopNavHtml}
      </nav>

      <!-- Nav Actions -->
      <div class="nav-actions">
        <button type="button" class="btn btn-whatsapp btn-sm" data-wa-type="general" title="Chat on WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </button>
        <button type="button" class="btn btn-primary btn-sm" data-open-modal="booking">
          <span>Book Lesson</span>
        </button>
        <button type="button" class="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Overlay -->
  <div class="mobile-drawer-overlay">
    <div class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Drawer">
      <div class="mobile-drawer-header">
        <div class="brand-logo">
          <img src="assets/logo.jpg" alt="Intensive Driving Institute Logo" class="brand-logo-img" style="width:38px; height:38px;">
          <div class="logo-text">
            <span class="logo-title" style="font-size:1.1rem;">INTENSIVE <span>DRIVING</span></span>
          </div>
        </div>
        <button type="button" class="mobile-drawer-close" aria-label="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="mobile-drawer-menu" aria-label="Mobile Navigation">
        ${mobileNavHtml}
      </nav>

      <div class="mobile-drawer-contact">
        <button type="button" class="btn btn-primary btn-block" data-open-modal="booking">
          <i class="fa-solid fa-calendar-check"></i>
          <span>Book Driving Lesson</span>
        </button>
        <button type="button" class="btn btn-whatsapp btn-block" data-wa-type="general">
          <i class="fa-brands fa-whatsapp"></i>
          <span>Chat on WhatsApp</span>
        </button>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); text-align: center; margin-top: 0.5rem; line-height: 1.4;">
          <i class="fa-solid fa-location-dot" style="color: var(--color-accent);"></i> INSIDE GICEL Estates BLK A/17 UP STAIRS, New Weija, Accra<br>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-text-body);"><i class="fa-solid fa-phone" style="color: var(--color-primary);"></i> 0243 854 314 / 0555 652 433</span>
        </div>
      </div>
    </div>
  </div>`;
  }

  function initHeaderBehaviors(container) {
    const header = container.querySelector('.site-header');
    const toggleBtn = container.querySelector('.mobile-toggle');
    const drawerOverlay = container.querySelector('.mobile-drawer-overlay');
    const drawer = container.querySelector('.mobile-drawer');
    const closeBtn = container.querySelector('.mobile-drawer-close');
    const drawerLinks = container.querySelectorAll('.mobile-drawer-link, .mobile-drawer-sublink, .mobile-drawer-contact button');

    // 1. Sticky Navigation on Scroll
    if (header) {
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

    // 2. Responsive Mobile Drawer Toggle
    if (toggleBtn && drawerOverlay) {
      function openDrawer() {
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (closeBtn) closeBtn.focus();
      }

      function closeDrawer() {
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }

      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (drawerOverlay.classList.contains('open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          closeDrawer();
        });
      }

      // Close when clicking outside drawer (on overlay)
      drawerOverlay.addEventListener('click', function (e) {
        if (e.target === drawerOverlay) {
          closeDrawer();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawerOverlay.classList.contains('open')) {
          closeDrawer();
        }
      });

      // Close when any navigation link inside drawer is clicked
      drawerLinks.forEach(link => {
        link.addEventListener('click', function () {
          closeDrawer();
        });
      });
    }

    // 3. Desktop Programs Mega-Dropdown
    const dropdownItem = container.querySelector('.nav-item-dropdown');
    const dropdownToggle = container.querySelector('.nav-dropdown-toggle');
    if (dropdownToggle && dropdownItem) {
      dropdownToggle.addEventListener('click', function (e) {
        e.stopPropagation();
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

    // 4. Mobile Drawer Accordion for Programs
    const accordionBtn = container.querySelector('.mobile-drawer-accordion-btn');
    const submenu = container.querySelector('.mobile-drawer-submenu');
    if (accordionBtn && submenu) {
      accordionBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = submenu.classList.contains('open');
        submenu.classList.toggle('open', !isOpen);
        this.setAttribute('aria-expanded', String(!isOpen));
      });
    }
  }

  function renderHeader() {
    const rootEl = document.getElementById('site-header-root') || document.querySelector('site-header');
    if (!rootEl) return;

    // Prevent duplicate injection
    if (rootEl.dataset.rendered === 'true') return;
    rootEl.dataset.rendered = 'true';

    const activePage = getActivePageKey(rootEl);
    rootEl.innerHTML = generateHeaderHTML(activePage);
    initHeaderBehaviors(rootEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
  } else {
    renderHeader();
  }

  // Export for external verification or manual invocation
  window.SiteHeaderComponent = {
    render: renderHeader,
    NAV_LINKS: NAV_LINKS
  };
})();
