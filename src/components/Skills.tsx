'use client'

import { motion } from 'framer-motion'
import { technologies } from '@/constants'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'

function Skills() {
  return (
    <section id="skills">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Skills)
