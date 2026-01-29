import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}

export const translations = {
    th: {
        // Navigation
        nav: {
            whyFrontend: 'ทำไมถึงเลือก Front-End',
            techStack: 'เทคโนโลยี',
            projects: 'ผลงาน',
            problemSolving: 'การแก้ปัญหา',
            about: 'เกี่ยวกับผม',
            learning: 'การเรียนรู้',
            contact: 'ติดต่อ'
        },
        // Hero Section
        hero: {
            greeting: 'สวัสดีครับ ผม',
            name: 'ศุภกร แซ่พ่าน',
            title: 'Front-End Developer',
            subtitle: 'นักศึกษาสาขาวิทยาการคอมพิวเตอร์ มีความสนใจด้าน Front-End Development และการพัฒนา Web Application ที่เน้นประสบการณ์ผู้ใช้ (UX/UI)',
            description: 'มีประสบการณ์พัฒนาเว็บไซต์ด้วย React.js เชื่อมต่อ REST API และแสดงผลข้อมูลแบบ Real-time ด้วย Socket.IO กำลังมองหาที่ฝึกงานตำแหน่ง Front-End Developer เพื่อพัฒนาทักษะและประสบการณ์การทำงานจริงในสายงาน',
            cta: 'ดูผลงาน',
            techStack: 'เทคโนโลยีที่ใช้'
        },
        // Why Frontend
        whyFrontend: {
            title: 'ทำไมถึงเลือก Front-End Development',
            passion: 'ความหลงใหล',
            passionDesc: 'ผมรักการสร้างสิ่งที่คนอื่นสามารถมองเห็นและโต้ตอบได้ การเห็นการออกแบบกลายเป็นเว็บไซต์ที่ทำงานจริงให้ความพึงพอใจอย่างมาก',
            impact: 'ผลกระทบโดยตรง',
            impactDesc: 'Front-end คือสิ่งที่ผู้ใช้สัมผัสได้โดยตรง ทุก pixel ทุกการโต้ตอบ มีความสำคัญต่อประสบการณ์ของผู้ใช้',
            creativity: 'ความคิดสร้างสรรค์',
            creativityDesc: 'การผสมผสานระหว่างการเขียนโค้ดและการออกแบบ ทำให้ผมได้ใช้ทั้งความคิดเชิงตรรกะและความคิดสร้างสรรค์',
            growth: 'การเติบโต',
            growthDesc: 'เทคโนโลยีใหม่ๆ ออกมาตลอดเวลา ทำให้มีสิ่งใหม่ให้เรียนรู้อยู่เสมอ ซึ่งเป็นสิ่งที่ผมชอบ'
        },
        // What I Value
        whatIValue: {
            title: 'สิ่งที่ผมให้ความสำคัญ',
            userExperience: 'ประสบการณ์ผู้ใช้',
            userExperienceDesc: 'ออกแบบโดยคำนึงถึงผู้ใช้เป็นหลัก สร้าง Interface ที่ใช้งานง่ายและเข้าถึงได้',
            performance: 'ประสิทธิภาพ',
            performanceDesc: 'เขียนโค้ดที่มีประสิทธิภาพ ให้เว็บไซต์โหลดเร็วและตอบสนองได้ทันที',
            codeQuality: 'คุณภาพของโค้ด',
            codeQualityDesc: 'เขียนโค้ดที่สะอาด อ่านง่าย และบำรุงรักษาได้ ตาม best practices',
            responsive: 'Responsive Design',
            responsiveDesc: 'สร้างเว็บไซต์ที่ทำงานได้ดีบนทุกอุปกรณ์ ทุกขนาดหน้าจอ',
            accessibility: 'Accessibility',
            accessibilityDesc: 'ทำให้เว็บไซต์เข้าถึงได้สำหรับทุกคน รวมถึงผู้ใช้ที่มีความต้องการพิเศษ',
            learning: 'การเรียนรู้',
            learningDesc: 'เรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่อง และนำมาปรับใช้ในโปรเจกต์'
        },
        // Projects
        projects: {
            title: 'ผลงานของผม',
            subtitle: 'โปรเจกต์ที่ผมได้พัฒนา',
            cmes: {
                title: 'CMES - Content Management and Engagement System for Entertainment Venues',
                subtitle: 'Full-Stack Developer | ธันวาคม 2025 - มกราคม 2026',
                description: 'ระบบจัดการลูกค้าและการมีส่วนร่วมแบบ Real-time สำหรับร้านสถานบันเทิง ที่ช่วยให้ลูกค้าสามารถส่งข้อความ รูปภาพ และของขวัญผ่านระบบ พร้อมแสดงผลบนจอดิจิทัลแบบ Live ด้วย OBS Overlay',
                role: 'หน้าที่ Front-End Developer',
                responsibilities: [
                    'ออกแบบและพัฒนา UI/UX ด้วย React.js (Hooks: useState, useEffect, useContext)',
                    'สร้าง Responsive Design รองรับทุกอุปกรณ์ (Mobile-First Approach)',
                    'จัดการ State ที่ซับซ้อนสำหรับ Real-time Queue System',
                    'เชื่อมต่อ Backend ผ่าน REST API ด้วย Axios',
                    'ทำงานกับ Socket.IO Client สำหรับ Real-time Updates',
                    'สร้าง Protected Routes และ Authentication Flow',
                    'Upload และแสดงผลรูปภาพ (Image Preview, Validation)',
                    'พัฒนา OBS Overlay สำหรับแสดง QR Code และ Countdown Timer'
                ]
            },
            viewProject: 'ดูโปรเจกต์',
            techStack: 'เทคโนโลยีที่ใช้',
            responsibilitiesTitle: 'ความรับผิดชอบ',
            featuresTitle: 'ฟีเจอร์หลัก',
            problemsTitle: 'ปัญหาและการแก้ไข',
            learningTitle: 'สิ่งที่เรียนรู้'
        },
        // Tech Stack Section
        techStack: {
            title: 'Tech Stack Breakdown',
            subtitle: 'เทคโนโลยีที่ใช้และเข้าใจในเชิงลึก พร้อมคำอธิบายการใช้งานจริง',
            frontendCore: 'Front-End Core',
            frontendCoreDesc: 'เครื่องมือหลักในการสร้าง UI และ Component-based Architecture',
            stateHandling: 'State & Data Handling',
            stateHandlingDesc: 'จัดการข้อมูลและ State ให้ sync กับ UI อย่างมีประสิทธิภาพ',
            realtime: 'Real-time Communication',
            realtimeDesc: 'ทำงานกับข้อมูลแบบ Real-time และอัปเดต UI ทันที',
            uiux: 'UI/UX & Responsive',
            uiuxDesc: 'ออกแบบ Interface ที่สวยงามและใช้งานได้ทุกอุปกรณ์',
            tools: 'Tools & Workflow',
            toolsDesc: 'เครื่องมือที่ช่วยเพิ่มประสิทธิภาพในการพัฒนา'
        },
        // Problem Solving
        problemSolving: {
            title: 'Problem Solving from CMES Project',
            subtitle: 'ตัวอย่างปัญหาจริงที่พบในโปรเจกต์และวิธีแก้ไขในมุม Front-End Developer',
            problem: 'ปัญหาที่พบ',
            cause: 'สาเหตุ',
            solution: 'วิธีแก้ไข (Front-End)',
            learned: 'สิ่งที่ได้เรียนรู้'
        },
        // About
        about: {
            title: 'เกี่ยวกับผม',
            subtitle: 'ประวัติการศึกษาและแนวคิดในการทำงาน',
            education: 'การศึกษา',
            university: 'มหาวิทยาลัยเทคโนโลยีพะเยา',
            major: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
            gpa: 'เกรดเฉลี่ย',
            period: '2565 - ปัจจุบัน',
            interests: 'ความสนใจ',
            coding: 'การเขียนโปรแกรม',
            webDev: 'การพัฒนาเว็บไซต์',
            uiDesign: 'การออกแบบ UI/UX',
            problemSolving: 'การแก้ปัญหา'
        },
        // Learning
        learning: {
            title: 'Learning & Growth',
            subtitle: 'วิธีที่ผมเรียนรู้และพัฒนาทักษะด้าน Front-End Development',
            selfLearning: 'การเรียนรู้ด้วยตนเอง',
            selfLearningDesc: 'เริ่มต้นจากการเรียนรู้พื้นฐาน HTML, CSS และ JavaScript ผ่าน online courses และ tutorial ต่างๆ จากนั้นพัฒนาไปสู่ React และ modern web technologies ด้วยการศึกษา Official Documentation และ best practices จากชุมชน developer',
            learningByDoing: 'Learning by Doing',
            learningByDoingDesc: 'เชื่อว่าการเรียนรู้ที่ดีที่สุดคือการลงมือทำโปรเจกต์จริง ทุกครั้งที่เจอปัญหาจะพยายามค้นหาคำตอบจาก documentation, Stack Overflow และ GitHub issues แล้วนำมาทดลองใช้ในโปรเจกต์ของตัวเอง',
            debugging: 'การแก้ปัญหาและ Debug',
            debuggingDesc: 'เมื่อเจอ bug หรือปัญหา จะใช้ Browser DevTools และ React DevTools ในการตรวจสอบ ทำความเข้าใจสาเหตุก่อนแก้ไข และบันทึกวิธีแก้ไขเพื่อเป็นบทเรียนสำหรับครั้งต่อไป',
            feedback: 'การรับและปรับปรุงจาก Feedback',
            feedbackDesc: 'เปิดใจรับฟัง feedback จากผู้อื่น ไม่ว่าจะเป็นเพื่อนร่วมทีมหรือชุมชน developer นำไปปรับปรุงโค้ดให้ clean ขึ้น มี performance ดีขึ้น และง่ายต่อการ maintain',
            futureGoals: 'เป้าหมายในการเรียนรู้ต่อไป',
            goal1: 'เรียนรู้ TypeScript เพื่อเขียนโค้ดที่มี type safety',
            goal2: 'ศึกษา Advanced React patterns และ performance optimization',
            goal3: 'พัฒนาทักษะด้าน Testing (Unit Test, Integration Test)',
            goal4: 'เข้าใจ Design Patterns และ Clean Code principles มากขึ้น',
            mindset: 'Growth Mindset',
            mindsetDesc: 'ผมเชื่อว่าการเป็น Front-End Developer ที่ดีไม่ได้หมายถึงการรู้ทุกอย่าง แต่คือการมีความกระตือรือร้นในการเรียนรู้สิ่งใหม่ๆ อย่างต่อเนื่อง พร้อมรับฟัง feedback และพัฒนาตัวเองให้ดีขึ้นทุกวัน'
        },
        // Footer
        footer: {
            name: 'ศุภกร แซ่พ่าน',
            role: 'Front-End Developer Intern',
            github: 'GitHub',
            email: 'Email',
            copyright: 'Front-End Developer.'
        },
        // Contact
        contact: {
            title: 'ติดต่อผม',
            description: 'สนใจร่วมงานหรือมีคำถาม? ติดต่อผมได้เลยครับ',
            email: 'อีเมล',
            github: 'GitHub',
            phone: 'โทรศัพท์',
            location: 'ที่อยู่'
        }
    },
    en: {
        // Navigation
        nav: {
            whyFrontend: 'Why Front-End',
            techStack: 'Tech Stack',
            projects: 'Projects',
            problemSolving: 'Problem Solving',
            about: 'About Me',
            learning: 'Learning',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            greeting: 'Hello, I\'m',
            name: 'Supakorn Saephan',
            title: 'Front-End Developer',
            subtitle: 'Computer Science student with a passion for Front-End Development and creating Web Applications focused on User Experience (UX/UI)',
            description: 'Experienced in developing websites with React.js, connecting REST APIs, and displaying real-time data using Socket.IO. Currently seeking a Front-End Developer internship to enhance skills and gain real-world experience in the field.',
            cta: 'View My Work',
            techStack: 'Tech Stack'
        },
        // Why Frontend
        whyFrontend: {
            title: 'Why Front-End Development',
            passion: 'Passion',
            passionDesc: 'I love creating things that people can see and interact with. Seeing designs come to life as working websites is incredibly satisfying.',
            impact: 'Direct Impact',
            impactDesc: 'The front-end is what users experience directly. Every pixel, every interaction matters for the user experience.',
            creativity: 'Creativity',
            creativityDesc: 'The blend of coding and design allows me to use both logical thinking and creative skills.',
            growth: 'Growth',
            growthDesc: 'New technologies emerge constantly, providing endless learning opportunities, which I love.'
        },
        // What I Value
        whatIValue: {
            title: 'What I Value',
            userExperience: 'User Experience',
            userExperienceDesc: 'Design with users in mind. Create interfaces that are intuitive and accessible.',
            performance: 'Performance',
            performanceDesc: 'Write efficient code to ensure fast loading and instant responsiveness.',
            codeQuality: 'Code Quality',
            codeQualityDesc: 'Write clean, readable, and maintainable code following best practices.',
            responsive: 'Responsive Design',
            responsiveDesc: 'Build websites that work well on all devices and screen sizes.',
            accessibility: 'Accessibility',
            accessibilityDesc: 'Make websites accessible to everyone, including users with special needs.',
            learning: 'Continuous Learning',
            learningDesc: 'Continuously learn new technologies and apply them to projects.'
        },
        // Projects
        projects: {
            title: 'My Projects',
            subtitle: 'Projects I\'ve developed',
            cmes: {
                title: 'CMES - Content Management and Engagement System for Entertainment Venues',
                subtitle: 'Full-Stack Developer | December 2025 - January 2026',
                description: 'Real-time customer management and engagement system for entertainment venues, allowing customers to send messages, images, and gifts through the system, displayed live on digital screens via OBS Overlay',
                role: 'Front-End Developer Responsibilities',
                responsibilities: [
                    'Designed and developed UI/UX with React.js (Hooks: useState, useEffect, useContext)',
                    'Created Responsive Design supporting all devices (Mobile-First Approach)',
                    'Managed complex State for Real-time Queue System',
                    'Connected Backend via REST API with Axios',
                    'Worked with Socket.IO Client for Real-time Updates',
                    'Built Protected Routes and Authentication Flow',
                    'Uploaded and displayed images (Image Preview, Validation)',
                    'Developed OBS Overlay to display QR Code and Countdown Timer'
                ]
            },
            viewProject: 'View Project',
            techStack: 'Tech Stack',
            responsibilitiesTitle: 'Responsibilities',
            featuresTitle: 'Main Features',
            problemsTitle: 'Problems & Solutions',
            learningTitle: 'What I Learned'
        },
        // Tech Stack Section
        techStack: {
            title: 'Tech Stack Breakdown',
            subtitle: 'Technologies I use and understand in depth, with real-world usage explanations',
            frontendCore: 'Front-End Core',
            frontendCoreDesc: 'Core tools for building UI and Component-based Architecture',
            stateHandling: 'State & Data Handling',
            stateHandlingDesc: 'Managing data and State to sync with UI efficiently',
            realtime: 'Real-time Communication',
            realtimeDesc: 'Working with Real-time data and instant UI updates',
            uiux: 'UI/UX & Responsive',
            uiuxDesc: 'Designing beautiful interfaces that work on all devices',
            tools: 'Tools & Workflow',
            toolsDesc: 'Tools that enhance development efficiency'
        },
        // Problem Solving
        problemSolving: {
            title: 'Problem Solving from CMES Project',
            subtitle: 'Real examples of problems encountered in the project and solutions from a Front-End Developer perspective',
            problem: 'Problem',
            cause: 'Cause',
            solution: 'Solution (Front-End)',
            learned: 'What I Learned'
        },
        // About
        about: {
            title: 'About Me',
            subtitle: 'Educational background and work philosophy',
            education: 'Education',
            university: 'Phayao University of Technology',
            major: 'Computer Science',
            gpa: 'GPA',
            period: '2022 - Present',
            interests: 'Interests',
            coding: 'Programming',
            webDev: 'Web Development',
            uiDesign: 'UI/UX Design',
            problemSolving: 'Problem Solving'
        },
        // Learning
        learning: {
            title: 'Learning & Growth',
            subtitle: 'How I learn and develop Front-End Development skills',
            selfLearning: 'Self-Learning',
            selfLearningDesc: 'Started learning HTML, CSS, and JavaScript basics through online courses and tutorials, then progressed to React and modern web technologies by studying Official Documentation and best practices from the developer community',
            learningByDoing: 'Learning by Doing',
            learningByDoingDesc: 'Believe that the best learning comes from building real projects. Whenever encountering problems, I search for answers from documentation, Stack Overflow, and GitHub issues, then experiment in my own projects',
            debugging: 'Problem Solving and Debugging',
            debuggingDesc: 'When encountering bugs or issues, I use Browser DevTools and React DevTools for inspection, understand the cause before fixing, and document solutions for future reference',
            feedback: 'Receiving and Improving from Feedback',
            feedbackDesc: 'Open to feedback from others, whether teammates or the developer community, using it to improve code cleanliness, performance, and maintainability',
            futureGoals: 'Future Learning Goals',
            goal1: 'Learn TypeScript for type-safe code',
            goal2: 'Study Advanced React patterns and performance optimization',
            goal3: 'Develop Testing skills (Unit Test, Integration Test)',
            goal4: 'Better understand Design Patterns and Clean Code principles',
            mindset: 'Growth Mindset',
            mindsetDesc: 'I believe being a good Front-End Developer doesn\'t mean knowing everything, but having the enthusiasm to continuously learn new things, accept feedback, and improve every day'
        },
        // Footer
        footer: {
            name: 'Supakorn Saephan',
            role: 'Front-End Developer Intern',
            github: 'GitHub',
            email: 'Email',
            copyright: 'Front-End Developer.'
        },
        // Contact
        contact: {
            title: 'Contact Me',
            description: 'Interested in working together or have questions? Feel free to reach out!',
            email: 'Email',
            github: 'GitHub',
            phone: 'Phone',
            location: 'Location'
        }
    }
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('th')

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'th' ? 'en' : 'th')
    }

    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
