# Portfolio README Refresh Design

## Goal

แทนที่ README template เดิมด้วยเอกสารที่อธิบาย portfolio เวอร์ชันปัจจุบันได้ตรงกับ repository และช่วยให้ทั้ง recruiter กับ developer เข้าใจโปรเจกต์ได้เร็ว

## Content and Language

- ใช้ภาษาไทยเป็นเนื้อหาหลัก และมี English summary สั้นหนึ่งย่อหน้า
- ระบุชื่อ `ศุภกร แซ่พ่าน` และตำแหน่งเป้าหมาย `Full-stack Developer Intern`
- ใส่ลิงก์เว็บไซต์ portfolio, GitHub profile, CMES Admin/User repositories และ AirSafeTH live/repository
- อธิบาย CMES ว่าเป็น ongoing prototype/pilot และ AirSafeTH เป็น completed learning project โดยไม่เพิ่ม claim ใหม่
- ไม่ใส่ข้อความ License เพราะ repository ไม่มีไฟล์ License

## Sections

1. ชื่อโปรเจกต์และคำอธิบายสั้น
2. ลิงก์เปิดเว็บไซต์
3. จุดเด่นของ portfolio: bilingual, themes, responsive editorial layout, scroll reveal, Thai word protection, accessibility
4. Selected projects: CMES และ AirSafeTH
5. Tech stack ตาม `package.json`: React 19, Vite 7, CSS, Vitest, Testing Library, ESLint
6. วิธีติดตั้งและคำสั่ง `dev`, `test`, `lint`, `build`, `preview`, `deploy`
7. โครงสร้างไฟล์ปัจจุบันแบบย่อ
8. English summary

## Style

- กระชับ อ่านง่าย และไม่ใช้ emoji จำนวนมาก
- ไม่ใช้ข้อความ generic เช่น “modern professional portfolio” โดยไม่มีหลักฐาน
- ไม่แสดง component หรือ dependency ที่ไม่มีอยู่จริง
- คำสั่งต้องคัดลอกจาก `package.json` และลิงก์ต้องตรงกับข้อมูลใน portfolio

## Verification

- ตรวจทุก path ใน project structure ด้วย `Test-Path`
- ตรวจทุก npm script กับ `package.json`
- ตรวจ public URLs กับ `src/data/portfolioContent.js`
- รัน markdown/link text scan, tests, lint และ build ก่อน commit
