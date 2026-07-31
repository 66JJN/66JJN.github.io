# Internship Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Suphakon Saephan's portfolio into a concise, evidence-led, bilingual internship portfolio for Full-stack, Front-end, Back-end, and Web Developer applications.

**Architecture:** Store all Thai and English copy, verified project facts, public links, and media metadata in one schema-driven content module. Render six semantic page sections through focused React components, while language and theme providers own persistent preferences and semantic CSS custom properties provide the editorial light/dark visual system.

**Tech Stack:** React 19, Vite 7, CSS Modules, Vitest, React Testing Library, jsdom, ESLint.

## Global Constraints

- Modify only `D:\66JJN.github.io`; CMES-ADMIN, CMES-USER, AirSafeTH, and the Resume are read-only source material.
- Thai is the default language and every user-facing content key must have an English equivalent.
- Position the candidate as `Full-stack Developer Intern`; Front-end, Back-end, and Web Developer remain visible secondary matches.
- CMES status is `2025-present · Ongoing · Prototype/Pilot`; never claim that multiple venues already use it.
- CMES started collaboratively, while the current CMES-ADMIN and CMES-USER repositories were rebuilt and extended primarily by Suphakon.
- Do not claim complete granular RBAC. Describe current user, admin, OBS display, and backend-service access boundaries accurately.
- AirSafeTH status is `2026 · Completed learning project`; describe its risk result as an estimate, not medical advice.
- Use the editorial-grid principles from Gridgeist without copying its layout or assets.
- Light theme uses warm off-white, near-black, and electric blue; dark theme uses near-black, warm paper, and the same blue.
- Avoid glassmorphism, glow blobs, generic gradients, skill meters, continuous marquees, inflated claims, and generic AI-sounding prose.
- Theme and language choices persist in localStorage; first theme visit falls back to `prefers-color-scheme`.
- Respect `prefers-reduced-motion`, maintain visible focus, semantic landmarks, correct heading order, and at least 44px interactive targets.
- Desktop acceptance viewport is 1440x900; mobile acceptance viewport is 390x844.
- Use real product screenshots and keep all image alt text meaningful in both languages.

---

## File Map

```text
index.html                                      document metadata and social tags
public/profile.jpg                              existing portrait
public/Resume_Suphakon_Saephan.pdf              downloadable Resume copy
public/projects/cmes-admin.webp                  captured CMES admin evidence
public/projects/cmes-queue.webp                  captured CMES queue/OBS evidence
public/projects/airsafeth.webp                   captured AirSafeTH evidence
src/App.jsx                                     semantic six-section composition
src/main.jsx                                    application entry point
src/data/portfolioContent.js                    all localized copy, facts, links, media
src/data/portfolioContent.test.js               locale parity and public-link contracts
src/contexts/LanguageContext.jsx                 persistent language state and html lang
src/contexts/LanguageContext.test.jsx            language behavior
src/contexts/ThemeContext.jsx                    persistent theme state and OS fallback
src/contexts/ThemeContext.test.jsx               theme behavior
src/components/Header/Header.jsx                 skip link, desktop/mobile navigation
src/components/Header/Header.test.jsx            navigation and preference controls
src/components/ThemeLamp/ThemeLamp.jsx           accessible custom lamp control
src/components/ThemeLamp/ThemeLamp.module.css    lamp drawing and short pull motion
src/components/Hero/Hero.jsx                     position, introduction, work/Resume CTAs
src/components/Hero/Hero.test.jsx                hero and Resume contracts
src/components/SelectedWork/SelectedWork.jsx     CMES and AirSafeTH case studies
src/components/SelectedWork/SelectedWork.test.jsx project evidence and external links
src/components/EngineeringNotes/EngineeringNotes.jsx three verified CMES decisions
src/components/Capabilities/Capabilities.jsx     project-backed capability groups
src/components/About/About.jsx                   biography and education
src/components/Contact/Contact.jsx               contact and internship CTA
src/components/Footer/Footer.jsx                 compact identity footer
src/styles/tokens.css                            semantic color, type, spacing tokens
src/styles/global.css                            reset, grid, common controls, responsive rules
src/test/setup.js                                jest-dom and test cleanup
vite.config.js                                   Vite and Vitest configuration
eslint.config.js                                 browser and test globals
package.json                                     test and lint scripts/dependencies
```

Old component files and their CSS modules are removed only in Task 8, after `rg` confirms that the new `App.jsx` has no imports from them.

---

### Task 1: Establish the Test Harness and Content Contract

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Modify: `eslint.config.js`
- Create: `src/test/setup.js`
- Create: `src/data/portfolioContent.test.js`
- Create: `src/data/portfolioContent.js`

**Interfaces:**
- Consumes: no application interfaces.
- Produces: `portfolioContent.th`, `portfolioContent.en`, `projectLinks`, `resumePath`, and `getContent(language)`.

- [ ] **Step 1: Install the test dependencies and add scripts**

Run:

```powershell
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Add these scripts to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest",
"lint": "eslint ."
```

Extend `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
```

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }),
})
```

Add `globals.node` and the Vitest globals `describe`, `it`, `expect`, `beforeEach`, and `vi` to the ESLint config for `**/*.test.{js,jsx}` and `src/test/**/*.js`.

- [ ] **Step 2: Write the failing content contract**

Create `src/data/portfolioContent.test.js`:

```js
import { describe, expect, it } from 'vitest'
import { getContent, portfolioContent, projectLinks, resumePath } from './portfolioContent'

const keyShape = (value) => {
  if (Array.isArray(value)) return value.map(keyShape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, keyShape(value[key])]))
  }
  return typeof value
}

