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
      className=" xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
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
        <p className={"sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins"}>Introduction</p>
        <h2 className={'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </motion.p>

      <div className=" mt-20 flex gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')
