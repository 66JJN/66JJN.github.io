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
                { name: 'REST API', detail: 'เชื่อมต่อ Backend และดึงข้อมูลผ่าน Fetch/Axios' }
            ]
        },
        {
            title: 'Real-time Communication',
            icon: '⚡',
            description: 'ทำงานกับข้อมูลแบบ Real-time และอัปเดต UI ทันที',
            skills: [
                { name: 'Socket.IO', detail: 'รับส่งข้อมูลแบบ Real-time ผ่าน WebSocket' },
                { name: 'WebSocket', detail: 'Two-way communication สำหรับ live updates' }
            ]
        },
        {
            title: 'UI/UX & Responsive',
            icon: '🎨',
            description: 'ออกแบบ Interface ที่สวยงามและใช้งานได้ทุกอุปกรณ์',
            skills: [
                { name: 'Responsive Design', detail: 'Mobile-first approach และ breakpoints' },
                { name: 'CSS Modules', detail: 'Scoped styling เพื่อหลีกเลี่ยง naming conflicts' },
                { name: 'Flexbox & Grid', detail: 'Layout modern ที่ยืดหยุ่นและใช้งานง่าย' }
            ]
        },
        {
            title: 'Tools & Workflow',
            icon: '🛠️',
            description: 'เครื่องมือที่ช่วยเพิ่มประสิทธิภาพในการพัฒนา',
            skills: [
                { name: 'Git & GitHub', detail: 'Version control และ collaboration' },
                { name: 'Vite', detail: 'Fast build tool และ hot reload' },
                { name: 'VS Code', detail: 'Code editor พร้อม extensions' },
                { name: 'npm', detail: 'Package management และ scripts' }
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
