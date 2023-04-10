import React from 'react'
import Navbar from '../Constant/Navbar'
import Form from '../Constant/Form'
import Footer from '../Constant/Footer'
// import Map from '../Constant/Map'



const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex my-4 flex-col w-full justify-center items-center">
        <h2>Contact Us</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <Form/>
      {/* <Map/> */}
      <Footer/>
    </div>
  )
}

export default Contact