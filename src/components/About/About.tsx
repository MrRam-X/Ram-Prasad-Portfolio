import React from "react";
import laptopImage from '../../assets/images/laptop-background.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8 lg:max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Professional Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-fit">
              <img
                src={laptopImage}
                alt="A professional headshot of John Doe"
                className="rounded-xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover"
              />
              {/* Decorative accent shape */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-white rounded-xl -z-10 transform translate-x-2 translate-y-2"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Crafting Digital Solutions, One Line of Code at a Time
            </h3>
            <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
              I'm a passionate MERN Stack Developer with a knack for building
              robust, scalable, and user-friendly web applications. My journey
              in web development is driven by a love for problem-solving and a
              desire to create seamless digital experiences. From architecting a
              database with MongoDB to building dynamic UIs with React, I enjoy
              every aspect of the development process.
            </p>

            {/* Key Info / Highlights */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-semibold text-gray-700">
                  3+ Years of Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="font-semibold text-gray-700">
                  15+ Projects Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
