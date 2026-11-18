import { defineConfig } from 'vite';

// Development notes are wrapped in <!-- dev:start --> ... <!-- dev:end -->.
// They are visible in `npm run dev` and removed from production builds.
const stripDevNotes = {
  name: 'strip-dev-notes',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(/<!-- dev:start -->[\s\S]*?<!-- dev:end -->\s*/g, ''),
};

export default defineConfig({
  plugins: [stripDevNotes],
});
