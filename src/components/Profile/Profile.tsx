import React from "react";

const Profile: React.FC = () => {
  return (
    <section id="profile">
      {/* Profile Image */}
      <img
        src="./assets/images/anime-profile-background.jpeg"
        alt="Profile picture of Ram Prasad"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg mx-auto"
      />

      {/* Profile Information */}
      <div className="mt-6 md:mt-8">
        <p className="text-base md:text-lg text-gray-500">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-1">
          Ram Prasad
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
          MERN Stack Developer
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="py-2.5 px-6 border-2 border-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Download CV
          </button>
          <button className="py-2.5 px-6 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-all">
            Contact Info
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {/* LinkedIn */}
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
          {/* GitHub */}
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
          {/* X (Twitter) */}
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
          {/* Instagram */}
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
