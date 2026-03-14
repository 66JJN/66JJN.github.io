import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>

                    <div className={styles.info}>
                        <h3 className={styles.name}>ศุภกร แซ่พ่าน</h3>
                        <p className={styles.role}>Front-End Developer Intern</p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.bottom}>
                        <p className={styles.copyright}>
                            © {currentYear} Supakon Saephan • Front-End Developer
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;