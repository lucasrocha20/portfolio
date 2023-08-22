'use client';

import { motion } from 'framer-motion'
// import { BallCanvas } from './canvas'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { css, docker, figma, git, graphql, html, javascript, nodejs, postgresql, reactjs, redux, rubyrails, tailwind, typescript } from '@/assets'
import { SectionWrapper } from '@/hoc/SectionWrapper';

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];


function Skills() {
  return (
    <section  id="skills" >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Skills, 'skills')
