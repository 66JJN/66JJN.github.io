import styles from './About.module.css';
import Icon from './icons/Icon';
import iconStyles from './icons/icons.module.css';

function About() {
    const interests = [
        {
            icon: 'layers',
            title: 'Full-Stack & AI Integration',
            text: (
                <>
                    พัฒนา Web Application แบบครบวงจร (End-to-End) ด้วย <strong>MERN Stack</strong>
                    {' '}พร้อมทั้งบูรณาการ <strong>AI Integrations</strong> เช่น Gemini และ Sightengine ในการสร้างระบบอัจฉริยะ
                </>
            ),
        },
        {
            icon: 'server-stack',
            title: 'Modern Web Architecture',
            text: (
                <>
                    เน้นสถาปัตยกรรมแบบ Scalable และ <strong>Real-time Synchronization (Socket.IO)</strong>
                    {' '}รวมถึงการทำ <strong>Automated Workflows</strong> และการ Deployment (Vercel/Render)
                </>
            ),
        },
        {
            icon: 'book-open',
            title: 'Continuous Learning',
            text: (
                <>
                    เชื่อในการเรียนรู้ตลอดชีวิต (Life-long Learning) ศึกษาเทคโนโลยีใหม่ๆ
                    {' '}และปรับตัวให้ทันกับโลกของ AI และ Software Development อยู่เสมอ
                </>
            ),
        },
    ];

    return (
        <section className={styles.about} id="about">
            <div className="container">
                <h2 className={styles.sectionTitle}>เกี่ยวกับผม</h2>
                <p className={styles.sectionSubtitle}>
                    ความมุ่งมั่นในการสร้าง Full-Stack Solutions ที่ขับเคลื่อนด้วย AI
                </p>

                <div className={styles.content}>
                    <div className={styles.education}>
                        <h3 className={styles.subtitle}>
                            <span className={`${iconStyles.iconBox} ${iconStyles.iconBoxSm}`}>
                                <Icon name="graduation-cap" size={20} />
                            </span>
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
                        {interests.map((item, index) => (
                            <div key={index} className={styles.interestCard}>
                                <span className={`${iconStyles.iconBox} ${iconStyles.iconBoxMd}`}>
                                    <Icon name={item.icon} size={22} />
                                </span>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
