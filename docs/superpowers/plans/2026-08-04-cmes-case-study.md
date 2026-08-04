# Concise CMES Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เพิ่มหน้า CMES Case Study สองภาษาที่ HR อ่านใจความหลักได้ภายใน 1–2 นาที และผู้สัมภาษณ์สายเทคนิคเปิดรายละเอียดเพิ่มเติมได้

**Architecture:** ใช้ hash route `#/cmes-case-study` เพื่อรองรับ direct link และ refresh บน GitHub Pages โดยไม่เพิ่ม dependency หน้า Case Study อ่านข้อมูลจาก bilingual data layer เดิม แสดง 3 engineering cases, evidence, AI workflow และ limitations ด้วย components ที่มี semantic HTML และ progressive disclosure ผ่าน `<details>`

**Tech Stack:** React 19, Vite 7, JavaScript, CSS custom properties, Vitest, Testing Library, GitHub Pages

## Global Constraints

- ไม่เพิ่ม React Router หรือ dependency ใหม่
- หน้า Portfolio หลักต้องสแกนเข้าใจได้ภายในประมาณ 15–20 วินาที
- หน้า Case Study ต้องอ่านใจความหลักได้ภายในประมาณ 1–2 นาที
- แสดง engineering cases เพียง 3 เรื่อง; รายละเอียด implementation อยู่ใน `<details>`
- รองรับภาษาไทยและอังกฤษจาก data layer เดียวกับ Portfolio ปัจจุบัน
- รองรับ light/dark theme, mobile, keyboard และ `prefers-reduced-motion`
- ไม่อ้าง “รองรับ 500 คน”, “ปลอดภัย 100%”, “production-ready” หรือ metric ที่ไม่มีหลักฐาน
- ไม่แก้ backend, ไม่ fetch runtime data และไม่เพิ่มภาพใหม่
- รักษา links, theme, language, scroll reveal และ accessibility ของหน้าเดิม

## File map

- Create `src/hooks/usePortfolioRoute.js` — parse hash, subscribe `hashchange`, expose current route
- Create `src/hooks/usePortfolioRoute.test.jsx` — routing behavior tests
- Create `src/components/CMESCaseStudy.jsx` — page composition and semantic subcomponents
- Create `src/components/CMESCaseStudy.test.jsx` — bilingual content, disclosure, links and accessibility tests
- Modify `src/data/portfolioContent.js` — CTA labels and `cmesCaseStudy` objects for `th` and `en`
- Modify `src/components/Portfolio.jsx` — add Case Study CTA to CMES only
- Modify `src/App.jsx` — choose Portfolio or Case Study from route
- Modify `src/portfolio.test.jsx` — integration tests for navigation, language and fallback
- Modify `src/styles/global.css` — case-study layout, architecture flow, evidence and disclosure styles
- Modify `README.md` — document the new Case Study route and file structure

---

### Task 1: Hash route boundary

**Files:**
- Create: `src/hooks/usePortfolioRoute.js`
- Create: `src/hooks/usePortfolioRoute.test.jsx`

**Interfaces:**
- Produces: `PORTFOLIO_ROUTE = 'portfolio'`
- Produces: `CMES_CASE_STUDY_ROUTE = 'cmes-case-study'`
- Produces: `parsePortfolioRoute(hash: string): 'portfolio' | 'cmes-case-study'`
- Produces: `usePortfolioRoute(): 'portfolio' | 'cmes-case-study'`
- Consumes: browser `window.location.hash` and `hashchange`

- [ ] **Step 1: Write failing pure-function and hook tests**

```jsx
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  CMES_CASE_STUDY_ROUTE,
  PORTFOLIO_ROUTE,
  parsePortfolioRoute,
  usePortfolioRoute,
} from './usePortfolioRoute'

describe('portfolio hash routing', () => {
  afterEach(() => {
    window.history.replaceState(null, '', '/#/')
  })

  it('maps the case-study hash and falls back safely', () => {
    expect(parsePortfolioRoute('#/cmes-case-study')).toBe(CMES_CASE_STUDY_ROUTE)
    expect(parsePortfolioRoute('#/unknown')).toBe(PORTFOLIO_ROUTE)
    expect(parsePortfolioRoute('')).toBe(PORTFOLIO_ROUTE)
  })

  it('reacts to browser hash changes', () => {
    window.history.replaceState(null, '', '/#/')
    const { result } = renderHook(() => usePortfolioRoute())

    act(() => {
      window.location.hash = '#/cmes-case-study'
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    expect(result.current).toBe(CMES_CASE_STUDY_ROUTE)
  })
})
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- src/hooks/usePortfolioRoute.test.jsx`

