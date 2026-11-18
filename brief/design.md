# Design Direction

## Purpose

Create a personal, welcoming single-page website for Arina’s teaching practice.

The design should feel calm, natural, and professional. Make the teaching offer easy to understand and the next step easy to find.

Follow brief/project.md for scope and brief/content.md for content.

## Language

All visible website text must be in Russian, including:
- Navigation and buttons.
- Headings and paragraphs.
- Form labels, placeholders, and validation messages.
- Image alternative text and accessible labels.
- Loading, success, and error messages.
- Page title and meta description.

Use natural Russian phrasing and sentence case.
Use «ёлочки» for quotation marks.
Avoid English labels, transliterated marketing terms, and uppercase headings.

Do not display internal notes, placeholder markers, or unconfirmed facts.
Do not invent testimonials, qualifications, prices, or course outcomes.

## Mobile-first approach

Design and implement the mobile layout first.

Start with a single-column composition for widths of 360–430px.
Ensure the page also works at 320px without horizontal scrolling.

Use base CSS for mobile. Add larger layouts with min-width media queries only when the content benefits from more space.

Complete the mobile reading order, spacing, typography, navigation, and interactions before adapting the page to desktop.

Do not treat mobile as a compressed desktop layout.

## Color palette

Use cool gray-green backgrounds, warm linen surfaces, deep olive accents, and dark charcoal-green text.

| Token | Value | Use |
|---|---|---|
| --color-background | #F2F4F2 | Main page background |
| --color-surface | #FFFFFF | Controls and occasional surfaces |
| --color-mist | #DCE2DF | Cool supporting sections |
| --color-linen | #E7E1D5 | Warm supporting sections |
| --color-text | #293029 | Main text and headings |
| --color-text-muted | #566057 | Secondary text |
| --color-primary | #48523A | Primary buttons and links |
| --color-primary-hover | #37402D | Button hover and active states |
| --color-border | #CDD3CC | Decorative separators |
| --color-control-border | #788274 | Input boundaries |
| --color-focus | #48523A | Keyboard focus outline |

Course section (approved change): a deep olive panel so the main offer
stands out.

| Token | Value | Use |
|---|---|---|
| --color-deep | #343C2B | Course section background |
| --color-on-deep | #F2F4F2 | Text on the course panel |
| --color-on-deep-muted | #C9CFC4 | Secondary text on the course panel |
| --color-deep-border | #5C6650 | Separators on the course panel |

