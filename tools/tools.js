/* ═══════════════════════════════════════════════════════════
   tools.js — Shared JavaScript for all tool pages.
   Included by every tool HTML file.
   Each tool's specific calculation logic lives inside
   a <script> block at the bottom of its own HTML file.
═══════════════════════════════════════════════════════════ */

// ── Footer year ────────────────────────────────────────────
// Automatically keeps the copyright year current.
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ── Utility: Format a number for display ───────────────────
// Prevents issues like 0.30000000000000004 appearing in output.
// Uses scientific notation for very large or very small values.
function formatNum(n, sigFigs = 6) {
  if (!isFinite(n) || isNaN(n)) return '—';
  if (n === 0) return '0';
  const abs = Math.abs(n);
  // Use scientific notation for numbers outside a comfortable range
  if (abs >= 1e9 || (abs < 1e-4 && abs > 0)) {
    return n.toExponential(4);
  }
  // Remove trailing zeros after decimal point
  return Number(n.toPrecision(sigFigs)).toString();
}


// ── Utility: Show/hide an element ──────────────────────────
function showEl(id)  { const el = document.getElementById(id); if (el) el.style.display = 'block'; }
function hideEl(id)  { const el = document.getElementById(id); if (el) el.style.display = 'none'; }


// ── Utility: Display a result or error in a named element ──
// resultId = element to show the result in
// value    = the formatted string to display
function displayResult(resultId, value) {
  const el = document.getElementById(resultId);
  if (el) el.textContent = value;
}


// ── Utility: Copy text to clipboard ───────────────────────
// Used by copy buttons on result panels.
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => { btn.textContent = original; }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}


// ── Utility: Parse float with error handling ───────────────
// Returns the parsed value or NaN. Used in all calculators.
function parseInput(id) {
  const el = document.getElementById(id);
  if (!el) return NaN;
  return parseFloat(el.value);
}
