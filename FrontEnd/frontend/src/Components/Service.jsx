import React from 'react'
import Navbar from '../Constant/Navbar'
import Footer from '../Constant/Footer'
import Cards from '../Constant/Cards'

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="flex my-2 flex-col w-full justify-center items-center">
        <h2>Services</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default Service