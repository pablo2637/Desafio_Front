import { Carousel } from 'react-responsive-carousel';
import '../../Main.css'


export const CarrouselAgua = () => {
  return (
    <>

      <h2>Tu balance - Tu impacto en el agua</h2>


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
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Gracias por reciclar Aceite
            </h2>
            <img src={'../assets/Aceite.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>

          <div>
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Gracias por reciclar Aceite
            </h2>
            <img src={'../assets/Aceite.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>

          <div>
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Gracias por reciclar Aceite
            </h2>
            <img src={'../assets/Aceite.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>


        </Carousel>

      </div>


    </>


  )
}
