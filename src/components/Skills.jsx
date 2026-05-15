import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const SkillsSection = () => {
return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
    id="skills"
    className="py-20 bg-dark-200"
    >
    <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-4">
        My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Technologies and tools I work with to create modern,
        responsive, and efficient web applications.
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
            <div
            key={index}
            className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
            <div className="text-purple text-4xl mb-4">
                <skill.icon />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
            </h3>

            <p className="text-gray-400">
                {skill.description}
            </p>
            </div>
        ))}

        </div>

    </div>
    </motion.div>
);
};

export default SkillsSection; 