import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.avif";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 mb-10 md:mb-0">

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-500">
              Alitaj Alam
            </span>
          </h1>

          <h2 className="text-2xl md:text-xl text-white mb-6 font-semibold">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg">
            Passionate Full Stack Developer with skills in creating modern, responsive, and efficient web applications.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">

            {/* Resume Button */}
          <a
  href="https://drive.google.com/file/d/1vszbiA5BchlIRrm2LUIh3VI9fEebdO8-/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
>
  View Resume
</a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="border border-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>

            <motion.img
              src={profileImg}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 border-4 border-purple-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Hero;