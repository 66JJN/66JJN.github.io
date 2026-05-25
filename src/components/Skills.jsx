import styles from './Skills.module.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Front-End',
            icon: '💻',
            skills: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Responsive Design', 'Next.js']
        },
        {
            title: 'Back-End',
            icon: '⚙️',
            skills: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'RESTful API']
        },
        {
            title: 'AI & Tools',
            icon: '🤖',
            skills: ['Gemini AI', 'Sightengine', 'Tesseract (OCR)', 'Git/GitHub', 'Cloudinary']
        }
    ];

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <h2 className={styles.sectionTitle}>ทักษะและความสามารถ</h2>
                <p className={styles.sectionSubtitle}>
                    เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนาเว็บไซต์
                </p>

                <div className={styles.skillsGrid}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={styles.skillCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{category.icon}</span>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <ul className={styles.skillList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className={styles.skillItem}>
                                        <span className={styles.bullet}>▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
