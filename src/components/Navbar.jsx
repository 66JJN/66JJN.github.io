import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMenuOpen(false)
    }

    const navItems = [
        { id: 'why-frontend', label: 'ทำไมถึงเลือก Front-End' },
        { id: 'tech-stack', label: 'เทคโนโลยี' },
        { id: 'projects', label: 'ผลงาน' },
        { id: 'problem-solving', label: 'การแก้ปัญหา' },
        { id: 'about', label: 'เกี่ยวกับผม' },
        { id: 'learning', label: 'การเรียนรู้' },
        { id: 'contact', label: 'ติดต่อ' },
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <span className={styles.logoText}>PORTFOLIO</span>
                </div>

                {/* Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="เปิดเมนู"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Nav Links */}
                <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={styles.navLink}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Overlay */}
                {menuOpen && (
                    <div
                        className={styles.overlay}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </div>
        </nav>
    )
}

export default Navbar
