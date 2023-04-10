import React, { useState } from 'react'
import Logo from '../assets/logo-transparent.png'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { navLink } from './data'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='lg:h-24 h-10 relative'>
      <div className=" shadow-md md:fixed w-full flex justify-evenly items-center">
        <div className="lg:w-1/2 mx-2 pl-4 lg:pl-8 flex justify-start">
          <NavLink to='/' className=''><img src={Logo} alt="" className='w-36 lg:w-48' /></NavLink>
        </div>
        <div className="lg:w-1/2 mx-2">
          <ul className="md:flex hidden pr-4 lg:pr-8 lg:text-2xl h-full items-center justify-end gap-4 text-slate-800">
            {
              navLink.map((value) => {
                return (
                  <li><NavLink to={value.link} className=" hover:text-blue-300">{value.title}</NavLink></li>
                )
              })
            }
          </ul>
        </div>
        <div className="lg:w-1/2 z-50 mx-2 md:hidden">
          <div className="text-xl hover:text-purple-800 toggle">
            <button onClick={() => setToggle(!toggle)}>
              {
                toggle
                  ?
                  <RxCross1 className='text-slate-50' />
                  :
                  <RxHamburgerMenu />
              }
            </button>
          </div>
        </div>
        <div className={`${toggle ? "nav-open" : "nav-close"} bg-gray-800 text-slate-50 h-screen nav-animation absolute right-0 w-1/2 top-0`}>
          <ul className="pr-4 lg:pr-8 lg:text-2xl h-full grid place-content-center gap-12">
            {
              navLink.map((value) => {
                return (
                  <li><NavLink to={value.link} className=" hover:text-blue-300">{value.title}</NavLink></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar