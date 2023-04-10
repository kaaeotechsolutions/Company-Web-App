import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const data = [
    {
        image:"https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg",
        title:"web development",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    },
    {
        image:"https://static.wixstatic.com/media/72c0b2_026a78c2a8c841fc95195a13e87081fa~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_026a78c2a8c841fc95195a13e87081fa~mv2.jpg",
        title:"web design",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg",
        title:"graphic design",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    },
    {
        image:"https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=2000",
        title:"Digital Marketing",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    },
    {
        image:"https://www.technoexponent.com/blog/wp-content/uploads/2019/04/eCommerce-website-Development.jpg",
        title:"Ecommerce Website Development",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    },
    {
        image:"https://tateeda.com/wp-content/uploads/2020/10/1-14.jpg",
        title:"App Development",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        btn:"/contact"
    }
]

export const socialLink = [{
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100089098420395"
  }, {
    icon: FaInstagram,
    link: "https://www.instagram.com/kaaeotechsolutions/"
  }, {
    icon: FaLinkedin,
    link: ""
  }, {
    icon: FaTwitter,
    link: "https://twitter.com/kaaeotech"
  },]
  
  export const navLink=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"About Us",
      link:"/about"
    },
    {
      title:"Service",
      link:"/service"
    },
    {
      title:"Contact Us",
      link:"/contact"
    }
  ]

export default data;