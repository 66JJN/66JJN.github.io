import styles from './WhyFrontend.module.css';
import Icon from './icons/Icon';
import iconStyles from './icons/icons.module.css';

function WhyFullstack() {
    const focusAreas = [
        {
            icon: 'arrows-right-left',
            name: 'End-to-End Solutions',
            desc: 'สร้างระบบที่สมบูรณ์แบบตั้งแต่โครงสร้าง Data ไปจนถึง UI ที่สวยงาม',
        },
        {
            icon: 'shield',
            name: 'Security & Privacy',
            desc: 'ให้ความสำคัญกับความปลอดภัยของข้อมูล และระบบ Authentication ที่มั่นคง',
        },
        {
            icon: 'sparkles',
            name: 'AI Empowerment',
            desc: 'ใช้ AI ในการวิเคราะห์ข้อมูลและสร้างระบบอัตโนมัติที่สลับซับซ้อน',
        },
        {
            icon: 'bolt',
            name: 'Real-time Efficiency',
            desc: 'จัดการการไหลของข้อมูลแบบทันที เพื่อประสบการณ์ที่ลื่นไหลที่สุด',
        },
        {
            icon: 'chart-bar',
            name: 'Scalable Architecture',
            desc: 'ออกแบบระบบให้เติบโตได้และง่ายต่อการบำรุงรักษาในระยะยาว',
        },
    ];

    return (
        <section className={styles.whyFrontend} id="why-fullstack">
            <div className="container">
                <h2 className={styles.sectionTitle}>ทำไมถึงเลือก Fullstack Development</h2>

                <div className={styles.content}>
                    <div className={styles.mainText}>
                        <p className={styles.paragraph}>
                            เพราะไม่ชอบโยนปัญหาให้คนอื่นเวลา bug ข้ามระหว่าง frontend กับ backend
                            อยากตามมันไปถึงต้นเหตุแล้วแก้เอง
                            เวลาคิด feature ใหม่ได้ อยากสร้างทั้งหมด
                            แล้วเห็นมันทำงานจริง
                        </p>

                        <p className={styles.paragraph}>
                            เลยเลือก full stack ไม่ใช่เพราะมันดูดีใน resume
                            แต่เพราะรู้แค่ครึ่งเดียวมันแก้ปัญหาได้แค่ครึ่งเดียว
                        </p>
                    </div>

                    <div className={styles.focusAreas}>
                        <h3 className={styles.focusTitle}>สิ่งที่ผมให้ความสำคัญ</h3>

                        <div className={styles.focusGrid}>
                            {focusAreas.map((area, index) => (
                                <div key={index} className={styles.focusCard}>
                                    <span className={`${iconStyles.iconBox} ${iconStyles.iconBoxMd}`}>
                                        <Icon name={area.icon} size={22} />
                                    </span>
                                    <h4 className={styles.focusName}>{area.name}</h4>
                                    <p className={styles.focusDesc}>{area.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyFullstack;
