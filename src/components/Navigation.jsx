import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Mobile Hamburger */}
      <div
        className={`fixed top-0 left-0 right-0 h-16 z-40 md:hidden transition-all duration-300 ${
          isScrolled ? 'bg-white/5 backdrop-blur-lg' : ''
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-3 right-4 z-50 p-2"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`block w-6 h-0.5 bg-white transform origin-center transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform origin-center transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            ></span>
          </div>
        </button>

        <a
          href="#book"
          className="
            absolute top-3 left-4
            px-4 py-2
            text-white
            text-sm
            uppercase 
            tracking-wider 
            border border-light-brown
            transition-all 
            duration-300 
            hover:border-light-brown
            bg-light-brown
            font-body
            text-shadow-md
            animate-glow
          "
        >
          Request Appointment
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-xl transition-transform duration-500 ease-in-out z-40 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col gap-8 text-center">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl font-display font-light hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Menu (Aligned to Top Right) */}
      <nav
        className={`fixed top-0 right-0 p-6 z-30 hidden md:block transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-b from-white/5 via-white/0 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <ul className="flex items-center gap-10">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white uppercase tracking-wider hover:opacity-70 transition-opacity font-body text-shadow-md text-lg"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="
                px-4 py-2
                text-white
                text-sm
                uppercase
                tracking-wider
                border border-light-brown
                transition-all duration-300
                hover:border-light-brown
                bg-light-brown
                font-body
                text-shadow-md
                animate-glow
              "
            >
              Request Appointment
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
