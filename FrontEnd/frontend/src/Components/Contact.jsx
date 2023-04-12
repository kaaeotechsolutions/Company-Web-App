import React from 'react'
import Navbar from '../Constant/Navbar'
import Form from '../Constant/Form'
import Footer from '../Constant/Footer'
import Map from '../Constant/Map'
import HeadTitle from '../Constant/HeadTitle'
import WhatappHoverBtn from '../Constant/WhatappHoverBtn'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeadTitle name="contact Us"/>
      <div className="grid lg:grid-cols-2">
        <Map />
        <Form />
      </div>
      <WhatappHoverBtn/>
      <Footer />
    </div>
  )
}

export default Contact