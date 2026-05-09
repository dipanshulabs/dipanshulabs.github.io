/* ═══════════════════════════════════════════════════════════
   script.js — Dipanshu Sharma Portfolio
   Handles: navbar, mobile drawer, scroll-reveal, particles,
            active nav highlight, contact form demo mode.
   Tool-specific JavaScript lives in tools/tools.js and
   inside each individual tool HTML file.
═══════════════════════════════════════════════════════════ */

// ── Footer year ────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();


// ── Navbar scroll state ────────────────────────────────────
// Adds a white background when the user scrolls past the hero.
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


// ── Mobile hamburger menu ──────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const drawer      = document.getElementById('mobileDrawer');
const drawerLinks = drawer.querySelectorAll('a');

function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));


// ── Scroll-reveal ──────────────────────────────────────────
// Watches .reveal elements; adds .visible when they enter the viewport.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── Floating hero particles ────────────────────────────────
// Creates small translucent bubbles that drift upward in the hero.
(function spawnParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;
    p.style.cssText = [
      `width:${size}px`, `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `top:${60 + Math.random() * 40}%`,
      `animation-duration:${8 + Math.random() * 14}s`,
      `animation-delay:${Math.random() * -20}s`,
      `opacity:${0.1 + Math.random() * 0.3}`
    ].join(';');
    container.appendChild(p);
  }
})();


// ── Active nav-link highlight ──────────────────────────────
// Highlights the nav link whose section is currently visible.
const navLinks   = document.querySelectorAll('#navbar .nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(
        `#navbar .nav-links a[href="#${entry.target.id}"]`
      );
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));


// ── Contact form demo ──────────────────────────────────────
// Shows a success message. Replace with Formspree for real delivery:
// Add action="https://formspree.io/f/YOUR_ID" to <form> and remove this.
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.disabled    = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    this.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1200);
});
