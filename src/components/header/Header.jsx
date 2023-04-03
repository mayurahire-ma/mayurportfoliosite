import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../Assest/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mayur Ahire</h1>
        <h5 className="text-light">Mechanical engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#Contact" className='scroll_down'>scroll Down</a>
       
      </div>
    </header>
  )
}

export default Header