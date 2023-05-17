'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Header = () => {
  const [hidden, setHidden] = useState(true)
  const toggleMenu = () => setHidden(!hidden)
  const collapse = () => setHidden(true)
  const pathname = usePathname()

  useEffect(() => {
    window.addEventListener('scroll', collapse)
    window.addEventListener('resize', collapse)
  }, [])

  const links = [
    { to: '/', page: 'Home' },
    { to: '/photos', page: 'Photos' },
    { to: '/contact-us', page: 'Contact Us' },
  ]

  return (
    <>
      <nav className=" flex flex-col">
        <div className="bg-slate-100 md:hidden z-40 text-center">
          {/* <button onClick={toggleMenu}>toggleMenu</button> */}
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            onClick={toggleMenu}
            className="hover:cursor-pointer hover:text-slate-500"
          />
        </div>
        <div
          className={`duration-200 md:static absolute bg-blue-100 md:min-h-fit min-h-[100vh] left-0  md:w-auto  w-full flex items-center justify-center  z-50 hover:cursor-pointer 
      ${!hidden ? 'top-[0%]' : 'top-[-110%]'}
      `}
          onClick={collapse}
        >
          <ul className="flex flex-col justify-center items-center md:flex-row md:justify-around  bg-indigo-200 w-full h-full">
            {links.map(link => {
              const isActive = pathname === link.to
              return (
                <li key={link.to} className="nav-li">
                  <Link
                    onClick={collapse}
                    href={link.to}
                    className={`nav-a 
                    ${
                      isActive
                        ? 'bg-slate-200 hover:bg-slate-100'
                        : 'hover:bg-blue-300'
                    }
                  `}
                  >
                    {link.page.toUpperCase()}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
