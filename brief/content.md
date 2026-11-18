# Page Layout

Build a single-page, mobile-first website for Arina Ivanova, an actress and voice teacher.

Follow brief/design.md for visual styling and brief/content.md for copy. This file defines the page structure and the purpose of each block.

The page consists of a sticky header, six content sections, and a footer.

## 1. Sticky Header

Use “Арина Иванова” as the text wordmark in the logo position.
Link it to the top of the page.

Navigation:
- About → #about
- Course → #course
- Testimonials → #testimonials
- Contact → #contact

On mobile, place the name on the left and a menu button on the right.
On desktop, show the navigation links beside the name.

Keep the header compact, with an opaque background.
Anchor links must account for its height so section headings remain visible.

The mobile menu should close after selecting a link and support keyboard navigation.

## 2. Hero

Introduce the main purpose of the website immediately.

Include:
- A clear headline about speaking more freely and confidently.
- A short first-person introduction from Arina.
- A portrait (photo1.png), kept moderate in size.
- Primary action: «Написать в Telegram» → confirmed direct-contact link.
- Secondary action (text link): «Второй поток курса — [дата]» → #course.

For mobile, use this reading order:
1. Headline.
2. Portrait (landscape crop, not full-screen).
3. Short description.
4. Actions.

On desktop, place the text and portrait side by side.
The portrait's height matches the text column (headline, description, actions).

Do not use Arina’s name as the main headline; it already appears in the header.
Avoid extra badges, statistics, or secondary offers.

## 3. About Arina

Section ID: about

Include:
- A photo (photo2.jpg).
- Her full name.
- A concise personal introduction.
- Relevant education and professional experience.
- Why she teaches voice and self-expression.
- How her acting experience informs her teaching.

Write this as a personal introduction, not a long résumé.

Use verified facts for education and professional background.
If those details are unavailable, omit them from the rendered page
and use the available introduction and teaching approach.

On mobile, stack the content and photograph.
On desktop, use a balanced text-and-image layout where the photo and
text block share the same height (see references/reference1.png).
Show education and experience as short labelled facts under the text
once confirmed (e.g. Образование, Сцена, Преподаю).

## 4. What Brings People to These Classes

Describe recognizable situations rather than broad audience categories.

Suggested situations:
- Speaking more quietly when other people are watching.
- Feeling nervous and losing the thread during a presentation.
- Finding your recorded voice unfamiliar.
- Wanting more expression and variety in your speech.
- Struggling to introduce yourself or talk about your work.

Keep each item brief and concrete.
Use supportive language without diagnosing the visitor or promising
guaranteed results.

Present each item as a row with two columns: a short topic name
(Голос, Волнение, Запись, Выразительность, Самопрезентация) and a
one-line description. Rows are separated by thin lines; the section
uses the normal page background (see references/reference1.png).
On mobile, the description sits under the topic name.
Avoid enclosing every item in a decorative card.

## 5. Course and Current Intake

Section ID: course

This is the main offer on the page.

Include:
- Course name.
- Short description.
- Current enrolment status.
- Start date.
- Format and location or online platform.
- Duration and schedule.
- Price and what it includes.
- A prominent enrolment action.

Keep the permanent course description separate from changing intake details.

Use only confirmed dates, prices, availability, and practical information.
Omit unavailable details from the prototype without displaying empty labels.

The enrolment button must lead to the actual registration process or
an agreed direct-contact destination. Do not invent a form or simulate
a successful registration.

Layout (see references/reference2.png): the section has its own
background so it stands out.
Desktop (approved): left column — small label «Авторский курс, старт
второго потока», the intake date in large type, course name, short
description. Right column — labelled practical details (format,
duration, group, price) and «Записаться на курс». Below both, «Как идёт
курс» with the four weeks in four columns.
Mobile (approved, keep as is): label, date, name, description, details,
enrolment button, then the weeks as stacked rows.

Do not state how often new cohorts run until a schedule is confirmed.

