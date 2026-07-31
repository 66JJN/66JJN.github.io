# Portfolio Visual Polish Design

## Goal

Refine the existing editorial portfolio so the light and dark themes feel intentional, proportions support the content hierarchy, motion is restrained, and the lamp control reads as one continuous object.

## Palette

Use warm monochrome surfaces with terracotta as the only interface accent. Remove electric blue and pale blue from the portfolio UI.

### Light theme — default

- Canvas: `#f4f1e8`
- Surface: `#e7e1d5`
- Ink: `#171612`
- Muted text: `#6b675e`
- Accent: `#b24a2f`
- Accent hover: `#913821`
- AirSafeTH surface: `#d9dfd2`
- CMES surface: `#171612`
- Lamp light: `#e3a447`

### Dark theme

- Canvas: `#11110f`
- Surface: `#1b1a17`
- Ink: `#f1ede4`
- Muted text: `#b6b0a5`
- Accent: `#d47555`
- Accent hover: `#e28a6c`
- AirSafeTH surface: `#293029`
- CMES surface: `#0c0c0a`
- Lamp light: `#efb85d`

Contact uses a near-black surface in both themes with a small terracotta rule and terracotta interactive states. Accent color is not used as a full-section background.

## Hierarchy and Proportions

- Reduce the desktop header height from 72px to 68px and mobile to 62px.
- Keep the hero as the primary visual moment, but reduce its headline maximum from 8.2rem to 7.2rem and its viewport scale from 7.4vw to 6.6vw.
- Use `min-height: 86svh` for the hero rather than forcing a full viewport.
- Keep the portrait at 4:5 and align it to four grid columns with more whitespace around it.
- Reduce general section spacing to `clamp(4.5rem, 8vw, 8rem)`.
- CMES remains the flagship through a full dark section, larger media, and the first project position.
- AirSafeTH remains a supporting project with a calm sage surface and a slightly smaller title scale.
- Engineering Decisions remains visually prominent because it gives evidence of problem-solving; capabilities remain compact supporting information.

## Lamp

Replace the four independently positioned CSS spans with one inline SVG using a shared center axis:

- shade and bulb centered at `x=18`;
- cord begins at the bottom center of the bulb and continues to the pull handle without a visual gap;
- use `stroke="currentColor"` and round line caps;
- light mode shows a warm amber bulb glow; dark mode shows the bulb unlit;
- pulling the control moves the cord and handle together by 5px and gives the fixture a small, single swing;
- retain the existing button, localized accessible name, and `aria-pressed` state.

## Motion

Motion is functional and limited to:

- hero eyebrow/name/headline/body/actions entering with a 420ms fade-and-rise stagger;
- portrait revealing over 620ms with a small clip/translate transition;
- project images scaling to at most `1.015` on hover or keyboard focus within the article;
- link arrows translating at most 3px;
- the lamp pull moving for 160ms and the fixture settling within 240ms;
- theme color transitions of 180ms.

Do not add scroll-jacking, continuous animation, floating decorations, parallax, or JavaScript scroll observers. Under `prefers-reduced-motion: reduce`, all new motion becomes effectively instant.

## Theme Behavior

- Respect a previously stored `portfolio-theme` value.
- When no theme has been stored, start in `light` regardless of operating-system preference.
- Persist later theme changes in localStorage.
- Keep Thai as the default language independently of theme.

## Verification

- Add a regression test proving that the first visit defaults to light and a stored dark preference is respected.
- Preserve the existing language, content, project-link, Resume, and lamp interaction tests.
- Run tests, ESLint, and the production build.
- Browser-check 1440x900 and 390x844 in light/dark and Thai/English.
- Confirm zero horizontal overflow and no console errors.

## Scope

- Modify theme tokens, global layout/motion CSS, the lamp markup, its tests, and theme initialization only.
- Do not change portfolio copy, project claims, project image files, Resume content, or deployment.
