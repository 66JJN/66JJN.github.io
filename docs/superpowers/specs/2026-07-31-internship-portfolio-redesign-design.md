# Internship Portfolio Redesign Design

## Goal

Redesign Suphakon Saephan's portfolio for Full-stack, Front-end, Back-end, and Web Developer internship applications. The result must be concise, evidence-led, bilingual (Thai-first with complete English coverage), responsive, accessible, and visually distinctive without generic AI-generated styling.

## Audience and Positioning

- Primary audience: internship recruiters and engineering interviewers in Thailand.
- Primary position: Full-stack Developer Intern, with visible Front-end and Back-end capability.
- Voice: direct, specific, and student-appropriate. Avoid claims such as "expert", "premium", "innovative", or "deep expertise" unless supported by concrete evidence.
- Resume alignment: preserve the technical breadth already presented in `Resume_Suphakon_Saephan.pdf`, while using current implementation details and more precise wording in the portfolio.

## Information Architecture

The page contains six sections:

1. **Hero** - name, Full-stack Developer Intern positioning, a short introduction, Selected Work CTA, and Resume download.
2. **Selected Work** - CMES as the flagship case study and AirSafeTH as the supporting project.
3. **How I Build** - project-backed capabilities grouped into Frontend, Backend, Realtime/Data, and Integrations.
4. **Engineering Decisions** - three verified CMES engineering cases instead of six long generic problem cards.
5. **About & Education** - concise biography, University of Phayao, Computer Science, GPA 3.59, and working/learning approach.
6. **Contact** - email, phone, GitHub, Resume download, and internship contact CTA.

The existing standalone Why Fullstack, long Learning & Growth, duplicated skills, large feature inventory, and infinite-scrolling logo rows are removed.

## Content Design

### Hero

Thai direction:

> ผมศุภกร นักศึกษาวิทยาการคอมพิวเตอร์ที่ชอบพัฒนาเว็บให้ครบทั้งระบบ ตั้งแต่หน้าจอ React, API และ MongoDB ไปจนถึงงาน real-time และการเชื่อมต่อบริการ AI กำลังมองหาโอกาสฝึกงานด้าน Full-stack หรือ Web Development

English direction:

> Computer Science student building web products end to end, from React interfaces and APIs to MongoDB, real-time systems, and practical AI integrations. Seeking a Full-stack or Web Development internship.

### CMES

- Status: `2025-present · Ongoing · Prototype/Pilot`.
- Position it as a real-time digital signage and customer engagement system designed to support multiple venues; do not claim that multiple venues are already using it.
- State that the project began collaboratively and was independently rebuilt and extended in the current CMES-ADMIN and CMES-USER repositories.
- Present four concise capability groups:
  - Real-time queue and OBS playback.
  - User/Admin flows, payments, gifts, and analytics.
  - Gemini caption generation, Sightengine moderation, and Tesseract OCR.
  - Authentication, security boundaries, and multi-tenant isolation.
- Use implementation-accurate details:
  - Two React frontends and two Node/Express backends communicate through REST and authenticated service requests.
  - `shopId`, compound MongoDB indexes, and Socket.IO rooms isolate venue data.
  - Queue behavior includes deduplication, per-user limits, per-shop concurrency guards, server-driven playback, pause/resume, and recovery after backend or OBS disconnection.
  - Authentication includes JWT, Google OAuth, and email OTP. Current email delivery uses a Google Apps Script proxy rather than Nodemailer SMTP.
  - Access boundaries distinguish user, admin, OBS display, and backend services. Do not describe the current implementation as complete granular RBAC.
  - MongoDB aggregation pipelines support ranking summaries. Income analytics combines paid records from ImageQueue and CheckHistory and calculates metrics server-side.
  - Security includes Helmet, rate limiting, NoSQL sanitization, signed display tokens, inter-service credentials, and scheduled media cleanup/anonymization.

### AirSafeTH

- Status: `2026 · Completed learning project`.
- Describe it as a React/Vite air-quality information and personal risk-estimation web app.
- Verified features:
  - AQI lookup by browser geolocation or province selection.
  - WAQI integration with a clearly marked estimated-data fallback when the AQI request fails.
  - PM2.5 educational content and prevention guidance.
  - Risk questionnaire for five user groups.
  - Personalized recommendations and localStorage assessment history.
- Link both the live deployment (`https://air-safe-th.vercel.app/`) and GitHub repository (`https://github.com/66JJN/AirSafeTH`).

### Engineering Decisions

