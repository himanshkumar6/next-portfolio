"use client";

import Link from "next/link";
import Links from "./lib/links";

const BlogsLinks = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-6 text-white font-bold text-center lg:relative absolute top-full transform -translate-x-1/2 w-full lg:w-auto z-50 px-4 py-4 lg:py-0 sm:absolute sm:top-[120%] left-[50%] lg:text-md sm:text-xl bg-amber-400/30 lg:bg-transparent backdrop-blur-lg sm:w-full mt-6 lg:mt-1">
        {Links.map((elem, index) => {
          console.log(elem)
          return (<li key={index} className="group relative text-2xl lg:text-xl">
            <Link
              href={elem.path}
              className="cursor-pointer block py-2 px-4 text-white hover:text-amber-300 focus:text-amber-300 active:text-amber-300 transition-all duration-300"
            >
              {elem.name}
              <span className="block h-[1px] w-0 bg-amber-400 group-hover:w-full group-focus:w-full group-active:w-full transition-all duration-300 mt-1"></span>
            </Link>

          </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default BlogsLinks;
