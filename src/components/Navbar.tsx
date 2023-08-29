'use client'

import { close, menu } from '@/assets'
import { useCallback, useEffect, useState } from 'react'

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
    if (disableScroll) return

    const scrollPosition = window.scrollY

    menuItems.forEach((section) => {
      const sectionElement = document.getElementById(section.id)

      if (!sectionElement) return setActiveSection(section.id)

      let offsetTop = sectionElement.offsetTop - 200

      if (offsetTop < 0) offsetTop = 0

      if (
        offsetTop <= scrollPosition &&
        offsetTop + sectionElement.offsetHeight > scrollPosition
      ) {
        setActiveSection(section.id)
      }
    })
  }

  useEffect(() => {
    if (!disableScroll) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [disableScroll])

  return (
    <nav className="sm:px-16 px-6w-full flex items-center py-2 fixed z-50 flex  h-20 w-full items-center justify-center">
        <div className="w-full flex justify-betweenitems-centermax-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2bg-blue-500 opacity-[80%]">
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
                <img
                  src={close.src}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
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
                      className={`flex items-center h-8 px-2 py-2 flex rounded-full ${activeSection === item.id ? 'bg-blue-100' : ''}`}
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
            // todo: trocar por svg
            <img
              src={menu.src}
              alt="menu"
              className="w-[34px] h-[34px]object-contain cursor-pointer mr-[20px]"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        </div>
    </nav>
  )
}
