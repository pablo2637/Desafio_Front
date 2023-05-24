import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';

export const Carrousel = () => {

  return (
    <div className='Container-carr mb-8'>

      <p className='texto  mt-8 mb-4 m-auto text-center'>Aprende a usar nuestra Web</p>

      <Carousel
        autoPlay
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators
        centerMode={false}
        className="">


        <div>
          <img src='../assets/Frame 34656.jpg' alt="Image 3" />
        </div>

        
        <div>
          <img src='../assets/Frame 34683.png' alt="Image 2" />
        </div>
        <div>
          <img src='../assets/Frame 34695.png' alt="Image 1" />
        </div>
       

      </Carousel>

    </div>

  );
};


