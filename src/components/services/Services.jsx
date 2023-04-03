import React from 'react'
import './Services.css'
import{BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What's I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container ">
        {/* START OF UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        {/*START WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3>WEB DEVELOPMENT </h3>
          </div>

          <ul className='service_list'>
            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}

        {/* START OF CONTACT CREATION */}

        <article className='service'>
          <div className="service_head">
            <h3>Contact Creation</h3>
          </div>

          <ul className='service_list'>
            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li><BsCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTACT CREATION */}
      </div>
    </section>
  )
}

export default Services