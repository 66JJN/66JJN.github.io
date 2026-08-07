# FAST FOOD Learning Project Portfolio Design

## Goal

เพิ่ม FAST FOOD ลงใน portfolio อย่างตรงกับระดับความรู้ปัจจุบัน โดยแยกจากผลงานหลักและระบุชัดว่าเป็นโปรเจกต์ที่ยังไม่สมบูรณ์และใช้สำหรับศึกษาเทคโนโลยีใหม่

## Placement

- สร้าง section ใหม่ `Currently Learning / กำลังศึกษา` หลัง Selected Work และก่อน Capabilities
- FAST FOOD ไม่ใช้เลขลำดับ `03` และไม่อยู่ในรายการ Selected Work
- รูปแบบยังใช้ editorial grid ของ portfolio แต่มีน้ำหนักภาพและขนาดหัวข้อเล็กกว่า CMES/AirSafeTH
- Navigation เดิมไม่เพิ่มรายการใหม่ เพื่อลดความแน่นของ header

## Content

### Thai

- ชื่อ: `FAST FOOD`
- สถานะ: `กำลังศึกษา · ยังไม่สมบูรณ์`
- คำอธิบาย: โปรเจกต์ทดลองแพลตฟอร์มค้นหาร้านอาหารใกล้มหาวิทยาลัยพะเยา ใช้เป็นพื้นที่เรียนรู้ Next.js, TypeScript และการเชื่อมบริการภายนอก
- ขอบเขตที่ยืนยันได้: ทดลองสร้างโปรเจกต์ Supabase ตั้งค่าการเชื่อมต่อฐานข้อมูล และจัดการค่า API ผ่าน environment variables
- ข้อจำกัด: TypeScript และโครงสร้างระบบยังอยู่ระหว่างศึกษา ไม่ใช้คำว่าเชี่ยวชาญหรืออ้างว่าเข้าใจระบบทั้งหมด

### English

- Title: `FAST FOOD`
- Status: `Currently learning · Incomplete`
- Describe it as an experimental food-discovery platform near the University of Phayao
- State that Supabase setup, database connection configuration, and API environment variables have been practised
- State that TypeScript and the wider architecture are still being studied

## Stack and Links

- Label stack as `Currently exploring / กำลังศึกษา`
- Show: `Next.js`, `TypeScript`, `Supabase`, `Prisma`, `Auth.js`
- Provide GitHub only: `https://github.com/66JJN/FAST-FOOD`
- Do not render a live-site action

## Media

- Optional image path: `/projects/fast-food.png`
- If the image is absent or fails to load, hide only the figure and preserve the text layout
- Do not create, capture, or modify the image in this task

## Motion and Accessibility

- Use the existing `data-reveal` scroll system
- Image uses the existing decorative grid reveal when present
- Maintain semantic section/article headings and localized alt text
- Preserve reduced-motion behavior and mobile reading order

## Supporting Documentation

- Add FAST FOOD to README under a distinct learning-project subsection
- Do not list its unfinished features as completed capabilities

## Verification

- Content tests assert FAST FOOD is separate from `projects`, has no live URL, includes GitHub, and contains the learning limitation in both languages
- Component tests assert the new section exists and the optional image path is stable
- Browser QA at 1440x900 and 390x844 checks layout with the image absent
- Run tests, lint, build, and `git diff --check`
