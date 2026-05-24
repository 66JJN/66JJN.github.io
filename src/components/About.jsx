import styles from './About.module.css';

function About() {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <h2 className={styles.sectionTitle}>เกี่ยวกับผม</h2>
                <p className={styles.sectionSubtitle}>
                    จาก Front-End สู่ Full-Stack Development และการบูรณาการ AI
                </p>

                <div className={styles.content}>
                    <div className={styles.education}>
                        <h3 className={styles.subtitle}>
                            <span className={styles.icon}>🎓</span>
                            การศึกษา
                        </h3>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <h4 className={styles.degree}>ศึกษาอยู่ระดับปริญญาตรี หลักสูตรวิทยาศาสตร์บัณฑิต สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศและการสื่อสาร</h4>
                                    <p className={styles.school}>มหาวิทยาลัยพะเยา</p>
                                    <p className={styles.school}>เกรดเฉลี่ยสะสม: 3.59</p>
                                    <p className={styles.year}>2566 - ปัจจุบัน</p>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <h4 className={styles.degree}>มัธยมศึกษาตอนปลาย สายวิทย์-คณิต</h4>
                                    <p className={styles.school}>โรงเรียนฝางชนูปถัมภ์</p>
                                    <p className={styles.school}>เกรดเฉลี่ยสะสม: 3.51</p>
                                    <p className={styles.year}>2563 - 2566</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.interests}>
                        <div className={styles.interestCard}>
                            <span className={styles.cardIcon}>💻</span>
                            <h3 className={styles.cardTitle}>Full-Stack & AI Integration</h3>
                            <p className={styles.cardText}>
                                พัฒนาทักษะจาก Front-End สู่ Full-Stack ด้วย Node.js และ MongoDB 
                                พร้อมทั้งบูรณาการ AI APIs เช่น Gemini และ Sightengine ในการสร้างนวัตกรรมใหม่ๆ
                            </p>
                        </div>

                        <div className={styles.interestCard}>
                            <span className={styles.cardIcon}>🚀</span>
                            <h3 className={styles.cardTitle}>Modern Web Architecture</h3>
                            <p className={styles.cardText}>
                                ให้ความสำคัญกับความเร็ว (Performance) และการทำงานแบบ Real-time (Socket.IO) 
                                รวมถึงการทำ CI/CD ด้วย Vercel และ Render เพื่อความรวดเร็วในการส่งมอบงาน
                            </p>
                        </div>

                        <div className={styles.interestCard}>
                            <span className={styles.cardIcon}>🎯</span>
                            <h3 className={styles.cardTitle}>Continuous Learning</h3>
                            <p className={styles.cardText}>
                                เชื่อในการเรียนรู้ตลอดชีวิต (Life-long Learning) ศึกษาเทคโนโลยีใหม่ๆ 
                                และปรับตัวให้ทันกับโลกของ AI และ Software Development อยู่เสมอ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
