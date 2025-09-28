import React from "react";

const TechStacks: React.FC = () => {
  return (
    <section id="tech-stacks">
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
          <p className="text-xl font-bold text-gray-700">Tech Stack</p>
          <div className="hidden lg:block h-8 border-l border-gray-300"></div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {/* React */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* Next.js */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* Node.js */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* Express */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
              alt="Express"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* MongoDB */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* JavaScript */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* TypeScript */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* HTML5 */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              alt="HTML5"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* CSS3 */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              alt="CSS3"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
            {/* Tailwind CSS */}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              className="h-10 w-10 transition-transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
