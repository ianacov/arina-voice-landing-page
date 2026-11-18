import { defineConfig } from 'vite';

// Relative base so the build works both at a domain root and under
// GitHub Pages' /arina-voice-landing-page/ subpath.
export default defineConfig({
  base: './',
});
