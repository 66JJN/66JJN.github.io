import styles from './TechStack.module.css';

function TechStack() {
    const techCategories = [
        {
            title: 'Front-End Core',
            icon: '⚛️',
            description: 'เครื่องมือหลักในการสร้าง UI และ Component-based Architecture',
            skills: [
                { name: 'React', detail: 'สร้าง Component และจัดการ State ด้วย Hooks' },
                { name: 'JavaScript (ES6+)', detail: 'เขียนโค้ดสมัยใหม่ด้วย Arrow Function, Async/Await' },
                { name: 'HTML5', detail: 'Semantic HTML สำหรับ SEO และ Accessibility' },
                { name: 'CSS3', detail: 'Flexbox, Grid, และ Modern CSS Techniques' }
            ]
        },
        {
            title: 'State & Data Handling',
            icon: '🔄',
            description: 'จัดการข้อมูลและ State ให้ sync กับ UI อย่างมีประสิทธิภาพ',
            skills: [
                { name: 'React Hooks', detail: 'useState, useEffect สำหรับจัดการ lifecycle' },
                 { name: 'Local Storage', detail: 'เก็บข้อมูลบน browser เพื่อใช้งานต่อเนื่อง' },
                { name: 'Axios', detail: 'เชื่อมต่อ Backend และดึงข้อมูลผ่าน REST API อย่างมีประสิทธิภาพ' },
                { name: 'State Management', detail: 'จัดการข้อมูลที่ซับซ้อนให้ UI sync กับ Database' }
            ]
        },
        {
            title: 'AI & Cloud Services',
            icon: '🤖',
            description: 'บูรณาการ AI และบริการ Cloud เพื่อเพิ่มขีดความสามารถของระบบ',
            skills: [
                { name: 'Google Gemini AI', detail: 'สร้างระบบอัตโนมัติด้วย AI (Image Analysis & Generative Content)' },
                { name: 'Sightengine API', detail: 'ระบบ Content Moderation กรองรูปภาพที่ไม่เหมาะสมแบบ Real-time' },
                { name: 'Cloudinary', detail: 'จัดการ Media Assets และทำ Image Optimization บน Cloud' },
                { name: 'Vercel / Render', detail: 'การทำ CI/CD และการ Deployment ทั้ง Frontend และ Backend' }
            ]
        },
        {
            title: 'Backend & Security',
            icon: '🔐',
            description: 'พัฒนา Backend ที่ปลอดภัยและมีประสิทธิภาพในการจัดการข้อมูล',
            skills: [
                { name: 'Node.js & Express', detail: 'สร้าง RESTful API และจัดการ Middleware' },
                { name: 'MongoDB & Mongoose', detail: 'ออกแบบ Schema และจัดการฐานข้อมูล NoSQL' },
                { name: 'JWT & Bcrypt', detail: 'ระบบ Authentication ที่ปลอดภัยและกึ่งสำเร็จรูป' },
                { name: 'Nodemailer', detail: 'ระบบ Email Verification (OTP) และการแจ้งเตือน' }
            ]
        },
        {
            title: 'CI/CD & Workflow',
            icon: '🛠️',
            description: 'เครื่องมือที่ช่วยเพิ่มประสิทธิภาพในการพัฒนาและส่งมอบงาน',
            skills: [
                { name: 'Git & GitHub', detail: 'Version control และการทำงานร่วมกันเป็นทีม' },
                { name: 'Node-cron', detail: 'การตั้งเวลาทำงานของ Scripts อัตโนมัติ (Task Scheduling)' },
                { name: 'Vite', detail: 'Modern build tool สำหรับความเร็วในการพัฒนา' },
                { name: 'Postman', detail: 'การทดสอบและจำลอง API สำหรับการพัฒนา' }
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