describe('portfolio content contract', () => {
  it('keeps Thai and English content structurally identical', () => {
    expect(keyShape(portfolioContent.th)).toEqual(keyShape(portfolioContent.en))
  })

  it('publishes both verified projects and their public links', () => {
    expect(portfolioContent.th.projects.map(({ id }) => id)).toEqual(['cmes', 'airsafeth'])
    expect(projectLinks.airsafeth.live).toBe('https://air-safe-th.vercel.app/')
    expect(projectLinks.airsafeth.github).toBe('https://github.com/66JJN/AirSafeTH')
    expect(projectLinks.cmes.admin).toBe('https://cmes-admin-frontend.vercel.app/')
    expect(projectLinks.cmes.user).toBe('https://cmes-user-frontend.vercel.app/?shopId=JJ')
  })

  it('uses the public Resume path and Thai as the safe locale fallback', () => {
    expect(resumePath).toBe('/Resume_Suphakon_Saephan.pdf')
    expect(getContent('unknown')).toBe(portfolioContent.th)
  })

  it('labels CMES as a prototype and AirSafeTH as a completed learning project', () => {
    expect(portfolioContent.en.projects[0].status).toBe('2025-present · Ongoing · Prototype/Pilot')
    expect(portfolioContent.en.projects[1].status).toBe('2026 · Completed learning project')
  })
})
```

- [ ] **Step 3: Run the test and confirm the missing-module failure**

Run: `npm test -- src/data/portfolioContent.test.js`

Expected: FAIL because `src/data/portfolioContent.js` does not exist.

- [ ] **Step 4: Implement the content module**

Create `src/data/portfolioContent.js` with this stable shape:

```js
export const resumePath = '/Resume_Suphakon_Saephan.pdf'

export const projectLinks = {
  cmes: {
    admin: 'https://cmes-admin-frontend.vercel.app/',
    user: 'https://cmes-user-frontend.vercel.app/?shopId=JJ',
    adminGithub: 'https://github.com/66JJN/CMES-ADMIN',
    userGithub: 'https://github.com/66JJN/CMES-USER',
  },
  airsafeth: {
    live: 'https://air-safe-th.vercel.app/',
    github: 'https://github.com/66JJN/AirSafeTH',
  },
}

const shared = {
  identity: {
    email: 'pyaksda@gmail.com',
    phone: '095-218-6772',
    github: 'https://github.com/66JJN',
    resume: resumePath,
  },
}

