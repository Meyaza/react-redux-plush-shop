import React from 'react';
import { ToyCover } from '../toy-cover';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

export const SliderComp = ({images}) => {
const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
 
    return (
      <div className='slider'>
        <Slider {...settings}>
          {images.map( image => <ToyCover key={image} image={image}/>)}
        </Slider>
      </div>
)
};
