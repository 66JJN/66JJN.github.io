# Scroll Reveal and Thai Line-Breaking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add reversible scroll-progress motion, a restrained pixel-grid image wipe, and reliable Thai headline wrapping without splitting protected words such as `โปรเจกต์`.

**Architecture:** A pure motion utility converts viewport geometry into reveal progress, while one React hook writes opacity/offset variables to elements marked with `data-reveal`. A focused Thai text component segments normal Thai text and protects a small portfolio-specific term list before rendering safe `<span>` and `<wbr>` boundaries.

**Tech Stack:** React 19, browser `requestAnimationFrame`, CSS custom properties, `Intl.Segmenter`, Vitest, React Testing Library.

## Global Constraints

- Do not add an animation dependency.
- Fade elements in at the bottom and out after they pass the top; never hide focused interactive content.
- Use a maximum reveal translation of 24px.
- Disable all scroll motion and image wipes for `prefers-reduced-motion: reduce`.
- Preserve all portfolio copy, links, project facts, and user-provided images.
- Prevent Thai heading breaks inside `โปรเจกต์` and other explicitly protected portfolio terms.

---

### Task 1: Thai Headline Wrapping

**Files:**
- Create: `src/components/ThaiText.jsx`
- Create: `src/components/ThaiText.test.jsx`
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `segmentHeadline(text) -> string[]` and `<ThaiText>{text}</ThaiText>`.
- Consumes: `Intl.Segmenter` when available, with a safe plain-text fallback.

- [ ] **Step 1: Write the failing tests**

Assert that `segmentHeadline('ทักษะที่ใช้จริงในโปรเจกต์')` contains one exact `โปรเจกต์` segment and that rendering `<ThaiText>` creates one `[data-thai-word="โปรเจกต์"]` span.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm.cmd test -- src/components/ThaiText.test.jsx`

Expected: FAIL because `ThaiText.jsx` does not exist.

- [ ] **Step 3: Implement protected segmentation**

Protect `โปรเจกต์`, `เว็บไซต์`, `ฟูลสแตก`, `เรียลไทม์`, `อินเทอร์เฟซ`, `แบ็กเอนด์`, and `ฟรอนต์เอนด์` before segmenting the remaining text. Render Thai segments as `span.thai-word` followed by `<wbr />`; render English text unchanged.

- [ ] **Step 4: Apply `ThaiText` to large headings**

Use it inside the Hero `h1`, reusable SectionHeading `h2`, About `h2`, and Contact `h2`. Add `.thai-word { white-space: nowrap; }` and keep `word-break: normal; overflow-wrap: normal` on large headings.

- [ ] **Step 5: Run focused and full tests**

Run: `npm.cmd test -- src/components/ThaiText.test.jsx && npm.cmd test`

Expected: all tests PASS.

---

### Task 2: Reversible Scroll-Progress Reveal

**Files:**
- Create: `src/motion/scrollReveal.js`
- Create: `src/motion/scrollReveal.test.js`
- Create: `src/hooks/useScrollReveal.js`
- Modify: `src/App.jsx`
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `calculateRevealProgress({ top, bottom }, viewportHeight) -> number` clamped from 0 to 1 and `useScrollReveal()`.
- Consumes: elements marked `data-reveal`; writes `--reveal-opacity` and `--reveal-y`.

- [ ] **Step 1: Write failing geometry tests**

Test four states: below viewport returns 0, entering returns between 0 and 1, centered returns 1, and passed above returns 0.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm.cmd test -- src/motion/scrollReveal.test.js`

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement the pure progress function**

Use an entry band from 96% to 72% of viewport height and an exit band based on the element bottom from 18% to 0%. Clamp every result to `[0, 1]`.

- [ ] **Step 4: Implement the hook**

On mount, query `[data-reveal]`, calculate values in a single `requestAnimationFrame`, and update on passive scroll plus resize. Set `data-motion="ready"` only after the first update. When reduced motion is active, set `data-motion="reduced"`, show every item, and do not attach scroll/resize listeners.

- [ ] **Step 5: Mark reveal targets**

Mark section headings, project headers/bodies, capability cards, engineering cards, About groups, and Contact groups. Do not mark links separately, so focusable children never fade independently.

- [ ] **Step 6: Add CSS driven by the variables**

Under `:root[data-motion='ready']`, use `opacity: var(--reveal-opacity)` and `transform: translate3d(0, var(--reveal-y), 0)`. Keep focused groups fully visible with `:focus-within` and disable the rules in the reduced-motion query.

- [ ] **Step 7: Run focused and full tests**

Run: `npm.cmd test -- src/motion/scrollReveal.test.js && npm.cmd test`

Expected: all tests PASS.

---

### Task 3: Pixel-Grid Image Wipe and Final QA

**Files:**
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/hooks/useScrollReveal.js`
- Modify: `src/styles/global.css`
- Modify: `src/portfolio.test.jsx`

**Interfaces:**
- Consumes: each project figure's reveal progress.
- Produces: a decorative 6-by-4 `.image-wipe` overlay with 24 `data-reveal-tile` elements.

- [ ] **Step 1: Write a failing project-media structure test**

Render `App`, select the first `.project-shot`, and assert its `.image-wipe` contains exactly 24 `[data-reveal-tile]` elements and is `aria-hidden="true"`.

- [ ] **Step 2: Run the test and verify RED**

Run: `npm.cmd test -- src/portfolio.test.jsx`

Expected: FAIL because the overlay is absent.

- [ ] **Step 3: Render and animate the overlay**

Render 24 decorative spans per project image. In the hook, derive tile opacity from the parent reveal progress and a deterministic tile order; CSS positions the overlay as a 6-by-4 grid using the project section's background color.

- [ ] **Step 4: Verify reduced motion and accessibility**

Reduced motion forces all tiles to opacity 0. The overlay has no semantics, receives no pointer events, and never covers a focused project link.

- [ ] **Step 5: Run the automated gate**

Run: `npm.cmd test`, `npm.cmd run lint`, `npm.cmd run build`, and `git diff --check`.

Expected: 0 failures, ESLint exit 0, Vite build exit 0, and no whitespace errors.

- [ ] **Step 6: Browser QA**

Inspect Thai/English at 1440x900 and 390x844. Confirm `โปรเจกต์` never splits internally, reveal items fade in/out without remaining hidden, image tiles reveal in a short sequence, focus remains visible, and horizontal overflow is absent.

- [ ] **Step 7: Commit the implementation**

Stage only the motion, text, component, CSS, App, and test files. Commit as `feat: add scroll reveal motion`.