export const portfolioContent = {
  th: {
    ...shared,
    nav: { work: 'ผลงาน', capabilities: 'สิ่งที่ผมทำได้', about: 'เกี่ยวกับผม', contact: 'ติดต่อ' },
    controls: { skip: 'ข้ามไปยังเนื้อหา', language: 'เปลี่ยนภาษาเป็นอังกฤษ', themeLight: 'เปลี่ยนเป็นโหมดสว่าง', themeDark: 'เปลี่ยนเป็นโหมดมืด', menu: 'เปิดเมนู', closeMenu: 'ปิดเมนู' },
    hero: {
      eyebrow: 'FULL-STACK DEVELOPER INTERN',
      name: 'ศุภกร แซ่พ่าน',
      title: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน',
      intro: 'ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่ชอบพัฒนาเว็บให้ครบทั้งระบบ ตั้งแต่หน้าจอ React, API และ MongoDB ไปจนถึงงาน real-time และการเชื่อมต่อบริการ AI กำลังมองหาโอกาสฝึกงานด้าน Full-stack หรือ Web Development',
      viewWork: 'ดูผลงาน',
      resume: 'ดาวน์โหลด Resume',
      portraitAlt: 'ภาพถ่ายของศุภกร แซ่พ่าน',
    },
    selectedWork: { eyebrow: 'SELECTED WORK', title: 'โปรเจกต์ที่แสดงวิธีคิดและการลงมือทำของผม' },
    projects: [
      {
        id: 'cmes',
        index: '01',
        title: 'CMES',
        subtitle: 'Content Management & Engagement System',
        status: '2025–ปัจจุบัน · กำลังพัฒนา · Prototype/Pilot',
        summary: 'ระบบจัดการคอนเทนต์และกิจกรรมบนจอดิจิทัลแบบ real-time ที่ออกแบบให้รองรับหลายร้าน เชื่อมการส่งข้อความ รูปภาพ ของขวัญ คิวแสดงผล และ OBS เข้าด้วยกัน',
        ownership: 'โปรเจกต์เริ่มจากการทำร่วมกับเพื่อน ก่อนที่ผมจะสร้าง CMES-ADMIN และ CMES-USER ชุดปัจจุบันขึ้นใหม่ และพัฒนาต่อด้วยตัวเองเป็นหลักทั้ง UI, API, Database, Realtime, Authentication และ AI integrations',
        evidence: ['React frontend 2 ชุดและ Node/Express backend 2 ชุดสื่อสารผ่าน REST และ service credentials', 'คิวและ OBS แบบ real-time พร้อม deduplication, active limit, concurrency guard, pause, resume และ recovery', 'User/Admin flow, การชำระเงิน ของขวัญ MongoDB aggregation สำหรับ ranking และ income metrics ฝั่ง server', 'Gemini, Sightengine, OCR, Cloudinary, JWT/OAuth/OTP พร้อม access boundaries, security middleware และการแยกร้านด้วย shopId, compound indexes และ Socket.IO rooms'],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
        links: projectLinks.cmes,
        images: [
          { src: '/projects/cmes-admin.webp', alt: 'หน้าจัดการระบบ CMES สำหรับผู้ดูแล' },
          { src: '/projects/cmes-queue.webp', alt: 'หน้าควบคุมคิวและการแสดงผล OBS ของ CMES' },
        ],
      },
      {
        id: 'airsafeth',
        index: '02',
        title: 'AirSafeTH',
        subtitle: 'Air-quality information & personal risk estimate',
        status: '2026 · โปรเจกต์ฝึกเรียนรู้ที่เสร็จแล้ว',
        summary: 'เว็บ React/Vite สำหรับดู AQI และ PM2.5 จากตำแหน่งหรือจังหวัด พร้อมแบบประเมินความเสี่ยงเบื้องต้นสำหรับผู้ใช้ 5 กลุ่ม คำแนะนำเฉพาะบุคคล และประวัติในเครื่อง',
        ownership: 'พัฒนาเพื่อฝึกเชื่อมต่อข้อมูลภายนอก ออกแบบ fallback เมื่อ API ใช้งานไม่ได้ และเปลี่ยนข้อมูลคุณภาพอากาศให้ผู้ใช้เข้าใจและนำไปใช้ได้ง่ายขึ้น',
        evidence: ['WAQI จาก geolocation หรือการเลือกจังหวัด', 'estimated-data fallback ที่ระบุให้ผู้ใช้ทราบ', 'ความรู้ PM2.5 สาเหตุ และแนวทางป้องกัน', 'แบบประเมิน 5 กลุ่ม คำแนะนำ และ localStorage history'],
        stack: ['React', 'Vite', 'WAQI API', 'Geolocation API', 'localStorage'],
        links: projectLinks.airsafeth,
        images: [{ src: '/projects/airsafeth.webp', alt: 'หน้าแสดงคุณภาพอากาศและการประเมินความเสี่ยงของ AirSafeTH' }],
      },
    ],
    linkLabels: { live: 'เปิดเว็บไซต์', github: 'ดู GitHub', admin: 'เปิด Admin', user: 'เปิด User', adminGithub: 'Admin GitHub', userGithub: 'User GitHub' },
    capabilities: {
      eyebrow: 'HOW I BUILD',
      title: 'ทักษะที่ใช้จริงในโปรเจกต์',
      groups: [
        { title: 'Frontend', body: 'สร้าง component และ flow ด้วย React จัดการ state เชื่อม API และออกแบบ responsive interface ที่ใช้ได้ทั้งมือถือและเดสก์ท็อป' },
        { title: 'Backend', body: 'ออกแบบ REST API ด้วย Node.js และ Express พร้อม validation, authentication, rate limiting และการแยกสิทธิ์ตามชนิดผู้ใช้' },
        { title: 'Realtime & Data', body: 'ใช้ Socket.IO, MongoDB compound indexes, aggregation และ persisted state สำหรับคิวที่ต้องทำงานต่อเนื่องและแยกข้อมูลรายร้าน' },
        { title: 'Integrations', body: 'เชื่อม Cloudinary, OBS, Google OAuth, Gemini, Sightengine, Tesseract OCR, Google Apps Script และ WAQI ตามขอบเขตของแต่ละโปรเจกต์' },
      ],
    },
    engineering: {
      eyebrow: 'ENGINEERING DECISIONS',
      title: 'สามปัญหาที่ทำให้ระบบแข็งแรงขึ้น',
      problemLabel: 'ปัญหา',
      decisionLabel: 'แนวทาง',
      items: [
        { number: '01', title: 'ทำให้การเล่นคิว real-time ฟื้นตัวได้', problem: 'ถ้าสถานะการเล่นอยู่เฉพาะหน้าเว็บ การ refresh หรือ OBS หลุดอาจทำให้คิวไม่ตรงกัน', decision: 'ย้าย authority ไปไว้ใน persisted backend state เพิ่ม lock รายร้านและ conditional update พร้อมคืนสถานะเมื่อเชื่อมต่อใหม่ และ pause อย่างปลอดภัยเมื่อ OBS หลุด' },
        { number: '02', title: 'กันการส่งซ้ำและคิวเกินจาก race condition', problem: 'การกดซ้ำหรือ request ที่เข้าพร้อมกันอาจสร้างรายการซ้ำและข้ามเพดานของผู้ใช้', decision: 'ใช้ submission key, active limit ต่อผู้ใช้ และ serialization ตามร้านกับผู้ส่ง เพื่อให้การตรวจและเพิ่มคิวเกิดเป็นลำดับเดียวกัน' },
        { number: '03', title: 'ปรับระบบให้เข้ากับข้อจำกัดบน production', problem: 'shared network ทำให้ rate limit และ proxy IP ทำงานคลาดเคลื่อน ขณะที่ hosting บล็อก SMTP สำหรับ OTP', decision: 'ตั้งค่า trust proxy และ rate limit ให้เหมาะกับการใช้งานจริง พร้อมย้ายช่องทางส่ง OTP ไป Google Apps Script proxy โดยคง flow ยืนยันตัวตนเดิม' },
      ],
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'เรียนรู้จากการสร้างระบบจริงและแก้ปัญหาทีละส่วน',
      body: 'ผมพัฒนา CMES อย่างต่อเนื่องและใช้โปรเจกต์เป็นพื้นที่ทดลองแนวคิดทั้ง frontend, backend, database และ deployment เวลาพบปัญหา ผมจะไล่จากอาการไปหาสาเหตุ ทดสอบสมมติฐาน และจดสิ่งที่แก้ไว้เพื่อไม่ให้ปัญหาเดิมกลับมา',
      education: 'มหาวิทยาลัยพะเยา · วิทยาการคอมพิวเตอร์',
      gpa: 'GPA 3.59',
      period: '2566–ปัจจุบัน',
    },
    contact: { eyebrow: 'CONTACT', title: 'กำลังมองหาโอกาสฝึกงานด้านการพัฒนาเว็บ', body: 'สนใจตำแหน่ง Full-stack, Front-end, Back-end หรือ Web Developer Intern สามารถติดต่อเพื่อพูดคุยเกี่ยวกับโปรเจกต์และการฝึกงานได้ครับ', email: 'อีเมล', phone: 'โทรศัพท์', github: 'GitHub', resume: 'ดาวน์โหลด Resume' },
    footer: { name: 'ศุภกร แซ่พ่าน', note: 'Full-stack Developer Intern · Thailand' },
  },
  en: {
    ...shared,
    nav: { work: 'Work', capabilities: 'Capabilities', about: 'About', contact: 'Contact' },
    controls: { skip: 'Skip to content', language: 'Switch language to Thai', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', menu: 'Open menu', closeMenu: 'Close menu' },
    hero: {
      eyebrow: 'FULL-STACK DEVELOPER INTERN',
      name: 'Suphakon Saephan',
      title: 'Building web products from interface to backend',
      intro: 'Computer Science student building web products end to end, from React interfaces and APIs to MongoDB, real-time systems, and practical AI integrations. Seeking a Full-stack or Web Development internship.',
      viewWork: 'View selected work',
      resume: 'Download Resume',
      portraitAlt: 'Portrait of Suphakon Saephan',
    },
    selectedWork: { eyebrow: 'SELECTED WORK', title: 'Projects that show how I think and build' },
    projects: [
      {
        id: 'cmes', index: '01', title: 'CMES', subtitle: 'Content Management & Engagement System', status: '2025-present · Ongoing · Prototype/Pilot',
        summary: 'A real-time digital-signage content and engagement system designed to support multiple venues, connecting messages, images, gifts, playback queues, and OBS displays.',
        ownership: 'The project began collaboratively. I then created the current CMES-ADMIN and CMES-USER repositories and have primarily rebuilt and extended the UI, APIs, database, realtime behavior, authentication, and AI integrations.',
        evidence: ['Two React frontends and two Node/Express backends communicating through REST and service credentials', 'Real-time queue and OBS playback with deduplication, active limits, concurrency guards, pause, resume, and recovery', 'User/Admin flows, payments, gifts, MongoDB aggregation for ranking, and server-side income metrics', 'Gemini, Sightengine, OCR, Cloudinary, JWT/OAuth/OTP, access boundaries, security middleware, and tenant isolation through shopId, compound indexes, and Socket.IO rooms'],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'], links: projectLinks.cmes,
        images: [{ src: '/projects/cmes-admin.webp', alt: 'CMES administration interface' }, { src: '/projects/cmes-queue.webp', alt: 'CMES queue and OBS control interface' }],
      },
      {
        id: 'airsafeth', index: '02', title: 'AirSafeTH', subtitle: 'Air-quality information & personal risk estimate', status: '2026 · Completed learning project',
        summary: 'A React/Vite app for checking AQI and PM2.5 by location or province, with a personal risk estimate for five user groups, tailored guidance, and local assessment history.',
        ownership: 'Built to practise external-data integration, transparent fallback states when the API is unavailable, and turning air-quality information into guidance people can understand and act on.',
        evidence: ['WAQI through geolocation or province selection', 'Clearly labelled estimated-data fallback', 'PM2.5 causes, education, and prevention guidance', 'Five-group assessment, recommendations, and localStorage history'],
        stack: ['React', 'Vite', 'WAQI API', 'Geolocation API', 'localStorage'], links: projectLinks.airsafeth,
        images: [{ src: '/projects/airsafeth.webp', alt: 'AirSafeTH air-quality and risk-estimate interface' }],
      },
    ],
    linkLabels: { live: 'Open live site', github: 'View GitHub', admin: 'Open Admin', user: 'Open User', adminGithub: 'Admin GitHub', userGithub: 'User GitHub' },
    capabilities: {
      eyebrow: 'HOW I BUILD', title: 'Capabilities demonstrated in working projects',
      groups: [
        { title: 'Frontend', body: 'Build React components and flows, manage state, connect APIs, and create responsive interfaces for mobile and desktop.' },
        { title: 'Backend', body: 'Design Node.js and Express REST APIs with validation, authentication, rate limiting, and access boundaries for different client types.' },
        { title: 'Realtime & Data', body: 'Use Socket.IO, MongoDB compound indexes, aggregation, and persisted state for resilient queues and tenant-isolated data.' },
        { title: 'Integrations', body: 'Connect Cloudinary, OBS, Google OAuth, Gemini, Sightengine, Tesseract OCR, Google Apps Script, and WAQI where each project needs them.' },
      ],
    },
    engineering: {
      eyebrow: 'ENGINEERING DECISIONS', title: 'Three problems that made the system stronger',
      problemLabel: 'Problem', decisionLabel: 'Decision',
      items: [
        { number: '01', title: 'Recoverable real-time playback', problem: 'When playback state lives only in the browser, a refresh or OBS disconnect can leave the queue inconsistent.', decision: 'Move authority into persisted backend state, add per-shop locks and conditional updates, restore state after reconnects, and pause safely when OBS disconnects.' },
        { number: '02', title: 'Duplicate and capacity protection', problem: 'Repeated clicks or concurrent requests can create duplicate entries and bypass a user limit.', decision: 'Use submission keys, per-user active limits, and serialization by shop and sender so validation and queue insertion happen in one controlled sequence.' },
        { number: '03', title: 'Production-aware delivery', problem: 'Shared networks distorted proxy-aware rate limits, while the hosting platform blocked SMTP delivery for OTP messages.', decision: 'Configure trust proxy and rate limits for the deployment, then move OTP delivery to a Google Apps Script proxy without changing the verification flow.' },
      ],
    },
    about: {
      eyebrow: 'ABOUT', title: 'Learning by building systems and tracing problems to their cause',
      body: 'I develop CMES continuously and use the project to test ideas across frontend, backend, databases, and deployment. When something fails, I trace the symptom to its cause, test the assumption, and record the fix so the same problem is less likely to return.',
      education: 'University of Phayao · Computer Science', gpa: 'GPA 3.59', period: '2023-present',
    },
    contact: { eyebrow: 'CONTACT', title: 'Seeking a web development internship', body: 'I am open to Full-stack, Front-end, Back-end, and Web Developer Intern roles. Get in touch to discuss the projects or an internship opportunity.', email: 'Email', phone: 'Phone', github: 'GitHub', resume: 'Download Resume' },
    footer: { name: 'Suphakon Saephan', note: 'Full-stack Developer Intern · Thailand' },
  },
}

export const getContent = (language) => portfolioContent[language] ?? portfolioContent.th
```

- [ ] **Step 5: Run focused tests and lint**

Run: `npm test -- src/data/portfolioContent.test.js && npm run lint`

Expected: four content tests PASS and ESLint exits 0.

- [ ] **Step 6: Commit the test harness and content contract**

```powershell
git add package.json package-lock.json vite.config.js eslint.config.js src/test/setup.js src/data
git commit -m "test: establish portfolio content contract"
```

---

### Task 2: Persist Language and Theme Preferences

**Files:**
- Modify: `src/contexts/LanguageContext.jsx`
- Create: `src/contexts/LanguageContext.test.jsx`
- Modify: `src/contexts/ThemeContext.jsx`
- Create: `src/contexts/ThemeContext.test.jsx`

**Interfaces:**
- Consumes: `getContent(language)` from Task 1.
- Produces: `useLanguage() -> { language, setLanguage, toggleLanguage, content }` and `useTheme() -> { theme, setTheme, toggleTheme, isDark }`.

- [ ] **Step 1: Write failing preference tests**

Test observable behavior through small consumer buttons rendered inside each real provider:

```jsx
it('starts in Thai, persists English, and updates the document language', async () => {
  const user = userEvent.setup()
  render(<LanguageProvider><LanguageProbe /></LanguageProvider>)
  expect(screen.getByText('ศุภกร แซ่พ่าน')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'switch-language' }))
  expect(screen.getByText('Suphakon Saephan')).toBeInTheDocument()
  expect(localStorage.getItem('portfolio-language')).toBe('en')
  expect(document.documentElement.lang).toBe('en')
})

