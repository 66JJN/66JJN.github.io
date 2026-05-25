import styles from './WhyFrontend.module.css';

function WhyFullstack() {
    return (
        <section className={styles.whyFrontend} id="why-fullstack">
            <div className="container">
                <h2 className={styles.sectionTitle}>ทำไมถึงเลือก Fullstack Development</h2>

                <div className={styles.content}>
                    <div className={styles.mainText}>
                        <p className={styles.paragraph}>
                            ผมหลงใหลในการทำ <strong>Fullstack Development</strong> เพราะมันคือการสร้างผลิตภัณฑ์ที่สมบูรณ์แบบ
                            ตั้งแต่จุดเริ่มต้นของข้อมูลในฐานข้อมูล ไปจนถึงประสบการณ์สุดท้ายของผู้ใช้บนหน้าจอ 
                            ความสามารถในการควบคุมทั้งระบบช่วยให้ผมออกแบบสถาปัตยกรรมที่สอดประสานกันได้อย่างลงตัว 
                            มีศักยภาพในการแก้ไขปัญหาที่ต้นเหตุ และสร้างสรรค์ฟีเจอร์ใหม่ๆ ได้อย่างไร้รอยต่อ
                        </p>

                        <p className={styles.paragraph}>
                            นอกจากนี้ การบูรณาการ <strong>AI Integrations</strong> เข้ากับ Fullstack Application 
                            ยังเปิดประตูสู่ความเป็นไปได้ใหม่ๆ เช่น ระบบอัตโนมัติที่ช่วยลดภาระงานของมนุษย์ 
                            และการสร้างประสบการณ์ที่ "ฉลาด" กว่าเดิม ผมให้ความสำคัญกับความปลอดภัย (Security) 
                            ประสิทธิภาพ (Performance) และการทำงานแบบ Real-time เพื่อส่งมอบคุณค่าสูงสุดให้กับผู้ใช้งาน
                        </p>
                    </div>

                    <div className={styles.focusAreas}>
                        <h3 className={styles.focusTitle}>สิ่งที่ผมให้ความสำคัญ</h3>

                        <div className={styles.focusGrid}>
                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🧩</span>
                                <h4 className={styles.focusName}>End-to-End Solutions</h4>
                                <p className={styles.focusDesc}>
                                    สร้างระบบที่สมบูรณ์แบบตั้งแต่โครงสร้าง Data ไปจนถึง UI ที่สวยงาม
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🛡️</span>
                                <h4 className={styles.focusName}>Security & Privacy</h4>
                                <p className={styles.focusDesc}>
                                    ให้ความสำคัญกับความปลอดภัยของข้อมูล และระบบ Authentication ที่มั่นคง
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🤖</span>
                                <h4 className={styles.focusName}>AI Empowerment</h4>
                                <p className={styles.focusDesc}>
                                    ใช้ AI ในการวิเคราะห์ข้อมูลและสร้างระบบอัตโนมัติที่สลับซับซ้อน
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>⚡</span>
                                <h4 className={styles.focusName}>Real-time Efficiency</h4>
                                <p className={styles.focusDesc}>
                                    จัดการการไหลของข้อมูลแบบทันที เพื่อประสบการณ์ที่ลื่นไหลที่สุด
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🏗️</span>
                                <h4 className={styles.focusName}>Scalable Architecture</h4>
                                <p className={styles.focusDesc}>
                                    ออกแบบระบบให้เติบโตได้และง่ายต่อการบำรุงรักษาในระยะยาว
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyFullstack;
