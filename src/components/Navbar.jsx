import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()

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

                <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <span className={styles.logoText}>PORTFOLIO</span>
                </div>

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

                {/* Theme Toggle - Lamp with Pull Cord */}
                <button
                    className={`${styles.themeToggle} ${!isDark ? styles.lampOn : ''}`}
                    onClick={(e) => {
                        e.currentTarget.classList.add(styles.pulling)
                        setTimeout(() => {
                            toggleTheme()
                            e.currentTarget.classList.remove(styles.pulling)
                        }, 400)
                    }}
                    aria-label={isDark ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
                >
                    {/* Lamp SVG */}
                    <svg className={styles.lampSvg} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Lamp mount */}
                        <rect x="14" y="0" width="12" height="4" rx="1" fill="var(--color-accent)" />
                        {/* Lamp shade */}
                        <path d="M8 4 L32 4 L36 20 L4 20 Z" fill="var(--color-accent)" opacity="0.9" />
                        {/* Bulb glow (visible when light is on) */}
                        <circle className={styles.bulbGlow} cx="20" cy="24" r="10" />
                        {/* Bulb */}
                        <ellipse cx="20" cy="22" rx="6" ry="5" className={styles.bulb} />
                        {/* Pull cord */}
                        <line className={styles.cord} x1="20" y1="27" x2="20" y2="48" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
                        {/* Cord handle */}
                        <circle className={styles.cordHandle} cx="20" cy="50" r="3" fill="var(--color-accent)" />
                    </svg>
                </button>

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