it('uses the OS preference on first visit and persists a manual change', async () => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })
  const user = userEvent.setup()
  render(<ThemeProvider><ThemeProbe /></ThemeProvider>)
  expect(document.documentElement.dataset.theme).toBe('light')
  await user.click(screen.getByRole('button', { name: 'switch-theme' }))
  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(localStorage.getItem('portfolio-theme')).toBe('dark')
})
```

Reset localStorage and document attributes in `beforeEach`. The probes must read the real contexts; do not mock either provider.

- [ ] **Step 2: Run the tests and confirm failure**

Run: `npm test -- src/contexts`

Expected: FAIL because language does not persist or expose `content`, and theme defaults to dark instead of the OS preference.

- [ ] **Step 3: Implement the providers**

Language initialization accepts only `th` or `en`, defaults to `th`, persists under `portfolio-language`, updates `<html lang>`, and obtains content through `getContent(language)`. Theme initialization accepts only `light` or `dark`; otherwise it reads `window.matchMedia('(prefers-color-scheme: dark)').matches`. Both providers expose explicit setters as well as toggles.

- [ ] **Step 4: Run tests and lint**

Run: `npm test -- src/contexts && npm run lint`

Expected: all provider tests PASS and ESLint exits 0.

- [ ] **Step 5: Commit preference behavior**

```powershell
git add src/contexts
git commit -m "feat: persist language and theme preferences"
```

---

### Task 3: Build the Accessible Page Shell, Header, Lamp, and Hero

**Files:**
- Create: `src/components/Header/Header.jsx`
- Create: `src/components/Header/Header.module.css`
- Create: `src/components/Header/Header.test.jsx`
- Create: `src/components/ThemeLamp/ThemeLamp.jsx`
- Create: `src/components/ThemeLamp/ThemeLamp.module.css`
- Create: `src/components/Hero/Hero.jsx`
- Create: `src/components/Hero/Hero.module.css`
- Create: `src/components/Hero/Hero.test.jsx`

**Interfaces:**
- Consumes: `content`, `language`, `toggleLanguage`, `theme`, and `toggleTheme` from Task 2; `resumePath` from Task 1.
- Produces: an accessible header whose links target `#work`, `#capabilities`, `#about`, and `#contact`, plus the final Hero markup.

