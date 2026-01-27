import styles from './Skills.module.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Front-End',
            icon: '💻',
            skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Responsive Design']
        },
        {
            title: 'UI/UX',
            icon: '🎨',
            skills: ['Responsive Design', 'Layout Design', 'Accessibility', 'User Experience', 'Mobile First']
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: ['Git & GitHub', 'Figma', 'VS Code', 'npm', 'Vite']
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
