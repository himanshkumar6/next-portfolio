"use client"

import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion"
import { fadeIn } from "@/app/framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className={`flex w-full flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}>
      <div>
        <h2 className="md:text-3xl text-2xl text-orange-400">{name}</h2>
        <h2 className={`text-xl front-thin text-white text-center ${align === 'left' ? 'md:text-left' : 'md:text-left'}`}>{year}</h2>
        <a href={link} className={`text-lg flex gap-2 items-center text-cyan-400 hover:text-emerald-400 transition-all duration-500 cursor-pointer justify-center ${align === 'left' ? 'lg:justify-self-start md:justify-self-end' : 'md:justify-self-start'}`}>
          View <CgArrowTopRight />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan-400 opacity-50 absolute top-0 left-0 transition-all duration-500 md:block hidden hover:opacity-0"></div>
        <img src={image} alt="Project Image" className="w-ful h-full " />
      </div>
    </motion.div>
  )
}

export default SingleProject
