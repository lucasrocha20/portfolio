'use client';

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, komikult, leaderboard, math, movie, nyeusi, pineapple, pineappleHover } from '../assets'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { projects } from '@/constants';


const Tag = ({children}: any) => {
  return (
    <div className='bg-blue-100 h-18px px-2 rounded-[4px]'>
      <p className='text-white-100'>{children}</p>
    </div>
  )
}

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}: any) => (
  <motion.div
    className={`flex flex-col items-center min-w-[290px] w-[350px] h-[420px] cursor-pointer card-shadow bg-blue-400`}
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    onClick={() => handleClick(id)}
  >
    <img
      className="w-full h-[50%] object-cover rounded-t-[20px]"
      src={image}
      alt={name}
    />

    <div className='flex flex-col items-center h-[45%] justify-between py-[4px] px-[20px] max-w-[350px]'>
      <div>
        <div className='flex flex-col items-center mb-[8px]'>
          <h3>{name}</h3>
          <span className='text-[12px]'>Feb 6, 2020</span>
        </div>

        <p className='text-[14px] '>{description}</p>
      </div>
      <div className='flex gap-4'>
        <Tag>Javascript</Tag>
        <Tag>NodeJS</Tag>
        <Tag>ReactJS</Tag>
      </div>
    </div>
  </motion.div>
)

function Projects () {
  const [active, setActive] = useState('project-2')

  return (
    <section id="projects" className="mt-[6rem] max-w-[1280px]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white-100 text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="mt-[50px] gap-5 flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Projects)
