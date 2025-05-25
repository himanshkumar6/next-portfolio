"use client"

import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"
import { motion } from 'framer-motion'
import { fadeIn } from "@/app/framerMotion/variants"


const projects = [{
  name: ' Notes Summarizer by Gemini',
  year: 'January 2025',
  align: 'right',
  image: 'https://portfolio-website-ruby-rho.vercel.app/project2.PNG',
  link: 'https://notes-summarizer-rklu.onrender.com/'
},
{
  name: 'Blockchain Simulation',
  year: 'March 2025',
  align: 'left',
  image: 'https://portfolio-website-ruby-rho.vercel.app/project1.png',
  link: 'https://blockchain-simulation-chi.vercel.app/'
}]


const ProjectsMain = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4" id="projects">
      <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }}>
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((elem, idx) => {
          return <SingleProject key={idx} name={elem.name} year={elem.year} align={elem.align} image={elem.image} link={elem.link} />
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
