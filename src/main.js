// Стили и шрифты подключены в <head> (link rel=stylesheet), а не отсюда:
// так страница не показывается без стилей ни в dev-режиме, ни на сайте.

// Видео-фасад («Фрагменты уроков»): плеер загружается только по клику на ▶.
function initVideo(root) {
  const button = root.querySelector('.video__play');
  const { videoType, videoSrc } = root.dataset;

  if (!videoSrc) {
    // [НУЖНО ОТ КЛИЕНТА: видео] — пока источника нет, кнопка ничего не загружает.
    button.dataset.todo = 'НУЖНО ОТ КЛИЕНТА: lessons[].src';
    return;
  }

  button.addEventListener('click', () => {
    let player;
    if (videoType === 'iframe') {
      player = document.createElement('iframe');
      player.src = videoSrc;
      player.title = button.getAttribute('aria-label');
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

// Аудиоплеер («Послушайте мой голос»): ▶/❚❚ и текущее время.
// Файл не качается, пока не нажали ▶ (preload="none").
function initAudio(root) {
  const button = root.querySelector('.player__play');
  const time = root.querySelector('.player__time');
  const src = root.dataset.audioSrc;

  if (!src) {
    // [НУЖНО ОТ КЛИЕНТА: аудио] — пока источника нет, кнопка ничего не играет.
    button.dataset.todo = 'НУЖНО ОТ КЛИЕНТА: audio.src';
    return;
  }

  const audio = new Audio();
  audio.preload = 'none';
  audio.src = src;
  const format = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const setPlaying = (playing) => {
    root.classList.toggle('is-playing', playing);
    button.setAttribute('aria-label', playing ? 'Пауза' : 'Слушать аудио');
  };

  button.addEventListener('click', () => (audio.paused ? audio.play() : audio.pause()));
  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('timeupdate', () => { time.textContent = format(audio.currentTime); });
}

// Горизонтальная лента карточек (фрагменты уроков, отзывы) с точками
// и, если есть в разметке, стрелками. Точка = одна позиция прокрутки
// (шаг в одну карточку). Если карточки помещаются без прокрутки
// (например, сетка уроков на десктопе), точки и стрелки прячутся.
function initSlider(root) {
  const track = root.querySelector('[data-slider-track]');
  const dots = root.querySelector('[data-slider-dots]');
  const prev = root.querySelector('[data-slider-prev]');
  const next = root.querySelector('[data-slider-next]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const step = () => track.children[0].offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);

  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const scrollable = max > 1;
    const positions = scrollable ? Math.round(max / step()) + 1 : 1;
    if (dots.children.length !== positions) {
      dots.replaceChildren(...Array.from({ length: positions }, () => document.createElement('span')));
    }
    const active = scrollable ? Math.min(positions - 1, Math.round(track.scrollLeft / step())) : 0;
    [...dots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === active));
    dots.hidden = !scrollable;

    if (prev && next) {
      prev.hidden = next.hidden = !scrollable;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
    }
  };

  const scrollByCards = (dir) => track.scrollBy({
    left: dir * step(),
    behavior: reduceMotion.matches ? 'auto' : 'smooth',
  });
  prev?.addEventListener('click', () => scrollByCards(-1));
  next?.addEventListener('click', () => scrollByCards(1));

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

// Внешние ссылки (Telegram, Instagram и т. п.) на десктопе открываются
// в новой вкладке, чтобы сайт оставался открытым. На телефонах и планшетах —
// как обычно: там t.me сразу открывает приложение, а новая вкладка
// осталась бы пустой. «Десктоп» = устройство с мышью/тачпадом.
function initExternalLinks() {
  const desktop = window.matchMedia('(hover: hover) and (pointer: fine)');
  const links = [...document.querySelectorAll('a[href]')]
    .filter((a) => /^https?:$/.test(a.protocol) && a.hostname !== location.hostname);

  const apply = () => links.forEach((a) => {
    if (desktop.matches) {
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.removeAttribute('target');
      a.removeAttribute('rel');
    }
  });

  apply();
  desktop.addEventListener('change', apply);
}

initExternalLinks();
document.querySelectorAll('[data-video]').forEach(initVideo);
document.querySelectorAll('[data-audio]').forEach(initAudio);
document.querySelectorAll('[data-slider]').forEach(initSlider);
initReveal();
