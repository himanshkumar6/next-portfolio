"use client"

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import SingleSkill from "./SingleSkill";
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

const AllSkill = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map(({ name, Icon }, index) => (
        <motion.div key={name} variants={fadeIn('up', `0.${index}`)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }}>
          <SingleSkill text={name} imgSvg={<Icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkill;
