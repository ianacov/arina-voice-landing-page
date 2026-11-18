import './styles.css';
import { links } from './site-config.js';

// Page-load reveal: start once the font and hero photo are ready (or after a
// short timeout), so text doesn't jump on font swap and the photo doesn't pop in.
const heroImg = document.querySelector('.hero-photo img');
const assetsReady = Promise.all([
  document.fonts ? document.fonts.ready : null,
  heroImg && heroImg.decode ? heroImg.decode().catch(() => {}) : null,
]);
const timeout = new Promise((resolve) => setTimeout(resolve, 1500));
Promise.race([assetsReady, timeout]).then(() => {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => document.documentElement.classList.add('is-ready'));
});

// Apply confirmed contact links; buttons without a destination stay hidden (see CSS).
document.querySelectorAll('[data-link]').forEach((el) => {
  const url = links[el.dataset.link];
  if (url) el.href = url;
});

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

const setOpen = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
};

toggle.addEventListener('click', () => {
  setOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
