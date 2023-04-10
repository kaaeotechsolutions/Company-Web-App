import React from 'react'
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

const Hero = ({ home, btn, title, detail, image, link }) => {


  return (
    <section className="bg-dot transition-all">
      <div className='flex w-full justify-center items-center bg-transparent'>
        <div className="lg:flex w-5/6">
          <div className="w-full order-2 flex flex-col justify-center items-center lg:w-1/2">
          <h2 className='text-2xl capitalize my-4 font-semibold'>
            {
              home
              ?
               <Typewriter
              options={{
                strings: [title],
                autoStart: true,
                loop: true,
              }}
            />
            :
            title
            }
           
            </h2>
            <p className="mx-4 w-4/5 my-4 text-center lg:text-lg">
              {detail}
            </p>
            <button className='my-4 capitalize w-36 h-12 bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50'>
              <NavLink to={link}>
                {btn}
              </NavLink>
            </button>
          </div>
          <div className="w-full mt-6 flex justify-center items-center lg:w-1/2 ">
            <img className='w-4/5 rounded-md' src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero