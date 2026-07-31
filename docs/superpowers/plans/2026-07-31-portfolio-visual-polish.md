# Portfolio Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the portfolio with warm light/dark palettes, better visual proportions, restrained motion, a continuous SVG lamp, and light as the first-visit default.

**Architecture:** Keep the current React and content structure. Change theme behavior in `ThemeContext`, replace only the lamp's decorative markup in `Portfolio.jsx`, and drive all palette, proportion, and motion changes through the existing CSS token and global-style files.

**Tech Stack:** React 19, CSS custom properties, inline SVG, Vitest, React Testing Library, Vite.

## Global Constraints

- Respect a stored `portfolio-theme`; otherwise default to `light` regardless of OS preference.
- Remove electric blue and pale blue from the interface.
- Light palette: `#f4f1e8`, `#e7e1d5`, `#171612`, `#6b675e`, `#b24a2f`, `#d9dfd2`.
- Dark palette: `#11110f`, `#1b1a17`, `#f1ede4`, `#b6b0a5`, `#d47555`, `#293029`.
- CMES remains the flagship dark section; AirSafeTH uses the quieter sage surface.
- The lamp cord and handle share one SVG center axis and move together.
- Motion is short, functional, and disabled under `prefers-reduced-motion: reduce`.
- Do not change copy, project facts, user-supplied project images, Resume, or deployment.

---

### Task 1: Make Light the First-Visit Default

**Files:**
- Modify: `src/portfolio.test.jsx`
- Modify: `src/contexts/ThemeContext.jsx`

**Interfaces:**
- Consumes: localStorage key `portfolio-theme`.
- Produces: `ThemeProvider` initializes to `light` without a stored value and to a valid stored value when present.

- [ ] **Step 1: Add failing tests**

```jsx
it('defaults to light on the first visit', () => {
  render(<App />)
  expect(document.documentElement.dataset.theme).toBe('light')
  expect(screen.getByRole('button', { name: 'เปลี่ยนเป็นโหมดมืด' })).toHaveAttribute('aria-pressed', 'false')
})

it('respects a stored dark preference', () => {
  localStorage.setItem('portfolio-theme', 'dark')
  render(<App />)
  expect(document.documentElement.dataset.theme).toBe('dark')
})
```

- [ ] **Step 2: Run `npm.cmd test -- src/portfolio.test.jsx`**

Expected: first-visit test fails because the test environment reports a dark OS preference.

- [ ] **Step 3: Change initial theme selection**

```js
const getInitialTheme = () => {
  const saved = localStorage.getItem('portfolio-theme')
  return saved === 'light' || saved === 'dark' ? saved : 'light'
}
```

- [ ] **Step 4: Re-run the focused test**

Expected: all portfolio tests pass.

---

### Task 2: Replace the Lamp Drawing with One Continuous SVG

**Files:**
- Modify: `src/portfolio.test.jsx`
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: existing `isDark`, `toggleTheme`, localized label, and `aria-pressed` behavior.
- Produces: `.lamp__svg`, `.lamp__shade`, `.lamp__bulb`, `.lamp__pull-group`, `.lamp__cord`, and `.lamp__handle` SVG classes.

- [ ] **Step 1: Add a failing lamp structure test**

```jsx
it('draws the lamp cord and handle as one pull group', () => {
  const { container } = render(<App />)
  const lamp = screen.getByRole('button', { name: 'เปลี่ยนเป็นโหมดมืด' })
  const pullGroup = container.querySelector('.lamp__pull-group')
  expect(lamp.querySelector('svg')).toBeInTheDocument()
  expect(pullGroup?.querySelector('.lamp__cord')).toBeInTheDocument()
  expect(pullGroup?.querySelector('.lamp__handle')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run the focused test**

Expected: FAIL because the lamp still uses four separate spans.

- [ ] **Step 3: Replace the decorative spans**

```jsx
<svg className="lamp__svg" viewBox="0 0 36 54" aria-hidden="true">
  <path className="lamp__shade" d="M8 5h20l4 12H4L8 5Z" />
  <circle className="lamp__bulb" cx="18" cy="20" r="4" />
  <g className="lamp__pull-group">
    <path className="lamp__cord" d="M18 24V43" />
    <circle className="lamp__handle" cx="18" cy="47" r="3" />
  </g>
</svg>
```

Style paths with `fill: none`, `stroke: currentColor`, `stroke-linecap: round`, and `stroke-linejoin: round`. Translate `.lamp__pull-group` together by 5px on active press and animate the whole SVG with a single 240ms swing.

- [ ] **Step 4: Re-run focused tests**

Expected: all portfolio tests pass and existing theme accessibility assertions remain green.

---

### Task 3: Apply Palette, Proportion, and Motion Refinements

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/global.css`
- Verify: `src/portfolio.test.jsx`

**Interfaces:**
- Consumes: current semantic class names and `data-theme` attribute.
- Produces: light/dark semantic tokens and CSS-only motion.

- [ ] **Step 1: Replace tokens exactly**

Use the palette values in Global Constraints and add `--accent-hover`, `--contact`, and `--lamp-light`. In dark mode override all theme-dependent tokens, including AirSafeTH and CMES surfaces.

- [ ] **Step 2: Rebalance the layout**

Set header heights to 68px/62px, section spacing to `clamp(4.5rem, 8vw, 8rem)`, hero minimum height to `86svh`, hero headline to `clamp(3.1rem, 6.6vw, 7.2rem)`, and portrait to columns `9 / -1`. Reduce the AirSafeTH title by 12% relative to CMES and keep body copy within readable widths.

- [ ] **Step 3: Add restrained CSS motion**

Add hero fade/rise stagger, portrait reveal, arrow movement, image scale capped at `1.015`, lamp pull/swing, and 180ms theme transitions. Place every entrance animation inside `@media (prefers-reduced-motion: no-preference)` and keep the existing reduced-motion override.

- [ ] **Step 4: Run automated verification**

Run separately:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
git diff --check
```

Expected: tests pass, lint and build exit 0, and diff check emits no errors.

- [ ] **Step 5: Run browser verification**

At 1440x900 and 390x844, verify Thai/English and light/dark, zero horizontal overflow, connected lamp geometry, working mobile menu, reduced-motion behavior, and no console warnings/errors.

- [ ] **Step 6: Commit**

Stage only source, test, token/style, and plan files. Preserve the user's untracked `public/projects/cmes-user.png` unless they explicitly ask to commit it.

```powershell
git commit -m "feat: polish portfolio themes and motion"
```