- [ ] **Step 1: Write failing header and hero tests**

```jsx
it('offers keyboard-reachable page navigation and preference controls', async () => {
  const user = userEvent.setup()
  render(<LanguageProvider><ThemeProvider><><Header /><Hero /></></ThemeProvider></LanguageProvider>)
  expect(screen.getByRole('link', { name: 'ข้ามไปยังเนื้อหา' })).toHaveAttribute('href', '#main-content')
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'ผลงาน' })).toHaveAttribute('href', '#work')
  expect(screen.getByRole('button', { name: 'เปลี่ยนภาษาเป็นอังกฤษ' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'เปลี่ยนเป็นโหมดสว่าง' })).toHaveAttribute('aria-pressed', 'true')
  await user.click(screen.getByRole('button', { name: 'เปลี่ยนภาษาเป็นอังกฤษ' }))
  expect(screen.getByRole('heading', { level: 1, name: 'Building web products from interface to backend' })).toBeInTheDocument()
})

it('presents the Full-stack position and Resume download', () => {
  render(<LanguageProvider><ThemeProvider><Hero /></ThemeProvider></LanguageProvider>)
  expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'ดาวน์โหลด Resume' })).toHaveAttribute('href', '/Resume_Suphakon_Saephan.pdf')
  expect(screen.getByRole('link', { name: 'ดาวน์โหลด Resume' })).toHaveAttribute('download')
})
```

