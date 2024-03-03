'use client'

import { services } from '@/constants'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="card-gradient w-full rounded-[20px] p-[1px] shadow-card xs:w-[250px]"
    >
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-blue-400 px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
        <h3 className="text-center text-[18px] font-bold text-white-100">
          {title}
        </h3>
      </div>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="mt-[6rem] max-w-[1280px]">
      <motion.div variants={textVariant(1)}>
        <p
          className={
            'font-poppins text-[16px] font-semibold uppercase tracking-wider text-white-100 sm:text-[18px]'
          }
        >
          Introduction
        </p>
        <h2
          className={
            'font-poppins text-[32px] font-semibold uppercase tracking-wider text-blue-100 sm:text-[32px]'
          }
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[18px] leading-[30px] text-white-100"
      >
        Software developer with a strong background in Full Stack Development.
        Experienced in designing and implementing efficient solutions that drive
        business growth and improve user experiences. Passionate about building
        user-friendly and visually appealing applications, I consistently
        prioritize clean code and maintainable software architecture. Committed
        to delivering exceptional results and exceeding client expectations.
        I&apos;m Currently improving my English and working at Banco do Brasil
        in the development area with Stack Javascript front-end and back-end
        (NodeJS, ReactJS, NextJS), Database (SQL Server, MySQL and PostgreSQL)
        and Container orchestration (Docker, Docker-Compose and Kubernetes)
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About)
