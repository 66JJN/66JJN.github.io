# CMES Case Study Portfolio Design

**Date:** 2026-08-04

**Status:** Approved concept; awaiting written-spec review

**Audience:** Internship recruiters, HR, and technical interviewers for Front-end, Back-end, Full-stack, and Web Developer roles

## Goal

เพิ่มหน้า CMES Case Study แบบสองภาษาให้ Portfolio แสดงความสามารถในการแก้ปัญหาจริง โดยยังอ่านเร็วสำหรับ HR และเปิดรายละเอียดเพิ่มได้สำหรับผู้สัมภาษณ์สายเทคนิค

## Core principle

ออกแบบข้อมูลเป็นสามระดับ:

1. หน้า Portfolio หลักสแกนเข้าใจได้ภายในประมาณ 15–20 วินาที
2. หน้า Case Study อ่านใจความหลักได้ภายในประมาณ 1–2 นาที
3. รายละเอียดทางเทคนิคอยู่ใน `<details>` ให้เปิดอ่านเมื่อสนใจ

ไม่เพิ่มข้อมูลเพื่อให้ดูเก่งเกินหลักฐาน ไม่ใช้คำว่า “รองรับ 500 คน”, “ปลอดภัย 100%” หรือ “production-ready” หากยังไม่มีผลทดสอบรองรับ

## Navigation and routing

- หน้า Portfolio หลักเพิ่ม CTA ไทย/อังกฤษสำหรับเปิด CMES Case Study
- หน้า Case Study เปิดผ่าน `/#/cmes-case-study`
- ใช้ hash routing ขนาดเล็กภายในแอป ไม่เพิ่ม React Router
- Hash route ทำให้ direct link และ browser refresh ทำงานบน GitHub Pages เพราะ fragment ไม่ถูกส่งไป server
- Route ที่ไม่รู้จักกลับหน้า Portfolio หลักอย่างปลอดภัย
- หน้า Case Study มีปุ่มกลับ Portfolio และลิงก์ Live Admin, Live User, GitHub ทั้งสอง repository และ Resume

## Page structure

### 1. Compact hero

- ชื่อ CMES และคำอธิบายหนึ่งย่อหน้าสั้น
- สถานะ “Prototype/Pilot” อย่างตรงไปตรงมา
- บทบาทของผู้พัฒนา: rebuild และพัฒนาส่วนหลักของ current CMES-ADMIN/CMES-USER repositories
- Tech stack เฉพาะแกนหลัก: React, Node.js, Express, MongoDB, Socket.IO, OBS

### 2. System overview

แสดง architecture แบบย่อด้วย semantic HTML/CSS:

`User Frontend → User Backend → Admin Backend → MongoDB / Socket.IO / OBS`

คำอธิบายไม่เกินหนึ่งย่อหน้า เน้น boundary ระหว่าง user, admin, service และ display ไม่ลงรายละเอียดทุก endpoint

### 3. Three engineering cases

แต่ละเคสแสดงส่วนที่สแกนได้ทันที:

- Problem
- Decision
- Result / Evidence

รายละเอียด implementation อยู่ใน `<details>`

#### Case 1 — Recoverable realtime queue

- ปัญหา: state ที่อยู่เฉพาะ browser ทำให้ refresh, backend restart หรือ OBS disconnect เสี่ยงทำคิวผิด
- แนวทาง: MongoDB เป็น source of truth, explicit queue states, conditional/atomic transitions, pause/retry/recovery
- หลักฐาน: approved queue อยู่หลัง restart, playing item คืนคิวเมื่อ OBS หลุด, pause หยุดเวลาคงเหลือ

#### Case 2 — Authentication and tenant isolation

- ปัญหา: client สามารถปลอม `x-admin-id`, `x-shop-id` หรือ shop query ได้
- แนวทาง: Admin JWT, Socket authentication, service token ระหว่าง User Backend → Admin Backend และ derive tenant จาก verified identity
- ผลลัพธ์: browser ไม่ถือ service credential และ Admin API แยก admin/service/display boundaries

#### Case 3 — Duplicate, capacity, and production failure handling

- ปัญหา: double click/network retry สร้างคิวซ้ำ, queue limit ตรวจช้าเกินจนรับเงินก่อน, error จาก CORS/ports/timeouts/OTP ไม่ชัด
- แนวทาง: submission key, active queue limit, preflight ก่อน payment, normalized error และ evidence-first debugging
- หลักฐาน: load test 60 submissions, queue cap ต่อผู้ใช้, actionable error และ fixed port contract

## Evidence strip

แสดงข้อมูลสั้น 4 รายการโดยไม่สร้าง metric ใหม่:

- 60-submission queue load test
- Queue persists and recovers after restart
- Maximum active queue per user enforced by server
- OBS disconnect fallback and retry flow

อาจกล่าวถึงภาพ JPG/PNG/WebP ไม่เกิน 10 MB ใน technical detail แต่ไม่จำเป็นต้องเป็น headline

## AI-assisted development

มี card สั้นหนึ่งใบ ไม่สร้าง section ยาว:

