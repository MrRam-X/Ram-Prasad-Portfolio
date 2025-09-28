import React from "react";
import { PORTFOLIO_PROJECTS } from "../../appConstant";
import ProjectCard from "./ProjectCard";

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* <!-- Section Title --> */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Portfolio
          </h2>
          <p className="text-gray-600 mt-2 text-lg">A Selection of my best work.</p>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* <!-- Projects Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_PROJECTS.map((project) => {
            return <ProjectCard {...project}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
