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
    { id: 'section3', name: 'Projetos' },
    { id: 'section4', name: 'Contato' },
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

        <About />

        <Skills />

        <Projects/>

        <Experience />

        <Contact/>


        {/* <section
          style={{ height: '800px' }}
          id="section2"
          className="w-full bg-slate-400 flex items-center justify-center"
        >
          <h1>Sobre</h1>
        </section> */}

        {/* <section
          style={{ height: '800px' }}
          id="section3"
          className="w-full h-32 bg-slate-500 flex items-center justify-center"
        >
          <h1>Projetos</h1>
        </section>

        <section
          style={{ height: '800px' }}
          id="section4"
          className="w-full h-32 bg-fuchsia-200 flex items-center justify-center"
        >
          <h1>Contato</h1>
        </section> */}

        <footer className="bg-red-800 w-full h-16 flex items-center justify-center">
          <h1>
            &copy; Copyright - Created by Lucas Rocha - Todos os direitos
            reservados
          </h1>
        </footer>
      </main>
    </>
  )
}

{
  /* // todo: deixar pagina estatica */
}
