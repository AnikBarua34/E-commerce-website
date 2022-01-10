
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/banner2.jpg';
import pic2 from '../../../images/banner3.jpg';
import pic3 from '../../../images/banner4.png';
import './Banner.css';

const Banner = () => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease',
    });
})
    return (
      <div data-aos="zoom-in">

        <div className="banner mt-3">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    );
};

export default Banner;