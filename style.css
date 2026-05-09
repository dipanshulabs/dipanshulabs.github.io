/* ═══════════════════════════════════════════════════════════
   style.css — Dipanshu Sharma Portfolio
   Dipanshu Sharma | Water, Hydrology & Climate Portfolio
   ─────────────────────────────────────────────────────────
   TABLE OF CONTENTS
     1. Design Tokens
     2. Reset & Base
     3. Utility (container, section labels, buttons, reveal)
     4. Navigation
     5. Hero
     6. About
     7. Projects
     8. Publications
     9. Services
    10. Tools (Unit Converter + Currency Converter)
    11. Contact
    12. Footer
    13. Responsive Breakpoints
═══════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────
   1. DESIGN TOKENS
   Edit these custom properties to retheme the entire site.
───────────────────────────────────────────────────────── */
:root {
  --ocean:       #0b4f6c;   /* primary dark teal */
  --ocean-mid:   #1a7a9a;   /* medium teal */
  --seafoam:     #4db8a0;   /* green accent */
  --seafoam-lt:  #a8ddd2;   /* light accent */
  --mist:        #e8f4f1;   /* very light teal tint */
  --sand:        #c4a87c;   /* warm amber accent */
  --sand-lt:     #f5efe5;   /* warm section background */
  --slate:       #2c3e50;   /* primary text */
  --slate-mid:   #4a6070;   /* secondary text */
  --slate-lt:    #8fa8b8;   /* muted / hint text */
  --white:       #ffffff;
  --off-white:   #f9fbfa;   /* alternate section background */

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  --nav-h:       68px;
  --section-pad: clamp(5rem, 10vw, 9rem);
  --container:   1080px;
  --radius:      10px;
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
}


/* ─────────────────────────────────────────────────────────
   2. RESET & BASE
───────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--slate);
  background: var(--white);
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a   { color: inherit; text-decoration: none; }
ul  { list-style: none; }


/* ─────────────────────────────────────────────────────────
   3. UTILITY
───────────────────────────────────────────────────────── */
.container {
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 2.5rem);
}

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--seafoam);
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.15;
  color: var(--ocean);
}
.section-title em { font-style: italic; color: var(--seafoam); }

.divider {
  width: 48px;
  height: 2px;
  background: var(--seafoam);
  margin: 1.5rem 0 2.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: all 0.25s var(--ease-out);
  cursor: pointer;
  border: none;
}
.btn-primary            { background: var(--ocean); color: var(--white); }
.btn-primary:hover      { background: var(--ocean-mid); transform: translateY(-2px); }
.btn-outline            { background: transparent; color: var(--ocean); border: 1.5px solid var(--ocean); }
.btn-outline:hover      { background: var(--ocean); color: var(--white); transform: translateY(-2px); }
.btn-white              { background: var(--white); color: var(--ocean); }
.btn-white:hover        { background: var(--mist); }
/* Hero ghost button (white border on dark hero background) */
.btn-hero-outline {
  background: transparent;
  color: rgba(255,255,255,0.9);
  border: 1.5px solid rgba(255,255,255,0.45);
}
.btn-hero-outline:hover { background: rgba(255,255,255,0.12); }

/* Scroll-reveal — elements start invisible; JS adds .visible */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
.reveal.visible  { opacity: 1; transform: none; }
.reveal-delay-1  { transition-delay: 0.1s; }
.reveal-delay-2  { transition-delay: 0.2s; }
.reveal-delay-3  { transition-delay: 0.3s; }
.reveal-delay-4  { transition-delay: 0.4s; }


/* ─────────────────────────────────────────────────────────
   4. NAVIGATION
───────────────────────────────────────────────────────── */
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  z-index: 1000;
  transition: background 0.35s, box-shadow 0.35s;
}
/* White frosted background appears only after scrolling */
#navbar.scrolled {
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(11,79,108,0.1);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.01em;
  transition: color 0.35s;
  white-space: nowrap;
}
#navbar.scrolled .nav-logo { color: var(--ocean); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.nav-links a {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  transition: color 0.2s;
}
.nav-links a:hover            { color: var(--white); }
#navbar.scrolled .nav-links a { color: var(--slate-mid); }
#navbar.scrolled .nav-links a:hover { color: var(--ocean); }