On the course panel, the date uses linen (#E7E1D5) and the button uses
a linen background with dark text.

Keep most of the page on the main background.
Use linen and mist selectively to group related content.
Use olive primarily for actions, small accents, and the course panel.

Avoid gradients, saturated colors, pure black backgrounds, and alternating section colors without a content-based reason.

Use white text on primary buttons.
Keep body text dark even on pale surfaces.
Check contrast for every actual foreground and background combination.

## Typography

Use Montserrat for all typography:
- Headings.
- Body text.
- Navigation.
- Buttons.
- Forms.
- Supporting details.

Load Montserrat with Cyrillic support.
Use a generic sans-serif fallback only while the font loads or if loading fails.
Do not introduce another display, serif, or handwritten font.

Use these weights:
- 400: body text.
- 500: navigation, labels, and supporting emphasis.
- 600: headings and buttons.
- 700: occasional strong emphasis.

Avoid thin weights and excessive bold text.

### Mobile typography

| Element | Size | Line height | Weight |
|---|---|---|---|
| Main heading | 32–38px | 1.15–1.2 | 600 |
| Section heading | 26–30px | 1.2–1.3 | 600 |
| Subheading | 20–22px | 1.3 | 600 |
| Body text | 16–17px | 1.6 | 400 |
| Buttons and navigation | 16px | 1.4 | 500–600 |
| Supporting text | 14px | 1.5 | 400 |

### Desktop typography

| Element | Size | Line height | Weight |
|---|---|---|---|
| Main heading | 48–56px | 1.15 | 600 |
| Section heading | 34–40px | 1.2 | 600 |
| Subheading | 22–24px | 1.3 | 600 |
| Body text | 18px | 1.6 | 400 |
| Buttons and navigation | 16px | 1.4 | 500–600 |
| Supporting text | 14–15px | 1.5 | 400 |

Use rem units and fluid sizing where appropriate.
Allow Russian headings to wrap naturally.
Do not insert manual line breaks that only work at one screen width.

Keep normal letter spacing for body text.
Headings may use slight negative tracking, no tighter than -0.02em.

Use mostly left-aligned text.
Avoid justified paragraphs, uppercase labels, and decorative emphasis on isolated words.

Keep desktop paragraphs approximately 55–70 characters wide.
On mobile, let text use the available width within page padding.

## Mobile layout and spacing

Use 20px horizontal padding, reduced to 16px on very narrow screens.
Use 48–64px between major sections.

Suggested spacing scale:
4, 8, 12, 16, 24, 32, 48, 64, 96px.

Keep:
- Headings close to the content they introduce.
- Related details together.
- Paragraphs short enough to scan comfortably.
- Clear separation between different offers.

Avoid large empty areas that force unnecessary scrolling.
Do not impose fixed heights on text sections.

## Header

Keep the mobile header compact.

Show Arina’s approved public name and a small number of useful navigation options.

If navigation fits comfortably, show direct links.
If it requires a menu, use a menu button with an accessible expanded state.
Approved: on mobile the menu button is a three-line icon (accessible
label «Меню») that turns into a cross while the menu is open.

Do not invent a logo or professional title.
Avoid a persistent header if it takes too much space on small screens.

## Opening section

Use this mobile reading order:
1. Name or professional description, if needed.
2. Main heading.
3. Short introduction.
4. Primary action.
5. Portrait.

Keep the heading and introduction concise.
Use one visually dominant action.
A secondary action should appear as an understated text link.

Give the portrait enough space to establish a personal presence without pushing the introduction far down the page.

Approved sizing: on mobile, the portrait uses a 5:4 crop inside the blob outline.
On desktop, the portrait column is about 400px wide and its height equals
the text column (headline, introduction, actions); the image is cropped
to fit with object-fit: cover.

Actions: a primary button «Написать в Telegram» and a secondary text link
to the course section showing the intake date.

Do not force the opening section to fill the viewport.
Avoid text overlays, floating badges, decorative shapes, and invented statistics.

## Section composition

Choose layouts according to the content.

About:
Use short paragraphs with clear emphasis on Arina’s teaching work.
On desktop, the photo (about 420px wide, close to its natural 2:3) and
the text block share one height. Confirmed facts appear as label–value rows under the text.

Course:
Separate the course description from practical information.
Present dates, format, duration, and price as readable labelled details when available.
Use the deep olive panel. Show the intake date in large type
(Montserrat 500). From 1024px: two columns (description | details and
button), then the four weeks as four columns (week label, title, short
description). Below 1024px the weeks are rows.

Topics («С чем приходят на занятия»):
Rows on the main background with thin separators. Topic name at
subheading size (weight 500) on the left, description on the right.
Do not automatically turn three topics into three identical cards.

Other offers:
Use distinct blocks only when there are genuinely separate offers.

Contact:
Finish with a short invitation and a clear working action.
Primary filled button and secondary outlined button.
Desktop (approved): extra vertical padding; square photo about 420px
wide in a blob outline (--radius-blob-alt), related to the hero blob but
with different curves. No badge on the photo.
Mobile (approved): the photo is hidden; a plain olive Telegram plane icon
(28px, not clickable, no circle) sits beside the heading «Напишите мне».

Footer:
Olive (--color-primary) background, light text. Navigation links at
15px. Desktop: socials column left, navigation column centred, name
right, copyright below a faint divider.

Use section backgrounds, spacing, and typography to establish hierarchy.
Avoid enclosing every section in a rounded container.

## Images

Use intentional image placement and preserve natural proportions.

Check cropping at each layout size.
Keep faces and meaningful gestures visible.
Avoid awkward crops through hands or joints.

Use rectangular images with square corners or a subtle radius up to 8px.
Avoid circular portraits, arches, blob masks, heavy filters, and artificial shadows.
Approved exception: the hero portrait uses an organic blob outline
(asymmetric border-radius, token --radius-blob; see references/reference4.jpeg).
The contact photo uses a related blob (--radius-blob-alt).
Keep all other photos rectangular.

Do not repeat an image merely to fill space.
Set image dimensions to prevent layout shifts.
Provide appropriately sized assets for mobile screens.

## Buttons and links

Primary buttons (approved style, see references/reference3.jpg):
- Pill shape (fully rounded ends).
- Olive background with a 2px olive border.
- White text, sentence case (no uppercase).
- Montserrat, weight 600.
- Minimum height of 52px.
- Horizontal padding of about 32px.
- No shadow.

On narrow screens, the main action may use the full content width.
On wider screens, size buttons to their labels.

Secondary actions:
Pill-shaped outlined button: transparent background, 2px olive border,
olive text. Underlined text links remain for inline links.

Use specific Russian labels such as:
- «О курсе»
- «Написать Арине»
- «Читать канал»

Only show actions supported by real destinations.
Do not use dead links or simulate successful submissions.

Ensure interactive targets are at least 44 × 44px.
Provide visible hover, active, and keyboard-focus states.
Do not rely on hover to reveal essential information.

## Desktop adaptation

Introduce two-column layouts only when both columns remain comfortable to read.

At approximately 768px:
- Increase page padding to 32px.
- Use columns selectively where content fits.

At approximately 1024px:
- Use a centered container with a maximum width of 1160px.
- Increase section spacing to 80–96px.
- Place opening text on the left and the portrait on the right.
- Allow selected text-and-image sections to use two columns.
- Keep long text narrower than the full container.

Preserve the mobile reading order in the document structure.
Do not stretch paragraphs, images, or buttons simply to fill the screen.

## Motion

Use short transitions of approximately 150–200ms for interactive feedback.

Keep all content visible without animation.
Avoid parallax, scroll-jacking, custom cursors, and repeated entrance effects.

Respect reduced-motion preferences.
Use smooth anchor scrolling only when reduced motion is not requested.

## Visual restraint

Every visual element should support content, navigation, or hierarchy.

Avoid:
- Decorative gradients and glass effects.
- Excessive rounded cards and pill-shaped labels.
- Icons beside every heading.
- Meaningless section numbering.
- Fake handwritten notes.
- Oversized quotation marks.
- Decorative waveforms or microphones without a clear purpose.
- Repetitive layouts chosen only for visual symmetry.
- Generic promises of transformation.

Approved exception — hand-drawn accents (references/reference5.png):
thin pen-like SVG strokes (1.6px, round caps) in muted olive
(--color-stroke #6B7260). No animation, shadows or gradients. Each
accent is tied to a nearby heading, photo or block, and each uses a
different shape:
- Hero heading: a hand-drawn underline under «своим голосом», slightly
  wider than the text; drawn as a background so it follows line breaks.
- «Обо мне»: a loop line just right of the heading, level with the name
  line (desktop ≥1024px only).
- «С чем приходят на занятия»: a short double stroke attached to the
  last word (mobile and desktop).
Mobile shows two accents (underline and the double stroke). No accents on the dark course panel.
Decorative SVGs use aria-hidden="true" and pointer-events: none.
Do not add more than these without approval.

Build character through clear Russian copy, deliberate spacing,
consistent Montserrat typography, and the restrained color palette.

## Review checklist

Review mobile first at 360px and 390px.
Check narrow-screen behavior at 320px.
Then review tablet and desktop layouts.

Verify:
- All visible and accessible text is Russian.
- Montserrat renders Cyrillic correctly.
- Headings wrap without clipping.
- No horizontal scrolling occurs.
- Text remains usable at increased text sizes.
- Images retain appropriate crops.
- Links and buttons work.
- Keyboard focus is visible.
- Text and controls have sufficient contrast.
- Missing content and editorial notes are not displayed.
- The mobile page feels complete before desktop refinements.

Preserve approved decisions and update this file when the direction changes.