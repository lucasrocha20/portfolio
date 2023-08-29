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
        <header id="home">
          <Navbar menuItems={menuItems} />
        </header>

        <Home />

        <div className="bg-type01 bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        {/* <div  className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Skills />
        </div> */}

        <div className="bg-type02 bg-cover bg-center bg-no-repeat">
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
        <div className="bg-type01 bg-cover bg-center bg-no-repeat">
          <Experience />
        </div>

        <div className="relative z-0 bg-type02 bg-cover bg-center bg-no-repeat">
          <Contact />
        </div>

        <hr />

        <footer className="flex h-16 w-full items-center justify-center bg-type01 bg-cover bg-center bg-no-repeat">
          <span>
            &copy; 2023 - Created by Lucas Rocha - Todos os direitos reservados
          </span>
        </footer>
      </main>
    </>
  )
}

{
  /* // todo: deixar pagina estatica */
}
