import styles from './Hero.module.css';

function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContent}`}>
                <h1 className={`${styles.name} fade-in`}>
                    ศุภกร แซ่พ่าน
                    <span className={styles.nameEn}>SUPHAKON SAEPHAN</span>
                </h1>

                <h2 className={`${styles.role} fade-in`}>
                    Front-End Developer Intern
                </h2>

                <p className={`${styles.intro} fade-in-up`}>
                    นักศึกษาสาขาวิทยาการคอมพิวเตอร์ 
                    มีความสนใจด้าน Front-End Development และการพัฒนา Web Application 
                    ที่เน้นประสบการณ์ผู้ใช้ (UX/UI)

                    มีประสบการณ์พัฒนาเว็บไซต์ด้วย React.js 
                    เชื่อมต่อ REST API และแสดงผลข้อมูลแบบ Real-time ด้วย Socket.IO 
                    กำลังมองหาที่ฝึกงานตำแหน่ง Front-End Developer 
เพื่อพัฒนาทักษะและประสบการณ์การทำงานจริงในสายงาน

                </p>

                <div className={`${styles.ctaButtons} fade-in-up`}>
                    <button
                        className={styles.primaryBtn}
                        onClick={() => scrollToSection('projects')}
                    >
                        <span>ดูผลงาน</span>
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        className={styles.secondaryBtn}
                        onClick={() => scrollToSection('contact')}
                    >
                        ติดต่อ
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