/* Pill CTA link at the end of the nav */
.nav-cta {
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.4);
  transition: all 0.25s;
}
.nav-cta:hover                { background: rgba(255,255,255,0.28); }
#navbar.scrolled .nav-cta     { background: var(--ocean); color: var(--white); border-color: transparent; }

/* Hamburger (shown on mobile only) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  transition: all 0.3s;
  border-radius: 2px;
}
#navbar.scrolled .hamburger span       { background: var(--ocean); }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile slide-down drawer */
.mobile-drawer {
  display: none;
  position: fixed;
  top: var(--nav-h); left: 0; right: 0;
  background: rgba(255,255,255,0.98);
  backdrop-filter: blur(16px);
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  z-index: 999;
  flex-direction: column;
  gap: 1.5rem;
}
.mobile-drawer.open { display: flex; }
.mobile-drawer a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--slate);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--mist);
}
.mobile-drawer a:hover { color: var(--ocean); }


/* ─────────────────────────────────────────────────────────
   5. HERO
───────────────────────────────────────────────────────── */
#home {
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(155deg, #082f42 0%, #0b4f6c 42%, #1a7a9a 80%, #2aaa8e 100%);
}
/* Subtle grid overlay */
.grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}
/* Animated SVG waves (behind text) */
.hero-waves { position: absolute; inset: 0; pointer-events: none; }
/* Floating bubble particles created by JS */
.hero-particles { position: absolute; inset: 0; pointer-events: none; }
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(77,184,160,0.18);
  animation: float linear infinite;
}
@keyframes float {
  0%   { transform: translateY(0) scale(1);   opacity: 0.4; }
  50%  { opacity: 0.8; }
  100% { transform: translateY(-120vh) scale(0.6); opacity: 0; }
}
/* Text content sits above all decorations */
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: var(--nav-h);
}
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(77,184,160,0.18);
  border: 1px solid rgba(77,184,160,0.4);
  border-radius: 100px;
  padding: 0.35rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--seafoam-lt);
  margin-bottom: 2rem;
}
.hero-tag::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--seafoam);
}
.hero-h1 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1.06;
  color: var(--white);
  margin-bottom: 1rem;
}
.hero-h1 em { font-style: italic; color: var(--seafoam-lt); }
.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  color: rgba(255,255,255,0.72);
  max-width: 580px;
  line-height: 1.75;
  margin-bottom: 2.5rem;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Four focus stat tiles (no years anywhere) */
.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 4rem;
  flex-wrap: wrap;
}
.stat-icon  { font-size: 1.5rem; line-height: 1; margin-bottom: 0.3rem; }
.stat-focus {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--white);
  line-height: 1.2;
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-top: 0.2rem;
}
/* Bouncing scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.5);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  animation: scrollBounce 2s ease-in-out infinite;
  z-index: 2;
}
.hero-scroll svg { width: 20px; height: 20px; }
@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}


/* ─────────────────────────────────────────────────────────
   6. ABOUT
───────────────────────────────────────────────────────── */
#about { padding-block: var(--section-pad); background: var(--white); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 8vw, 7rem);
  align-items: start;
}
.about-portrait-wrap { position: relative; }
.about-portrait {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: var(--radius);
  filter: saturate(0.9);
}
/* Shown when no real photo has been added yet */
.about-portrait-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: var(--radius);
  background: linear-gradient(145deg, var(--mist), var(--seafoam-lt));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--ocean-mid);
}
.about-portrait-placeholder svg  { width: 56px; height: 56px; opacity: 0.4; }
.about-portrait-placeholder span { font-size: 0.8rem; opacity: 0.6; }

.about-body p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--slate-mid);
  margin-bottom: 1.25rem;
}
.about-actions { margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap; }

