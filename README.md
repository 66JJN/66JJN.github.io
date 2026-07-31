# Portfolio — ศุภกร แซ่พ่าน

Portfolio สำหรับสมัครฝึกงานตำแหน่ง **Full-stack Developer Intern** โดยนำเสนอประสบการณ์ด้าน Front-end, Back-end และ Web Development ผ่านโปรเจกต์ที่พัฒนาจริง

[เปิด Portfolio](https://66jjn.github.io/) · [GitHub](https://github.com/66JJN)

## ภาพรวม

เว็บไซต์สร้างด้วย React และ Vite เน้นให้ผู้พิจารณาเห็นขอบเขตงาน วิธีคิด และหลักฐานจากโปรเจกต์อย่างรวดเร็ว เนื้อหาใช้ภาษาไทยเป็นค่าเริ่มต้นและสลับเป็นภาษาอังกฤษได้

จุดเด่นของเว็บไซต์:

- รองรับภาษาไทยและอังกฤษ พร้อมจดจำภาษาที่เลือก
- Light theme เป็นค่าเริ่มต้นและมี Dark theme
- Responsive layout สำหรับเดสก์ท็อปและมือถือ
- Scroll-progress animation ที่ค่อย ๆ แสดงและซ่อนเนื้อหาตามตำแหน่งการเลื่อน
- Pixel-grid reveal สำหรับภาพโปรเจกต์
- ป้องกันการตัดคำภาษาไทยกลางคำในหัวข้อสำคัญ
- รองรับ keyboard navigation, visible focus และ `prefers-reduced-motion`
- ดาวน์โหลด Resume ได้จากหน้าเว็บไซต์

## Selected Projects

### CMES

ระบบจัดการคอนเทนต์และกิจกรรมบนจอดิจิทัลแบบ real-time เชื่อม User, Admin, คิวแสดงผล และ OBS เข้าด้วยกัน ระบบถูกออกแบบให้รองรับหลายร้านและยังอยู่ในสถานะ **Ongoing · Prototype/Pilot**

- [CMES Admin](https://cmes-admin-frontend.vercel.app/)
- [CMES User](https://cmes-user-frontend.vercel.app/?shopId=JJ)
- [CMES-ADMIN Repository](https://github.com/66JJN/CMES-ADMIN)
- [CMES-USER Repository](https://github.com/66JJN/CMES-USER)

### AirSafeTH

เว็บสำหรับดูข้อมูล AQI และ PM2.5 พร้อมแบบประเมินความเสี่ยงเบื้องต้นและคำแนะนำตามกลุ่มผู้ใช้ เป็น **Completed learning project** และผลประเมินไม่ใช่คำวินิจฉัยทางการแพทย์

- [เปิด AirSafeTH](https://air-safe-th.vercel.app/)
- [AirSafeTH Repository](https://github.com/66JJN/AirSafeTH)

## Tech Stack

- React 19 และ React DOM 19
- Vite 7
- CSS พร้อม custom properties และ responsive editorial grid
- Vitest, Testing Library และ jsdom
- ESLint
- GitHub Pages ผ่าน `gh-pages`

## เริ่มต้นใช้งาน

ต้องมี Node.js และ npm จากนั้นติดตั้ง dependencies:

```bash
npm install
```

เปิด development server:

```bash
npm run dev
```

โดยปกติ Vite จะเปิดที่ `http://localhost:5173/`

## คำสั่งที่ใช้

| คำสั่ง | รายละเอียด |
| --- | --- |
| `npm run dev` | เปิด Vite development server |
| `npm test` | รัน tests ด้วย Vitest |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |
| `npm run build` | สร้าง production build ใน `dist/` |
| `npm run preview` | เปิดตรวจ production build ในเครื่อง |
| `npm run deploy` | Build และเผยแพร่ `dist/` ผ่าน `gh-pages` |

## โครงสร้างหลัก

```text
src/
├── components/          # Portfolio UI และ Thai heading renderer
├── contexts/            # Language และ theme state
├── data/                # เนื้อหา ลิงก์ และข้อมูลสองภาษา
├── hooks/               # Scroll reveal controller
├── motion/              # Pure scroll/tile progress functions
├── styles/              # Design tokens และ global responsive styles
├── test/                # Test environment setup
├── text/                # Thai headline segmentation
├── App.jsx              # Page composition
└── main.jsx             # Application entry point
```

รูปภาพโปรเจกต์และ Resume ที่แสดงบนเว็บไซต์อยู่ใน `public/`

## English Summary

This is Suphakon Saephan's bilingual internship portfolio for Full-stack, Front-end, Back-end, and Web Developer roles. It presents CMES as an actively developed prototype/pilot and AirSafeTH as a completed learning project, with responsive layouts, persistent theme and language preferences, accessible controls, and scroll-driven motion that respects reduced-motion settings.
