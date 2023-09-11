import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export const SectionWrapper = (
  Component: any,
  // , idName: string
) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}
      >
        {/* <span className="hash-span" id={idName}>
            &nbsp;
          </span> */}

        <Component />
      </motion.section>
    )
  }

  return HOC
}
