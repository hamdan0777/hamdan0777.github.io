/**
 * Mohammed Hamdan Ruknuddin | BEng Computer Systems Engineering Portfolio
 * Interactive Scripts & Visual System
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initCircuitCanvas();
  initNavigation();
  initProjectFilters();
  initThemeToggle();
  initContactActions();
  initCurrentYear();
  initMediaTabs();
  initLightbox();
});

/* ==========================================================================
   1. Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const typedTextSpan = document.getElementById('typed-text');
  if (!typedTextSpan) return;

  const words = [
    'Autonomous Robotics & ROS 2',
    'Smart Wearable IoT & BLE',
    'Custom PCB Design & 3D CAD',
    'Gesture-Controlled Robotics',
    'Embedded C++ & Python Architectures',
    'Hardware-Software Solutions'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   2. Interactive Circuit / Node Network Canvas
   ========================================================================== */
function initCircuitCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 65);
  const maxDistance = 140;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 242, 254, 0.55)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. Navigation, Mobile Menu & Active Links
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-menu a[href*='${sectionId}']`)
          ?.classList.add('active');
      } else {
        document
          .querySelector(`.nav-menu a[href*='${sectionId}']`)
          ?.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   4. Project Filter Tabs
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('is-hidden');
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.classList.add('is-hidden');
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Theme Toggle (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* ==========================================================================
   6. Contact Actions (Copy Email & Mailto Submit)
   ========================================================================== */
function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
      const email = 'mohamdan8924@gmail.com';
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3000);
        })
        .catch(() => {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);

          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3000);
        });
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const mailtoUrl = `mailto:mohamdan8924@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject}`
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

      window.location.href = mailtoUrl;

      if (formStatus) {
        formStatus.textContent = 'Opening your email client... Thank you!';
        formStatus.className = 'form-status success';
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 5000);
      }

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   7. Dynamic Year
   ========================================================================== */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   8. Project Media Switcher Tabs (PCB vs CAD)
   ========================================================================== */
function initMediaTabs() {
  const tabContainers = document.querySelectorAll('.project-media-wrapper');
  tabContainers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll('.media-tab-btn');
    const img = wrapper.querySelector('.project-media-img');
    const overlay = wrapper.querySelector('.overlay-label');

    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const newSrc = tab.getAttribute('data-img');
        const newCaption = tab.getAttribute('data-caption') || tab.textContent.trim();

        if (img && newSrc) {
          img.src = newSrc;
          img.setAttribute('data-caption', newCaption);
          if (overlay) overlay.textContent = newCaption;
        }
      });
    });
  });
}

/* ==========================================================================
   9. Interactive Lightbox Modal
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('image-lightbox');
  if (!modal) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = modal.querySelector('.lightbox-close');
  const overlay = modal.querySelector('.lightbox-overlay');

  function openLightbox(src, caption) {
    if (!lightboxImg || !src) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || 'Engineering Project Visual';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-trigger').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetImg = el.querySelector('img') || el;
      const src = el.getAttribute('data-img') || targetImg.getAttribute('src');
      const caption = el.getAttribute('data-caption') || targetImg.getAttribute('data-caption') || targetImg.getAttribute('alt');
      openLightbox(src, caption);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}
