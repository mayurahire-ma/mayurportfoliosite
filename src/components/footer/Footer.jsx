import React from 'react'
import './Footer.css'
import {CiFacebook} from 'react-icons/ci'
import {IoLogoInstagram} from 'react-icons/io'
import {CiTwitter} from 'react-icons/ci'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>EGTOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><CiFacebook/></a>
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://twitter.com"><CiTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGTOR Tutorials. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer