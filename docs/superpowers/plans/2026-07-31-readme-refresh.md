# Portfolio README Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the inaccurate starter README with a concise bilingual document that matches the current portfolio, scripts, projects, and source structure.

**Architecture:** README content is derived only from `package.json`, `src/data/portfolioContent.js`, and paths present in the repository. Thai is primary, with a compact English summary rather than a duplicated full translation.

**Tech Stack:** Markdown, React 19, Vite 7, Vitest, Testing Library, ESLint, GitHub Pages.

## Global Constraints

- Do not claim CSS Modules, React 18, MIT licensing, or obsolete components.
- Do not change application code, portfolio content, or user images.
- Keep technical claims and public links consistent with repository evidence.

---

### Task 1: Replace and Verify README

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: npm scripts from `package.json`, project links from `src/data/portfolioContent.js`, and current paths under `src/`.
- Produces: one recruiter- and developer-readable project README.

- [ ] **Step 1: Replace the starter content**

Write these sections: project title/position, live portfolio link, Thai overview, current highlights, CMES and AirSafeTH links/status, exact tech stack, install/run commands, available scripts, compact source tree, and English summary.

- [ ] **Step 2: Check obsolete claims**

Run:

```powershell
rg -n "React 18|CSS Modules|MIT License|Hero.jsx|CaseStudy.jsx|Skills.jsx|TechStack.jsx" README.md
```

Expected: no output.

- [ ] **Step 3: Check referenced paths and links**

Verify `src/components/Portfolio.jsx`, `src/components/ThaiText.jsx`, `src/contexts`, `src/data/portfolioContent.js`, `src/hooks/useScrollReveal.js`, `src/motion/scrollReveal.js`, `src/styles`, and `src/text/segmentHeadline.js` exist. Compare URLs against the content module.

- [ ] **Step 4: Run the automated gate**

Run `npm.cmd test`, `npm.cmd run lint`, `npm.cmd run build`, and `git diff --check`.

Expected: all tests pass and every command exits 0.

- [ ] **Step 5: Commit**

Stage only `README.md` and commit as `docs: refresh portfolio readme`.
