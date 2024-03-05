import profile from '@/assets/personal/profile.png'
import { GitHub, LinkedIn } from '@mui/icons-material'
import Image from 'next/image'
import { AboutButton } from './AboutButton'
import { ContactItem } from './ContactItem'

export function Home() {
  return (
    <section className=" relative mx-auto  flex  h-screen w-full   flex-col   overflow-hidden  bg-hero  sm:flex-row">
      <div className="max-w-[1280px]">
        <div
          className={
            'absolute inset-0 top-[150px] z-10 mx-auto flex max-w-7xl flex-row items-start justify-between gap-3 px-6 sm:top-[120px] sm:px-16 lg:top-[150px] xl:top-[120px]'
          }
        >
          <div>
            <h1
              className={`font-poppinstext-[40px] font-black uppercase text-blue-100 xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[90px]`}
            >
              {"Hi, I'm "}
              <span className="font-mova text-[50px] font-extrabold uppercase text-white-100 sm:text-[90px]">
                Lucas Rocha
              </span>
            </h1>
            <p
              className={
                'mt-2 text-[16px] font-medium text-blue-100 xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'
              }
            >
              A dedicated full-stack developer and technology enthusiast.
            </p>

            <div className="mt-2 flex gap-2">
              <ContactItem
                icon={<GitHub />}
                ariaLabel="Link for Github"
                href="https://github.com/lucasrocha20"
              />
              <ContactItem
                icon={<LinkedIn />}
                ariaLabel="Link for Linkedin"
                href="https://www.linkedin.com/in/dev-lucas-rocha/"
              />
            </div>
          </div>
          <div className="xxs:mt-4 flex w-screen flex-col items-start justify-center sm:-ml-[3rem]" />
        </div>

        <AboutButton />

        <div>
          <Image
            src={profile.src}
            alt="Lucas Rocha"
            width={400}
            height={400}
            // objectFit="cover"
            // fill
            // className="absolute bottom-0 ml-[45vw]"
            className="absolute bottom-48 ml-[60vw]"
          />
        </div>
      </div>
    </section>
  )
}
