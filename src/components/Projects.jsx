import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const projects = [
        {
            title: 'CMES - Content Management and Engagement System for Entertainment Venues',
            subtitle: 'Full-Stack Developer | มิถุนายน 2025 - กุมภาพันธ์ 2026',
            description: 'ระบบจัดการลูกค้าและการมีส่วนร่วมแบบ Real-time สำหรับร้านสถานบันเทิง ที่ช่วยให้ลูกค้าสามารถส่งข้อความ รูปภาพ และของขวัญผ่านระบบ พร้อมแสดงผลบนจอดิจิทัลแบบ Live ด้วย OBS Overlay',
            role: 'Full-Stack Developer | Lead Front-End Responsibilities',
            responsibilities: [
                'ออกแบบและพัฒนา Full-stack Architecture (Monorepo) โดยใช้ React, Node.js และ MongoDB',
                'พัฒนา RESTful APIs สำหรับการจัดการข้อมูลลูกค้ารูปแบบ Multi-tenant (shopId isolation)',
                'บูรณาการ Google Gemini 2.5-flash สำหรับวิเคราะห์รูปภาพและสร้างแคปชั่นสไตล์ Gen Z อัตโนมัติ',
                'พัฒนาระบบ OCR ด้วย Tesseract.js เพื่อตรวจสอบสลิปโอนเงินอัตโนมัติ (Thai/English support)',
                'บูรณาการ Sightengine API สำหรับ Real-time AI Content Moderation เพื่อความปลอดภัยของสื่อ',
                'จัดการระบบ Real-time Synchronization ผ่าน Socket.IO สำหรับ Queue และ Ranking System',
                'ออกแบบและสร้างหน้า Admin Dashboard พร้อมระบบ Income Statistics และ Automated Tasks (Node-Cron)',
                'ควบคุม OBS Studio ผ่าน OBS WebSocket เพื่อแสดงผลผลข้อมูลแบบ Live Dynamic Overlay',
                'พัฒนาระบบความปลอดภัยด้วย JWT, Bcrypt และ Email Verification (OTP) ผ่าน Nodemailer',
                'ทำ CI/CD และ Deployment ระบบบน Vercel (Frontend) และ Render (Backend)'
            ],
            features: [
                {
                    category: 'AI & Machine Learning Integration',
                    items: [
                        'AI Caption Generation: ใช้ Google Gemini API (Flash 2.5/2.0) วิเคราะห์รูปภาพและสร้างแคปชั่นสไตล์ Gen Z อัตโนมัติ',
                        'Real-time Content Moderation: บูรณาการ Sightengine API เพื่อตรวจสอบและกรองรูปภาพที่ไม่เหมาะสมโดยอัตโนมัติ',
                        'AI Slip Verification: ระบบตรวจสอบสลิปโอนเงินอัตโนมัติด้วย Tesseract.js (OCR) รองรับภาษาไทย/อังกฤษ',
                        'Advanced Prompt Engineering: ออกแบบคำสั่งเพื่อให้ AI ตอบสนองตามบริบทของร้านสถานบันเทิง'
                    ]
                },
                {
                    category: 'Authentication & Security',
                    items: [
                        'Secure Login/Register System: ใช้ JWT Authentication ร่วมกับความปลอดภัยจาก Bcrypt Hashing',
                        'Email Verification System: ระบบส่ง OTP ผ่าน Nodemailer เพื่อยืนยันตัวตนและความปลอดภัยของบัญชี',
                        'Protected Routes และ Session Management สำหรับ User และ Admin',
                        'Role-based Access Control (RBAC) แยกส่วนการทำงานชัดเจน'
                    ]
                },
                {
                    category: 'Admin Dashboard & Analytics',
                    items: [
                        'Dynamic Income Statistics: รายงานรายได้พร้อมระบบกรองวันที่แบบละเอียด (Persistent Date Range)',
                        'Automated System Maintenance: ใช้ Node-Cron สำหรับการจัดการข้อมูลและสรุปรายงานคิวอัตโนมัติ',
                        'Glassmorphism UI: ดีไซน์หน้า Admin ให้ทันสมัยด้วยเอฟเฟกต์โปร่งแสงและ SVG Icons',
                        'Queue Management: ระบบจัดการคิวอัจฉริยะ (Pending, Playing, Completed) พร้อมประวัติการทำงาน'
                    ]
                },
                {
                    category: 'Real-time Experience (User & OBS)',
                    items: [
                        'Toast Notification System: ระบบแจ้งเตือนแบบ Glassmorphism แทนการใช้ alert() แบบเดิม',
                        'Real-time Queue Status บน OBS Overlay และ User Interface ผ่าน Socket.IO',
                        'Multi-item Status Tracking: ติดตามสถานะการสั่งของขวัญพร้อมกันหลายรายการ',
                        'Micro-interactions: เพิ่มลูกเล่นและ Animation ให้ UI ดูลื่นไหลและพรีเมียม'
                    ]
                }
            ],
            techStack: [
                'React.js',
                'Node.js / Express',
                'Google Gemini AI',
                'Sightengine API',
                'Tesseract.js (OCR)',
                'Socket.IO',
                'MongoDB / Mongoose',
                'Cloudinary Storage',
                'Nodemailer / Bcrypt',
                'Vercel / Render (CI/CD)'
            ],
            image: '/cmes-preview.jpg',
            liveUrls: [
                { label: 'CMES-ADMIN', url: 'https://cmes-admin-frontend.vercel.app/' },
                { label: 'CMES-USER', url: 'https://cmes-user-frontend.vercel.app/?shopId=JJ' }
            ],
            githubUrls: [
                { label: 'CMES-ADMIN', url: 'https://github.com/66JJN/CMES-ADMIN' },
                { label: 'CMES-USER', url: 'https://github.com/66JJN/CMES-USER' }
            ]
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
                                    {/* แถวบน: Live Demo */}
                                    <div className={styles.linkRow}>
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
                                    </div>
                                    {/* แถวล่าง: GitHub */}
                                    <div className={styles.linkRow}>
                                        {project.githubUrls ? (
                                            project.githubUrls.map((gh, ghIdx) => (
                                                <a
                                                    key={ghIdx}
                                                    href={gh.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.linkBtn}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    {gh.label}
                                                </a>
                                            ))
                                        ) : project.githubUrl ? (
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
                                            ) : null}
                                    </div>
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
                                    <span className={styles.labelIcon}></span>
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
                                    <span className={styles.labelIcon}></span>
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
