'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { styles } from '@/styles'
import { resume } from '@/assets'
import { experiences } from '@/constants'
import { Download as DownloadIcon } from '@mui/icons-material'

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
        <h3 className="font-beckman text-[18px] font-bold text-white-100">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: '#0F172A' }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="font-beckman text-[24px] font-bold tracking-[2px] text-white-100">
        {experience.title}
      </h3>
      <p
        className="font-overcameBold text-[22px] font-semibold tracking-[1px] text-[#A9A9A9]"
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
      <div className="rounded-br-[150px] rounded-tl-[150px] bg-[#2C3342] bg-cover bg-center bg-no-repeat">
        <div className="py-[100px]">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} pl-[2rem] sm:pl-16`}>
              What I've done so far
            </p>
            <h2 className={`${styles.sectionHeadText} pl-[2rem] sm:pl-16`}>
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
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={resume.src}
                      alt="resume"
                      className="h-[45%] w-[45%] object-contain"
                    />
                  </div>
                }
              >
                {/* todo: trocar button por Link */}
                <button
                  className="live-demo mt-[16px] flex h-[46px] w-[125px] items-center justify-between gap-1 whitespace-nowrap rounded-[10px] bg-[#0F172A] py-5 pl-3 pr-3 font-beckman text-[14px] font-bold text-timberWolf transition duration-[0.2s] ease-in-out hover:bg-battleGray hover:text-eerieBlack sm:mt-[22px] sm:h-[58px] sm:w-[148px] sm:text-[18px]"
                  onClick={() =>
                    window.open(
                      `/resume.pdf`, // paste the link to your resume here
                      '_blank',
                    )
                  }
                >
                  MY RESUME
                  <DownloadIcon className="text-white-100" fontSize="small" />
                </button>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience)
