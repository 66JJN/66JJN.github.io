import styles from './Navbar.module.css'

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>PORTFOLIO</span>
                </div>

                <div className={styles.navLinks}>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('why-frontend')}
                    >
                        ทำไมถึงเลือก Front-End
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('tech-stack')}
                    >
                        เทคโนโลยี
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('projects')}
                    >
                        ผลงาน
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('problem-solving')}
                    >
                        การแก้ปัญหา
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('about')}
                    >
                        เกี่ยวกับผม
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('learning')}
                    >
                        การเรียนรู้
                    </button>
                    <button
                        className={styles.navLink}
                        onClick={() => scrollToSection('contact')}
                    >
                        ติดต่อ
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
