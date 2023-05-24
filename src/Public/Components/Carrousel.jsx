import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';

export const Carrousel = () => {

  return (
    <section>
      <div className='Container-carr mb-8'>

        <p className='texto  mt-8 mb-4 m-auto text-center'>Aprende a usar nuestra Web</p>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators
          centerMode={false}
          className="">


          <div className='w-96 h-96  items-center justify-center'>
            <img src="../assets/Frame 34656.jpg" alt="Image 3" className="m-auto max-h-full" />
          </div>

          <div className='w-96 h-96  items-center justify-center'>
            <img src="../assets/Frame 34683.png" alt="Image 2" className="m-auto max-h-full" />
          </div>

          <div className='w-96 h-96  items-center justify-center'>
            <img src="../assets/Frame 34695.png" alt="Image 1" className="m-auto max-h-full" />
          </div>




        </Carousel>

      </div>
    </section>

  );
};


