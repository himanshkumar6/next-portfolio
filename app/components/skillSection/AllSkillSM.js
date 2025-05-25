"use client"

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from 'framer-motion'
import { fadeIn } from "@/app/framerMotion/variants";

const skills = [
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'JavaScript', Icon: IoLogoJavascript },
  { name: 'React JS', Icon: GrReactjs },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Next JS', Icon: RiNextjsFill },
  { name: 'Firebase', Icon: IoLogoFirebase }
];

const AllSkillSM = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-12 my-12">
      {skills.map((elem, index) => {
        return <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0.7 }} key={index} className="flex flex-col items-center ">
          <elem.Icon className="text-7xl text-orange-500" />
          <p className="text-center mt-4 text-white">{elem.name}</p>
        </motion.div>
      })}
    </div>
  )
}

export default AllSkillSM
