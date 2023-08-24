'use client';

import { motion } from 'framer-motion';

import { bwmap, shaq, worldmap } from "@/assets";
import cartoon from '@/assets/personal/cartoon.png'

export function Home() {
  return (
    <>
      {/* <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap.src}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap.src}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div> */}
      
      <section
        className="
          flex 
          sm:flex-row 
          flex-col 
          w-full 
          h-screen
          mx-auto
          bg-hero
          overflow-hidden
        "
      >
        <div className="max-w-[1280px]">
        <div
          className={`
          absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] sm:px-16 px-6 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`
              text-blue-100
              
                font-black 
                
                lg:text-[80px] 
                sm:text-[60px] 
                xs:text-[50px] 
                text-[40px] 
                lg:leading-[90px] 
                mt-2 
                
                font-poppins 
                uppercase`}
            >
              Hi, I'm{' '}
              <span
                className="
                text-white-100 
                sm:text-[90px] 
                text-[50px] font-mova
                font-extrabold uppercase"
              >
                Lucas Rocha
              </span>
            </h1>
            <p className={`text-blue-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 `}>
              Lorem ipsum dolor sit amet. <br className="sm:block hidden" />
              consectetur adipisicing elit deleniti, voluptas.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img src={cartoon.src}
              className="
                absolute
                bottom-0
                ml-[50vw]
                sm:h-[90vh] 
                md:h-[70vh] 
                xl:h-[80vh]
              "
          >
          </img>
        </div>
        </div>
      </section>
    </>
  )
}