Use three cases backed by current code and BUGLOG evidence:

1. **Reliable real-time playback** - move playback authority to persisted backend state, add per-shop locks and conditional updates, restore playing state after reconnects, and pause safely when OBS disconnects.
2. **Duplicate and capacity protection** - use submission keys, per-user active limits, and per-shop/person serialization to prevent double submissions and race conditions.
3. **Deployment-aware security and delivery** - configure trust proxy/rate limits for shared venue networks and migrate OTP delivery from SMTP to a Google Apps Script proxy when hosting blocked SMTP.

## Visual Direction

Use Gridgeist as a principles reference, not a template to copy.

- A twelve-column editorial grid structures desktop layouts. Grid lines appear only where they clarify hierarchy.
- Light palette: warm off-white canvas, near-black text, electric-blue accent.
- Dark palette: near-black canvas, warm-paper text, the same electric-blue accent.
- Use large expressive typography, disciplined small monospace labels, thin rules, and controlled high-contrast section changes.
- Replace the floating oval portrait with a rectangular, grid-aligned portrait treatment.
- CMES receives a large dark case-study section with real Admin, Queue, and OBS screenshots.
- AirSafeTH uses an air-blue accent section and a real product screenshot.
- Avoid glassmorphism-heavy cards, decorative glow blobs, generic gradients, skill meters, and continuous marquees.
- Motion is short and functional. Respect `prefers-reduced-motion`.

## Navigation and Preferences

- Desktop navigation: identity at left; Work, Capabilities, About, and Contact in the center; TH/EN and theme controls at right.
- Mobile navigation: compact header and a full-width grid menu.
- The TH/EN control switches all user-facing content and persists the choice in localStorage.
- The theme control keeps the lamp concept but uses a cleaner custom line icon, a short pull/swing response, an obvious on/off state, and an accessible name.
- Theme selection persists in localStorage and initially falls back to `prefers-color-scheme`.

## Component and Data Architecture

```text
src/
├─ data/
│  └─ portfolioContent.js
├─ contexts/
│  ├─ ThemeContext.jsx
│  └─ LanguageContext.jsx
├─ components/
│  ├─ Header/
│  ├─ ThemeLamp/
│  ├─ Hero/
│  ├─ SelectedWork/
│  ├─ EngineeringNotes/
│  ├─ Capabilities/
│  ├─ About/
│  ├─ Contact/
│  └─ Footer/
└─ styles/
   ├─ tokens.css
   └─ global.css
```

- All localized copy, project facts, links, and media metadata live in `portfolioContent.js`.
- Thai and English content use the same schema and must contain matching keys.
- Shared project components render consistent anatomy while allowing CMES and AirSafeTH visual variants.
- Theme styling is driven by semantic CSS custom properties.
- Copy the Resume to `public/Resume_Suphakon_Saephan.pdf`.
- Use real screenshots from the CMES repositories and a verified AirSafeTH screenshot.
- Update title, description, theme-color, and Open Graph metadata.
- Remove obsolete components and CSS only after confirming they have no remaining imports.

## Responsive Behavior

- Desktop target: 1440x900 with full editorial grid and asymmetric media/text composition.
- Mobile target: 390x844 with content reordered as heading, media, summary, evidence, links.
- No desktop layout is merely scaled down. Navigation, project density, type scale, and image crops are recomposed for narrow screens.
- Buttons and controls meet minimum touch-target sizes.

## Accessibility

- Add a skip link and semantic landmarks.
- Maintain valid heading order.
- Provide visible keyboard focus and keyboard-operable navigation and controls.
- Expose current language and theme states through accessible names/attributes.
- Provide meaningful alt text for project screenshots and the portrait.
- Meet readable color contrast in light and dark themes.
- Preserve comprehension without color or animation.

## Testing and Verification

Implementation follows test-driven development.

- Add tests for matching TH/EN schemas, required projects, correct public links, and the Resume path.
- Add component tests for language switching, theme persistence, lamp state, navigation, and Resume CTA.
- Run lint and production build.
- Perform browser QA at desktop 1440x900 and mobile 390x844.
- Verify Thai/English, light/dark, keyboard navigation, reduced motion, and all Live/GitHub/Resume links.
- Re-audit CMES copy against the current repositories and Resume before completion.

## Scope

- Modify only the portfolio repository.
- Treat CMES-ADMIN, CMES-USER, AirSafeTH, and the Resume PDF as source material; do not change their implementation in this project.
- Do not add unrelated features, a CMS, contact form backend, analytics, or new external services.
