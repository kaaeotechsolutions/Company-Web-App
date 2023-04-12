import React from 'react'
import { NavLink } from 'react-router-dom'
import { socialLink, navLink, service } from './data'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex h-full items-end justify-center '>
      <div className="w-full flex gap-4 justify-center items-center flex-col h-[200px] pt-4 text-slate-50 bg-slate-950">
        <ul className="flex lg:text-xl h-full items-center justify-end gap-4 text-gray-50">
          {
            navLink.map((value) => {
              return (
                <li key={value.link}><NavLink to={value.link} className=" hover:text-blue-300">{value.title}</NavLink></li>
              )
            })
          }
        </ul>
        <ul className='flex gap-4 justify-center'>
          {service.map((value)=>{
            return (
              <li key={value.title} className=" capitalize">
                <NavLink className="hover:text-blue-300" to={value.btn} >{value.title}</NavLink>
              </li>
            )
          })}
        </ul>
        <ul className='flex text-2xl pt-5 gap-8 justify-center'>
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
        <div className=" text-center capitalize font-medium mb-4 mt-2">
          <p className="">Content and materials on website belong to KaaeoTech Solution™, All © Copyright reserved to <a href="/" className=" font-bold text-slate-300 hover:text-purple-400">KaaeoTech Solution</a>  {currentYear}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer