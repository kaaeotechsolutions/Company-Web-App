import React from 'react'
import { NavLink } from 'react-router-dom'
import {socialLink, navLink} from './data'


const Footer = () => {
  return (
    <footer className='flex h-full items-end justify-center '>
      <div className="w-full h-[200px] mt-4 text-slate-50 bg-slate-950">
        <ul className='flex h-1/2 gap-4 justify-center items-center'>
          <ul className="flex pr-4 lg:text-xl h-full items-center justify-end gap-4 text-gray-50">
            {
              navLink.map((value)=>{
                return(
                  <li><NavLink to={value.link} className=" hover:text-blue-300">{value.title}</NavLink></li>
                )
              })
            }
          </ul>
        </ul>
        <ul className='flex gap-4 justify-center'>
          <li><a target='blank' href="https://tebixa.com/website-development-pricing/" className=" hover:text-blue-300">Web Development</a></li>
          <li><a target='blank' href="https://tebixa.com/website-development-pricing/" className=" hover:text-blue-300">Graphics</a></li>
          <li><a target='blank' href="https://tebixa.com/website-development-pricing/" className=" hover:text-blue-300">Web Design</a></li>
          <li><a target='blank' href="https://tebixa.com/website-development-pricing/" className=" hover:text-blue-300">E-Commerse</a></li>
        </ul>
        <ul className='flex text-xl pt-10 gap-4 justify-center'>
          {
            socialLink.map((value) => {
              return (
                <li key={value.link}><a target='blank' href={value.link} className=" hover:text-blue-300">
                  {
                    React.createElement(value.icon)
                  }
                </a></li>
              )
            })
          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer