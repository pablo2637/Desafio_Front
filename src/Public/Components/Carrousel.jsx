import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css'; 

import Image1 from '../../../public/assets/Frame1.png';
import Image2 from '../../../public/assets/Frame2.png';
import Image3 from '../../../public/assets/Frame3.png';


export const Carrousel = () => {
  return (
    <>
    <div className='Container-carr'>
    <p className='texto'>Aprende a usar nuestra Web</p>
    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    showIndicators
    centerMode={false}
    className="carousel-container">

      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
      <div>
        <img src={Image3} alt="Image 3" />
      </div>

      
      </Carousel>
      </div>
      </>   
  );
};


