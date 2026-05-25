import styles from './Learning.module.css';

function Learning() {
    const learningSteps = [
        {
            icon: '📚',
            title: 'การเรียนรู้ด้วยตนเอง',
            description: 'เริ่มต้นจากพื้นฐาน Web Development จนก้าวสู่การเป็น Fullstack ด้วยการศึกษา Node.js, Express และ MongoDB ควบคู่ไปกับ Frontend Frameworks สมัยใหม่ โดยเน้นการอ่าน Official Documentation และการทำความเข้าใจสถาปัตยกรรมระบบอย่างลึกซึ้ง'
        },
        {
            icon: '🔨',
            title: 'Learning by Doing',
            description: 'เน้นการสร้าง End-to-End Solutions ในโปรเจกต์จริง โดยทุกความท้าทายคือโอกาสในการเรียนรู้ ตั้งแต่การออกแบบโครงสร้างฐานข้อมูลไปจนถึงการขัดเกลา UI/UX ให้สมบูรณ์แบบที่สุด'
        },
        {
            icon: '🐛',
            title: 'การแก้ปัญหาและ Debug',
            description: 'เชี่ยวชาญการใช้เครื่องมือวินิจฉัยปัญหาทั้งฝั่ง Frontend (DevTools) และ Backend (Postman, Server Logs) เพื่อระบุจุดบกพร่องและแก้ไขให้ตรงจุด พร้อมบันทึก Case Study เพื่อป้องกันปัญหาซ้ำซ้อน'
        },
        {
            icon: '💬',
            title: 'การรับและปรับปรุงจาก Feedback',
            description: 'เปิดรับความเห็นจากเพื่อนร่วมทีมและ Code Review เพื่อปรับปรุงโค้ดให้มีประสิทธิภาพ (Performance), ความปลอดภัย (Security) และการเขียนโค้ดที่ผู้อื่นสามารถดูแลต่อได้ง่าย (Maintainability)'
        }
    ];

    const futureGoals = [
        'ศึกษา Cloud Infrastructure และ DevOps (AWS, Docker, Kubernetes)',
        'เจาะลึกด้าน System Design และ Scalable Architecture สำหรับระบบขนาดใหญ่',
        'บูรณาการ AI ในระดับสูง เช่น Vector Databases และ Generative AI Workflows',
        'พัฒนาทักษะด้าน Security และ Penetration Testing เบื้องต้น'
    ];

    return (
        <section className={styles.learning} id="learning">
            <div className="container">
                <h2 className={styles.sectionTitle}>Learning & Growth</h2>
                <p className={styles.sectionSubtitle}>
                    วิธีที่ผมเรียนรู้และพัฒนาทักษะในฐานะ Fullstack Developer
                </p>

                <div className={styles.content}>
                    <div className={styles.learningSteps}>
                        {learningSteps.map((step, index) => (
                            <div
                                key={index}
                                className={styles.stepCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className={styles.stepIcon}>{step.icon}</span>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.goalsSection}>
                        <h3 className={styles.goalsTitle}>
                            <span className={styles.goalsEmoji}>🎯</span>
                            เป้าหมายในการเรียนรู้ต่อไป
                        </h3>
                        <ul className={styles.goalsList}>
                            {futureGoals.map((goal, index) => (
                                <li key={index} className={styles.goalItem}>
                                    <span className={styles.goalBullet}>▹</span>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.mindsetBox}>
                        <div className={styles.mindsetIcon}>💭</div>
                        <div className={styles.mindsetContent}>
                            <h3 className={styles.mindsetTitle}>Growth Mindset</h3>
                            <p className={styles.mindsetText}>
                                ผมเชื่อว่าการเป็น Fullstack Developer ที่ดีคือการไม่หยุดนิ่งในการเรียนรู้เทคโนโลยีใหม่ๆ 
                                และมีความรับผิดชอบต่อชิ้นงานตั้งแต่ต้นจนจบ (Ownership) 
                                ผมพร้อมที่จะก้าวข้าม Comfort Zone เพื่อแก้ไขปัญหาที่ซับซ้อนและพัฒนาตัวเองให้เป็น Engineer ที่ครบเครื่องในทุกวัน
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Learning;
