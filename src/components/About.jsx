import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Amrit.avif";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-dark-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple">Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Get to know more about my background, skills,
            and passion for full stack development.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex justify-center"
          >

            <div className="relative group">

              {/* Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple via-pink-500 to-purple rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Image Card */}
              <div className="relative bg-dark-300 p-3 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">

                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full max-w-md h-[500px] object-cover rounded-2xl hover:scale-105 transition duration-500"
                />

              </div>
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-purple mb-6">
              Who I Am
            </h3>

            {/* Paragraphs */}
            <p className="text-gray-300 text-lg leading-8 mb-6">
              I'm a passionate Full Stack Developer with
              experience in building responsive and modern
              web applications using React.js, Node.js,
              Express.js, and MongoDB.
            </p>

            <p className="text-gray-300 text-lg leading-8 mb-10">
              I have worked on projects like online learning
              platforms, portfolio websites, and dynamic web
              applications with authentication, APIs,
              and database integration.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {aboutInfo.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-300 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-purple transition duration-300"
                >

                  {/* Icon */}
                  <div className="text-purple text-4xl mb-4">
                    <data.icon />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {data.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-7">
                    {data.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;