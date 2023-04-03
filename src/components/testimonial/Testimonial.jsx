import React from 'react'
import './Testimonial.css'
import  AVTR1 from '../../Assest/avatar1.jpg'
import  AVTR2 from '../../Assest/avatar2.jpg'
import  AVTR3 from '../../Assest/avatar3.jpg'
import  AVTR4 from '../../Assest/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name : 'Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,'
    },

    {
      avatar: AVTR2,
      name : 'Harry',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,'
      },

      {
        avatar: AVTR3,
        name : 'Ron',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,'
        },

        {
          avatar: AVTR4,
          name : 'Mariyam',
          review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque neque quos rerum,'
          },
]
const Testimonial = () => {
  return (
    <section id='tsection'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonial_container'
         // install Swiper modules
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}>
    {
      data.map(({avatar,name,review},index)=>{
        return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar} />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>

        )
      })
    }
      </Swiper>
    </section>
  )
}

export default Testimonial