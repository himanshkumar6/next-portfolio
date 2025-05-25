"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  { link: "Blogs", section: "blogs" }
];

const NavbarLinks = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-6 text-white font-bold text-center lg:relative absolute top-full transform -translate-x-1/2 w-full lg:w-auto z-50 px-4 py-4 lg:py-0 sm:absolute sm:top-[120%] left-[50%] lg:text-md sm:text-xl bg-cyan-400/30 lg:bg-transparent backdrop-blur-lg sm:w-full mt-6 lg:mt-0">
        {Links.map((elem, index) => (
          <li key={index} className="group relative text-2xl lg:text-xl">
            {elem.section === "blogs" ? (
              // Next.js route navigation for Blogs
              <Link
                href="/blogs"
                className="cursor-pointer block py-2 px-4 text-white hover:text-cyan-300 focus:text-cyan-300 active:text-cyan-300 transition-all duration-300"
              >
                {elem.link}
                <span className="block h-[1px] w-0 bg-cyan-400 group-hover:w-full group-focus:w-full group-active:w-full transition-all duration-300 mt-1"></span>
              </Link>
            ) : (
              // react-scroll for internal sections
              <ScrollLink
                to={elem.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className="cursor-pointer block py-2 px-4 text-white hover:text-cyan-300 focus:text-cyan-300 active:text-cyan-300 transition-all duration-300"
              >
                {elem.link}
                <span className="block h-[1px] w-0 bg-cyan-400 group-hover:w-full group-focus:w-full group-active:w-full transition-all duration-300 mt-1"></span>
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
