import styles from './TechStack.module.css';

function TechStack() {
    const techCategories = [
        {
            title: 'MERN Stack & Core',
            icon: '',
            description: 'หัวใจสำคัญของการพัฒนา Modern Full-stack Application',
            skills: [
                { name: 'React (Frontend)', detail: 'สร้าง Dynamic UI ด้วย Component-based Architecture และ Hooks' },
                { name: 'Node.js & Express (Backend)', detail: 'สร้าง RESTful API ที่ทรงพลัง และจัดการ Server-side Logic' },
                { name: 'MongoDB & Mongoose', detail: 'ออกแบบ Schema และจัดการฐานข้อมูล NoSQL แบบ Scalable' },
                { name: 'JavaScript (ES6+)', detail: 'เขียนโค้ดที่ทันสมัยด้วย Async/Await, Destructuring และ Modules' }
            ]
        },
        {
            title: 'Real-time & Security',
            icon: '',
            description: 'ระบบที่ปลอดภัยและทำงานได้ทันทีแบบ Real-time',
            skills: [
                { name: 'Socket.IO', detail: 'จัดการข้อมูลแบบ Real-time Bi-directional Synchronization' },
                { name: 'JWT & Bcrypt', detail: 'ระบบ Authentication และการปกป้องข้อมูลด้วยความปลอดภัยสูง' },
                { name: 'Multi-tenant Architecture', detail: 'ออกแบบระบบให้รองรับหลายร้าน (Shop Isolation) ผ่าน shopId' },
                { name: 'Nodemailer (OTP)', detail: 'ระบบยืนยันตัวตนผ่านทาง Email เพื่อความปลอดภัยของบัญชี' }
            ]
        },
        {
            title: 'AI & Machine Learning',
            icon: '',
            description: 'การบูรณาการ AI เพื่อเพิ่มขีดความสามารถอัจฉริยะให้กับระบบ',
            skills: [
                { name: 'Google Gemini AI', detail: 'วิเคราะห์รูปภาพและสร้าง Content อัตโนมัติ (Flash 2.5/2.0)' },
                { name: 'Tesseract.js (OCR)', detail: 'ระบบอ่านข้อมูลจากภาพ (Optical Character Recognition) โดยเฉพาะสลิป' },
                { name: 'Sightengine API', detail: 'การตรวจสอบและกรองเนื้อหา (Content Moderation) แบบ Real-time' },
                { name: 'Prompt Engineering', detail: 'ออกแบบคำสั่ง AI ให้ทำงานได้ตรงตามความต้องการของธุรกิจ' }
            ]
        },
        {
            title: 'DevOps & Workflow',
            icon: '',
            description: 'การจัดการ Infrastructure และกระบวนการพัฒนาที่มีประสิทธิภาพ',
            skills: [
                { name: 'Vercel & Render', detail: 'การทำ CI/CD และการ Deployment ที่รวดเร็วทั้ง SPA และ API' },
                { name: 'Cloudinary Storage', detail: 'จัดการ Media Assets และทำ Image Optimization บน Cloud' },
                { name: 'Node-cron', detail: 'การตั้งเวลาทำงาน (Task Scheduling) สำหรับระบบ Automated Jobs' },
                { name: 'Git & GitHub Workflow', detail: 'การจัดการ Version Control และ Collaboration ในทีม' }
            ]
        }
    ];

    return (
        <section className={styles.techStack} id="techstack">
            <div className="container">
                <h2 className={styles.sectionTitle}>Tech Stack Breakdown</h2>
                <p className={styles.sectionSubtitle}>
                    เทคโนโลยีที่ใช้และเข้าใจในเชิงลึก พร้อมคำอธิบายการใช้งานจริง
                </p>

                <div className={styles.categoriesGrid}>
                    {techCategories.map((category, index) => (
                        <div
                            key={index}
                            className={styles.categoryCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <div>
                                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                                    <p className={styles.categoryDesc}>{category.description}</p>
                                </div>
                            </div>

                            <div className={styles.skillsList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className={styles.skillItem}>
                                        <div className={styles.skillHeader}>
                                            <span className={styles.skillDot}></span>
                                            <h4 className={styles.skillName}>{skill.name}</h4>
                                        </div>
                                        <p className={styles.skillDetail}>{skill.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
