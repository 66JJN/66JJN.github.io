const protectedTerms = [
  'อินเทอร์เฟซ',
  'ฟรอนต์เอนด์',
  'วิทยาการคอมพิวเตอร์',
  'โปรเจกต์',
  'เว็บไซต์',
  'เรียลไทม์',
  'แบ็กเอนด์',
  'ฟูลสแตก',
  'พัฒนาเว็บ',
  'ลงมือทำ',
  'แก้ปัญหา',
  'เรียนรู้',
  'แข็งแรง',
  'หลังบ้าน',
  'หน้าจอ',
  'วิธีคิด',
  'มองหา',
]

const protectedPattern = new RegExp(`(${protectedTerms.join('|')})`, 'u')

const segmentPart = (text) => {
  if (!text || typeof Intl.Segmenter !== 'function') return text ? [text] : []
  return [...new Intl.Segmenter('th', { granularity: 'word' }).segment(text)]
    .map(({ segment }) => segment)
}

export const segmentHeadline = (text) => String(text)
  .split(protectedPattern)
  .flatMap((part) => (protectedTerms.includes(part) ? [part] : segmentPart(part)))
