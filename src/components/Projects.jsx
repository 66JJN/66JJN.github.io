import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const projects = [
        {
            title: 'CMES - Content Management and Engagement System for Entertainment Venues',
            subtitle: 'Full-Stack Developer | ธันวาคม 2025 - มกราคม 2026',
            description: 'ระบบจัดการลูกค้าและการมีส่วนร่วมแบบ Real-time สำหรับร้านสถานบันเทิง ที่ช่วยให้ลูกค้าสามารถส่งข้อความ รูปภาพ และของขวัญผ่านระบบ พร้อมแสดงผลบนจอดิจิทัลแบบ Live ด้วย OBS Overlay',
            role: 'Front-End Developer Responsibilities',
            responsibilities: [
                'ออกแบบและพัฒนา UI/UX ด้วย React.js (Hooks: useState, useEffect, useContext)',
                'สร้าง Responsive Design รองรับทุกอุปกรณ์ (Mobile-First Approach)',
                'จัดการ State ที่ซับซ้อนสำหรับ Real-time Queue System',
                'เชื่อมต่อ Backend ผ่าน REST API ด้วย Axios',
                'ทำงานกับ Socket.IO Client สำหรับ Real-time Updates',
                'สร้าง Protected Routes และ Authentication Flow',
                'Upload และแสดงผลรูปภาพ (Image Preview, Validation)',
                'พัฒนา OBS Overlay สำหรับแสดง QR Code และ Countdown Timer'
            ],
            features: [
                {
                    category: 'Authentication & User Management',
                    items: [
                        'Login/Register System ด้วย JWT Authentication',
                        'Protected Routes ป้องกันการเข้าถึงโดยไม่ได้ Login',
                        'User Profile Management (แก้ไขข้อมูล, อัพโหลดรูป)',
                        'Email Verification System (OTP)'
                    ]
                },
                {
                    category: 'Real-time Queue System',
                    items: [
                        'แสดงคิวแบบ Real-time บน OBS Overlay',
                        'QR Code Generation และแสดงผลพร้อมข้อความ',
                        'Countdown Timer แบบ Real-time',
                        'จัดการสถานะคิว: Pending → Playing → Completed',
                        'Real-time updates ผ่าน Socket.IO'
                    ]
                },
                {
                    category: 'Gift Order & Payment',
                    items: [
                        'เลือกและสั่งซื้อของขวัญหลายรายการ',
                        'คำนวณราคารวมอัตโนมัติ',
                        'Upload สลิปโอนเงิน พร้อม Preview',
                        'ระบุโต๊ะปลายทางและข้อความ',
                        'ตรวจสอบสถานะการชำระเงิน'
                    ]
                },
                {
                    category: 'Ranking & Leaderboard',
                    items: [
                        'แสดง Top 10 Ranking แบบ Real-time',
                        'แยก Ranking: All-time, Daily, Monthly',
                        'VIP Supporter Badge System',
                    ]
                }
            ],
            techStack: [
                'React.js',
                'Socket.IO Client',
                'Axios',
                'CSS3 Animations',
                'Responsive Design',
                'JWT Authentication'
            ],
            image: '/cmes-preview.jpg',
            liveUrls: [
                { label: 'CMES-ADMIN', url: 'https://cmesadminfrontend.vercel.app/' },
                { label: 'CMES-USER', url: 'https://cmesuserfrontend.vercel.app/' }
            ],
            githubUrl: 'https://github.com/66jjn'
        }
    ];

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <h2 className={styles.sectionTitle}>โปรเจกต์ที่พัฒนา</h2>
                <p className={styles.sectionSubtitle}>
                    ประสบการณ์การพัฒนา Full-Stack Application จริง
                </p>

                <div className={styles.projectsContainer}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectDetail}>
                            {/* Header */}
                            <div className={styles.projectHeader}>
                                <div>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                                </div>
                                <div className={styles.projectLinks}>
                                    {project.liveUrls ? (
                                        project.liveUrls.map((demo, demoIdx) => (
                                            <a
                                                key={demoIdx}
                                                href={demo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.linkBtn}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                {demo.label}
                                            </a>
                                        ))
                                    ) : project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.linkBtn}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    ) : null}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkBtn}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Description */}
                            <p className={styles.projectDescription}>{project.description}</p>

                            {/* Tech Stack */}
                            <div className={styles.techStackSection}>
                                <h4 className={styles.sectionLabel}>เทคโนโลยีที่ใช้</h4>
                                <div className={styles.techTags}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className={styles.responsibilitiesSection}>
                                <h4 className={styles.sectionLabel}>
                                    <span className={styles.labelIcon}>⚡</span>
                                    {project.role}
                                </h4>
                                <ul className={styles.responsibilitiesList}>
                                    {project.responsibilities.map((resp, i) => (
                                        <li key={i} className={styles.responsibilityItem}>
                                            <span className={styles.bullet}>▹</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Features */}
                            <div className={styles.featuresSection}>
                                <h4 className={styles.sectionLabel}>
                                    <span className={styles.labelIcon}>✨</span>
                                    Features ที่พัฒนา
                                </h4>
                                <div className={styles.featuresGrid}>
                                    {project.features.map((feature, i) => (
                                        <div key={i} className={styles.featureCard}>
                                            <h5 className={styles.featureCategory}>{feature.category}</h5>
                                            <ul className={styles.featureList}>
                                                {feature.items.map((item, j) => (
                                                    <li key={j} className={styles.featureItem}>
                                                        <span className={styles.featureDot}></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
