'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { services } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { SectionWrapper } from '@/hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue-400 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white-100 text-[18px] font-bold text-center">
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
        <p className={"sm:text-[18px] text-[16px] text-white-100 uppercase tracking-wider font-semibold font-poppins"}>Introduction</p>
        <h2 className={'sm:text-[32px] text-[32px] text-blue-100 uppercase tracking-wider font-semibold font-poppins'}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white-100 text-[18px] max-w-3xl leading-[30px]"
      >
        Software developer with a strong background in Full Stack Development. Experienced in designing and implementing efficient solutions that drive business growth and improve user experiences.
        Passionate about building user-friendly and visually appealing applications, I consistently prioritize clean code and maintainable software architecture. Committed to delivering exceptional results and exceeding client expectations.
        I'm Currently improving my English and working at Banco do Brasil in the development area with Stack Javascript front-end and back-end (NodeJS, ReactJS, NextJS), Database (SQL Server, MySQL and PostgreSQL) and Container orchestration (Docker, Docker-Compose and Kubernetes)
      </motion.p>

    <div className="mt-20 gap-10 flex flex-wrap justify-center">
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
          </div>
    </section>
  )
}

export default SectionWrapper(About)
