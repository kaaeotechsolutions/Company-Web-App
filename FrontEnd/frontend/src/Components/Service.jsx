import React from 'react'
import Navbar from '../Constant/Navbar'
import Footer from '../Constant/Footer'
import Cards from '../Constant/Cards'
import HeadTitle from '../Constant/HeadTitle'
import WhatappHoverBtn from '../Constant/WhatappHoverBtn'

const Service = () => {
  return (
    <div>
      <Navbar />
     <HeadTitle name="service"/>
      <Cards />
      <WhatappHoverBtn/>
      <Footer />
    </div>
  )
}

export default Service