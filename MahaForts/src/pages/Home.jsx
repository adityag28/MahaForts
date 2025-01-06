import React from 'react'
import { GiMountains } from 'react-icons/gi'
import { IoSearch } from "react-icons/io5";
import Forts from './Forts';
import Testimonial from './Testimonial';
import Carousel from 'react-bootstrap/Carousel';




export default function Home() {

  return (

    <>
      <div className='carousel-container'>
        <div className="overlay">
          <h1>Experience the Majesty of Maharashtra's Forts</h1>
          <span className='search-bar'>
            <IoSearch className='search-icon' />
            < input type='text' placeholder=' Search By City or Fort' />
          </span>
        </div>
        <Carousel controls={false}>
          <Carousel.Item interval={1000} className="carousel-item-1">
          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-2">

          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-3">

          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-4">
          </Carousel.Item>
        </Carousel>


      </div>




      <Forts />
      <Testimonial />
    </>
  )
}
