import React from 'react'
import Navbar from '../Constant/Navbar';
import Hero from '../Constant/Hero';
import Footer from '../Constant/Footer';
import Cards from '../Constant/Cards';
import HeroImage from '../assets/heroimageDev.webp'
import AboutImg from '../assets/aboutus.jpg'
import Form from '../Constant/Form'

const detail = {
  detail: "Our mission is to transform the dynamics of the industry by offering trusted, supporting and quality solutions. We aim to enhance the business growth of our customers with innovative design and development solutions and deliver market-defining high-quality solutions that build value and constant competitive edge for our clients around the globe.",
  title: "Welcome to Kaaeotech",
  btn: "Contact Now",
  image: HeroImage,
  link: "/contact"
}

const aboutDetail = {
  detail: "Our mission is to transform the dynamics of the industry by offering trusted, supporting and quality solutions. We aim to enhance the business growth of our customers with innovative design and development solutions and deliver market-defining high-quality solutions that build value and constant competitive edge for our clients around the globe.",
  title: "About our company",
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
      <div className="flex my-2 flex-col w-full justify-center items-center">
        <h2>About Us</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <div className="about grid place-content-center">
        <Hero image={aboutDetail.image} btn={aboutDetail.btn} detail={aboutDetail.detail} link={aboutDetail.link} title={aboutDetail.title} />
      </div>
      <div className="flex my-2 flex-col w-full justify-center items-center">
        <h2>Services</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <Cards />
      <div className="flex my-2 flex-col w-full justify-center items-center">
        <h2>Contact Us</h2>
        <hr className='my-2 h-1 rounded-md bg-black w-96' />
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