/* Competency chip grid */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;
}
.skill-chip {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  background: var(--mist);
  border-radius: var(--radius);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ocean);
}
.skill-chip::before {
  content: '';
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--seafoam);
  flex-shrink: 0;
}


/* ─────────────────────────────────────────────────────────
   7. PROJECTS
───────────────────────────────────────────────────────── */
#projects { padding-block: var(--section-pad); background: var(--off-white); }
.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.project-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(11,79,108,0.06);
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(11,79,108,0.1);
}
.project-thumb {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.project-thumb svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.project-tag {
  position: absolute; top: 1rem; left: 1rem;
  background: rgba(255,255,255,0.92);
  color: var(--ocean);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
}
.project-body  { padding: 1.5rem; }
.project-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--ocean);
  margin-bottom: 0.6rem;
  line-height: 1.3;
}
.project-desc {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--slate-mid);
  margin-bottom: 1.25rem;
}
.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--mist);
  padding-top: 1rem;
}
.project-location {
  font-size: 0.75rem;
  color: var(--slate-lt);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.project-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ocean-mid);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s;
}
.project-link:hover { color: var(--seafoam); }
.project-link svg   { width: 14px; height: 14px; }


/* ─────────────────────────────────────────────────────────
   8. PUBLICATIONS
───────────────────────────────────────────────────────── */
#publications { padding-block: var(--section-pad); background: var(--white); }
.pub-list { display: flex; flex-direction: column; gap: 1.25rem; }
.pub-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(11,79,108,0.08);
  border-radius: var(--radius);
  background: var(--white);
  transition: border-color 0.25s, box-shadow 0.25s;
}
.pub-item:hover {
  border-color: var(--seafoam);
  box-shadow: 0 4px 20px rgba(77,184,160,0.1);
}
.pub-year {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--seafoam);
  min-width: 52px;
  text-align: center;
  padding-top: 0.1rem;
}
.pub-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--ocean);
  line-height: 1.35;
  margin-bottom: 0.4rem;
}
.pub-authors { font-size: 0.82rem; color: var(--slate-lt); margin-bottom: 0.35rem; font-style: italic; }
.pub-journal { font-size: 0.82rem; font-weight: 500; color: var(--slate-mid); }
.pub-badges  { display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap; }
.pub-badge {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.badge-water   { background: #ddf0f9; color: #0b4f6c; }
.badge-climate { background: #e1f5ee; color: #0f6e56; }
.badge-model   { background: #faeeda; color: #854f0b; }
.badge-urban   { background: #eeedfe; color: #3c3489; }
.pub-cta { margin-top: 2.5rem; }


/* ─────────────────────────────────────────────────────────
   9. SERVICES
───────────────────────────────────────────────────────── */
#services {
  padding-block: var(--section-pad);
  background: var(--ocean);
  position: relative;
  overflow: hidden;
}
/* Subtle grid overlay on the dark background */
.services-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.services-container   { position: relative; z-index: 1; }
#services .section-label { color: var(--seafoam-lt); }
#services .section-title { color: var(--white); }
#services .divider        { background: var(--seafoam); }
.services-intro {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.65);
  max-width: 640px;
  margin-bottom: 3rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}
.service-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  padding: 1.75rem;
  transition: background 0.3s, transform 0.3s var(--ease-out);
}
.service-card:hover { background: rgba(255,255,255,0.11); transform: translateY(-4px); }
.service-icon {
  width: 44px; height: 44px;
  background: rgba(77,184,160,0.2);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
}
.service-icon svg { width: 22px; height: 22px; stroke: var(--seafoam); fill: none; stroke-width: 1.8; }
.service-name { font-family: var(--font-display); font-size: 1.2rem; font-weight: 400; color: var(--white); margin-bottom: 0.6rem; }
.service-desc { font-size: 0.875rem; line-height: 1.7; color: rgba(255,255,255,0.6); }


/* ─────────────────────────────────────────────────────────
   10. TOOLS
───────────────────────────────────────────────────────── */
#tools { padding-block: var(--section-pad); background: var(--off-white); }

/* Top-level switcher tabs */
.tool-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: var(--mist);
  padding: 5px;
  border-radius: 100px;
  width: fit-content;
  flex-wrap: wrap;
}
.tool-tab-btn {
  padding: 0.55rem 1.4rem;
  border-radius: 100px;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--slate-mid);
  cursor: pointer;
  transition: all 0.22s var(--ease-out);
  letter-spacing: 0.04em;
}
.tool-tab-btn.active {
  background: var(--ocean);
  color: var(--white);
  box-shadow: 0 2px 8px rgba(11,79,108,0.25);
}
.tool-tab-btn:hover:not(.active) { color: var(--ocean); }

