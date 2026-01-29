import styles from './HeroNew.module.css'

const HeroNew = () => {
    // Tech stacks with proper icons
    const techStack1 = [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
    ]

    const techStack2 = [
        { name: 'Axios', icon: 'devicon-axios-plain colored' },
        { name: 'Socket.IO', icon: 'devicon-socketio-original' },
        { name: 'Mongoose', text: 'MG' },
        { name: 'JWT', text: 'JWT' },
        { name: 'Bcrypt', text: 'BC' },
        { name: 'OBS Studio', text: 'OBS' },
        { name: 'Tesseract.js', text: 'TS' },
        { name: 'Multer', text: 'ML' },
        { name: 'Node-cron', text: 'CR' },
    ]

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                {/* Left Side - Text Content */}
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✨</span>
                        <span className={styles.badgeText}>สวัสดีครับ ผม</span>
                    </div>

                    <h1 className={styles.name}>ศุภกร แซ่พ่าน</h1>

                    <h2 className={styles.title}>
                        <span className={styles.gradientText}>Front-End Developer</span>
                    </h2>

                    <p className={styles.subtitle}>นักศึกษาสาขาวิทยาการคอมพิวเตอร์ มีความสนใจด้าน Front-End Development และการพัฒนา Web Application ที่เน้นประสบการณ์ผู้ใช้ (UX/UI)</p>

                    <p className={styles.description}>มีประสบการณ์พัฒนาเว็บไซต์ด้วย React.js เชื่อมต่อ REST API และแสดงผลข้อมูลแบบ Real-time ด้วย Socket.IO กำลังมองหาที่ฝึกงานตำแหน่ง Front-End Developer เพื่อพัฒนาทักษะและประสบการณ์การทำงานจริงในสายงาน</p>

                    <div className={styles.ctaGroup}>
                        <button
                            className={styles.ctaPrimary}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            ดูผลงาน
                            <span className={styles.ctaIcon}>→</span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Floating Image */}
                <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageGlow}></div>
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className={styles.profileImage}
                        />
                        <div className={styles.floatingCircle1}></div>
                        <div className={styles.floatingCircle2}></div>
                        <div className={styles.floatingCircle3}></div>
                    </div>
                </div>
            </div>

            {/* Background Effects */}
            <div className={styles.bgEffect1}></div>
            <div className={styles.bgEffect2}></div>

            {/* Tech Stack Scrolling Section - Moved to Bottom */}
            <div className={styles.techStackSection}>

                {/* Row 1 - Scroll Right */}
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollTrackRight}>
                        {/* Duplicate for seamless loop */}
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} className={styles.logoSet}>
                                {techStack1.map((tech, index) => (
                                    <div key={`${setIndex}-${index}`} className={styles.techLogo}>
                                        {tech.icon ? (
                                            <i className={`${tech.icon} ${styles.logoIcon}`}></i>
                                        ) : (
                                            <span className={styles.logoIconEmoji}>{tech.text}</span>
                                        )}
                                        <span className={styles.logoText}>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scroll Left */}
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollTrackLeft}>
                        {/* Duplicate for seamless loop */}
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} className={styles.logoSet}>
                                {techStack2.map((tech, index) => (
                                    <div key={`${setIndex}-${index}`} className={styles.techLogo}>
                                        {tech.icon ? (
                                            <i className={`${tech.icon} ${styles.logoIcon}`}></i>
                                        ) : (
                                            <span className={styles.logoIconEmoji}>{tech.text}</span>
                                        )}
                                        <span className={styles.logoText}>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroNew
