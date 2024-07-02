import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { SiSwagger } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const iconMotion = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

function Skills() {
    const [tooltipText, setTooltipText] = useState("");

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText("");
    };

    return (
        <div className="skills-container">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="skills-title mb-12 text-center text-4x"
            >
                Skills
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                className="icons-container mx-auto flex flex-wrap lg:gap-8 gap-2   sm:gap-7 md:gap-6 lg:w-[1020px]"
            >
                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4 "
                    onMouseEnter={() => handleMouseEnter("HTML5")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiHtml5 className="text-6xl md:text-7xl  icon text-orange-500" />
                    {tooltipText === "HTML5" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("CSS3")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiCss3 className="text-6xl md:text-7xl  icon text-blue-500" />
                    {tooltipText === "CSS3" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("JavaScript")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiJsBadge className="text-6xl md:text-7xl  icon text-yellow-500" />
                    {tooltipText === "JavaScript" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                {/* Repeat for other icons */}
                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Bootstrap")}
                    onMouseLeave={handleMouseLeave}
                >
                    <BsBootstrap className="text-6xl md:text-7xl  icon text-purple-500" />
                    {tooltipText === "Bootstrap" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("MySQL")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiMysql className="text-6xl md:text-7xl  icon text-blue-500" />
                    {tooltipText === "MySQL" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Postman")}
                    onMouseLeave={handleMouseLeave}
                >
                    <SiPostman className="text-6xl md:text-7xl  icon text-orange-500" />
                    {tooltipText === "Postman" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Docker")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiDocker className="text-6xl md:text-7xl  icon text-blue-500" />
                    {tooltipText === "Docker" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("GitHub")}
                    onMouseLeave={handleMouseLeave}
                >
                    <DiGithub className="text-6xl md:text-7xl icon text-gray-200" />
                    {tooltipText === "GitHub" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Swagger")}
                    onMouseLeave={handleMouseLeave}
                >
                    <SiSwagger className="text-6xl md:text-7xl icon text-green-500" />
                    {tooltipText === "Swagger" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Testing Library")}
                    onMouseLeave={handleMouseLeave}
                >
                    <SiTestinglibrary className="text-6xl md:text-7xl icon text-purple-500" />
                    {tooltipText === "Testing Library" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("React")}
                    onMouseLeave={handleMouseLeave}
                >
                    <RiReactjsLine className="text-6xl md:text-7xl icon text-cyan-400" />
                    {tooltipText === "React" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Express")}
                    onMouseLeave={handleMouseLeave}
                >
                    <SiExpress className="text-6xl md:text-7xl  icon text-purple-500" />
                    {tooltipText === "Express" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("MongoDB")}
                    onMouseLeave={handleMouseLeave}
                >
                    <SiMongodb className="text-6xl md:text-7xl  icon text-green-500" />
                    {tooltipText === "MongoDB" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Node.js")}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaNodeJs className="text-6xl md:text-7xl  icon text-yellow-500" />
                    {tooltipText === "Node.js" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>

                <motion.div
                    variants={iconMotion(2.5)}
                    initial="initial"
                    animate="animate"
                    className="icon-container  rounded-2xl border-4 border-neutral-800 p-4"
                    onMouseEnter={() => handleMouseEnter("Tailwind CSS")}
                    onMouseLeave={handleMouseLeave}
                >
                    <RiTailwindCssLine className="text-6xl md:text-7xl  icon text-blue-400" />
                    {tooltipText === "Tailwind CSS" && (
                        <div className="tooltip">{tooltipText}</div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Skills;
