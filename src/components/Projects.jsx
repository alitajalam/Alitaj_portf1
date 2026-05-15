import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import Project from "./ProjectCard";
import { ArrowRight } from "lucide-react";
const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-300 scroll-mt-24"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in frontend,
            backend, and full stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
          ))}

        </div>
      <div
        className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple/20 font-medium transition duration-300 text-white">
            <span>
              view more projects
            </span>
          <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;