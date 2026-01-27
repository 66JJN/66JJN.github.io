import styles from './Contact.module.css';

function Contact() {
    const contacts = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'pyaksda@gmail.com',
            link: 'https://mail.google.com/mail/?view=cm&to=pyaksda@gmail.com'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/66JJN',
            link: 'https://github.com/66JJN'
        }
    ];

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <h2 className={styles.sectionTitle}>ติดต่อผม</h2>
                <p className={styles.sectionSubtitle}>
                    สนใจติดต่อสอบถามหรือพูดคุยเกี่ยวกับโอกาสในการทำงาน
                </p>

                <div className={styles.contactGrid}>
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            className={styles.contactCard}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>
                                {contact.icon}
                            </div>
                            <div className={styles.contactInfo}>
                                <h3 className={styles.contactLabel}>{contact.label}</h3>
                                <p className={styles.contactValue}>{contact.value}</p>
                            </div>
                            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
