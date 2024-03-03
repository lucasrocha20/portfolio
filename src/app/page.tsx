import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Head from 'next/head'
import styles from './page.module.css'
// import Skills from '@/components/Skills'
import { Home } from '@/components/Home'
import { INavbarItem, Navbar } from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Main() {
  const menuItems: INavbarItem[] = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ]

  return (
    <>
      <Head>
        <title>Lucas Rocha | Fullstack Developer | Portfolio</title>
      </Head>

      <main className={styles.main}>
        <header id="home">
          <Navbar menuItems={menuItems} />
        </header>

        <Home />

        <div className="bg-type01 bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-type02 bg-cover bg-center bg-no-repeat">
          <Skills />
        </div>

        <div className="bg-type01 bg-cover bg-center bg-no-repeat">
          <Projects />
        </div>

        {/* <div className='bg-type01 bg-cover bg-center bg-no-repeat'>
          <div className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div  className="bg-experienceLight bg-cover bg-center 
                bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>
        </div> */}
        <div className="bg-type02 bg-cover bg-center bg-no-repeat">
          <Experience />
        </div>

        <div className="relative z-0 bg-type01 bg-cover bg-center bg-no-repeat">
          <Contact />
        </div>

        <hr />

        <footer className="flex h-16 w-full items-center justify-center bg-type02 bg-cover bg-center bg-no-repeat">
          <span className="block text-center">
            &copy; 2023 - Created by Lucas Rocha - All rights reserved
          </span>
        </footer>
      </main>
    </>
  )
}
