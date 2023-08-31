'use client'

import { close, menu } from '@/assets'
import { useCallback, useEffect, useRef, useState } from 'react'
import {Menu as MenuIcon, Close as CloseIcon} from '@mui/icons-material';
export interface INavbarItem {
  id: string
  name: string
}

interface INavbarProps {
  menuItems: INavbarItem[]
}

export function Navbar({ menuItems }: INavbarProps) {
  const [activeSection, setActiveSection] = useState('home')
  const [disableScroll, setDisableScroll] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(true);

  const handleClick = (id: string) => {
    setDisableScroll(true)
    setActiveSection(id)

    if (timeoutId) clearTimeout(timeoutId)

    const timeout = setTimeout(() => {
      setDisableScroll(false)
    }, 1000)

    setTimeoutId(timeout)
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // const windowHeight = window.innerHeight;

    // const activeSections = menuItems.filter((section) => {
    //   const sectionElement = document.getElementById(section.id);
    //   if (sectionElement) {
    //     let { offsetTop, offsetHeight } = sectionElement;

    //     // offsetTop - 500
    //     return (
    //       scrollPosition >= offsetTop - windowHeight / 2 
    //       && scrollPosition < offsetTop + offsetHeight
    //     );
    //   }
    //   return false;
    // });

    if(scrollPosition <= 500 ) {
      return setActiveSection('home');
    }

    if(scrollPosition <= 2000 ) {
      return setActiveSection('about');
    }

    if(scrollPosition <= 3700 ) {
      return setActiveSection('projects');
    }

    if(scrollPosition <= 5000 ) {
      return setActiveSection('experience');
    }

    if(scrollPosition > 5000 ) {
      return setActiveSection('contact');
    }

    // if (activeSections.length > 0) {
    //   setActiveSection(activeSections[0].id);
    // }
  };

  useEffect(() => {
    if (!disableScroll) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [disableScroll])

  return (
    <nav className="sm:px-16 px-6w-full flex items-center justify-centerpy-2 fixed z-50 flex  h-20 w-full">
      <div className="mx-auto">
        <ul className="flex items-center justify-center list-none hidden sm:flex flex-row gap-14 mt-2 bg-blue-500 opacity-[80%] rounded-full p-[10px]">
          {menuItems?.map((item) => (
            <li
              key={item.id}
              className={`h-8 px-2 py-2 flex items-center justify-center rounded-3xl ${activeSection === item.id ? 'bg-blue-100' : ''}`}
            >
              <a
                href={item.id === 'home' ? '#' : `#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`text-white-100`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-start items-center">
          {toggle ? (
            <div
              className={`p-6 bg-blue-500 opacity-[80%] absolute top-0 left-0 w-screen h-[100vh] z-10 transform transition-transform duration-2000 ease-in-out menu ${toggle ? 'menu-open' : 'menu-close'}`}
            >
              <div className="flex justify-end">
                <button aria-label="Close menu" onClick={() => setToggle(!toggle)}>
                  <CloseIcon className='text-white-100' fontSize='large'/>
                </button>
              </div>
              <ul
                className="list-none flex flex-col gap-[1rem] items-start justify-end ml-[35px]">
                     
                {menuItems.map((item) => (
                  <li
                    id={item.id}
                    key={item.id}
                    // ${active === nav.title ? 'text-french' : 'text-eerieBlack'} 
                    // className={`
                    //   text-[88px] font-bold font-arenq 
                    //   uppercase tracking-[1px] cursor-pointer`}
                      className={`
                       flex 
                       items-center 
                       h-8 
                       px-2 
                       py-2 
                       flex 
                       rounded-full 
                       ${activeSection === item.id ? 'bg-blue-100' : ''}
                      
                      bg-[${
                        shadow ? "red" : "green"
                      }]
                      `}
                    onClick={() => {
                      setToggle(!toggle);
                      // setActive(nav.title);
                    }}>
                    <a href={`#${item.id}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button 
            className='ml-[20px]'
              aria-label='Open menu'
              onClick={() => setToggle(!toggle)}>
              <MenuIcon className='text-white-100' fontSize='large'/>
            </button>
          )}
        </div>
        </div>
    </nav>
  )
}
