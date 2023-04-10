import React from 'react'
import AboutImg from '../assets/aboutus.jpg'
import Hero from '../Constant/Hero'
import Navbar from '../Constant/Navbar'
import Footer from '../Constant/Footer'
import Detail from '../Constant/Detail'

const detail = {
  detail: "Our mission is to transform the dynamics of the industry by offering trusted, supporting and quality solutions. We aim to enhance the business growth of our customers with innovative design and development solutions and deliver market-defining high-quality solutions that build value and constant competitive edge for our clients around the globe.",
  title: "About our company",
  btn: "our services",
  image: AboutImg,
  link: "/service"
}

const About = ({ home }) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex my-2 flex-col w-full justify-center items-center">
        <h2>About Us</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <div className="about grid place-content-center">
        <Hero image={detail.image} btn={detail.btn} detail={detail.detail} title={detail.title} link={detail.link} />
      </div>
      <Detail />
      <Footer />
    </div>
  )
}

export default About