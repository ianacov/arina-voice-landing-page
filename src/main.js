import './styles.css';
import { links } from './site-config.js';

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
