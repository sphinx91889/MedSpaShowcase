import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 right-0 h-16 z-50 md:hidden transition-all duration-300 ${
          isScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="absolute top-4 right-4 p-2 focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-transform duration-500">
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 focus:outline-none">
              {/* X icon */}
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 border border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-2xl"
                >
                  Request Appointment
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 p-6 z-50 hidden md:flex justify-center items-center transition-all duration-300 ${
          isScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <ul className="flex items-center space-x-10">
          <li>
            <a
              href="#home"
              className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors font-sans text-lg"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <button className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors font-sans text-lg focus:outline-none">
              Services
            </button>
            {/* Dropdown Menu for Services */}
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-sm px-4 py-2 rounded">
              <ul className="space-y-2">
                <li>
                  <a href="#skin" className="text-white hover:text-gray-300 text-sm uppercase tracking-wide">
                    Skin Rejuvenation
                  </a>
                </li>
                <li>
                  <a href="#body" className="text-white hover:text-gray-300 text-sm uppercase tracking-wide">
                    Body Contouring
                  </a>
                </li>
                <li>
                  <a href="#laser" className="text-white hover:text-gray-300 text-sm uppercase tracking-wide">
                    Laser Treatments
                  </a>
                </li>
                <li>
                  <a href="#facials" className="text-white hover:text-gray-300 text-sm uppercase tracking-wide">
                    Medical Facials
                  </a>
                </li>
                <li>
                  <a href="#injectables" className="text-white hover:text-gray-300 text-sm uppercase tracking-wide">
                    Cosmetic Injectables
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#about"
              className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors font-sans text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors font-sans text-lg"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#book"
              className="px-4 py-2 border border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors font-sans text-lg"
            >
              Request Appointment
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
