import { CONTACT } from "../data/data";
import { motion } from "framer-motion";



function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl">Contact
            </motion.h1>
            <div className="mx-auto flex flex-wrap lg:justify-center lg:items-center ">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-5 tracking-tighter w-full lg:w-1/3">
                    <p className="my-4 lg:text-xl ">{CONTACT.address}</p>
                    <p className="my-4 lg:text-xl">{CONTACT.phoneNo}</p>
                    <a href={`mailto:${CONTACT.email}`} className="border-b lg:text-xl">
                        {CONTACT.email}
                    </a>
                </motion.div>
                <div className="mx-auto max-w-2xl w-full lg:w-2/3">
                    <motion.form
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 200 }}
                        transition={{ duration: 1 }}
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] p-6 shadow-md rounded-lg"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="5cfe55d6-522a-4132-81cb-a787f9f75b16"
                        />
                        <label htmlFor="name" className="block mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                            required
                            className="w-full p-2 border bg-transparent border-y-violet-500 rounded-md mb-4"
                        />
                        <label htmlFor="email" className="block mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            required
                            className="w-full p-2 border bg-transparent  border-y-violet-500 rounded-md mb-4"
                        />
                        <label htmlFor="subject" className="block mb-2">
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Enter the subject"
                            autoComplete="off"
                            required
                            className="w-full p-2 border bg-transparent  border-y-violet-500 rounded-md mb-4"
                        />
                        <label htmlFor="message" className="block mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message"
                            autoComplete="off"
                            required
                            className="w-full p-2 border bg-transparent  border-y-violet-500 focus:border-y-violet-800 rounded-md mb-4"
                        ></textarea>
                        <div className="flex items-end justify-end">
                            <button
                                type="submit"
                                className="mr-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-purple-800 hover:bg-neutral-800 focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
