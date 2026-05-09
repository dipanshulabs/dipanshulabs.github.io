/* ═══════════════════════════════════════════════════════════
   script.js — Portfolio site JavaScript
   Sections:
     1. General UI (nav, drawer, scroll-reveal, particles)
     2. Tool switcher
     3. Engineering Unit Converter
     4. Live Currency Converter (Frankfurter API + fallback)
═══════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════
   1. GENERAL UI
═══════════════════════════════════════════════════════════ */

// ── Footer copyright year ─────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();


// ── Navbar: add white background after scrolling down ─────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


// ── Mobile hamburger menu ─────────────────────────────────
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
  // Prevent background scroll while drawer is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close drawer when any link inside it is clicked
drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));


// ── Scroll-reveal ─────────────────────────────────────────
// Elements with class "reveal" animate in when they enter the viewport.
// Once revealed, we stop observing them (no re-animation on scroll-up).
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));


// ── Floating bubble particles in the hero ─────────────────
// Spawns small translucent circles that drift upward.
(function spawnParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;                 // 20–80 px
    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,                     // random horizontal position
      `top:${60 + Math.random() * 40}%`,                  // start in bottom 40% of hero
      `animation-duration:${8 + Math.random() * 14}s`,   // 8–22 s
      `animation-delay:${Math.random() * -20}s`,          // stagger by offsetting start
      `opacity:${0.1 + Math.random() * 0.3}`
    ].join(';');
    container.appendChild(p);
  }
})();


// ── Active nav-link highlight on scroll ───────────────────
// Highlights the nav link whose section is currently in view.
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('#navbar .nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(
        `#navbar .nav-links a[href="#${entry.target.id}"]`
      );
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => navObserver.observe(s));


// ── Contact form (demo mode) ──────────────────────────────
// Shows a success message after a short delay.
// To send real emails: add action="https://formspree.io/f/YOUR_ID"
// to the <form> in index.html, and delete this event listener.
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


/* ═══════════════════════════════════════════════════════════
   2. TOOL SWITCHER
   Switches between the Unit Converter and Currency Converter
   panels when the top tabs are clicked.
═══════════════════════════════════════════════════════════ */

function switchTool(name) {
  // Show only the panel whose id matches "panel-{name}"
  document.querySelectorAll('.tool-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === 'panel-' + name);
  });
  // Update tab button active state and ARIA attribute
  document.querySelectorAll('.tool-tab-btn').forEach(btn => {
    const isActive = btn.getAttribute('onclick').includes(name);
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });
}


/* ═══════════════════════════════════════════════════════════
   3. ENGINEERING UNIT CONVERTER
   ─────────────────────────────────────────────────────────
   HOW IT WORKS:
   Each unit has a "toBase" multiplier. To convert A → B:
     result = value × A.toBase ÷ B.toBase

   Base (SI) units used:
     Flow Rate → m³/s   Velocity → m/s     Pressure → Pa
     Force     → N      Length   → m       Area     → m²
     Volume    → m³
═══════════════════════════════════════════════════════════ */

const UNITS = {
  flowrate: {
    label: 'Flow Rate',
    units: [
      { label: 'm³/s',  toBase: 1          },  // SI base
      { label: 'L/s',   toBase: 1e-3       },  // 1 L = 0.001 m³
      { label: 'm³/h',  toBase: 1 / 3600   },  // 1 h = 3600 s
      { label: 'GPM',   toBase: 6.30902e-5 },  // US gallon per minute
      { label: 'CFS',   toBase: 0.0283168  },  // cubic feet per second
    ]
  },
  velocity: {
    label: 'Velocity',
    units: [
      { label: 'm/s',  toBase: 1       },
      { label: 'ft/s', toBase: 0.3048  },  // 1 ft = 0.3048 m
      { label: 'km/h', toBase: 1 / 3.6 },  // 1 km/h = 1000/3600 m/s
    ]
  },
  pressure: {
    label: 'Pressure',
    units: [
      { label: 'Pa',    toBase: 1         },  // SI base (Pascal)
      { label: 'kPa',   toBase: 1000      },  // 1 kPa = 1000 Pa
      { label: 'bar',   toBase: 100000    },  // 1 bar = 100,000 Pa
      { label: 'psi',   toBase: 6894.757  },  // pounds per square inch
      { label: 'mH₂O',  toBase: 9806.65  },  // metres of water at standard g
    ]
  },
  force: {
    label: 'Force',
    units: [
      { label: 'N',   toBase: 1        },  // Newton (SI base)
      { label: 'kN',  toBase: 1000     },  // kilonewton
      { label: 'kgf', toBase: 9.80665  },  // kilogram-force
      { label: 'lbf', toBase: 4.44822  },  // pound-force
    ]
  },
  length: {
    label: 'Length',
    units: [
      { label: 'm',    toBase: 1       },
      { label: 'mm',   toBase: 0.001   },
      { label: 'cm',   toBase: 0.01    },
      { label: 'km',   toBase: 1000    },
      { label: 'ft',   toBase: 0.3048  },
      { label: 'inch', toBase: 0.0254  },
    ]
  },
  area: {
    label: 'Area',
    units: [
      { label: 'm²',   toBase: 1          },
      { label: 'ha',   toBase: 10000      },  // 1 hectare = 10,000 m²
      { label: 'acre', toBase: 4046.8564  },  // 1 acre ≈ 4046.86 m²
      { label: 'ft²',  toBase: 0.092903   },  // square feet
    ]
  },
  volume: {
    label: 'Volume',
    units: [
      { label: 'm³',     toBase: 1         },
      { label: 'L',      toBase: 0.001     },  // 1 litre = 0.001 m³
      { label: 'gallon', toBase: 0.0037854 },  // US gallon
      { label: 'ft³',    toBase: 0.028317  },  // cubic feet
    ]
  }
};

