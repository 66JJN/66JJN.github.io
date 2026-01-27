import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'เว็บไซต์ขายของออนไลน์แบบ responsive ที่ช่วยให้ผู้ใช้สามารถเลือกซื้อสินค้า เพิ่มสินค้าลงตะกร้า และชำระเงินได้อย่างสะดวก ออกแบบ UI/UX ที่เน้นความง่ายและสวยงาม',
            techStack: ['React', 'CSS Modules', 'Local Storage'],
            image: '/placeholder1.jpg',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Task Management App',
            description: 'แอปพลิเคชันจัดการงานแบบ To-Do List ที่ช่วยให้ผู้ใช้สามารถเพิ่ม แก้ไข ลบ และทำเครื่องหมายงานที่เสร็จแล้ว พร้อมฟีเจอร์กรองงานตามสถานะ',
            techStack: ['React', 'React Hooks', 'CSS'],
            image: '/placeholder2.jpg',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'แดชบอร์ดแสดงสภาพอากาศที่ดึงข้อมูลจาก API แบบ real-time พร้อมแสดงข้อมูลอากาศรายวันและรายสัปดาห์ ออกแบบให้ดูสวยงามและอ่านง่าย',
            techStack: ['React', 'REST API', 'Responsive Design'],
            image: '/placeholder3.jpg',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <h2 className={styles.sectionTitle}>ผลงานของผม</h2>
                <p className={styles.sectionSubtitle}>
                    โปรเจกต์ที่ผมได้พัฒนาและเรียนรู้จากการทำงานจริง
                </p>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={styles.projectWrapper}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
