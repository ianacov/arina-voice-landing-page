// Стили и шрифты подключены в <head> (link rel=stylesheet), а не отсюда:
// так страница не показывается без стилей ни в dev-режиме, ни на сайте.

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

// Горизонтальная лента карточек (форматы, отзывы): кнопка «дальше»
// и полоса прогресса. Если карточки помещаются без прокрутки,
// кнопка и полоса прячутся.
function initSlider(root) {
  const track = root.querySelector('[data-slider-track]');
  const controls = root.querySelector('[data-slider-controls]');
  const next = root.querySelector('[data-slider-next]');
  const bar = root.querySelector('[data-slider-bar]');

  const update = () => {
    const scrollable = track.scrollWidth > track.clientWidth + 1;
    controls.hidden = !scrollable;
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
  new ResizeObserver(update).observe(track);
}

// Плавное появление (стили — в styles.css, раздел «Плавное появление»).
// Цели: элементы [data-reveal] и дочерние элементы [data-reveal="stagger"].
// Элементы, попавшие на экран одновременно, появляются волной (--reveal-i).
function initReveal() {
  const targets = [...document.querySelectorAll('[data-reveal]')].flatMap((el) =>
    el.dataset.reveal === 'stagger' ? [...el.children] : [el],
  );

  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        || a.boundingClientRect.left - b.boundingClientRect.left)
      .forEach((entry, i) => {
        entry.target.style.setProperty('--reveal-i', String(i));
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
  }, { rootMargin: '0px 0px -8% 0px' });

  targets.forEach((el) => observer.observe(el));
  window.revealReady = true; // см. подстраховку в <head>
}

document.querySelectorAll('[data-video]').forEach(initVideo);
document.querySelectorAll('[data-slider]').forEach(initSlider);
initReveal();
