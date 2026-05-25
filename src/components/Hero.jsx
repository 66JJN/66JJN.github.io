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
                <div className={styles.profileSection}>
                    <div className={styles.profileImageWrapper}>
                        <img
                            src="/profile.jpg"
                            alt="ศุภกร แซ่พ่าน"
                            className={styles.profileImage}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className={styles.profilePlaceholder}>
                            <span className={styles.placeholderIcon}>👨‍💻</span>
                        </div>
                    </div>
                </div>

                <div className={styles.textContent}>
                    <h1 className={`${styles.name} fade-in`}>
                        ศุภกร แซ่พ่าน
                        <span className={styles.nameEn}>SUPHAKON SAEPHAN</span>
                    </h1>

                    <h2 className={`${styles.role} fade-in`}>
                        Fullstack Developer
                    </h2>

                    <p className={`${styles.intro} fade-in-up`}>
                        นักศึกษาสาขาวิทยาการคอมพิวเตอร์ 
                        ที่มีความหลงใหลในการพัฒนา <strong>Fullstack Application</strong> 
                        ตั้งแต่การออกแบบ UI/UX ที่พรีเมียม ไปจนถึงการวางระบบ Backend ที่มั่นคงและมีประสิทธิภาพ
                        <br /><br />
                        มีประสบการณ์ครอบคลุมทั้ง <strong>Frontend (React)</strong> และ 
                        <strong>Backend (Node.js/Express)</strong> พร้อมทั้งการบูรณาการ <strong>AI APIs</strong> 
                        และการจัดการข้อมูล <strong>Real-time</strong> เพื่อสร้างนวัตกรรมที่ตอบโจทย์ผู้ใช้งานจริง
                    </p>

                    <div className={`${styles.ctaButtons} fade-in-up`}>
                        <button
                            className={styles.primaryBtn}
                            onClick={() => scrollToSection('projects')}
                        >
                            <span>View Portfolio Projects</span>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            className={styles.secondaryBtn}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact for Internship
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
