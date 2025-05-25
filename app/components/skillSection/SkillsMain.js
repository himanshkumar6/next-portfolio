"use client"

import AllSkill from './AllSkill';
import AllSkillSM from './AllSkillSM';
import SkillText from './SkillText';
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/framerMotion/variants';

const SkillsMain = () => {
  return (
    <section id="skills" className="bg-transparent font-extrabold lg:mt-20">
      <div className="max-w-6xl mx-auto px-4 min-h-[600px] flex flex-col items-center relative overflow-hidden">
        <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }}>
          <SkillText />
        </motion.div>
        <div className="w-full mt-10 sm:mt-16 justify-center lg:block hidden">
          <AllSkill />
        </div>
        <div className='block lg:hidden'>
          <AllSkillSM />
        </div>
      </div>
    </section>
  );
};

export default SkillsMain;
