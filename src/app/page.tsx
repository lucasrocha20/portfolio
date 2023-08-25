import Head from 'next/head'
import styles from './page.module.css'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { INavbarItem, Navbar } from '@/components/Navbar'
import { Home } from '@/components/Home'

export default function Main() {
  const menuItems: INavbarItem[] = [
    { id: 'home', name: 'Inicio' },
    { id: 'about', name: 'Sobre' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projetos' },
    { id: 'experience', name: 'Experiencia' },
    { id: 'contact', name: 'Contato' },
  ]

  return (
    <>
      <Head>
        <title>Lucas Rocha | Fullstack Developer | Portfolio</title>
      </Head>

      <main className={styles.main}>
        <header
          id="home"
          className="flex justify-center items-center  h-20 w-full p-4 fixed z-50"
        >
          <Navbar menuItems={menuItems} />
        </header>

        
        <Home />

        <div className='bg-type01 bg-cover bg-center bg-no-repeat'>
          <About />
        </div>        
        

        {/* <div  className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Skills />
        </div> */}

        <div className='bg-type02 bg-cover bg-center bg-no-repeat'>
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
        <div className='bg-type01 bg-cover bg-center bg-no-repeat'>
          <Experience />
        </div>
        
        <div className='bg-type02 bg-cover bg-center bg-no-repeat relative z-0'>
          <Contact/>
        </div>

        <hr/>

        <footer className="bg-type01 bg-cover bg-center bg-no-repeat w-full h-16 flex items-center justify-center">
          <span>
            &copy; 2023 - Created by Lucas Rocha - Todos os direitos
            reservados
          </span>
        </footer>
      </main>
    </>
  )
}

{
  /* // todo: deixar pagina estatica */
}