/* Panel visibility toggled by JS */
.tool-panel        { display: none; }
.tool-panel.active { display: block; }

/* White card wrapper */
.tool-card {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid rgba(11,79,108,0.07);
  padding: clamp(1.5rem, 4vw, 2.5rem);
}
.tool-intro {
  font-size: 0.9rem;
  color: var(--slate-mid);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.tool-intro a { color: var(--ocean-mid); text-decoration: underline; }

/* Category pill buttons */
.cat-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;
}
.cat-btn {
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1.5px solid rgba(11,79,108,0.18);
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--slate-mid);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;
}
.cat-btn.active             { background: var(--seafoam); border-color: var(--seafoam); color: var(--white); }
.cat-btn:hover:not(.active) { border-color: var(--ocean-mid); color: var(--ocean); }

/* Five-column converter row: value | from | ⇄ | to | result */
.converter-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1.1fr;
  gap: 0.75rem;
  align-items: end;
}
.conv-col { display: flex; flex-direction: column; }
.conv-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--slate-lt);
  margin-bottom: 0.35rem;
}
/* Shared style for number input and selects */
.conv-input, .conv-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(11,79,108,0.14);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--slate);
  background: var(--off-white);
  outline: none;
  transition: border-color 0.2s;
}
.conv-input:focus, .conv-select:focus { border-color: var(--ocean-mid); background: var(--white); }
.conv-select { cursor: pointer; }
/* Circular swap button — rotates on hover */
.conv-swap {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(11,79,108,0.2);
  background: var(--white);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.25s;
  flex-shrink: 0;
  font-size: 1rem;
  color: var(--ocean-mid);
}
.conv-swap:hover { background: var(--ocean); border-color: var(--ocean); color: var(--white); transform: rotate(180deg); }
/* Result is read-only output — visually distinct from inputs */
.conv-result {
  background: var(--mist);
  border: 1.5px solid rgba(77,184,160,0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--ocean);
  min-height: 48px;
  display: flex;
  align-items: center;
  word-break: break-all;
}
.conv-note { margin-top: 1.25rem; font-size: 0.8rem; color: var(--slate-lt); line-height: 1.6; }
.conv-note strong { color: var(--slate-mid); font-weight: 500; }

/* Stack converter on small screens */
@media (max-width: 640px) {
  .converter-row   { grid-template-columns: 1fr 1fr; }
  .conv-col-swap   { grid-column: 1 / -1; display: flex; justify-content: center; }
  .conv-col-result { grid-column: 1 / -1; }
}

