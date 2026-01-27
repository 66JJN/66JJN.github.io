import styles from './Learning.module.css';

function Learning() {
    const learningSteps = [
        {
            icon: '📚',
            title: 'การเรียนรู้ด้วยตนเอง',
            description: 'เริ่มต้นจากการเรียนรู้พื้นฐาน HTML, CSS และ JavaScript ผ่าน online courses และ tutorial ต่างๆ จากนั้นพัฒนาไปสู่ React และ modern web technologies ด้วยการศึกษา Official Documentation และ best practices จากชุมชน developer'
        },
        {
            icon: '🔨',
            title: 'Learning by Doing',
            description: 'เชื่อว่าการเรียนรู้ที่ดีที่สุดคือการลงมือทำโปรเจกต์จริง ทุกครั้งที่เจอปัญหาจะพยายามค้นหาคำตอบจาก documentation, Stack Overflow และ GitHub issues แล้วนำมาทดลองใช้ในโปรเจกต์ของตัวเอง'
        },
        {
            icon: '🐛',
            title: 'การแก้ปัญหาและ Debug',
            description: 'เมื่อเจอ bug หรือปัญหา จะใช้ Browser DevTools และ React DevTools ในการตรวจสอบ ทำความเข้าใจสาเหตุก่อนแก้ไข และบันทึกวิธีแก้ไขเพื่อเป็นบทเรียนสำหรับครั้งต่อไป'
        },
        {
            icon: '💬',
            title: 'การรับและปรับปรุงจาก Feedback',
            description: 'เปิดใจรับฟัง feedback จากผู้อื่น ไม่ว่าจะเป็นเพื่อนร่วมทีมหรือชุมชน developer นำไปปรับปรุงโค้ดให้ clean ขึ้น มี performance ดีขึ้น และง่ายต่อการ maintain'
        }
    ];

    const futureGoals = [
        'เรียนรู้ TypeScript เพื่อเขียนโค้ดที่มี type safety',
        'ศึกษา Advanced React patterns และ performance optimization',
        'พัฒนาทักษะด้าน Testing (Unit Test, Integration Test)',
        'เข้าใจ Design Patterns และ Clean Code principles มากขึ้น'
    ];

    return (
        <section className={styles.learning} id="learning">
            <div className="container">
                <h2 className={styles.sectionTitle}>Learning & Growth</h2>
                <p className={styles.sectionSubtitle}>
                    วิธีที่ผมเรียนรู้และพัฒนาทักษะด้าน Front-End Development
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
                                ผมเชื่อว่าการเป็น Front-End Developer ที่ดีไม่ได้หมายถึงการรู้ทุกอย่าง
                                แต่คือการมีความกระตือรือร้นในการเรียนรู้สิ่งใหม่ๆ อย่างต่อเนื่อง
                                พร้อมรับฟัง feedback และพัฒนาตัวเองให้ดีขึ้นทุกวัน
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Learning;
