import React from 'react'
// import AboutImg from '../assets/aboutus.jpg'
import HeadTitle from '../Constant/HeadTitle'
import Navbar from '../Constant/Navbar'
import Footer from '../Constant/Footer'
import Detail from '../Constant/Detail'
import AboutHero from '../Constant/AboutHero'
import Team from '../Constant/Team'
import Testimonial from '../Constant/Testimonial'
import WhatappHoverBtn from '../Constant/WhatappHoverBtn'

// const detail = {
//   detail: "Our mission is to transform the dynamics of the industry by offering trusted, supporting and quality solutions. We aim to enhance the business growth of our customers with innovative design and development solutions and deliver market-defining high-quality solutions that build value and constant competitive edge for our clients around the globe.",
//   title: "About our company",
//   btn: "our services",
//   image: AboutImg,
//   link: "/service"
// }

const About = () => {
  return (
    <section className="about_bg_image h-full">
      <div className="">
        <div className="">
          <Navbar about={true} />
        </div>
        <AboutHero />
        <HeadTitle name="Who we are"/>
        <Detail />
        <HeadTitle name="Team"/>
        <Team/>
        <HeadTitle name="Testimonial"/>
        <Testimonial/>
        <WhatappHoverBtn/>
        <Footer />
      </div>
    </section>
  )
}

export default About