/* Currency converter layout */
.currency-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: end;
  margin-bottom: 1.5rem;
}
.currency-amount-input { margin-bottom: 0.6rem; }
/* Aligns the "to" select with the "from" select (skips the amount input height) */
.currency-to-spacer {
  height: calc(0.75rem * 2 + 1rem + 0.6rem);
  display: flex;
  align-items: flex-end;
}
.currency-to-spacer .conv-select { width: 100%; }
.currency-swap-col { display: flex; align-items: flex-end; padding-bottom: 2px; }
/* Big ocean-gradient result box */
.currency-result-box {
  background: linear-gradient(135deg, var(--ocean) 0%, var(--ocean-mid) 100%);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: 0.5rem;
}
.currency-result-amount {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.1;
}
.currency-result-label {
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--seafoam-lt);
  margin-top: 0.4rem;
}
/* Status strip: green dot = live, amber = fallback, grey pulse = loading */
.currency-status-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.78rem;
  color: var(--slate-lt);
  flex-wrap: wrap;
  text-align: center;
}
.status-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.status-dot.live     { background: #4db8a0; }
.status-dot.fallback { background: var(--sand); }
.status-dot.loading  { background: var(--slate-lt); animation: pulse 1.2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{ opacity:1; } 50%{ opacity:0.3; } }
.currency-rate-note {
  font-size: 0.78rem;
  color: var(--slate-lt);
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.6;
}
@media (max-width: 560px) {
  .currency-grid     { grid-template-columns: 1fr; }
  .currency-swap-col { display: flex; justify-content: center; }
}


/* ─────────────────────────────────────────────────────────
   11. CONTACT
───────────────────────────────────────────────────────── */
#contact { padding-block: var(--section-pad); background: var(--sand-lt); }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: clamp(3rem, 8vw, 7rem);
  align-items: start;
}
.contact-info p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--slate-mid);
  margin-bottom: 2rem;
}
/* Individual contact detail row (icon + label + value) */
.contact-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.contact-icon-wrap {
  width: 42px; height: 42px;
  border-radius: 10px;
  background: var(--mist);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.contact-icon-wrap svg { width: 18px; height: 18px; stroke: var(--ocean-mid); fill: none; stroke-width: 1.8; }
.contact-label { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--slate-lt); }
.contact-value { font-size: 0.95rem; color: var(--slate); font-weight: 400; }
/* "Contact details will be added later" notice */
.contact-pending {
  font-size: 0.85rem;
  color: var(--slate-lt);
  font-style: italic;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background: var(--mist);
  border-radius: var(--radius);
  border-left: 3px solid var(--seafoam);
}
/* Social / professional profile icon row */
.social-links { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.social-link {
  width: 40px; height: 40px;
  border-radius: 8px;
  border: 1.5px solid rgba(11,79,108,0.18);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.25s;
}
.social-link svg      { width: 17px; height: 17px; stroke: var(--ocean-mid); fill: none; stroke-width: 1.8; }
.social-link:hover    { background: var(--ocean); border-color: var(--ocean); }
.social-link:hover svg { stroke: white; }

/* Contact form card */
.contact-form {
  background: var(--white);
  border-radius: var(--radius);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 32px rgba(11,79,108,0.08);
}
.form-row     { margin-bottom: 1.25rem; }
.form-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--slate-mid);
  margin-bottom: 0.5rem;
}
.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(11,79,108,0.14);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--slate);
  background: var(--off-white);
  outline: none;
  transition: border-color 0.2s;
}
.form-input:focus, .form-textarea:focus { border-color: var(--ocean-mid); background: var(--white); }
.form-textarea { resize: vertical; min-height: 130px; }
.form-btn      { width: 100%; padding: 0.9rem; font-size: 0.9rem; }
.form-row-duo  { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-success  {
  display: none;
  text-align: center;
  padding: 2rem;
  color: var(--ocean);
  font-family: var(--font-display);
  font-size: 1.2rem;
}


/* ─────────────────────────────────────────────────────────
   12. FOOTER
───────────────────────────────────────────────────────── */
footer {
  background: var(--slate);
  color: rgba(255,255,255,0.5);
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  line-height: 1.7;
}
footer a { color: var(--seafoam-lt); }


/* ─────────────────────────────────────────────────────────
   13. RESPONSIVE BREAKPOINTS
───────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .nav-links                     { display: none; }
  .hamburger                     { display: flex; }
  .about-grid, .contact-grid     { grid-template-columns: 1fr; }
  .form-row-duo                  { grid-template-columns: 1fr; }
  .hero-stats                    { gap: 1.5rem; }
  .projects-header               { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 480px) {
  .hero-h1     { font-size: 2.8rem; }
  .skills-grid { grid-template-columns: 1fr; }
}
