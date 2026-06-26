import React from "react";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="bg-dark-300 rounded-2xl p-5 flex flex-col justify-between h-full hover:-translate-y-2 transition duration-300">
      
      {/* Image */}
    <div className="w-full h-56 bg-black rounded-xl flex items-center justify-center p-4">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain"
  />
</div>

      {/* Content */}
      <div className="flex flex-col flex-grow mt-4">
        
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#2d2d2d] text-sm rounded-full text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
<button
  onClick={(e) => {
    e.preventDefault();
    window.open(
      "https://my-portfolio-alpha-pink-40.vercel.app/",
      "_blank"
    );
  }}
  className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition duration-300"
>
  View Demo
</button>

      <a
  href="https://github.com/alitajalam/Alitaj_portf1"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 text-center px-4 py-3 border border-purple-600 text-white rounded-xl hover:bg-purple-600 transition duration-300"
>
  Code
</a>
        </div>

      </div>
    </div>
  );
};
export default ProjectCard;