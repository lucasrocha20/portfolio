'use client'

import { technologies } from '@/constants'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

function Skills() {
  return (
    <section id="skills">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-14">
        {technologies.map((technology) => (
          <div
            className="flex h-24 w-24 flex-col items-center"
            key={technology.name}
          >
            <img src={technology.icon} />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Skills)
