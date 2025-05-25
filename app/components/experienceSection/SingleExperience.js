"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/framerMotion/variants'

const SingleExperience = ({ experience }) => {
  return (
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }} className='md:h-[350px] md:w-[240px] h-auto border-2 border-amber-300 rounded-2xl mt-12 p-4 border-dashed w-full'>
      <p className='font-bold text-cyan-400 '>{experience.job}</p>
      <p className='font-bold text-orange-400 '>{experience.company}</p>
      <p className='font-bold text-gray-300 '>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilites.map((responsibilites, index) => {
        return <li key={index}>{responsibilites}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience
