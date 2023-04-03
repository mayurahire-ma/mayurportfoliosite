import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_opations">
          <article className="contact_opation">
            <MdOutlineEmail className='contact_opation-icon'/>
            <h4>Email</h4>
            <h5>ahiremayur83@gmail.com</h5>
            <a href="mailto:ahiremayur83@gmail.com" target="_blank">Send me massage</a>
          </article>

          <article className="contact_opation">
            <RiMessengerLine className='contact_opation-icon'/>
            <h4>Messenger</h4>
            <h5>Mayur Ahire</h5>
            <a href="https://m.me/mayur.ahire.526875" target="_blank">Send me massage</a>
          </article>

          <article className="contact_opation">
            <BsWhatsapp className='contact_opation-icon'/>
            <h4>What's app</h4>
            <h5>+919604393712</h5>
            <a href="https://web.whatsapp.com/send?phone+919604393712" target="_blank">Send me massage</a>
          </article>
        </div>
        {/* END OF CONTACT OPATION */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact