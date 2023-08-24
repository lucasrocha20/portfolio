'use client'

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
    <nav className="
      bg-blue-500 
      opacity-[80%] 
      h-12 
      rounded-3xl 
      flex 
      items-center 
      justify-center 
      p-2">
      <ul className="flex space-x-4 items-center">
        {menuItems?.map((item) => (
          <li
            key={item.id}
            className={` h-8 px-2 py-2 flex items-center justify-center rounded-3xl ${
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
    </nav>
  )
}