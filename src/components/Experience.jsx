import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const Experience = () => {
return (
    <section
    id="experience"
    className="py-24 bg-dark-200 scroll-mt-24"
    >
    <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
    id="Experience"
        className="bg-dark-300/80 backdrop-blur-md scroll-mt-24 text-center py-12 px-6 mb-16 rounded-3xl shadow-2xl border border-gray-700"
        >
        <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="text-purple">Experience</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            As a fresher, I have focused on building real-world projects,
            improving development skills, and gaining hands-on experience
            in full stack web development.
        </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-purple-600 ml-4 space-y-12">

          {/* Item 1 */}
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
        >
            {/* Dot */}
            <div className="absolute -left-[14px] top-2 w-6 h-6 bg-purple rounded-full border-4 border-dark-200"></div>

            {/* Card */}
            <div className="bg-dark-300 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple/20 p-3 rounded-xl text-purple">
                <Code2 size={28} />
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-white">
                    Full Stack Developer Projects
                </h3>

                <p className="text-gray-400">
                    Self Learning • 2024 - Present
                </p>
                </div>
            </div>

            <p className="text-gray-300 leading-8">
                Developed responsive web applications using React.js,
                Node.js, Express.js, and MongoDB. Built portfolio
                websites, authentication systems, REST APIs,
                and modern full stack applications.
            </p>
            </div>
        </motion.div>

          {/* Item 2 */}
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative pl-10"
        >
            {/* Dot */}
            <div className="absolute -left-[14px] top-2 w-6 h-6 bg-purple rounded-full border-4 border-dark-200"></div>

            {/* Card */}
            <div className="bg-dark-300 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple/20 p-3 rounded-xl text-purple">
                <GraduationCap size={28} />
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-white">
                    B.Tech in Computer Science
                </h3>

                <p className="text-gray-400">
                    B. P. Mandal Engineering College • Pursuing
                </p>
                </div>
            </div>

            <p className="text-gray-300 leading-8">
                Learning software development, databases,
                data structures, frontend and backend technologies
                with practical project implementation.
            </p>
            </div>
        </motion.div>

          {/* Item 3 */}
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative pl-10"
        >
            {/* Dot */}
            <div className="absolute -left-[14px] top-2 w-6 h-6 bg-purple rounded-full border-4 border-dark-200"></div>

            {/* Card */}
            <div className="bg-dark-300 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple/20 p-3 rounded-xl text-purple">
                <Briefcase size={28} />
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-white">
                    Open to Opportunities
                </h3>

                <p className="text-gray-400">
                    Internship • Freelance • Entry Level Roles
                </p>
                </div>
            </div>

            <p className="text-gray-300 leading-8">
                Currently seeking internship and entry-level opportunities
                to learn from industry experience, contribute to projects,
                and grow as a professional full stack developer.
            </p>
            </div>
        </motion.div>

        </div>
    </div>
    </section>
);
};

export default Experience;