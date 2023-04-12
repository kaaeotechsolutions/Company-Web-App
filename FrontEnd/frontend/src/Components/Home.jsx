import React from 'react'
import Navbar from '../Constant/Navbar';
import Hero from '../Constant/Hero';
import Footer from '../Constant/Footer';
import Cards from '../Constant/Cards';
import HeroImage from '../assets/heroimageDev.webp'
import AboutImg from '../assets/aboutus.jpg'
import Form from '../Constant/Form'
import Map from '../Constant/Map';
import HeadTitle from '../Constant/HeadTitle';
import WhatappHoverBtn from '../Constant/WhatappHoverBtn';


const detail = {
  detail: "Our mission is to transform the dynamics of the industry by offering trusted, supporting and quality solutions. We aim to enhance the business growth of our customers with innovative design and development solutions and deliver market-defining high-quality solutions that build value and constant competitive edge for our clients around the globe.",
  title: "Welcome to Kaaeotech",
  btn: "Contact Now",
  image: HeroImage,
  link: "/contact"
}

const aboutDetail = {
  detail: "With our talented team of professionals, we offer Best Web Designer services, Graphic Designing solutions, technical services, digital marketing and many more. We have risen from the startup stage to a full-fledged tech company that has been conferred with accolades.",
  title: "Kaaeotech we challenge our limits to fly high.",
  btn: "our services",
  image: AboutImg,
  link: "/service"
}

const Home = () => {
  return (
    <div className='home min-h-screen'>
      <div className="background_image">
        <div className="bg-shape shadow-lg shadow-slate-50">
          <Navbar />
          <div className="hero grid place-content-center ">
            <Hero home={true} btn={detail.btn} detail={detail.detail} link={detail.link} title={detail.title} />
          </div>
        </div>
      </div>
      <HeadTitle name="About Us" />
      <div className="about grid place-content-center">
        <Hero image={aboutDetail.image} btn={aboutDetail.btn} detail={aboutDetail.detail} link={aboutDetail.link} title={aboutDetail.title} />
      </div>
      <HeadTitle name="service" />
      <Cards />
      <HeadTitle name="contact us" />
      <div className="grid lg:grid-cols-2">
        <Map />
        <Form />
      </div>
      <WhatappHoverBtn/>
      <Footer />
    </div>
  )
}

export default Home
