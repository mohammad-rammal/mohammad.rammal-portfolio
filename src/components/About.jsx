import aboutImg from "../assets/about.png"
import { ABOUT_CONTENT } from "../data/data";
import { motion } from "framer-motion";


function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="mt-20 mb-10 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 lg:px-16 lg:py-10 my-auto">
                    <div className="flexCenter">
                        <img src={aboutImg} alt="" className="rounded-2xl" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 leading-loose" dangerouslySetInnerHTML={{ __html: ABOUT_CONTENT }} />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

export default About;
