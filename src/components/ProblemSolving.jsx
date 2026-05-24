import styles from './ProblemSolving.module.css';

function ProblemSolving() {
    const problems = [
        {
            title: 'Queue Bugs: คิวแสดงซ้ำและข้าม',
            emoji: '🔄',
            problem: 'หลังจากคิวแสดงเสร็จแล้ว รายการเดิมกลับมาแสดงซ้ำใน "คิวที่รออยู่" และบางครั้งคิวถัดไปถูกข้ามไป ทำให้รายการติดค้างในสถานะ "playing" ในฐานข้อมูลแม้ไม่ได้แสดงบนหน้าจอ',
            cause: 'State ของ React ไม่ได้อัปเดตเมื่อเปลี่ยนสถานะคิว และมีการ listen Socket event ซ้อนกัน ทำให้เกิด race condition และ duplicate listeners',
            solution: 'ปรับโครงสร้าง Socket.IO event handling โดยใช้ useEffect cleanup function เพื่อ remove old listeners ก่อนเพิ่มใหม่ และใช้ functional update pattern (`setState(prev => ...)`) เพื่อให้แน่ใจว่าได้ state ล่าสุด รวมถึงเพิ่ม unique key และ filter duplicate entries',
            learned: 'เข้าใจลึกซึ้งเรื่อง React lifecycle, การจัดการ WebSocket listeners อย่างถูกต้อง และการป้องกัน memory leak ด้วย cleanup functions'
        },
        {
            title: 'OBS Overlay: Countdown Timer และ QR Code หาย',
            emoji: '⏱️',
            problem: 'Countdown Timer ไม่แสดงผลบน OBS overlay และเมื่อย้ายรายการกลับไปยังคิว QR Code หายไป ทำให้ไม่สามารถแสดงข้อมูลให้ผู้ใช้เห็นได้',
            cause: 'Component ไม่ได้ re-render เมื่อข้อมูล duration เปลี่ยน และ QR Code data ไม่ถูก restore เมื่อย้ายรายการกลับคิว',
            solution: 'เพิ่ม useEffect สำหรับ listen การเปลี่ยนแปลงของ duration และสร้าง countdown logic ที่อัปเดตทุกวินาที พร้อมทั้งเก็บ QR Code data ใน state และ restore เมื่อย้ายรายการกลับคิว',
            learned: 'การทำงานกับ interval และ timer ใน React, การจัดการ state persistence และการ debug UI issues ด้วย React DevTools'
        },
        {
            title: 'API 404 Error: Profile Picture และ Status ไม่โหลด',
            emoji: '🐛',
            problem: 'หน้า Home แสดง 404 Not Found สำหรับ `/api/user-profile` และ `/api/status` ทำให้รูปโปรไฟล์และข้อมูลสถานะไม่โหลด',
            cause: 'API endpoint ไม่ตรงกับที่ Frontend เรียกใช้ หลังจากย้ายระบบ authentication ไป MongoDB endpoint เดิมถูกลบไป',
            solution: 'อัพเดท Frontend ให้เรียก endpoint ใหม่ `/api/auth/profile` และสร้าง `/api/status` endpoint ใหม่ใน Backend พร้อมทั้งเพิ่ม error handling สำหรับกรณีที่ API fail',
            learned: 'ความสำคัญของการ sync ระหว่าง Frontend และ Backend API, การเขียน error handling ที่ดี และการ test API endpoints อย่างละเอียด'
        },
        {
            title: 'Performance: UI Lag จากการ Render ซ้ำบ่อยเกินไป',
            emoji: '🚀',
            problem: 'เมื่อมีข้อความหรือคิวใหม่เข้ามาเยอะๆ UI lag และ animation ไม่ smooth เพราะ component re-render ทั้งหมดทุกครั้งที่ได้รับ Socket event',
            cause: 'ไม่มี React optimization, useEffect dependency array ไม่เหมาะสม และทุก component re-render แม้ props ไม่เปลี่ยน',
            solution: 'ใช้ React.memo() wrap child components เพื่อป้องกันการ render ที่ไม่จำเป็น, ใช้ useMemo สำหรับ expensive calculations และปรับ dependency array ให้แม่นยำ',
            learned: 'React performance optimization techniques, การใช้ React DevTools Profiler วัด performance และเทคนิค memoization'
        },
        {
            title: 'Database Sync: ข้อมูลไม่ตรงกันระหว่าง UI และ Database',
            emoji: '💾',
            problem: 'รายการอยู่ในสถานะ "playing" ในฐานข้อมูล แต่ไม่แสดงบนหน้าจอ และมี duplicate entries ใน history',
            cause: 'State update และ database update ไม่ทำพร้อมกัน และไม่มีการตรวจสอบ duplicate ก่อนบันทึก history',
            solution: 'ปรับให้ Backend update database ก่อน emit Socket event และเพิ่ม unique constraint + check duplicate ก่อน insert history',
            learned: 'การออกแบบ data flow ที่ถูกต้องระหว่าง Frontend-Backend-Database และความสำคัญของ data validation'
        },
        {
            title: 'AI Integration: การ Moderation และ Slip Verification',
            emoji: '🤖',
            problem: 'การกรองรูปภาพที่ไม่เหมาะสม (Adult/Violence) และการตรวจสอบความถูกต้องของสลิปโอนเงินจำนวนมากเป็นเรื่องยากหากต้องใช้คนตรวจสอบทั้งหมด',
            cause: 'ระบบต้องการความรวดเร็วและความแม่นยำสูง (Real-time) เพื่อให้แอปพลิเคชันทำงานได้โดยไม่ต้องรอนาน',
            solution: 'บูรณาการ Sightengine API สำหรับ Content Moderation แบบ Real-time และใช้ Tesseract.js (OCR) สำหรับตรวจสอบจำนวนเงินในสลิปโดยอัตโนมัติ',
            learned: 'การทำงานกับ AI-based APIs, การจัดการ asynchronous tasks ระหว่างรอผลลัพธ์จาก AI และการทำ Data Cleaning สำหรับ OCR output'
        }
    ];

    return (
        <section className={styles.problemSolving} id="problemsolving">
            <div className="container">
                <h2 className={styles.sectionTitle}>Problem Solving from CMES Project</h2>
                <p className={styles.sectionSubtitle}>
                    ตัวอย่างปัญหาจริงที่พบในโปรเจกต์และวิธีแก้ไขในมุม Front-End Developer
                </p>

                <div className={styles.problemsGrid}>
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className={styles.problemCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.emoji}>{item.emoji}</span>
                                <h3 className={styles.problemTitle}>{item.title}</h3>
                            </div>

                            <div className={styles.section}>
                                <h4 className={styles.sectionLabel}>
                                    <span className={styles.labelIcon}>❗</span>
                                    ปัญหาที่พบ
                                </h4>
                                <p className={styles.sectionText}>{item.problem}</p>
                            </div>

                            <div className={styles.section}>
                                <h4 className={styles.sectionLabel}>
                                    <span className={styles.labelIcon}>🔍</span>
                                    สาเหตุ
                                </h4>
                                <p className={styles.sectionText}>{item.cause}</p>
                            </div>

                            <div className={styles.section}>
                                <h4 className={styles.sectionLabel}>
                                    <span className={styles.labelIcon}>✅</span>
                                    วิธีแก้ไข (Front-End)
                                </h4>
                                <p className={styles.sectionText}>{item.solution}</p>
                            </div>

                            <div className={styles.learnedBox}>
                                <h4 className={styles.learnedLabel}>💡 สิ่งที่ได้เรียนรู้</h4>
                                <p className={styles.learnedText}>{item.learned}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProblemSolving;
