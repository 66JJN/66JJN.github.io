import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.text}>
                        © {currentYear} <span className={styles.name}>ศุภกร แซ่พ่าน</span>
                    </p>
                    <p className={styles.madeWith}>
                        Made with <span className={styles.heart}>❤️</span> using React & Vite
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
