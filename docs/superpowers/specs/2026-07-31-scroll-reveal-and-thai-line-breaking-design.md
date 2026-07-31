# Scroll Reveal and Thai Line-Breaking Design

## Goal

เพิ่ม motion ที่ตอบสนองกับการเลื่อนหน้าโดยไม่แย่งความสนใจจากเนื้อหา และป้องกันหัวข้อภาษาไทยตัดกลางคำ เช่น `โปรเจกต์` เป็น `โปรเจ` / `กต์`

## Motion System

- ใช้ scroll-progress reveal กับหัวข้อ section, project headers/bodies, capability cards, engineering cards, About และ Contact
- แต่ละชิ้นค่อย ๆ เพิ่ม opacity และเลื่อนขึ้นไม่เกิน 24px เมื่อเข้าจากด้านล่าง
- เมื่อชิ้นงานพ้นด้านบน viewport ให้ opacity ลดลงตามระยะ ไม่หายทันที
- stagger รายการซ้ำ เช่น capability และ engineering cards เล็กน้อยเพื่อให้เห็นลำดับ แต่รวมเวลาต้องสั้นและไม่หน่วงการอ่าน
- Hero entrance เดิมคงอยู่ แต่ใช้ easing และระยะเดียวกับระบบใหม่
- Project images ใช้ grid-tile overlay แบบเบา: ช่องทึบค่อย ๆ หายสลับลำดับเพื่อเผยภาพ และกลับมาปิดบางส่วนเมื่อภาพพ้น viewport
- Hover ใช้เฉพาะ image scale, arrow shift และเส้น/สีที่มีอยู่ ไม่เพิ่ม parallax หรือ cursor effect
- เมื่อ `prefers-reduced-motion: reduce` ให้แสดงทุกชิ้นทันที ปิด grid wipe และไม่มี scroll listener สำหรับ motion

## Thai Line Breaking

- สร้าง component สำหรับข้อความหัวข้อที่แบ่งภาษาไทยด้วย `Intl.Segmenter('th', { granularity: 'word' })`
- ห่อแต่ละคำที่มีตัวอักษรไทยด้วย inline span ที่ไม่อนุญาตให้ตัดภายในคำ แต่ยังขึ้นบรรทัดระหว่างคำได้
- ใช้กับ Hero, section headings, About และ Contact ซึ่งเป็นข้อความขนาดใหญ่และเสี่ยงเห็นการตัดคำชัดที่สุด
- ภาษาอังกฤษใช้ข้อความเดิมและอนุญาตให้ browser จัดบรรทัดตามปกติ
- มี fallback เป็นข้อความเดิมเมื่อ browser ไม่มี `Intl.Segmenter`; CSS ยังใช้ `word-break: normal` และ `overflow-wrap: normal`

## Implementation Boundaries

- Motion logic อยู่ใน hook เดียวและ pure progress function ที่ทดสอบแยกได้
- Component ระบุเป้าหมายด้วย `data-reveal` และ optional delay เท่านั้น
- ไม่เพิ่ม animation library; ใช้ React, requestAnimationFrame และ CSS custom properties
- ไม่แก้เนื้อหา portfolio หรือลิงก์โปรเจกต์ในงานนี้
- ไม่แก้หรือเพิ่มรูปภาพของผู้ใช้

## Verification

- Unit tests ครอบคลุม reveal progress, reduced-motion behavior, reveal targets และคำ `โปรเจกต์` ต้องอยู่ใน span เดียว
- Browser QA ที่ 1440x900 และ 390x844 ในภาษาไทยและอังกฤษ
- ตรวจไม่มี horizontal overflow, element ไม่ค้าง opacity 0 และ keyboard focus ยังมองเห็นได้
- รัน tests, lint, build และ `git diff --check`
