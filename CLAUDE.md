# Project

Build a responsive mobile-first single-page website.

## Source of truth

Before designing or changing the page, read:
- brief/project.md
- brief/design.md
- brief/content.md
- references/notes.md

Inspect relevant reference images and supplied photographs.
Do not infer their appearance from filenames.

If information is missing, identify it. Do not invent testimonials,
qualifications, client counts, prices, or business claims.

## Implementation

Use Vite, semantic HTML, CSS, and minimal JavaScript.
Keep dependencies minimal.
Store reusable colors, spacing, and typography in CSS custom properties.
Use public/images for website images.

Keep these package scripts working:
- npm run dev
- npm run build
- npm run preview

## Design

Follow the project's visual brief when applying design skills.
Base visual decisions on the actual subject, content, and photography.

Use a clear reading order, readable typography, and deliberate spacing.
Choose section layouts according to their content.
Use cards only when the content represents distinct grouped items.

Avoid decorative gradients, glass effects, floating shapes, excessive
rounded containers, and repeated entrance animations unless the brief
specifically calls for them.

Do not replace those defaults with another generic aesthetic.
Restraint and consistency matter more than novelty.

## Content

Use specific, natural language.The text is written in the first person.
Avoid empty marketing phrases and unsupported superlatives.
Keep missing content clearly marked during development.
Every button must have a real destination or implemented action.

## Quality

The website is mobile-first. Support mobile and desktop layouts.
Preserve sensible photo crops and image proportions.
Use accessible contrast, visible focus states, semantic headings,
form labels where needed, and appropriate alternative text.
Respect reduced-motion preferences.

After meaningful changes, run the build.
Inspect the rendered page at mobile and desktop sizes when browser
tools are available. Report what was actually checked.

## Working style

Implement in small, reviewable steps.
Preserve approved design decisions.
When I approve a design change, update brief/design.md accordingly.
When I approve or sujjest a content change, update brief/content.md accordingly.