// Tracks which category pill is active
let currentCategory = 'flowrate';

// ── Switch to a different measurement category ────────────
function setCategory(catKey) {
  currentCategory = catKey;

  // Update the active pill button
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === UNITS[catKey].label);
  });

  // Rebuild the unit dropdowns for this category
  populateSelects(catKey);
  runConvert();
}

// ── Fill From / To <select> with units for a category ─────
function populateSelects(catKey) {
  const fromSel = document.getElementById('convFrom');
  const toSel   = document.getElementById('convTo');
  const units   = UNITS[catKey].units;

  // Build all <option> tags in one pass
  const html = units.map((u, i) => `<option value="${i}">${u.label}</option>`).join('');
  fromSel.innerHTML = html;
  toSel.innerHTML   = html;

  // Default: first unit → second unit (e.g. m³/s → L/s)
  fromSel.value = '0';
  toSel.value   = units.length > 1 ? '1' : '0';
}

// ── Perform the conversion and update the result box ──────
function runConvert() {
  const value    = parseFloat(document.getElementById('convValue').value);
  const fromIdx  = parseInt(document.getElementById('convFrom').value, 10);
  const toIdx    = parseInt(document.getElementById('convTo').value, 10);
  const resultEl = document.getElementById('convResult');

  // Show dash if input is empty or non-numeric
  if (isNaN(value)) { resultEl.textContent = '—'; return; }

  const units    = UNITS[currentCategory].units;
  const fromUnit = units[fromIdx];
  const toUnit   = units[toIdx];

  // Core formula: value → SI base → target unit
  const result = value * fromUnit.toBase / toUnit.toBase;

  resultEl.textContent = formatNumber(result) + ' ' + toUnit.label;
}

// ── Swap From and To selects ──────────────────────────────
function swapUnits() {
  const fromSel = document.getElementById('convFrom');
  const toSel   = document.getElementById('convTo');
  const tmp     = fromSel.value;
  fromSel.value = toSel.value;
  toSel.value   = tmp;
  runConvert();
}

// ── Smart number formatter ────────────────────────────────
// Uses up to 8 significant figures. Switches to scientific
// notation automatically for very large or very small values.
function formatNumber(n) {
  if (n === 0) return '0';
  const abs = Math.abs(n);
  if (abs >= 1e9 || (abs < 1e-4 && abs > 0)) {
    return n.toExponential(5);
  }
  return Number(n.toPrecision(8)).toString();
}

// Initialise the converter when the page loads
populateSelects('flowrate');
runConvert();


/* ═══════════════════════════════════════════════════════════
   4. LIVE CURRENCY CONVERTER
   ─────────────────────────────────────────────────────────
   Uses the Frankfurter API (https://www.frankfurter.app):
     • Free, open-source, no API key required
     • Endpoint: https://api.frankfurter.app/latest?from=USD
     • Returns: { "base":"USD", "date":"...", "rates": { "EUR":0.92, ... } }
     • Note: USD is the base, so it is NOT in the rates object.
             We add USD:1 manually after fetching.

   Currencies NOT supported by Frankfurter (AED, NGN, EGP)
   always use the FALLBACK_RATES below.

   If the fetch fails entirely (network error, API down),
   ALL currencies fall back to FALLBACK_RATES.

   TO USE A DIFFERENT API:
     Replace the FRANKFURTER_URL and adapt the fetch handler
     in loadLiveRates() to read your API's response structure.
═══════════════════════════════════════════════════════════ */

// ── Currency list ─────────────────────────────────────────
const CURRENCIES = [
  { code: 'USD', name: 'US Dollar',          flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro',               flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound',      flag: '🇬🇧' },
  { code: 'AED', name: 'UAE Dirham',         flag: '🇦🇪' },
  { code: 'JPY', name: 'Japanese Yen',       flag: '🇯🇵' },
  { code: 'CNY', name: 'Chinese Yuan',       flag: '🇨🇳' },
  { code: 'CAD', name: 'Canadian Dollar',    flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar',  flag: '🇦🇺' },
  { code: 'CHF', name: 'Swiss Franc',        flag: '🇨🇭' },
  { code: 'INR', name: 'Indian Rupee',       flag: '🇮🇳' },
  { code: 'BRL', name: 'Brazilian Real',     flag: '🇧🇷' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'NGN', name: 'Nigerian Naira',     flag: '🇳🇬' },
  { code: 'EGP', name: 'Egyptian Pound',     flag: '🇪🇬' },
  { code: 'SGD', name: 'Singapore Dollar',   flag: '🇸🇬' },
];

// ── Fallback rates (relative to USD = 1) ─────────────────
// Used when Frankfurter is unreachable, OR for currencies
// that Frankfurter does not support (AED, NGN, EGP).
const FALLBACK_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  JPY: 149.50,
  CNY: 7.24,
  CAD: 1.36,
  AUD: 1.53,
  CHF: 0.90,
  INR: 83.10,
  BRL: 4.97,
  ZAR: 18.60,
  NGN: 1520.00,
  EGP: 48.50,
  SGD: 1.34,
};

