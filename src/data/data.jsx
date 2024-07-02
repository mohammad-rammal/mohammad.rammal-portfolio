import project1 from "../assets/projects/aliwehbedu.png";
import project2 from "../assets/projects/zidyia.jpeg";
import project3 from "../assets/projects/zendy.jpeg";
import project4 from "../assets/projects/betialmonah.png";
import project5 from "../assets/projects/alkitab.jpeg";

export const MAIN_CONTENT = `I am a dedicated Full Stack Developer specializing in the MERN stack. With a strong background in computer and communication engineering and practical experience in MongoDB, Express.js, React, and Node.js, my goal is to create innovative solutions that drive business growth and enhance user experiences. I am committed to delivering scalable and efficient applications while continuously improving my skills and contributing effectively to dynamic teams.`;

export const ABOUT_CONTENT = `Hello! I'm Mohammad Rammal, a passionate Full Stack Developer specializing in the MERN stack. With a solid background in both computer and communication engineering and hands-on experience in web development, I thrive on building robust, scalable, and user-friendly applications.
<br/>
I hold a Master of Science in Computer and Communication Engineering from the Lebanese International University, graduating with a GPA of 3.74/4. My academic journey equipped me with a strong foundation in software development, network systems, and problem-solving skills.
<br/>
I further honed my technical skills through a comprehensive 7-month bootcamp at ESA Coding Lab, where I focused on the MERN stack (MongoDB, Express.js, React, and Node.js). This experience, combined with my time working as a MERN stack developer at Brainkets, has allowed me to develop a keen eye for detail and a commitment to delivering high-quality code.
<br/>
I am always eager to learn and grow, and I enjoy taking on new challenges that push the boundaries of my knowledge and skills. Whether it's developing a new feature, optimizing performance, or debugging complex issues, I am dedicated to providing efficient and effective solutions.`;

export const EXPERIENCES = [
    {
        year: "Jul 2024 ",
        role: "ReactJS Developer",
        company: "CodSoft ",
        description: `Focused on practical React development and project management. Developed a personal portfolio website using Create React App, showcasing skills in React components and CSS. Built a task tracker application with state management for task tracking and a product catalog component for an e-commerce site. These experiences deepened React expertise and provided valuable lessons in agile development and teamwork skills.`,
        technologies: ["React.js", "Tailwind", "GitHub"],
    },
    {
        year: "May 2024 - Jun 2024",
        role: "Full Stack Developer",
        company: "Brainkets ",
        description: `Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborated with UI/UX designers to create interactive and responsive designs in Figma, implementing user interfaces based on prototypes to ensure seamless user experiences. Optimized web applications for maximum speed and scalability. Conducted code reviews and provided feedback to improve code quality and maintain coding standards. Worked in an agile environment, participating in daily stand-ups, sprint planning, and retrospectives.`,
        technologies: ["React.js", "RESTful APIs ", "Figma", "GitHub", "Swagger"],
    },
    {
        year: "Oct 2023 - Apr 2024",
        role: "Full Stack Developer Program",
        company: "ESA Coding Lab",
        description: `Developed an e-commerce website using MERN stack technologies, implementing non-relational databases (MongoDB) and backend frameworks (Node.js - Express.js). Gained expertise in advanced algorithms, object-oriented programming, and API development. Led the creation of responsive online sale applications using modern frontend frameworks (ReactJS - Node.js) and mastered mobile application development with a focus on Progressive Web Applications (PWAs). Successfully completed a comprehensive final project, resulting in Full Stack Web Developer certification.`,
        technologies: ["HTML5", "CSS3", "JS", "PHP", "MySQL", "REACT.JS", "MongoDB", "Node.JS", "Express", "Redux", "Swagger", "Docker", "Framer Motion"],
    },

];

