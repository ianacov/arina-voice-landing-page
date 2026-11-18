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

Keep most of the page on the main background.
Use linen and mist selectively to group related content.
Use olive primarily for actions and small accents.

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
If it requires a menu, use a clearly labelled menu button with an accessible expanded state.

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

Do not force the opening section to fill the viewport.
Avoid text overlays, floating badges, decorative shapes, and invented statistics.

## Section composition

Choose layouts according to the content.

About:
Use short paragraphs with clear emphasis on Arina’s teaching work.

Course:
Separate the course description from practical information.
Present dates, format, duration, and price as readable labelled details when available.

Topics:
Use a simple list or open text blocks.
Do not automatically turn three topics into three identical cards.

Other offers:
Use distinct blocks only when there are genuinely separate offers.

Contact:
Finish with a short invitation and a clear working action.

Use section backgrounds, spacing, and typography to establish hierarchy.
Avoid enclosing every section in a rounded container.

## Images

Use intentional image placement and preserve natural proportions.

Check cropping at each layout size.
Keep faces and meaningful gestures visible.
Avoid awkward crops through hands or joints.

Use rectangular images with square corners or a subtle radius up to 8px.
Avoid circular portraits, arches, blob masks, heavy filters, and artificial shadows.

Do not repeat an image merely to fill space.
Set image dimensions to prevent layout shifts.
Provide appropriately sized assets for mobile screens.

## Buttons and links

Primary buttons:
- Olive background.
- White text.
- Montserrat, weight 600.
- Minimum height of 48px.
- Horizontal padding of 20–24px.
- Corner radius of 6–8px.

On narrow screens, the main action may use the full content width.
On wider screens, size buttons to their labels.

Secondary actions:
Use underlined text links or restrained outlined buttons.

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