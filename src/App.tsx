import "./App.css";

function App() {
  return (
    <div className="font-outfit">
      <div className="min-h-screen flex flex-col">
        {/* <!-- Main container for width and padding --> */}
        <div className="container mx-auto px-6 md:px-8 relative">
          {/* <!-- Header & Navigation --> */}
          <header className="flex justify-between items-center py-8">
            <div className="text-2xl font-bold text-gray-800">John Doe</div>

            {/* <!-- Desktop Navigation --> */}
            <nav className="hidden md:flex space-x-10 text-gray-600 font-medium">
              <a
                href="#about"
                className="hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-gray-900 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* <!-- Mobile Menu Button --> */}
            <button id="menu-open-btn" className="md:hidden z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </header>

          {/* <!-- Mobile Menu Overlay --> */}
          <div
            id="mobile-menu"
            className="hidden fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-8 text-2xl font-semibold">
                <a
                  href="#about"
                  className="mobile-link hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="mobile-link hover:text-gray-900 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="mobile-link hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="mobile-link hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
            {/* <!-- Close Button --> */}
            <button id="menu-close-btn" className="absolute top-8 right-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Centered Hero Section --> */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-12 md:pt-0">
          <div>
            {/* <!-- Profile Image --> */}
            <img
              src="./assets/images/anime-profile-background.jpeg"
              alt="Profile picture of Ram Prasad"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg mx-auto"
            />

            {/* <!-- Profile Information --> */}
            <div className="mt-6 md:mt-8">
              <p className="text-base md:text-lg text-gray-500">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-1">
                Ram Prasad
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
                MERN Stack Developer
              </h2>

              {/* <!-- Action Buttons --> */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button className="py-2.5 px-6 border-2 border-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all">
                  Download CV
                </button>
                <button className="py-2.5 px-6 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-all">
                  Contact Info
                </button>
              </div>

              {/* <!-- Social Links --> */}
              <div className="flex justify-center gap-6 mt-8">
                {/* <!-- LinkedIn --> */}
                <a href="#" aria-label="LinkedIn Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                {/* <!-- GitHub --> */}
                <a href="#" aria-label="GitHub Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                {/* <!-- X (Twitter) --> */}
                <a href="#" aria-label="X Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                {/* <!-- Instagram --> */}
                <a href="#" aria-label="Instagram Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Tech Stack Section --> */}
          <div className="container mx-auto px-4 mt-16 md:mt-24">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
              <p className="text-xl font-bold text-gray-700">Tech Stack</p>
              <div className="hidden lg:block h-8 border-l border-gray-300"></div>
              <div className="flex flex-wrap justify-center items-center gap-5">
                {/* <!-- React --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- Next.js --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- Node.js --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- Express --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                  alt="Express"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- MongoDB --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- JavaScript --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- TypeScript --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- HTML5 --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- CSS3 --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
                {/* <!-- Tailwind CSS --> */}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  className="h-10 w-10 transition-transform hover:scale-110"
                />
              </div>
            </div>
          </div>
          {/* <!-- ========== "ABOUT ME" SECTION ========== --> */}
          <section id="about" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6 md:px-8 lg:max-w-4xl">
              {/* <!-- Section Title --> */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  About Me
                </h2>
                <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* <!-- Left Column: Professional Image --> */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto w-fit">
                    <img
                      src="./assets/images/laptop-background.jpg"
                      alt="A professional headshot of John Doe"
                      className="rounded-xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover"
                    />
                    {/* <!-- Decorative accent shape --> */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-indigo-500 rounded-xl -z-10 transform translate-x-2 translate-y-2"></div>
                  </div>
                </div>

                {/* <!-- Right Column: Text Content --> */}
                <div className="lg:col-span-7 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Crafting Digital Solutions, One Line of Code at a Time
                  </h3>
                  <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
                    I'm a passionate MERN Stack Developer with a knack for
                    building robust, scalable, and user-friendly web
                    applications. My journey in web development is driven by a
                    love for problem-solving and a desire to create seamless
                    digital experiences. From architecting a database with
                    MongoDB to building dynamic UIs with React, I enjoy every
                    aspect of the development process.
                  </p>

                  {/* <!-- Key Info / Highlights --> */}
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
        </main>

        <footer className="py-8">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>Copyright &copy; 2025 Ram Prasad Baidya. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
