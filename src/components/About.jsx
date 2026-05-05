import styles from './About.module.css';

function About() {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <h2 className={styles.sectionTitle}>เกี่ยวกับผม</h2>
                <p className={styles.sectionSubtitle}>
                    ประวัติการศึกษาและแนวคิดในการทำงาน
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
                            <h3 className={styles.cardTitle}>ความสนใจด้าน Front-End</h3>
                            <p className={styles.cardText}>
                                สนใจในการสร้าง User Interface ที่สวยงามและใช้งานง่าย
                                ชอบเรียนรู้เทคโนโลยีใหม่ๆ และติดตามเทรนด์ด้าน Web Development
                                อยู่เสมอ
                            </p>
                        </div>

                        <div className={styles.interestCard}>
                            <span className={styles.cardIcon}>🚀</span>
                            <h3 className={styles.cardTitle}>แนวคิดในการเรียนรู้</h3>
                            <p className={styles.cardText}>
                                เชื่อในการเรียนรู้ด้วยตนเองและการลงมือทำจริง สร้างโปรเจกต์ส่วนตัว
                                เพื่อฝึกฝนทักษะ อ่านบทความและ documentation ของเทคโนโลยีต่างๆ
                                เพื่อพัฒนาตนเองอย่างต่อเนื่อง
                            </p>
                        </div>

                        <div className={styles.interestCard}>
                            <span className={styles.cardIcon}>🎯</span>
                            <h3 className={styles.cardTitle}>เป้าหมาย</h3>
                            <p className={styles.cardText}>
                                มุ่งหวังที่จะเป็น Front-End Developer ที่มีความสามารถ
                                พร้อมเรียนรู้จากทีมงานมืออาชีพและสร้างสรรค์ผลงานที่มีคุณภาพ
                                ที่ช่วยแก้ปัญหาให้ผู้ใช้งานได้จริง
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
