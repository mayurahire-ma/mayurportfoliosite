import React from 'react'
import './About.css'
import ME from '../../Assest/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {BsFolderPlus} from 'react-icons/bs'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6 Month Internship</small>
              </article>

              <article className="about_card">
              <AiOutlineUsergroupAdd className='about_icon'/>
              <h5>clients</h5>
              <small>5+ Worldwide</small>
              </article>

              <article className="about_card">
              <BsFolderPlus className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
              </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque asperiores dolor suscipit corrupti, et numquam eum nisi rem quos, porro architecto adipisci ducimus culpa ut blanditiis quisquam possimus. Quas, harum!</p>

          <a href="#contact"  className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about