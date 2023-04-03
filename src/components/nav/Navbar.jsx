import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {ImBook} from 'react-icons/im'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareEdit} from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const[activeNav , setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserAdd/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook/></a>
       <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
       <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareEdit/></a>
    </nav>
  )
}

export default Navbar