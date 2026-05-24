import styles from './WhyFrontend.module.css';

function WhyFrontend() {
    return (
        <section className={styles.whyFrontend} id="why-frontend">
            <div className="container">
                <h2 className={styles.sectionTitle}>ทำไมถึงเลือก Front-End Development</h2>

                <div className={styles.content}>
                    <div className={styles.mainText}>
                        <p className={styles.paragraph}>
                            ผมเริ่มสนใจ Front-End Development ตั้งแต่ครั้งแรกที่ได้สร้างเว็บไซต์และเห็นว่า
                            การออกแบบ User Interface ที่ดีสามารถเปลี่ยนประสบการณ์ของผู้ใช้ได้อย่างมาก
                            ผมชอบการแปลความต้องการที่ซับซ้อนให้กลายเป็น Interface ที่ใช้งานง่าย สวยงาม
                            และตอบโจทย์ผู้ใช้งานได้จริง
                        </p>

                        <p className={styles.paragraph}>
                            สิ่งที่ทำให้ผมตื่นตาตื่นใจคือการทำงานกับข้อมูลแบบ Real-time ที่ต้องคิดว่าจะออกแบบ UI
                            ให้แสดงผลถูกต้อง รวดเร็ว และไม่สับสน รวมถึงการสร้าง Responsive Design
                            ที่ทำงานได้ดีบนทุกอุปกรณ์ ผมเชื่อว่า Front-End Developer ที่ดีต้องเข้าใจทั้งด้านเทคนิค
                            และการออกแบบ UX/UI เพื่อสร้างผลงานที่มีคุณภาพและใช้งานได้จริง
                        </p>
                    </div>

                    <div className={styles.focusAreas}>
                        <h3 className={styles.focusTitle}>สิ่งที่ผมให้ความสำคัญ</h3>

                        <div className={styles.focusGrid}>
                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🎨</span>
                                <h4 className={styles.focusName}>UX/UI Design</h4>
                                <p className={styles.focusDesc}>
                                    ออกแบบ Interface ที่ใช้งานง่าย สวยงาม และตอบโจทย์ผู้ใช้
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>⚡</span>
                                <h4 className={styles.focusName}>Real-time Data</h4>
                                <p className={styles.focusDesc}>
                                    จัดการและแสดงผลข้อมูลแบบ Real-time อย่างถูกต้องและรวดเร็ว
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🔄</span>
                                <h4 className={styles.focusName}>State Management</h4>
                                <p className={styles.focusDesc}>
                                    จัดการ State ที่ซับซ้อนให้ UI sync กับข้อมูลได้อย่างมีประสิทธิภาพ
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>📱</span>
                                <h4 className={styles.focusName}>Responsive Design</h4>
                                <p className={styles.focusDesc}>
                                    สร้าง UI ที่ทำงานได้ดีบนทุกอุปกรณ์ ตั้งแต่มือถือไปจนถึง Desktop
                                </p>
                            </div>

                            <div className={styles.focusCard}>
                                <span className={styles.focusIcon}>🤖</span>
                                <h4 className={styles.focusName}>AI Integration</h4>
                                <p className={styles.focusDesc}>
                                    เพิ่มขีดความสามารถของเว็บไซต์ด้วย AI เพื่อสร้างประสบการณ์ที่ล้ำสมัย
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyFrontend;
