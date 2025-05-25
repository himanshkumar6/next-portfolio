"use client"
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from "@/app/framerMotion/variants";

const experiences = [
  {
    job: 'Front-End Developer',
    company: 'Self',
    date: '2024 - Present',
    responsibilites: [
      'Implementing reusable components.',
      'Generating new ideas for better user experience',
      'Using Framer Motion for 2D Animations'
    ]
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center">
      {experiences.map((elem, idx) => (
        <div key={idx}>
          <SingleExperience experience={elem} />
          {idx < experiences.length - 1 && (
            <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0 }}>
              <FaArrowRight className="text-6xl text-orange-300 lg:block hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