- [ ] **Step 2: Run tests and confirm the old page fails the new contract**

Run: `npm test -- src/components/Header src/components/Hero`

Expected: FAIL because the new components, skip link, controls, heading, and Resume CTA are absent.

- [ ] **Step 3: Implement the page shell and controls**

`Header` uses a text identity link, four anchor links, a `TH / EN` button, `ThemeLamp`, and an accessible mobile disclosure button with `aria-expanded` and `aria-controls="site-menu"`. Close the mobile menu after selecting an anchor. `ThemeLamp` is a real `<button type="button">` with `aria-pressed={isDark}` and a CSS-drawn shade, cord, and pull; the icon is decorative with `aria-hidden="true"`.

`Hero` renders one `<h1>`, the profile image at `/profile.jpg`, `#work` CTA, and downloadable Resume CTA. The skip link targets the `main-content` landmark that Task 6 adds when every final section is available.

- [ ] **Step 4: Run focused tests, full tests, and lint**

Run: `npm test -- src/components/Header src/components/Hero && npm test && npm run lint`

Expected: all tests PASS and ESLint exits 0.

- [ ] **Step 5: Commit the accessible shell**

```powershell
git add src/components/Header src/components/ThemeLamp src/components/Hero
git commit -m "feat: build accessible portfolio shell"
```

---

### Task 4: Add Verified CMES and AirSafeTH Case Studies

**Files:**
- Create: `public/projects/cmes-admin.webp`
- Create: `public/projects/cmes-queue.webp`
- Create: `public/projects/airsafeth.webp`
- Create: `src/components/SelectedWork/SelectedWork.jsx`
- Create: `src/components/SelectedWork/SelectedWork.module.css`
- Create: `src/components/SelectedWork/SelectedWork.test.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `content.selectedWork`, `content.projects`, and `content.linkLabels` from Task 1.
- Produces: `<section id="work">` containing exactly two evidence-led project articles.

- [ ] **Step 1: Capture and optimize real screenshots**

Use the browser to capture one useful AirSafeTH desktop view from `https://air-safe-th.vercel.app/`. Capture authenticated CMES Admin and queue/OBS control views from the live or local application only if no personal customer data is visible. Crop browser chrome, remove email/phone/order identifiers from the frame, and convert the images to WebP at a maximum width of 1600px and quality 82. Save to the three exact paths above. If an authenticated CMES screen cannot be captured safely, use a non-sensitive login/public display screen and keep the filename stable.

- [ ] **Step 2: Write failing project-section tests**

```jsx
it('renders CMES as an ongoing prototype without claiming venue adoption', () => {
  render(<LanguageProvider><SelectedWork /></LanguageProvider>)
  expect(screen.getByRole('heading', { name: 'CMES' })).toBeInTheDocument()
  expect(screen.getByText(/Prototype\/Pilot/)).toBeInTheDocument()
  expect(screen.queryByText(/used by multiple venues/i)).not.toBeInTheDocument()
})

it('renders AirSafeTH with live and GitHub links', () => {
  render(<LanguageProvider><SelectedWork /></LanguageProvider>)
  expect(screen.getByRole('heading', { name: 'AirSafeTH' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'เปิดเว็บไซต์' })).toHaveAttribute('href', 'https://air-safe-th.vercel.app/')
  expect(screen.getByRole('link', { name: 'ดู GitHub' })).toHaveAttribute('href', 'https://github.com/66JJN/AirSafeTH')
})
```

Render `SelectedWork` inside `LanguageProvider`; do not mock content or project cards.

- [ ] **Step 3: Run tests and confirm failure**

Run: `npm test -- src/components/SelectedWork`

Expected: FAIL because `SelectedWork` does not exist.

- [ ] **Step 4: Implement the shared project anatomy**

Map `content.projects` into semantic `<article>` elements with status, summary, ownership, evidence list, stack list, responsive `<picture>`/`img`, and links. External links use `target="_blank" rel="noreferrer"`; visible link text comes from `content.linkLabels`. Apply a dark, full-width CMES treatment and an air-blue AirSafeTH treatment through `[data-project="cmes"]` and `[data-project="airsafeth"]`, not separate duplicated components.

- [ ] **Step 5: Run project tests, full tests, and lint**

Run: `npm test -- src/components/SelectedWork && npm test && npm run lint`

Expected: all tests PASS and ESLint exits 0.

- [ ] **Step 6: Commit the project case studies**

```powershell
git add public/projects src/components/SelectedWork src/App.jsx
git commit -m "feat: add verified project case studies"
```

---

### Task 5: Add Project-Backed Capabilities and Engineering Decisions

**Files:**
- Create: `src/components/Capabilities/Capabilities.jsx`
- Create: `src/components/Capabilities/Capabilities.module.css`
- Create: `src/components/EngineeringNotes/EngineeringNotes.jsx`
- Create: `src/components/EngineeringNotes/EngineeringNotes.module.css`
- Create: `src/components/EngineeringNotes/EngineeringNotes.test.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `content.capabilities` and `content.engineering` from Task 1.
- Produces: `#capabilities` with four capability groups and three numbered engineering decisions.

- [ ] **Step 1: Write a failing evidence test**

