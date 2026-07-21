import { useRef, useEffect, useCallback } from 'react'
import styles from './HeroNew.module.css'
import Icon from './icons/Icon'

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
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
    ]

    const techStack2 = [
        { name: 'Gemini AI', text: 'AI' },
        { name: 'Sightengine', text: 'SE' },
        { name: 'Socket.IO', icon: 'devicon-socketio-original' },
        { name: 'Cloudinary', text: 'CL' },
        { name: 'JWT', text: 'JWT' },
        { name: 'Bcrypt', text: 'BC' },
        { name: 'Tesseract', text: 'TS' },
        { name: 'Node-cron', text: 'CR' },
        { name: 'Vercel', icon: 'devicon-vercel-original' },
        { name: 'Render', text: 'RD' },
    ]

    // Row state refs (position, raf, speed, elements)
    const row1 = useRef({ track: null, container: null, pos: 0, raf: null, speed: -0.5 })
    const row2 = useRef({ track: null, container: null, pos: 0, raf: null, speed: 0.5 })

    // Drag state
    const drag = useRef({ active: false, startX: 0, startPos: 0, row: null })

    // Get width of one logo set (track has 3 identical copies)
    const getSetWidth = (trackEl) => {
        if (!trackEl) return 0
        return trackEl.scrollWidth / 3
    }

    // Wrap position to stay within [-setWidth, 0] for seamless infinite loop
    const wrapPos = (pos, setWidth) => {
        if (setWidth <= 0) return pos
        let p = pos % setWidth
        if (p > 0) p -= setWidth
        return p
    }

    // Auto-scroll using requestAnimationFrame
    const animate = useCallback((rowRef) => {
        const row = rowRef.current
        if (!row.track) return

        const setWidth = getSetWidth(row.track)
        row.pos = wrapPos(row.pos + row.speed, setWidth)
        row.track.style.transform = `translateX(${row.pos}px)`

        row.raf = requestAnimationFrame(() => animate(rowRef))
    }, [])

    const startScroll = useCallback((rowRef) => {
        cancelAnimationFrame(rowRef.current.raf)
        animate(rowRef)
    }, [animate])

    const stopScroll = (rowRef) => {
        cancelAnimationFrame(rowRef.current.raf)
        rowRef.current.raf = null
    }

    // Initialize positions and start auto-scroll
    useEffect(() => {
        // Row 2 starts offset so it scrolls in opposite direction visually
        if (row2.current.track) {
            row2.current.pos = -getSetWidth(row2.current.track)
        }
        startScroll(row1)
        startScroll(row2)
        return () => {
            stopScroll(row1)
            stopScroll(row2)
        }
    }, [startScroll])

    // Drag handlers
    const handleMouseDown = useCallback((e, rowRef) => {
        stopScroll(rowRef)
        drag.current = {
            active: true,
            startX: e.clientX,
            startPos: rowRef.current.pos,
            row: rowRef,
        }
        rowRef.current.container?.classList.add(styles.dragging)
        e.preventDefault()
    }, [])

    const handleMouseMove = useCallback((e, rowRef) => {
        const d = drag.current
        if (!d.active || d.row !== rowRef) return

        const track = rowRef.current.track
        if (!track) return

        const diff = e.clientX - d.startX
        const setWidth = getSetWidth(track)
        const newPos = wrapPos(d.startPos + diff, setWidth)

        rowRef.current.pos = newPos
        track.style.transform = `translateX(${newPos}px)`
    }, [])

    const handleMouseUp = useCallback((rowRef) => {
        const d = drag.current
        if (!d.active || d.row !== rowRef) return

        d.active = false
        rowRef.current.container?.classList.remove(styles.dragging)

        // Resume auto-scroll from current position (NOT resetting)
        startScroll(rowRef)
    }, [startScroll])

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                {/* Left Side - Text Content */}
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeText}>สวัสดีครับ ผม</span>
                    </div>

                    <h1 className={styles.name}>ศุภกร แซ่พ่าน</h1>

                    <h2 className={styles.title}>
                        <span className={styles.gradientText}>Fullstack Developer</span>
                    </h2>

                    <p className={styles.subtitle}>นักศึกษาสาขาวิทยาการคอมพิวเตอร์ ที่ชื่นชอบในการพัฒนา Fullstack Application และการบูรณาการ AI</p>

                    <p className={styles.description}>มีประสบการณ์พัฒนา Full-stack ตั้งแต่ระดับ Infrastructure, Database ไปจนถึง UI/UX พรีเมียม พร้อมทั้งเชี่ยวชาญการใช้ AI APIs (Gemini, Sightengine) และ Real-time Synchronization เพื่อสร้างนวัตกรรมที่ทันสมัย</p>

                    <div className={styles.ctaGroup}>
                        <button
                            className={styles.ctaPrimary}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            ดูผลงาน
                            <Icon name="arrow-right" size={20} className={styles.ctaIcon} />
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

            {/* Tech Stack Scrolling Section */}
            <div className={styles.techStackSection}>

                {/* Row 1 - auto scroll left */}
                <div
                    className={styles.scrollContainer}
                    ref={el => { row1.current.container = el }}
                    onMouseDown={e => handleMouseDown(e, row1)}
                    onMouseMove={e => handleMouseMove(e, row1)}
                    onMouseUp={() => handleMouseUp(row1)}
                    onMouseLeave={() => handleMouseUp(row1)}
                >
                    <div
                        className={styles.scrollTrack}
                        ref={el => { row1.current.track = el }}
                    >
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

                {/* Row 2 - auto scroll right */}
                <div
                    className={styles.scrollContainer}
                    ref={el => { row2.current.container = el }}
                    onMouseDown={e => handleMouseDown(e, row2)}
                    onMouseMove={e => handleMouseMove(e, row2)}
                    onMouseUp={() => handleMouseUp(row2)}
                    onMouseLeave={() => handleMouseUp(row2)}
                >
                    <div
                        className={styles.scrollTrack}
                        ref={el => { row2.current.track = el }}
                    >
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
