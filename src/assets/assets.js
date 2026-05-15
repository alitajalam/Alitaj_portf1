import {
FaLightbulb,
FaPaintBrush,
FaCode,
FaReact,
FaServer,
FaMobileAlt,
FaTools,
FaCloud,
FaDocker,
} from "react-icons/fa";

import profileImg from "../assets/profile.avif";

import projectImg1 from "../assets/chatimg.avif";
import projectImg2 from "../assets/alumni.avif";
import projectImg3 from "../assets/tubeacadimg.avif";
import projectImg4 from "../assets/tubeimg.avif";
import projectImg5 from "../assets/youtubeimg.avif";
import projectImg6 from "../assets/project6.jpg";

export const assets = {
profileImg,
};

export const aboutInfo = [
{
    icon: FaLightbulb,
    title: "Innovative",
    description:
    "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
},

{
    icon: FaPaintBrush,
    title: "Creative",
    description:
    "Passionate about building beautiful and user-friendly interfaces.",
    color: "text-pink",
},

{
    icon: FaCode,
    title: "Clean Code",
    description:
    "Writing maintainable, scalable, and efficient code is my priority.",
    color: "text-blue",
},
];

export const skills = [
{
    icon: FaReact,
    title: "Frontend Development",
    description: "React, Tailwind CSS, JavaScript, HTML, CSS",
},

{
    icon: FaServer,
    title: "Backend Development",
    description: "Node.js, Express.js, MongoDB",
},

{
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Mobile-friendly and responsive modern UI designs.",
},

{
icon: FaMobileAlt,
title: "Mobile Development",
description: "React Native, Android basics, and responsive mobile-first applications.",
},

{
icon: FaCloud,
title: "Cloud & DevOps",
description: "GitHub, Vercel, Netlify, Docker, deployment, and cloud basics.",
},
{
    icon: FaTools,
    title: "Tools & Deployment",
    description: "Git, GitHub, Vercel, Netlify",
},
];

export const projects = [
{
    id: 1,
    image: projectImg1,
    title: "Portfolio Website",
    description:
    "Modern animated portfolio website using React and Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
},

{
    id: 2,
    image: projectImg2,
    title: "Tube Academy",
    description:
    "Online learning platform inspired by PW and YouTube.",
    tech: ["MERN", "JWT", "MongoDB"],
},

{
    id: 3,
    image: projectImg3,
    title: "E-Commerce Website",
    description:
    "Responsive shopping website with cart functionality.",
    tech: ["React", "Node.js", "Express"],
},

{
    id: 4,
    image: projectImg4,
    title: "Chat Application",
    description:
    "Real-time messaging app using Socket.io.",
    tech: ["Socket.io", "React", "MongoDB"],
},

{
    id: 5,
    image: projectImg5,
    title: "Weather App",
    description:
    "Weather forecasting app with live API integration.",
    tech: ["React", "API", "CSS"],
},

{
    id: 6,
    image: projectImg6,
    title: "Task Manager",
    description:
    "Task management app with authentication system.",
    tech: ["MERN", "JWT", "Tailwind"],
},
];
export const workData = [
{
    id: 1,
    image: projectImg1,
    title: "Portfolio Website",
    category: "Web Development",
    description:
    "Modern animated portfolio website built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/",
    live: "https://your-portfolio.vercel.app",
},

{
    id: 2,
    image: projectImg2,
    title: "Tube Academy",
    category: "MERN Stack",
    description:
    "Online learning platform inspired by PW with authentication system.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/",
    live: "https://tube-academy.vercel.app",
},

{
    id: 3,
    image: projectImg3,
    title: "E-Commerce Website",
    category: "Frontend",
    description:
    "Responsive shopping website with cart and product sections.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/",
    live: "https://ecommerce-demo.vercel.app",
},

{
    id: 4,
    image: projectImg4,
    title: "Chat Application",
    category: "Realtime App",
    description:
    "Realtime messaging application using Socket.io and MERN stack.",
    tech: ["Socket.io", "React", "MongoDB"],
    github: "https://github.com/",
    live: "https://chat-app.vercel.app",
},

{
    id: 5,
    image: projectImg5,
    title: "Weather App",
    category: "API Project",
    description:
    "Weather forecast application with live weather API integration.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/",
    live: "https://weather-app.vercel.app",
},

{
    id: 6,
    image: projectImg6,
    title: "Task Manager",
    category: "Full Stack",
    description:
    "Task management application with login and authentication system.",
    tech: ["MERN", "JWT", "Tailwind CSS"],
    github: "https://github.com/",
    live: "https://task-manager.vercel.app",
},
];