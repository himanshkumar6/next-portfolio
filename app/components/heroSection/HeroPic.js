"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className="relative w-full lg:w-1/2 flex items-center justify-center py-10">
      <img
        src="https://portfolio-website-ruby-rho.vercel.app/image.jpg"
        alt="Hero Image"
        className="w-full max-w-[500px] md:max-w-[450px] rounded-full object-cover z-10  border-4 border-emerald-400"
      />
    </motion.div>
  );
};

export default HeroPic;