```jsx
it('shows exactly three implementation-backed engineering decisions', () => {
  render(<LanguageProvider><EngineeringNotes /></LanguageProvider>)
  expect(screen.getAllByRole('article')).toHaveLength(3)
  expect(screen.getByRole('heading', { name: 'ทำให้การเล่นคิว real-time ฟื้นตัวได้' })).toBeInTheDocument()
  expect(screen.getByText(/submission key/)).toBeInTheDocument()
  expect(screen.getByText(/Google Apps Script proxy/)).toBeInTheDocument()
})
```

- [ ] **Step 2: Run the test and confirm failure**

Run: `npm test -- src/components/EngineeringNotes`

Expected: FAIL because the component does not exist.

- [ ] **Step 3: Implement both sections**

Render capabilities as four border-separated groups with descriptive prose, not logos or skill meters. Render engineering notes as three `<article>` elements, each with number, heading, `content.engineering.problemLabel`, problem text, `content.engineering.decisionLabel`, and decision text.

- [ ] **Step 4: Run focused tests, full tests, and lint**

Run: `npm test -- src/components/EngineeringNotes && npm test && npm run lint`

Expected: all tests PASS and ESLint exits 0.

- [ ] **Step 5: Commit capabilities and decisions**

```powershell
git add src/components/Capabilities src/components/EngineeringNotes src/App.jsx src/data/portfolioContent.js
git commit -m "feat: present project-backed engineering evidence"
```

---

### Task 6: Complete About, Contact, Footer, and Resume Delivery

**Files:**
- Create: `src/components/About/About.jsx`
- Create: `src/components/About/About.module.css`
- Create: `src/components/Contact/Contact.jsx`
- Create: `src/components/Contact/Contact.module.css`
- Create: `src/components/Contact/Contact.test.jsx`
- Create: `src/components/Footer/Footer.jsx`
- Create: `src/components/Footer/Footer.module.css`
- Create: `public/Resume_Suphakon_Saephan.pdf` from `D:\Resume_Suphakon_Saephan.pdf`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `content.about`, `content.contact`, `content.footer`, and `content.identity`.
- Produces: final `#about` and `#contact` landmarks plus working mail, telephone, GitHub, and Resume links.

- [ ] **Step 1: Copy the accepted Resume into the public build**

Run:

```powershell
Copy-Item -LiteralPath 'D:\Resume_Suphakon_Saephan.pdf' -Destination 'D:\66JJN.github.io\public\Resume_Suphakon_Saephan.pdf'
```

Verify: `Test-Path 'public\Resume_Suphakon_Saephan.pdf'` returns `True` and the source/destination SHA-256 hashes match.

- [ ] **Step 2: Write failing contact tests**

```jsx
it('provides direct recruiter contact paths', () => {
  render(<LanguageProvider><Contact /></LanguageProvider>)
  expect(screen.getByRole('link', { name: /pyaksda@gmail.com/ })).toHaveAttribute('href', 'mailto:pyaksda@gmail.com')
  expect(screen.getByRole('link', { name: /095-218-6772/ })).toHaveAttribute('href', 'tel:0952186772')
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/66JJN')
  expect(screen.getByRole('link', { name: 'ดาวน์โหลด Resume' })).toHaveAttribute('href', '/Resume_Suphakon_Saephan.pdf')
})
```

- [ ] **Step 3: Run tests and confirm failure**

Run: `npm test -- src/components/Contact`

Expected: FAIL because the new contact component does not exist.

- [ ] **Step 4: Implement the remaining content sections**

`About` renders the biography and one compact education record. `Contact` renders the internship statement and four direct actions. `Footer` repeats only the name and role note; it must not duplicate the full navigation or project links. Assemble `App.jsx` with `ThemeProvider`, `LanguageProvider`, `Header`, one `<main id="main-content">` containing `Hero`, `SelectedWork`, `Capabilities`, `EngineeringNotes`, `About`, and `Contact`, followed by `Footer`.

- [ ] **Step 5: Run focused tests, full tests, and lint**

Run: `npm test -- src/components/Contact && npm test && npm run lint`

Expected: all tests PASS and ESLint exits 0.

- [ ] **Step 6: Commit the complete information architecture**

```powershell
git add public/Resume_Suphakon_Saephan.pdf src/components/About src/components/Contact src/components/Footer src/App.jsx
git commit -m "feat: complete portfolio content sections"
```

---

### Task 7: Apply the Editorial Grid, Responsive Composition, and Motion Rules

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Modify: `src/main.jsx`
- Modify: all new component CSS modules from Tasks 3–6
- Create: `src/App.test.jsx`

**Interfaces:**
- Consumes: the semantic DOM and data attributes from Tasks 3–6.
- Produces: visual tokens and layout behavior for light/dark themes, desktop/mobile, focus, and reduced motion.

- [ ] **Step 1: Write a failing application-level semantics test**

```jsx
it('keeps one main heading and all primary landmarks after composition', () => {
  render(<App />)
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  expect(document.querySelectorAll('main')).toHaveLength(1)
  expect(['work', 'capabilities', 'about', 'contact'].map((id) => document.getElementById(id)?.tagName)).toEqual(['SECTION', 'SECTION', 'SECTION', 'SECTION'])
})
```

- [ ] **Step 2: Run the test and inspect any semantic composition failure**

Run: `npm test -- src/App.test.jsx`

Expected: FAIL if duplicate headings, temporary wrappers, or missing section IDs remain.

- [ ] **Step 3: Define the visual tokens**

`tokens.css` defines semantic variables, including:

```css
:root {
  --canvas: #f2f0e9;
  --surface: #e8e5dc;
  --ink: #11120f;
  --muted: #5d5f57;
  --line: rgba(17, 18, 15, 0.22);
  --accent: #1547ff;
  --accent-ink: #ffffff;
  --project-dark: #10110f;
  --project-paper: #f2f0e9;
  --air: #b9dcff;
  --max-width: 1440px;
  --gutter: clamp(1rem, 3vw, 3rem);
  --section-space: clamp(5rem, 10vw, 10rem);
}

:root[data-theme='dark'] {
  --canvas: #11120f;
  --surface: #1b1c18;
  --ink: #f2f0e9;
  --muted: #b8b6ae;
  --line: rgba(242, 240, 233, 0.22);
}
```