- ใช้ AI ช่วยสำรวจ code, อธิบาย, refactor, debug และ documentation
- ผู้พัฒนากำหนด requirement, ตรวจ diff, รัน tests/build และทดสอบ critical behavior
- ยกตัวอย่างบทเรียนจริง: refactor แล้ว callback/shortcut หาย หรือการเปลี่ยน port แก้อาการแต่ทำ contract ระบบพัง
- ข้อความต้องแสดง ownership ไม่กล่าวว่า AI ทำทุกอย่างแทน และไม่ปกปิดการใช้เครื่องมือ

## Lessons and limitations

แสดงสั้น ๆ:

- Realtime transport ไม่ใช่ source of truth
- Security rule ต้องบังคับที่ server
- Build ผ่านไม่เท่ากับ behavior ถูก
- Pilot ถูกทดสอบในขอบเขตที่ระบุ แต่ยังไม่มีหลักฐานรองรับ 500 concurrent users หรือ enterprise SLA

## Bilingual content

- เพิ่มข้อความทั้ง `th` และ `en` ใน data layer เดิม
- โครงสร้าง key ของสองภาษาต้องเหมือนกัน
- ภาษาอังกฤษเขียนเป็นธรรมชาติ ไม่แปลตรงคำจนแข็ง
- การสลับภาษาบนหน้า Case Study ต้องเปลี่ยนทุกข้อความที่ผู้ใช้มองเห็น

## Components

- `CMESCaseStudy.jsx`: composition ของหน้า Case Study
- component ย่อยในไฟล์เดียวได้เมื่อยังสั้น เช่น ArchitectureFlow, CaseCard, EvidenceStrip
- `Portfolio.jsx`: เพิ่ม CTA ไป Case Study เท่านั้น ไม่ใส่ case detail ซ้ำ
- `App.jsx`: เลือกหน้าโดย hash route
- `portfolioContent.js`: เก็บเนื้อหาไทย/อังกฤษและลิงก์
- `global.css`: เพิ่ม style โดยใช้ design tokens และ editorial language เดิม

ไม่เพิ่ม dependency ใหม่และไม่ refactor ส่วนที่ไม่เกี่ยวข้อง

## Visual direction

- ต่อเนื่องกับ editorial grid, typography, borders และ accent colors ปัจจุบัน
- Case Study อ่านง่ายกว่าหน้าโชว์ animation: ใช้ motion เท่าที่ช่วย hierarchy
- Architecture ใช้กล่องและ connector แบบ CSS ไม่ใช้ภาพ raster
- `<details>` มี focus state และ summary ที่ชัด
- รองรับ desktop, tablet และ mobile
- รองรับ light/dark theme และ `prefers-reduced-motion`

## Accessibility

- มี landmark และ heading hierarchy ถูกต้อง
- ลิงก์กลับและ CTA ใช้ชื่อที่สื่อความหมาย
- `<details>/<summary>` ใช้งานด้วย keyboard ได้
- Architecture diagram มีข้อความลำดับเดียวกันสำหรับ screen reader
- สีไม่เป็นช่องทางเดียวในการสื่อสถานะ

## Error and edge handling

- Hash ที่ไม่รู้จักกลับ Portfolio โดยไม่เกิดหน้าว่าง
- รูป project ที่โหลดไม่ได้ใช้ behavior ปัจจุบัน
- ไม่มีการ fetch data runtime สำหรับ Case Study จึงไม่มี loading/error network state เพิ่ม
- External links ใช้ `target="_blank"` และ `rel="noreferrer"` ตาม component เดิม

## Tests and verification

- Test CTA จาก CMES project เปิด hash route ที่ถูก
- Test หน้า Case Study แสดง heading, 3 cases, evidence และ limitations
- Testสลับภาษาแล้ว Case Study เปลี่ยนเป็น English
- Testปุ่มกลับ Portfolio
- Test unknown hash fallback
- ปรับ test จำนวน engineering cards เฉพาะเมื่อโครงเดิมเปลี่ยนจริง
- รัน `npm test`, `npm run lint`, `npm run build`
- ตรวจ responsive และ keyboard flow แบบ manual

## Out of scope

- React Router หรือ routing framework ใหม่
- Backend/API ใหม่
- CMS สำหรับแก้ Portfolio
- Animation ชุดใหม่ขนาดใหญ่
- ภาพ screenshot ใหม่ (ใช้ภาพปัจจุบันก่อน ผู้ใช้เปลี่ยนภายหลังได้)
- การเขียนประวัติทุก bug จาก workspace ลง Portfolio
- ตัวเลข performance หรือจำนวนผู้ใช้ที่ไม่ได้ทดสอบ

## Acceptance criteria

- HR เข้าใจบทบาทและจุดเด่น CMES ได้จาก hero + three cases โดยไม่เปิด technical details
- Technical interviewer เปิดอ่าน implementation/evidence ต่อได้
- เนื้อหาสองภาษาครบและความหมายสอดคล้องกัน
- Direct link/refresh/back navigation ใช้งานบน GitHub Pages
- หน้าเดิม theme, language, mobile, accessibility และ animation ไม่พัง
- tests, lint และ production build ผ่าน
