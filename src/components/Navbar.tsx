'use client'

import { useEffect, useState } from 'react'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
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
  const [toggle, setToggle] = useState(false)
  const [shadow, setShadow] = useState(true)

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
    const scrollPosition = window.scrollY
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

    if (scrollPosition <= 500) {
      return setActiveSection('home')
    }

    if (scrollPosition <= 2000) {
      return setActiveSection('about')
    }

    if (scrollPosition <= 3700) {
      return setActiveSection('projects')
    }

    if (scrollPosition <= 5000) {
      return setActiveSection('experience')
    }

    if (scrollPosition > 5000) {
      return setActiveSection('contact')
    }

    // if (activeSections.length > 0) {
    //   setActiveSection(activeSections[0].id);
    // }
  }

  useEffect(() => {
    if (!disableScroll) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [disableScroll])

  return (
    <nav className="px-6w-full justify-centerpy-2 fixed z-50 flex flex h-20 w-full  items-center sm:px-16">
      <div className="mx-auto">
        <ul className="mt-2 flex hidden list-none flex-row items-center justify-center gap-14 rounded-full bg-blue-500 p-[10px] opacity-[80%] sm:flex">
          {menuItems?.map((item) => (
            <li
              key={item.id}
              className={`flex h-8 items-center justify-center rounded-3xl px-2 py-2 ${
                activeSection === item.id ? 'bg-blue-100' : ''
              }`}
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
        <div className="flex w-screen flex-1 items-center justify-start sm:hidden">
          {toggle ? (
            <div
              className={`duration-2000 menu absolute left-0 top-0 z-10 h-[100vh] w-screen transform bg-blue-500 p-6 opacity-[80%] transition-transform ease-in-out ${
                toggle ? 'menu-open' : 'menu-close'
              }`}
            >
              <div className="flex justify-end">
                <button
                  aria-label="Close menu"
                  onClick={() => setToggle(!toggle)}
                >
                  <CloseIcon className="text-white-100" fontSize="large" />
                </button>
              </div>
              <ul className="ml-[35px] flex list-none flex-col items-start justify-end gap-[1rem]">
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
                       flex 
                       h-8 
                       items-center 
                       rounded-full 
                       px-2 
                       py-2 
                       ${activeSection === item.id ? 'bg-blue-100' : ''}
                      
                      bg-[${shadow ? 'red' : 'green'}]
                      `}
                    onClick={() => {
                      setToggle(!toggle)
                      // setActive(nav.title);
                    }}
                  >
                    <a href={`#${item.id}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button
              className="ml-[20px]"
              aria-label="Open menu"
              onClick={() => setToggle(!toggle)}
            >
              <MenuIcon className="text-white-100" fontSize="large" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
