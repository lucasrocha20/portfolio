'use client'

import { motion } from 'framer-motion'


import cartoon from '@/assets/personal/cartoon.png'

export function Home() {
  return (
    <section
      className="
        mx-auto 
        flex 
        overflow-hidden
        h-screen 
        w-full 
        flex-col
        bg-hero
          sm:flex-row
      "

    >

      
      <div className="max-w-[1280px]">
        <div
                  className={`
                absolute inset-0 top-[150px] mx-auto 
                flex max-w-7xl flex-row items-start 
                justify-between gap-3 px-6 sm:top-[250px] sm:px-16
                lg:top-[150px] xl:top-[250px]`}
                >
          <div className="ml-3 mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="bw-gradient h-40 w-1 sm:hidden sm:h-80" />
          </div>

          <div>
            <h1
              className={`
              
              
              text-[40px] 
              mt-2
            font-black 
            uppercase 
            text-blue-100 
            xs:text-[50px] 
            font-poppins 
              sm:text-[60px] 
              
              lg:text-[80px] 
              lg:leading-[90px]`}
            >
              Hi, I'm{' '}
              <span
                className="
              font-mova 
              text-[50px] 
              font-extrabold uppercase
              text-white-100 sm:text-[90px]"
              >
                Lucas Rocha
              </span>
            </h1>
            <p
              className={`mt-2 text-[16px] font-medium text-blue-100 xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px] `}
            >
              Lorem ipsum dolor sit amet. <br className="hidden sm:block" />
              consectetur adipisicing elit deleniti, voluptas.
            </p>
          </div>
          <div
            className="xxs:mt-4 flex w-screen flex-col 
          items-start justify-center sm:-ml-[3rem]"
          ></div>
        </div>

        <div
          className="absolute bottom-32 flex w-full 
        items-center justify-center xs:bottom-10"
        >
          <a href="#about">
            <div
              className="flex h-[64px] w-[35px] items-start 
          justify-center rounded-3xl border-4
          border-dim border-french p-2"
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
                className="mb-1 h-3 w-3 rounded-full bg-taupe"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            src={cartoon.src}
            className="
              absolute
              bottom-0
              ml-[50vw]
              sm:h-[90vh] 
              md:h-[70vh] 
              xl:h-[80vh]
            "
          ></img>
        </div>
      </div>
    </section>
  )
}
