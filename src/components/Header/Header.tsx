import React from "react";

const Header: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 relative">
      {/* <!-- Header & Navigation --> */}
      <header className="flex justify-between items-center py-8">
        <div className="text-2xl font-bold text-gray-800">John Doe</div>

        {/* <!-- Desktop Navigation --> */}
        <nav className="hidden md:flex space-x-10 text-gray-600 font-medium">
          <a href="#porfolio" className="hover:text-gray-900 transition-colors">
            Portfolio
          </a>
          <a
            href="#experience"
            className="hover:text-gray-900 transition-colors"
          >
            Experience
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
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
              href="#portfolio"
              className="mobile-link hover:text-gray-900 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#experience"
              className="mobile-link hover:text-gray-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#about"
              className="mobile-link hover:text-gray-900 transition-colors"
            >
              About
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
  );
};

export default Header;
