# FAST FOOD Learning Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add FAST FOOD to a separate bilingual learning section without presenting it as completed work or overstating TypeScript and architecture knowledge.

**Architecture:** Add one `learningProject` content object to each locale and render it through a focused `LearningProject` component between Selected Work and Capabilities. The component owns optional-image failure state, while existing scroll reveal, grid wipe, theme, and localization systems remain unchanged.

**Tech Stack:** React 19, localized JavaScript content, CSS editorial grid, Vitest, React Testing Library.

## Global Constraints

- FAST FOOD must not be appended to `content.projects` or numbered `03`.
- Status is `กำลังศึกษา · ยังไม่สมบูรณ์` / `Currently learning · Incomplete`.
- Do not claim TypeScript, Prisma, Auth.js, or the repository architecture as mastered.
- Confirmed personal scope is limited to practising Supabase setup, database connections, and API environment-variable configuration.
- GitHub only: `https://github.com/66JJN/FAST-FOOD`; no live-site link.
- `/projects/fast-food.png` is optional and must not be created or modified.

---

### Task 1: Add the Bilingual Learning-Project Contract

**Files:**
- Modify: `src/data/portfolioContent.js`
- Modify: `src/portfolio.test.jsx`

**Interfaces:**
- Produces: `content.learningProject` with identical Thai/English keys: `eyebrow`, `title`, `status`, `summary`, `scopeLabel`, `scope`, `limitationLabel`, `limitation`, `stackLabel`, `stack`, `image`, `githubLabel`, and `github`.
- Consumes: no new interfaces.

- [ ] **Step 1: Write the failing content test**

Assert that `translations.th.projects` remains `['cmes', 'airsafeth']`, both locales expose `learningProject`, `github` equals the FAST FOOD repository, there is no `live` key, the image path is `/projects/fast-food.png`, and each limitation explicitly states that TypeScript is still being studied.

- [ ] **Step 2: Run the test and verify RED**

Run: `npm.cmd test -- src/portfolio.test.jsx`

Expected: FAIL because `learningProject` is undefined.

- [ ] **Step 3: Add Thai and English content**

Use the exact status and verified scope from the spec. Keep the stack labelled as currently exploring and set it to `['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Auth.js']`.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: `npm.cmd test -- src/portfolio.test.jsx`

Expected: all portfolio tests PASS.

---

### Task 2: Render and Verify the Learning Section

**Files:**
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/App.jsx`
- Modify: `src/styles/global.css`
- Modify: `src/portfolio.test.jsx`
- Modify: `README.md`

**Interfaces:**
- Consumes: `content.learningProject` from Task 1 and existing `ExternalLink`, image tiles, `data-reveal`, and theme tokens.
- Produces: exported `<LearningProject />` and `<section className="learning-project">` placed after `<SelectedWork />`.

- [ ] **Step 1: Write the failing component tests**

Render `App` and assert that FAST FOOD is a heading inside `.learning-project`, the GitHub link targets `https://github.com/66JJN/FAST-FOOD`, no FAST FOOD live link exists, and the optional image initially uses `/projects/fast-food.png`.

- [ ] **Step 2: Verify RED**

Run: `npm.cmd test -- src/portfolio.test.jsx`

Expected: FAIL because the learning section is not rendered.

- [ ] **Step 3: Implement the component and optional image**

Render semantic header/story/stack/link groups and mark the header/body with `data-reveal`. Keep image state local; on image error remove the figure and apply a no-media layout class without hiding the text.

- [ ] **Step 4: Add responsive styling**

Use `var(--surface)` with thin rules and the existing accent. Desktop uses an asymmetric story/media grid; the no-media state centers readable text. Mobile stacks status, story, optional media, stack, and GitHub link without overflow.

- [ ] **Step 5: Update README**

Add FAST FOOD under a separate `Learning Project` subsection with GitHub only and the same limitation language. Do not add it to Selected Projects as completed work.

- [ ] **Step 6: Run automated verification**

Run `npm.cmd test`, `npm.cmd run lint`, `npm.cmd run build`, and `git diff --check`.

Expected: all tests pass and every command exits 0.

- [ ] **Step 7: Browser QA**

Inspect Thai and English at 1440x900 and 390x844 with `/projects/fast-food.png` absent. Confirm the section reflows without blank media space, scroll reveal works, no live button is shown, and horizontal overflow is absent.

- [ ] **Step 8: Commit**

Stage only the content, component, App, CSS, test, and README files. Commit as `feat: add fast food learning project`.