Expected: FAIL because `usePortfolioRoute.js` does not exist

- [ ] **Step 3: Implement the minimal route hook**

```js
import { useEffect, useState } from 'react'

export const PORTFOLIO_ROUTE = 'portfolio'
export const CMES_CASE_STUDY_ROUTE = 'cmes-case-study'

export const parsePortfolioRoute = (hash = '') => (
  hash.replace(/^#\/?/, '').replace(/\/$/, '') === CMES_CASE_STUDY_ROUTE
    ? CMES_CASE_STUDY_ROUTE
    : PORTFOLIO_ROUTE
)

export const usePortfolioRoute = () => {
  const [route, setRoute] = useState(() => parsePortfolioRoute(window.location.hash))

  useEffect(() => {
    const syncRoute = () => setRoute(parsePortfolioRoute(window.location.hash))
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  return route
}
```

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- src/hooks/usePortfolioRoute.test.jsx`

Expected: 2 tests pass

- [ ] **Step 5: Commit the routing boundary**

```powershell
git add src/hooks/usePortfolioRoute.js src/hooks/usePortfolioRoute.test.jsx
git commit -m "feat: add portfolio hash routing"
```

---

### Task 2: Bilingual Case Study contract

**Files:**
- Modify: `src/data/portfolioContent.js`
- Modify: `src/portfolio.test.jsx`

**Interfaces:**
- Adds: `selectedWork.viewCaseStudy: string`
- Adds: `cmesCaseStudy` with `back`, `eyebrow`, `title`, `status`, `summary`, `role`, `roleBody`, `architecture`, `cases`, `evidence`, `ai`, `lessons`, `limitations`, `links`, `detailsLabel`
- `cases` contains exactly 3 objects with `number`, `title`, `problem`, `decision`, `result`, `details: string[]`
- `evidence.items` contains exactly 4 strings
- Thai and English objects have identical key structure

- [ ] **Step 1: Write failing content-contract tests**

Add to `src/portfolio.test.jsx`:

```jsx
it('provides a concise bilingual CMES case-study contract', () => {
  const thai = translations.th.cmesCaseStudy
  const english = translations.en.cmesCaseStudy

  expect(translations.th.selectedWork.viewCaseStudy).toBe('อ่านกรณีศึกษา')
  expect(translations.en.selectedWork.viewCaseStudy).toBe('Read case study')
  expect(thai.cases).toHaveLength(3)
  expect(english.cases).toHaveLength(3)
  expect(thai.evidence.items).toHaveLength(4)
  expect(english.evidence.items).toHaveLength(4)
  expect(Object.keys(english).sort()).toEqual(Object.keys(thai).sort())
  expect(thai.limitations.body).toContain('60')
  expect(english.limitations.body).toContain('60')
})
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- src/portfolio.test.jsx`

Expected: FAIL because `cmesCaseStudy` and `viewCaseStudy` do not exist

- [ ] **Step 3: Add concise Thai and English content**

Add `viewCaseStudy` to `selectedWork` in both languages and add `cmesCaseStudy` after `engineering`. Use these exact case themes and evidence statements:

```js
cases: [
  {
    number: '01',
    title: 'คิว real-time ที่กู้คืนได้',
    problem: 'คิวที่พึ่ง state ใน browser เสี่ยงไม่ตรงกันเมื่อ refresh, backend restart หรือ OBS หลุด',
    decision: 'ให้ MongoDB เป็น source of truth และใช้สถานะ pending, approved, playing และ completed/rejected พร้อม recovery',
    result: 'คิว approved ยังอยู่หลัง restart และงานที่ถูกขัดจังหวะสามารถกลับมาเล่นต่อได้',
    details: [
      'ใช้ conditional update และ submission key ลด race condition และรายการซ้ำ',
      'pause เก็บเวลาคงเหลือ ส่วน OBS disconnect คืนงานที่ยังไม่จบกลับ approved',
    ],
  },
  {
    number: '02',
    title: 'สิทธิ์และข้อมูลของแต่ละร้าน',
    problem: 'การเชื่อ x-admin-id, x-shop-id หรือ shop query จาก client ทำให้ปลอมร้านได้',
    decision: 'ใช้ Admin JWT, Socket authentication และ service token ระหว่าง User Backend กับ Admin Backend',
    result: 'shopId ที่ใช้เข้าถึงข้อมูลมาจาก identity ที่ server ตรวจแล้ว และ service credential ไม่ถูกส่งไป browser',
    details: [
      'แยกขอบเขต admin, user service และ display token ตามหน้าที่',
      'ทุก query และ Socket room ผูก tenant จากข้อมูลที่ผ่านการตรวจสอบ',
    ],
  },
  {
    number: '03',
    title: 'กันรายการซ้ำและความผิดพลาดหน้างาน',
    problem: 'double click, network retry และการตรวจคิวหลังชำระเงินทำให้เกิดรายการซ้ำหรือ UX ที่ไม่เป็นธรรม',
    decision: 'ใช้ submission key, active queue limit, preflight ก่อน payment และ error code ที่ UI อธิบายได้',
    result: 'ทดสอบ 60 submissions พร้อมตรวจ duplicate, queue cap, single-playing และ recovery flow',
    details: [
      'รักษาพอร์ต Admin 3000/5001 และ User 3001/5002 เป็น contract เดียวกันทั้งระบบ',
      'debug จาก Network, server log และ DB state ก่อนเปลี่ยน configuration',
    ],
  },
]
```

English copy must communicate the same claims naturally: “Recoverable realtime queue”, “Tenant-aware authorization”, and “Duplicate and operational failure protection”. Use “tested with 60 submissions”, not “supports 60 concurrent users”.

Set evidence items to:

1. `ทดสอบคิว 60 submissions` / `60-submission queue test`
2. `คิวกู้คืนหลัง backend restart` / `Queue recovery after backend restart`
3. `จำกัด active queue ต่อผู้ใช้จาก server` / `Server-enforced active queue limit`
4. `OBS disconnect fallback และ retry` / `OBS disconnect fallback and retry`

The limitations body must explicitly say the evidence is pilot-level and does not prove 500 concurrent users or an enterprise SLA.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- src/portfolio.test.jsx`

