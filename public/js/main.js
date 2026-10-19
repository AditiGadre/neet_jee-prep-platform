/**
 * NEET CBT Platform - Interactive Landing Page Vanilla JS
 * Handles mobile drawer, FAQ accordion (single-open), stat count-up,
 * smooth anchor scroll offset, and contact/enrollment form validation.
 */

(function () {
  'use strict';

  // 1. STICKY NAVBAR SCROLL STATE
  function initNavbarScroll() {
    var navbar = document.querySelector('.site-navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 2. MOBILE HAMBURGER MENU
  function initMobileMenu() {
    var hamburgerBtn = document.querySelector('.nav-hamburger');
    var mobileDrawer = document.querySelector('.mobile-nav-drawer');
    if (!hamburgerBtn || !mobileDrawer) return;

    hamburgerBtn.addEventListener('click', function () {
      var isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburgerBtn.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    // Close drawer when any mobile link is clicked
    var mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = '&#9776;';
      });
    });
  }

  // 3. SMOOTH SCROLL FOR ANCHOR LINKS (WITH NAVBAR OFFSET)
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    var navbar = document.querySelector('.site-navbar');
    var offset = navbar ? navbar.offsetHeight : 72;

    links.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (!targetId || targetId === '#' || targetId.length < 2) return;

        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          var elementPosition = targetEl.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // 4. FAQ ACCORDION (SINGLE-OPEN ONLY)
  function initFaqAccordion() {
    var faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', function () {
        var isAlreadyActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove('active');
          var otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isAlreadyActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 5. STATS COUNT-UP ANIMATION ON SCROLL
  function initStatCounters() {
    var statElements = document.querySelectorAll('.stat-number[data-target]');
    if (!statElements.length) return;

    // Respect user's motion preferences
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var animateCount = function (el) {
      var targetStr = el.getAttribute('data-target') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var numericTarget = parseFloat(targetStr.replace(/[^0-9.]/g, ''));

      if (isNaN(numericTarget) || prefersReducedMotion) {
        el.textContent = prefix + targetStr + suffix;
        return;
      }

      var duration = 1800; // ms
      var startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = Math.min((currentTime - startTime) / duration, 1);
        // easeOutExpo
        var easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        var currentVal = Math.floor(easeProgress * numericTarget);

        el.textContent = prefix + currentVal.toLocaleString('en-IN') + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = prefix + targetStr + suffix;
        }
      }

      window.requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      statElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback if IntersectionObserver not supported
      statElements.forEach(function (el) {
        animateCount(el);
      });
    }
  }

  // 6. ENROLLMENT & CONTACT FORM CLIENT-SIDE VALIDATION
  function initEnrollForm() {
    var form = document.getElementById('enrollForm');
    if (!form) return;

    var alertSuccess = document.getElementById('enrollSuccessAlert');
    var alertError = document.getElementById('enrollErrorAlert');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (alertSuccess) alertSuccess.style.display = 'none';
      if (alertError) alertError.style.display = 'none';

      var fullName = (form.querySelector('[name="fullName"]') || {}).value || '';
      var email = (form.querySelector('[name="email"]') || {}).value || '';
      var phone = (form.querySelector('[name="phone"]') || {}).value || '';
      var plan = (form.querySelector('[name="plan"]') || {}).value || '';
      var targetYear = (form.querySelector('[name="targetYear"]') || {}).value || '';
      var state = (form.querySelector('[name="state"]') || {}).value || '';

      var cleanPhone = phone.replace(/[^0-9]/g, '');

      // Validation Rules
      if (fullName.trim().length < 2) {
        showError('Please enter your full student name.');
        return;
      }

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        showError('Please provide a valid email address for scorecards.');
        return;
      }

      if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
        showError('Please provide a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).');
        return;
      }

      if (!plan) {
        showError('Please select your interested NEET CBT package.');
        return;
      }

      // Success Display
      if (alertSuccess) {
        alertSuccess.textContent = '✓ Application recorded! Preparing instant CBT mock test access for ' + fullName + '...';
        alertSuccess.style.display = 'block';
      }

      // Scroll smoothly to packages or launch modal if integration exists
      setTimeout(function () {
        var pricingSec = document.getElementById('pricing');
        if (pricingSec) {
          pricingSec.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1200);
    });

    function showError(msg) {
      if (alertError) {
        alertError.textContent = '⚠ ' + msg;
        alertError.style.display = 'block';
      } else {
        alert(msg);
      }
    }
  }

  // INITIALIZE ON DOM READY
  document.addEventListener('DOMContentLoaded', function () {
    initNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    initFaqAccordion();
    initStatCounters();
    initEnrollForm();
  });
})();
