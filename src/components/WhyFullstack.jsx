import styles from './WhyFrontend.module.css';

function WhyFullstack() {
    return (
        <section className={styles.whyFrontend} id="why-fullstack">
            <div className="container">
                <h2 className={styles.sectionTitle}>ทำไมถึงเลือก Fullstack Development</h2>

                <div className={styles.content}>
                    <div className={styles.mainText}>
                        <p className={styles.paragraph}>
                            เพราะไม่ชอบโยนปัญหาให้คนอื่นเวลา bug ข้ามระหว่าง frontend กับ backend
                            อยากตามมันไปถึงต้นเหตุแล้วแก้เอง
                            เวลาคิด feature ใหม่ได้ อยากสร้างทั้งหมด
                            แล้วเห็นมันทำงานจริง
                        </p>

                        <p className={styles.paragraph}>
                            เลยเลือก full stack ไม่ใช่เพราะมันดูดีใน resume
                            แต่เพราะรู้แค่ครึ่งเดียวมันแก้ปัญหาได้แค่ครึ่งเดียว
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
