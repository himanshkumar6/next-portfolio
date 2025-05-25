"use client";

import { useState } from 'react';
import BlogsBtn from './BlogsBtn';
import BlogsLinks from './BlogsLinks';
import BlogsLogo from './BlogsLogo';
import Context from '@/app/lib/Context';


const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] w-full fixed left-1/2 -translate-x-1/2 z-50 px-1.5 mt-6 flex">
      <div className="flex justify-between items-center w-full p-4 rounded-full border border-cyan-400 bg-[#35240d] text-white">
        {/* Logo */}
        <BlogsLogo />

        {/* Nav Links */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <BlogsLinks />
        </div>

        {/* Button */}
        <Context>
          <BlogsBtn />
        </Context>

        {/* Mobile Toggle Button */}

      </div>
      <div className="lg:hidden flex items-center justify-center ml-4 bg-amber-900 border-[1px] border-cyan-400 rounded-full px-3">
        <button
          onClick={toggleMenu}
          className="relative w-14 h-14 rounded-full border-[1px] border-orange-300 bg-[#35240d] flex flex-col justify-center items-center transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
