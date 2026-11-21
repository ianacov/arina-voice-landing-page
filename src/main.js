// Montserrat локально: 400/500/600 + курсив 500/600, кириллица и латиница.
import '@fontsource/montserrat/cyrillic-400.css';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/cyrillic-500.css';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/cyrillic-600.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/cyrillic-500-italic.css';
import '@fontsource/montserrat/latin-500-italic.css';
import '@fontsource/montserrat/cyrillic-600-italic.css';
import '@fontsource/montserrat/latin-600-italic.css';
import './styles.css';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Видео-фасад: плеер загружается только по клику на ▶.
function initVideo(root) {
  const button = root.querySelector('.video__play');
  const { videoType, videoSrc } = root.dataset;

  if (!videoSrc) {
    // [НУЖНО ОТ КЛИЕНТА: видео] — пока источника нет, кнопка ничего не загружает.
    button.dataset.todo = 'НУЖНО ОТ КЛИЕНТА: video.src';
    return;
  }

  button.addEventListener('click', () => {
    let player;
    if (videoType === 'iframe') {
      player = document.createElement('iframe');
      player.src = videoSrc;
      player.title = 'Видео: послушайте мой голос';
      player.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
      player.allowFullscreen = true;
    } else {
      player = document.createElement('video');
      player.src = videoSrc;
      player.controls = true;
      player.autoplay = true;
      player.playsInline = true;
    }
    root.replaceChildren(player);
    player.focus();
  }, { once: true });
}

// Отзывы на мобильном: кнопка «дальше» и полоса прогресса.
function initReviews(track) {
  const next = document.querySelector('[data-reviews-next]');
  const bar = document.querySelector('[data-reviews-bar]');

  const update = () => {
    const visible = (track.scrollLeft + track.clientWidth) / track.scrollWidth;
    bar.style.width = `${Math.min(1, visible) * 100}%`;
  };

  next.addEventListener('click', () => {
    const behavior = reducedMotion.matches ? 'auto' : 'smooth';
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    if (atEnd) {
      track.scrollTo({ left: 0, behavior });
      return;
    }
    const card = track.firstElementChild;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    track.scrollBy({ left: step, behavior });
  });

  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

document.querySelectorAll('[data-video]').forEach(initVideo);
const reviews = document.querySelector('[data-reviews]');
if (reviews) initReviews(reviews);
