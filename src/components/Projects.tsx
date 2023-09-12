'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { projects } from '@/constants'

const Tag = ({ children }: any) => {
  return (
    <div className="h-18px rounded-[4px] bg-blue-100 px-2">
      <p className="text-[14px] text-white-100">{children}</p>
    </div>
  )
}

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  date,
  repo,
  demo,
  index,
  active,
  handleClick,
}: any) => (
  <motion.div
    className={`card-shadow flex h-[480px] w-[350px] min-w-[290px] cursor-pointer flex-col items-center bg-blue-400`}
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    onClick={() => handleClick(id)}
  >
    <img
      className="h-[50%] w-full rounded-t-[20px] object-cover"
      src={image}
      alt={name}
    />

    <div className="flex h-[50%] max-w-[350px] flex-col items-center justify-between px-[20px] py-[4px]">
      <div>
        <div className="mb-[8px] flex flex-col items-center">
          <h3>{name}</h3>
          <span className="text-[12px]">{date}</span>
        </div>

        <p className="text-[14px]">{description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tags.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  </motion.div>
)

function Projects() {
  const [active, setActive] = useState('project-2')

  return (
    <section id="projects" className="mt-[6rem] max-w-[1280px]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 max-w-3xl text-[18px] leading-[30px] text-white-100"
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
        <div className="mt-[50px] flex flex-wrap justify-center gap-5">
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
