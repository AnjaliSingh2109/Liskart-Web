'use client'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/esm/Button';
import {BannerItem} from './typeDefs';
import {mockBannerData} from './constant';


const Banner = () => {
  return (
    <>
    <Carousel>
        {mockBannerData?.map((item, index) => (
            
          <Carousel.Item key={item.id}>
          {/* <ExampleCarouselImage text="First slide" /> */}
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Button variant="warning">SHOP NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
         
        ))}
       </Carousel>
     
    </>
  )
}

export default Banner;