The following four-week outline is provisional and requires Arina’s review.
It must not be treated as a confirmed syllabus or duration.

Week 1 — Getting to know your voice
Explore your habitual sound, breathing, and speaking patterns.

Week 2 — Clarity and expression
Work with articulation, pace, pauses, and intonation.

Week 3 — Speaking with others
Practice speaking in front of a group and communicating your ideas.

Week 4 — Applying the practice
Work on a personal task such as a presentation, introduction, or video recording.

On mobile, use accessible accordion rows if the descriptions are long.
Keep week numbers and topic titles visible when collapsed.
For short descriptions, show the full outline without requiring extra taps.

Repeat the enrolment action after the program when a working destination exists.

## 6. Participant Testimonials

Section ID: testimonials

Include genuine feedback from previous participants.

Useful testimonial content:
- What brought the participant to the course.
- What the learning experience was like.
- What they noticed or found useful.

Use the participant’s approved name or attribution.
Include a photograph only when available and approved for publication.

On mobile, display testimonials vertically so they can be read by scrolling.
Avoid an automatically rotating carousel.

Do not invent testimonials.
If none are available, omit this section and its navigation link.

## 7. Telegram and Direct Contact

Section ID: contact

This is the final section of the page.

Include:
- Another photograph of Arina (photo3.png).
- A warm invitation to stay in touch.
- A short explanation of what she shares in her Telegram channel.
- Two clearly differentiated actions.

Primary action:
«Написать в Telegram» → confirmed direct-contact link.

Secondary action (outlined button):
«Перейти в Telegram‑канал» → confirmed Telegram channel link.

On desktop, keep the photograph smaller than the text column.
The photo uses a blob outline similar to (not the same as) the hero.
On mobile, a decorative Telegram icon sits beside the heading.

Keep the two destinations distinct.
Do not use placeholder links.

On mobile, do not include the photograph
Give the primary action stronger visual emphasis.

The footer follows this section.

## 8. Footer

Approved addition. Olive background (--color-primary, as in the buttons)
with light text.

Include:
- «Арина Иванова» linking to the top, with the line «Голос и самовыражение».
- Navigation: Обо мне, Курс, Контакты (smaller text).
- «Соцсети»: Instagram, Telegram (channel), ВКонтакте.
- «© [год] Арина Иванова».

Desktop: socials in a column on the left, navigation in a centred
column, name on the right; copyright line below.
Mobile: name, navigation, socials, copyright, stacked.

## Implementation Notes

- Complete the mobile layout before adapting it to desktop.
- Preserve a logical reading order across screen sizes.
- Use distinct photographs where available; do not repeat one simply to fill space.
- Keep editorial notes and unconfirmed details out of the rendered page.
- Remove navigation links to omitted sections.
- Use one main heading and a consistent section-heading hierarchy.
- Check sticky navigation, anchor positions, image crops, and button behavior.
## Sample content to replace

The prototype shows sample content so the client can review a complete
page. None of it is confirmed. Replace or approve every item below
before publishing.

| Where | Sample content |
|---|---|
| Hero, course | Intake date «23 ноября» (shown as the course start) |
| About | Third paragraph about using acting techniques in classes |
| About | Образование: «Высшее актёрское образование» |
| About | Сцена: «Спектакли, съёмки, озвучивание» |
| About | Преподаю: «С 2019 года» |
| Course | Course name «Свой голос» |
| Course | Audience paragraph («Подойдёт, если…») |
| Course | Формат: «Онлайн, в Zoom» |
| Course | Длительность: «4 недели, 2 занятия в неделю по 90 минут» |
| Course | Группа: «До 8 человек» |
| Course | Стоимость: «15 000 ₽ за весь курс» |
| Course | Four-week program (titles and descriptions) |
| Contact | Telegram channel content description |
| src/site-config.js | Direct and channel links point to https://t.me/ (Telegram home page) |
| src/site-config.js | Instagram → https://www.instagram.com/, ВКонтакте → https://vk.com/ (home pages; confirm Arina uses these networks) |
