import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MAIN_CONTENT } from '../data/data';
import profilePic from '../assets/mohammadrammal-image.png';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

function Main() {
    const linkedinUrl = 'https://www.linkedin.com/in/mohammad-rammal/';
    const [jobTitleIndex, setJobTitleIndex] = useState(0);

    const jobTitles = [
        'MERN Stack Specialist',
        'IT Technical Support Specialist',
        'Full Stack Developer'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }, 2000); 

        return () => clearInterval(interval); 
    }, [jobTitles.length]); 

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Mohammad Rammal
                        </motion.h1>
                        <motion.div
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="mb-3 flex items-center justify-center gap-4 text-2xl"
                        >
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-500 transition duration-300"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://wa.me/96179136367"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition duration-300"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </motion.div>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.1 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 300 }}
                            className="animate-slide animate-gradient bg-clip-text text-3xl tracking-tight text-transparent duration-75"
                        >
                            {jobTitles[jobTitleIndex]}
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-normal tracking-wide leading-5"
                        >
                            {MAIN_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="max-w-[500px] lg:w-1/2 lg:pb-1 mx-auto my-auto" style={{ clipPath: "polygon(0% 50%, 0% 0%, 0% 0%, 100% 0%, 100% 50%, 80% 100%, 75% 100%, 25% 100%)" }}>
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: -1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
