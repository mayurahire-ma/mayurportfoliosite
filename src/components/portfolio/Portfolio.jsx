import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assest/portfolio1.jpg'
import IMG2 from '../../Assest/portfolio2.jpg'
import IMG3 from '../../Assest/portfolio3.jpg'
import IMG4 from '../../Assest/portfolio4.jpg'
import IMG5 from '../../Assest/portfolio5.png'
import IMG6 from '../../Assest/portfolio6.jpg'

const data = [
  {
    id :1,
    image: IMG1,
    title: 'Crypot Currency Dashboard & Finacial Visulaization',
    github: 'http://github.com',
    demo :'https://dribbble.com/Alien_pixels',
    },

    {
      id :2,
      image: IMG2,
      title: 'Charts Templates & infographics in figma',
      github: 'http://github.com',
      demo :'https://dribbble.com/Alien_pixels',
      },

      {
        id :3,
        image: IMG3,
        title: 'Figma dashboard UI kit for data design web apps',
        github: 'http://github.com',
        demo :'https://dribbble.com/Alien_pixels',
        },

        {
          id :4,
          image: IMG4,
          title: 'Maintanig tasks and traking progress',
          github: 'http://github.com',
          demo :'https://dribbble.com/Alien_pixels',
          },

          {
            id :5,
            image: IMG5,
            title: 'Chats templates & infograghics in Figma',
            github: 'http://github.com',
            demo :'https://dribbble.com/Alien_pixels',
            },
            
            {
              id :6,
              image: IMG6,
              title: 'Chats templates & infograghics in Figma',
              github: 'http://github.com',
              demo :'https://dribbble.com/Alien_pixels',
              },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            <a href={github}className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
  
          )
        })
      }
        


      
      </div>
    </section>
  )
}

export default Portfolio