export const PROJECTS = [
    {
        title: "Aliwehbedu: Online News and Exams Platform for Schools",
        image: project1,
        description:
            "The experience involved collaboration with UI/UX designers for creating and implementing design prototypes using Figma. It also encompassed integrating frontend components with backend services through RESTful APIs to enable smooth data flow and interaction. Rigorous testing and debugging were conducted to ensure optimal performance and responsiveness across different devices and browsers. Close collaboration with backend developers ensured data synchronization and optimized API performance. Additionally, maintaining code quality was prioritized through diligent version control and adherence to industry best practices, including thorough code reviews.",
        technologies: ["React.js", "RESTful APIs ", "Figma", "GitHub", "Swagger", "ClickUp"],
    },
    {
        title: "Zidyia Library: Digital Resource Management System (Commissioned by Zidyia)",
        image: project2,
        description:
            "The Zidiya Library, a Digital Resource Management System commissioned by Zidiya, utilized the MERN stack: MongoDB for database management, Express.js and Node.js for server-side operations, and React.js for the client-side interface, ensuring an intuitive user experience. Data management included MongoDB for NoSQL operations and MySQL through XAMPP for structured data needs. The system adhered to RESTful API principles to maintain standardized communication protocols, ensuring efficient data handling and seamless user interaction.",
        technologies: ["React.JS", "Node.JS", "Express.JS", "MongoDB", "Redux", "Jest", "MySQL", "Docker", "Swagger API", "Tailwind", "SASS", "Chatbot", "AI Assistant", "Socket.IO", "RESTful APIs ", "Figma", "GitHub", "Miro", "ClickUp", "Postman API"],
    },
    {
        title: "Clone Zendy: A clone of the online content platform",
        image: project3,
        description:
            "The Clone Zendy platform was developed using the MERN stack, which includes MongoDB for data management, Express.js for server setup, React.js for UI design, and Node.js for backend operations. The user interface was designed using React.js to ensure intuitive navigation and seamless interaction. Server infrastructure was established with Node.js and Express.js, adhering to robust RESTful API principles for efficient data transmission between client and server. MongoDB played a crucial role as the database, handling data storage and retrieval effectively. This approach resulted in a dynamic and responsive platform, equipped with functionalities and features reminiscent of the original Zendy platform.",
        technologies: ["React.JS", "Node.JS", "Express.JS", "MongoDB", "Redux", "RESTful APIs ", "Figma", "GitHub", "Miro", "ClickUp", "Postman API"],
    },
    {
        title: "Beit Almonah: Crafting Skills, Creating Markets",
        image: project4,
        description:
            "The platform leverages the MERN Stack and integrates Tailwind CSS, Firebase, and Cloudinary to deliver robust functionality. It supports multiple languages and features a dynamic workshop group chat, ensuring seamless responsiveness on various devices. Additional highlights include a chat bot, light and dark mode options, and stringent security measures such as password complexity enforcement, HTTP security enhancement, and protection against common web vulnerabilities like XSS attacks and HTTP parameter pollution. Beit Almonah emphasizes inclusivity, user experience, and data safety as core priorities.",
        technologies: ["React.JS", "Node.JS", "Express.JS", "MongoDB", "Redux", "Firebase", "Cloudinary", "stripe", "RESTful APIs ", "Figma", "GitHub", "Miro", "ClickUp", "Postman API"],
    },
    {
        title: "Alkitab Library: Library Management System",
        image: project5,
        description:
            "Developed a cutting-edge Library Management System using HTML, CSS, Bootstrap, JavaScript, Ajax, jQuery, PHP, and MySQL. Robust security features include two-factor verification and triple-layer input validation. The system accommodates distinct roles for guests, users, employees, admins, and Red Cross officials. Guests navigate through soft-colored categories, while users can access book sections, author details, room bookings, and event updates. Employees benefit from a creative dashboard featuring an ask-me bot, while admins utilize a comprehensive management interface. Integration with the Red Cross utilizes the user database for blood donation features, map locations, and direct chat for event coordination. The system also offers multi-language support (French, English, Arabic), making it a comprehensive solution for digital libraries.A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: [" HTML5","CSS3 "," PHP "," JavaScript "," AJAX "," PHPMailer "," jQuery "," jQuery UI "," MySQL "," OpenStreetMap "," Chatbot "," Cloudinary "," Mailtrap "," Bootstrap"],
    },
];

export const CONTACT = {
    address: "Nabatieh, Lebanon ",
    phoneNo: "+961 79 136367 ",
    email: "mohammad.rammal@hotmail.com",
};
