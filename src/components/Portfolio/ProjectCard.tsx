import React from "react";

type ProjectCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  liveDemoUrl: string;
  sourceCodeUrl: string;
  techsUsed: {
    id: number;
    techName: string;
    className: string;
  }[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  techsUsed,
  liveDemoUrl,
  sourceCodeUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      {/* Image Container with Hover Effect */}
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Backdrop Overlay */}
        <div className="absolute inset-0 bg-black/60 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top"></div>

        {/* Centered Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <a
            href={liveDemoUrl}
            className="border-2 border-white text-white py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300 mb-4"
          >
            Live Demo
          </a>
          <a
            href={sourceCodeUrl}
            className="border-2 border-white text-white py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Source Code
          </a>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techsUsed.map((tech) => {
            return (
              <span
                key={tech.id}
                className={`${tech.className} text-indigo-800 text-sm font-medium px-2.5 py-1 rounded-full`}
              >
                {tech.techName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
