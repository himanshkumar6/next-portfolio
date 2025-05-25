"use client"

import AboutMeImage from "./AboutMeImage"
import AboutMeText from "./AboutMeText"
import { motion } from 'framer-motion'
import { fadeIn } from "@/app/framerMotion/variants"

const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row flex-col lg:gap-36 gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center my-5" id="about">
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0.7 }}><AboutMeText /></motion.div>
      <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0.7 }}><AboutMeImage /></motion.div>
    </div>
  )
}

export default AboutMeMain
