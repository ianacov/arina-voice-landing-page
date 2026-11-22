import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { site } from './src/site-config.js';

const escape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const lookup = (path) => {
  const value = path.split('.').reduce((obj, key) => obj?.[key], site);
  if (value === undefined) throw new Error(`site-config: нет значения «${path}»`);
  return value;
};

// Подставляет данные из src/site-config.js в index.html:
//   {{ course.start }}         → значение
//   {{href links.telegram }}   → href="…", а если ссылки ещё нет —
//                                 data-todo="…" (ссылка-заглушка без href)
function siteConfig() {
  return {
    name: 'site-config',
    transformIndexHtml(html) {
      const missing = new Set();
      const out = html.replace(/\{\{(href)?\s*([\w.]+)\s*\}\}/g, (_, isHref, path) => {
        const value = lookup(path);
        if (!isHref) return escape(value);
        if (value) return `href="${escape(value)}"`;
        missing.add(path);
        return `data-todo="НУЖНО ОТ КЛИЕНТА: ${path}"`;
      });
      if (missing.size) {
        console.warn(`\n[site-config] ссылки-заглушки (нет назначения): ${[...missing].join(', ')}\n`);
      }
      return out;
    },
  };
}

// Относительный base: сборка работает и в корне домена,
// и в подпапке GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [siteConfig()],
  build: {
    // Две страницы: главная и страница курса
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        course: fileURLToPath(new URL('./course.html', import.meta.url)),
      },
    },
  },
});