// Working rates object — starts as a copy of fallback,
// then gets overwritten with live data where available.
const RATES = { ...FALLBACK_RATES };

// Tracks the data source for the status indicator
let ratesSource = 'loading';  // 'loading' | 'live' | 'fallback'
let ratesDate   = '';

const FRANKFURTER_URL = 'https://api.frankfurter.app/latest?from=USD';

// ── Fetch live rates from Frankfurter ─────────────────────
async function loadLiveRates() {
  setRatesStatus('loading');
  try {
    const response = await fetch(FRANKFURTER_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    // data.rates contains all currencies EXCEPT the base (USD).
    // Merge live rates on top of FALLBACK_RATES.
    // Currencies missing from the API (AED, NGN, EGP) keep fallback values.
    Object.assign(RATES, data.rates);
    RATES.USD   = 1;          // always ensure USD is present
    ratesDate   = data.date || '';
    ratesSource = 'live';

  } catch (err) {
    // Network failure or API error — silently use fallback rates
    console.warn('Frankfurter API unavailable, using fallback rates.', err);
    Object.assign(RATES, FALLBACK_RATES);
    ratesSource = 'fallback';
  }

  setRatesStatus(ratesSource);
  runCurrency();
}

// ── Update the status dot and text ───────────────────────
function setRatesStatus(status) {
  const dot      = document.getElementById('statusDot');
  const text     = document.getElementById('statusText');
  const rateNote = document.getElementById('currRateNote');

  dot.className = 'status-dot ' + status;

  if (status === 'loading') {
    text.textContent = 'Fetching live rates…';
    rateNote.textContent = '';
  } else if (status === 'live') {
    text.textContent = `Live rates${ratesDate ? ' · ' + ratesDate : ''} · Frankfurter API`;
    rateNote.textContent =
      'AED, NGN, EGP use verified fallback rates (not supported by Frankfurter).';
  } else {
    text.textContent = 'Using fallback rates (API unavailable)';
    rateNote.textContent =
      'Rates are pre-verified reference values. Connect a live API for real-time data.';
  }
}

// ── Populate currency <select> elements ───────────────────
function populateCurrencySelects() {
  const fromSel = document.getElementById('currFrom');
  const toSel   = document.getElementById('currTo');

  const html = CURRENCIES.map(c =>
    `<option value="${c.code}">${c.flag} ${c.code} — ${c.name}</option>`
  ).join('');

  fromSel.innerHTML = html;
  toSel.innerHTML   = html;

  // Default to USD → AED
  fromSel.value = 'USD';
  toSel.value   = 'AED';
}

// ── Run the currency conversion and update the UI ─────────
function runCurrency() {
  const amount   = parseFloat(document.getElementById('currAmount').value);
  const fromCode = document.getElementById('currFrom').value;
  const toCode   = document.getElementById('currTo').value;

  const resultEl = document.getElementById('currResult');
  const labelEl  = document.getElementById('currResultLabel');

  // Guard: invalid or negative amount
  if (isNaN(amount) || amount < 0) {
    resultEl.textContent = '—';
    labelEl.textContent  = 'Enter a valid amount';
    return;
  }

  const rateFrom = RATES[fromCode];
  const rateTo   = RATES[toCode];

  if (!rateFrom || !rateTo) {
    resultEl.textContent = 'Rate unavailable';
    labelEl.textContent  = '';
    return;
  }

  // Conversion via USD as pivot: fromCode → USD → toCode
  const result   = (amount / rateFrom) * rateTo;
  const unitRate = (1 / rateFrom) * rateTo;  // 1 fromCode = X toCode

  resultEl.textContent = result.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' ' + toCode;

  labelEl.textContent =
    `${amount.toLocaleString()} ${fromCode}  ·  1 ${fromCode} = ${unitRate.toFixed(4)} ${toCode}`;
}

// ── Swap the two currency selects ─────────────────────────
function swapCurrency() {
  const fromSel = document.getElementById('currFrom');
  const toSel   = document.getElementById('currTo');
  const tmp     = fromSel.value;
  fromSel.value = toSel.value;
  toSel.value   = tmp;
  runCurrency();
}

// ── Initialise on page load ───────────────────────────────
populateCurrencySelects();
loadLiveRates();  // fetches live rates; falls back automatically if it fails