- [ ] **Step 4: Implement the responsive editorial system**

`global.css` provides the reset, locally hosted/system font stack, 12-column `.editorial-grid`, skip-link behavior, focus-visible outline, common link/button styling, and image defaults. Desktop uses asymmetric spans and thin rules; at `max-width: 720px`, switch all grid sections to four columns and order project content as heading, media, summary, evidence, links. Keep body text between 16px and 20px and cap readable prose at about 68 characters.

The lamp pull uses a transform of at most 6px for 180ms. Under `@media (prefers-reduced-motion: reduce)`, remove smooth scrolling and set all animation/transition durations to `0.01ms` with a single iteration. Hover styles must be duplicated by `:focus-visible` where they communicate state.

- [ ] **Step 5: Run automated verification**

Run: `npm test && npm run lint && npm run build`

Expected: all tests PASS, lint exits 0, and Vite creates `dist` successfully.

- [ ] **Step 6: Commit the visual system**

```powershell
git add src/styles src/main.jsx src/App.test.jsx src/components
git commit -m "feat: apply responsive editorial visual system"
```

---

### Task 8: Metadata, Cleanup, Browser QA, and Final Evidence Audit

**Files:**
- Modify: `index.html`
- Delete: obsolete files under `src/components`, `src/assets`, `src/styles/mobile-fix.css`, `src/utils/mobile-hover-fix.css`, `src/App.css`, and `src/index.css` only when unreferenced
- Delete: `public/vite.svg` only when unreferenced
- Modify: `README.md` if it exists; otherwise do not create project documentation outside this plan/spec pair

**Interfaces:**
- Consumes: complete application from Tasks 1–7.
- Produces: deploy-ready portfolio with no obsolete imports or inaccurate project claims.

- [ ] **Step 1: Update document metadata**

Set `<html lang="th">`, title `Suphakon Saephan — Full-stack Developer Intern`, a concise Thai description naming Full-stack/Web Development, canonical URL `https://66jjn.github.io/`, `theme-color`, `og:title`, `og:description`, `og:type="website"`, and `og:image="https://66jjn.github.io/portfolio.png"`. Remove the external Devicon stylesheet because the new design uses text labels rather than icon marquees.

- [ ] **Step 2: Prove old modules are unreachable before removal**

Run:

```powershell
rg "HeroNew|WhyFullstack|TechStack|Projects|ProblemSolving|Learning|CaseStudy|ProjectCard|mobile-fix|mobile-hover-fix|App.css|index.css" src
```

Expected: no imports from `App.jsx`, `main.jsx`, or any new component. Remove only the returned obsolete implementation files, then run `rg --files src` and confirm the file map contains only the new application, content, contexts, tests, components, and styles.

- [ ] **Step 3: Run the complete automated gate**

Run:

```powershell
npm test
npm run lint
npm run build
git diff --check
```

Expected: tests PASS, ESLint exits 0, Vite build exits 0, and `git diff --check` emits no output.

- [ ] **Step 4: Perform browser QA at both acceptance viewports**

Start `npm run dev -- --host 127.0.0.1`, open the local URL in the in-app browser, and inspect:

1. 1440x900: Thai/light, Thai/dark, English/light, English/dark.
2. 390x844: the same four combinations, open/closed mobile navigation, no horizontal overflow.
3. Keyboard: skip link, navigation, language, lamp, all project links, contact links, and Resume receive visible focus in logical order.
4. Reduced motion: emulate `prefers-reduced-motion: reduce`; lamp and page transitions become effectively instant.
5. Links: CMES Admin, CMES User, both CMES GitHub repositories, AirSafeTH live, AirSafeTH GitHub, email, phone, GitHub profile, and Resume return the intended target.
6. Images: all three product screenshots and the portrait load with meaningful localized alt text; no screenshot exposes personal customer data.

Save desktop and mobile QA screenshots under `D:\66JJN.github.io\docs\qa\portfolio-desktop.png` and `D:\66JJN.github.io\docs\qa\portfolio-mobile.png` for review.

- [ ] **Step 5: Re-audit every technical claim against source evidence**

Confirm the final copy says:

- designed for multiple venues, not used by multiple venues;
- prototype/pilot and actively developed;
- current repositories primarily rebuilt and extended by Suphakon after collaborative origins;
- access boundaries, not complete granular RBAC;
- Google Apps Script proxy for current OTP delivery;
- ranking uses MongoDB aggregation while income metrics combine paid ImageQueue and CheckHistory records server-side;
- AirSafeTH fallback is used when an AQI request fails and is visibly labelled;
- AirSafeTH provides a personal estimate, not diagnosis or medical advice.

Search for banned overclaims:

```powershell
rg -n -i "expert|เชี่ยวชาญ|premium|พรีเมียม|innovative|นวัตกรรม|deep expertise|ใช้จริงหลายร้าน|used by multiple venues|granular RBAC|Nodemailer" src index.html
```

Expected: no inaccurate or inflated portfolio copy. Technical mentions inside tests must still match the intended behavior.

- [ ] **Step 6: Commit the deploy-ready redesign**

```powershell
git add index.html src public docs/qa
git commit -m "feat: finalize internship portfolio redesign"
```

- [ ] **Step 7: Report evidence without deploying**

Report the final test count, lint result, build result, browser viewport checks, and the final commit hash. Do not run `npm run deploy` unless the user separately authorizes publication.