Expected: all portfolio content tests pass

- [ ] **Step 5: Commit the bilingual data contract**

```powershell
git add src/data/portfolioContent.js src/portfolio.test.jsx
git commit -m "feat: add bilingual CMES case study content"
```

---

### Task 3: Semantic CMES Case Study page

**Files:**
- Create: `src/components/CMESCaseStudy.jsx`
- Create: `src/components/CMESCaseStudy.test.jsx`

**Interfaces:**
- Produces: `CMESCaseStudy()` React component
- Consumes: `useLanguage().content.cmesCaseStudy`
- Consumes: `resumePath`
- Navigation links: `#/`, existing Admin/User/GitHub URLs, and Resume
- Uses CSS hooks prefixed `case-study` to avoid global leakage

- [ ] **Step 1: Write failing page tests**

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import { CMESCaseStudy } from './CMESCaseStudy'

const renderPage = () => render(
  <ThemeProvider>
    <LanguageProvider><CMESCaseStudy /></LanguageProvider>
  </ThemeProvider>,
)

describe('CMES Case Study', () => {
  it('shows a concise overview, three cases, evidence, AI use, and limitations', () => {
    const { container } = renderPage()
    expect(screen.getByRole('heading', { level: 1, name: /CMES/ })).toBeInTheDocument()
    expect(container.querySelectorAll('.case-study-card')).toHaveLength(3)
    expect(container.querySelectorAll('.case-study-evidence li')).toHaveLength(4)
    expect(screen.getByText(/AI-assisted/i)).toBeInTheDocument()
    expect(screen.getByText(/500/)).toBeInTheDocument()
    expect(container.querySelectorAll('details')).toHaveLength(3)
  })

  it('switches every Case Study section to English', async () => {
    const user = userEvent.setup()
    renderPage()
    await user.click(screen.getByRole('button', { name: 'เปลี่ยนภาษาเป็นอังกฤษ' }))
    expect(screen.getByText('Recoverable realtime queue')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })
})
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- src/components/CMESCaseStudy.test.jsx`

Expected: FAIL because `CMESCaseStudy.jsx` does not exist

- [ ] **Step 3: Implement focused semantic components**

Create `CMESCaseStudy.jsx` with local components:

```jsx
const ArchitectureFlow = ({ items, label }) => (
  <ol className="case-study-architecture" aria-label={label}>
    {items.map((item) => <li key={item}>{item}</li>)}
  </ol>
)

const EngineeringCase = ({ item, labels }) => (
  <article className="case-study-card">
    <p className="case-study-card__number">{item.number}</p>
    <h3>{item.title}</h3>
    <dl>
      <div><dt>{labels.problem}</dt><dd>{item.problem}</dd></div>
      <div><dt>{labels.decision}</dt><dd>{item.decision}</dd></div>
      <div><dt>{labels.result}</dt><dd>{item.result}</dd></div>
    </dl>
    <details>
      <summary>{labels.detailsLabel}</summary>
      <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
    </details>
  </article>
)
```

The page structure must be:

1. `<header className="case-study-header">` with back link, TH/EN control and theme lamp-compatible control
2. `<main id="case-study-main">`
3. compact hero with status, role and stack
4. architecture section with ordered flow
5. three-case section
6. evidence list
7. compact AI-assisted card
8. lessons and limitations
9. CTA links
10. footer/back link

Reuse the current Context APIs and copy the language/theme control behavior without duplicating socket, network, or persistence logic. Extract a shared header control only if both pages can consume it without changing their public behavior; otherwise keep the Case Study control small and self-contained.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- src/components/CMESCaseStudy.test.jsx`

Expected: both Case Study tests pass

- [ ] **Step 5: Commit the semantic page**

```powershell
git add src/components/CMESCaseStudy.jsx src/components/CMESCaseStudy.test.jsx
git commit -m "feat: add CMES case study page"
```

---

### Task 4: Connect CTA, App route, and browser navigation

**Files:**
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/App.jsx`
- Modify: `src/portfolio.test.jsx`

**Interfaces:**
- `ProjectLinks` consumes `labels.viewCaseStudy`
- CMES Case Study CTA href is `#/cmes-case-study`
- `App` consumes `usePortfolioRoute()` and renders `CMESCaseStudy` only for `CMES_CASE_STUDY_ROUTE`
- Portfolio page remains the fallback for empty and unknown hashes

- [ ] **Step 1: Write failing integration tests**

Add to `src/portfolio.test.jsx`:

```jsx
it('opens the CMES Case Study from the project CTA and returns to the portfolio', async () => {
  const user = userEvent.setup()
  window.history.replaceState(null, '', '/#/')
  render(<App />)

  await user.click(screen.getByRole('link', { name: 'อ่านกรณีศึกษา' }))
  expect(window.location.hash).toBe('#/cmes-case-study')
  expect(screen.getByRole('heading', { level: 1, name: /CMES/ })).toBeInTheDocument()

  await user.click(screen.getByRole('link', { name: 'กลับ Portfolio' }))
  expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
})

it('falls back to the portfolio for an unknown hash', () => {
  window.history.replaceState(null, '', '/#/missing')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run integration tests and confirm RED**

Run: `npm test -- src/portfolio.test.jsx`

Expected: FAIL because the CTA and route rendering are not connected

- [ ] **Step 3: Add the CMES-only CTA**

In `ProjectLinks`, add before repository links:

```jsx
<a className="text-link project-links__case-study" href="#/cmes-case-study">
  <span>{labels.viewCaseStudy}</span><Arrow />
</a>
```

Render it only in the existing `project.id === 'cmes'` branch. Do not add it to AirSafeTH.

- [ ] **Step 4: Select the page in App**

```jsx
import { CMESCaseStudy } from './components/CMESCaseStudy'
import { CMES_CASE_STUDY_ROUTE, usePortfolioRoute } from './hooks/usePortfolioRoute'

function App() {
  const route = usePortfolioRoute()
  useScrollReveal()

  return (
    <ThemeProvider>
      <LanguageProvider>
        {route === CMES_CASE_STUDY_ROUTE ? <CMESCaseStudy /> : <PortfolioPage />}
      </LanguageProvider>
    </ThemeProvider>
  )
}
```

Extract the current Header/main/Footer composition into a local `PortfolioPage` component inside `App.jsx`; do not change its rendered structure.

- [ ] **Step 5: Run integration tests and confirm GREEN**

Run: `npm test -- src/portfolio.test.jsx src/components/CMESCaseStudy.test.jsx src/hooks/usePortfolioRoute.test.jsx`

Expected: all focused tests pass

- [ ] **Step 6: Commit integrated navigation**

```powershell
git add src/App.jsx src/components/Portfolio.jsx src/portfolio.test.jsx
git commit -m "feat: link portfolio to CMES case study"
```

---

### Task 5: Editorial styling and responsive disclosure

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/CMESCaseStudy.test.jsx`

**Interfaces:**
- All new selectors start with `.case-study` except existing shared `.eyebrow`, `.button`, `.text-link`
- Uses existing tokens: `--paper`, `--ink`, `--muted`, `--line`, `--accent`, `--gutter`, `--max-width`, `--section-space`
- Mobile breakpoint follows existing `@media (max-width: 720px)`

- [ ] **Step 1: Add a failing structural class test**

Add to `CMESCaseStudy.test.jsx`:

```jsx
it('exposes scoped hooks for the architecture, evidence, and disclosure layout', () => {
  const { container } = renderPage()
  expect(container.querySelector('.case-study-shell')).toBeInTheDocument()
  expect(container.querySelector('.case-study-architecture')).toBeInTheDocument()
  expect(container.querySelector('.case-study-evidence')).toBeInTheDocument()
  expect(container.querySelector('.case-study-card details')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run the test and confirm RED if any required hook is absent**

Run: `npm test -- src/components/CMESCaseStudy.test.jsx`

Expected: FAIL naming the missing scoped class; if the semantic implementation already includes all hooks, record GREEN and continue without manufacturing a failure

- [ ] **Step 3: Add scoped editorial styles**

Implement these layout rules in `global.css`:

- `.case-study-page`: background/color from current theme and minimum full viewport
- `.case-study-header`: sticky compact header, visible border, back action, language/theme controls
- `.case-study-shell`: max-width and gutter aligned with existing sections
- `.case-study-hero`: 12-column editorial grid; title spans 8 columns; metadata spans 4
- `.case-study-architecture`: ordered horizontal flow on desktop, stacked flow on mobile; connectors decorative only
- `.case-study-grid`: 3 equal cards on wide screens, 1 column on mobile
- `.case-study-card`: readable Problem/Decision/Result hierarchy; no fixed height
- `.case-study-card details`: summary has visible focus and disclosure marker; content remains readable in dark mode
- `.case-study-evidence`: 4 compact items in a 4-column strip, 2 columns on tablet, 1 on mobile
- `.case-study-ai` and `.case-study-limitations`: visually separated but not louder than engineering cases
- `.project-links__case-study`: span both link columns to signal the primary CMES detail action

Do not animate the reading text. Reuse existing reveal only for whole sections and ensure reduced-motion keeps content visible.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- src/components/CMESCaseStudy.test.jsx src/portfolio.test.jsx`

Expected: all focused tests pass

- [ ] **Step 5: Commit visual integration**

```powershell
git add src/styles/global.css src/components/CMESCaseStudy.test.jsx
git commit -m "style: add responsive CMES case study layout"
```

---

### Task 6: Documentation and final verification

**Files:**
- Modify: `README.md`
- Verify: all files from Tasks 1–5

**Interfaces:**
- Documents public route `https://66jjn.github.io/#/cmes-case-study`
- Documents `CMESCaseStudy.jsx` and `usePortfolioRoute.js`

- [ ] **Step 1: Update README**

Add under Selected Projects / CMES:

```markdown
- [CMES Technical Case Study](https://66jjn.github.io/#/cmes-case-study)
```

Update the feature list to mention the bilingual, recruiter-first Case Study and update the structure tree with:

```text
src/
├── components/CMESCaseStudy.jsx  # Bilingual recruiter-first technical case study
└── hooks/usePortfolioRoute.js    # GitHub Pages-safe hash route
```

- [ ] **Step 2: Run all automated verification**

Run:

```powershell
npm test
npm run lint
npm run build
```

Expected:

- Vitest exits 0 with all tests passing
- ESLint exits 0 with no errors
- Vite build exits 0 and creates `dist/`

- [ ] **Step 3: Inspect the production files and repository diff**

Run:

```powershell
git diff --check
git status --short
```

Expected: diff check exits 0; status lists only planned Portfolio files and the plan document

- [ ] **Step 4: Perform manual browser checks**

Use the production preview or local Vite server only when the user starts it or explicitly allows it. Verify:

1. `/#/` shows the original Portfolio
2. CMES “อ่านกรณีศึกษา” opens `/#/cmes-case-study`
3. Refresh on Case Study stays on Case Study
4. Back link returns to Portfolio
5. TH/EN changes every visible Case Study string
6. Light/dark mode remains readable
7. Keyboard can reach back, language, theme, each details summary, external links and Resume
8. Mobile 360–430 px has no horizontal overflow
9. Reduced motion leaves every section visible
10. Unknown hash shows Portfolio instead of a blank page

- [ ] **Step 5: Commit documentation and verified result**

```powershell
git add README.md
git commit -m "docs: document CMES case study"
```

Do not push or deploy unless the user explicitly asks.
