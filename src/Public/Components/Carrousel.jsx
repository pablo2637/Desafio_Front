import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';

export const Carrousel = () => {

  return (
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
          <img src='../assets/frame1.png' alt="Image 1" />
        </div>
        <div>
          <img src='../assets/frame2.png' alt="Image 2" />
        </div>
        <div>
          <img src='../assets/frame3.png' alt="Image 3" />
        </div>

      </Carousel>

    </div>

  );
};


