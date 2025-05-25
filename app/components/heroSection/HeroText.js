"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 justify-center text-center lg:text-left px-4 mx-auto max-w-2xl">
      <motion.h2 variants={fadeIn('down', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className="text-cyan-400 font-semibold text-lg md:text-xl uppercase">
        Front-End Web Developer
      </motion.h2>
      <motion.h1 variants={fadeIn('right', 0.4)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 leading-tight">
        Himanshu Kumar
      </motion.h1>
      <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className="text-white text-lg md:text-lg mt-2 leading-relaxed font-semibold">
        I’m a self-taught web developer with <br className="hidden md:block" />
        1 year of real-world experience creating modern web apps.
      </motion.p>
    </div>
  );
};

export default HeroText;
