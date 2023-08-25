'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { styles } from '@/styles'
import { download, downloadHover, resume, coverhunt, dcc, kelhel, microverse } from '@/assets';
import { experiences } from '@/constants';

const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#4D5975',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #FFF',
    }}
    date={
      <div>
        <h3 className="text-white-100 text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: '#0F172A' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white-100 text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-[#A9A9A9] text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <section id="experience">
      <div className="bg-[#2C3342] bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
      <div className='py-[100px]'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#4D5975',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #FFF',
            }}
            iconStyle={{ background: '#0F172A' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume.src}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out bg-[#0F172A]"
              onClick={() =>
                window.open(
                  'resume link', // paste the link to your resume here
                  '_blank',
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover.src)
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download.src)
              }}
            >
              MY RESUME
              <img
                src={download.src}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience, 'work')
