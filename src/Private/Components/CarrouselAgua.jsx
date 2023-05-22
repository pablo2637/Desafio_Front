import { Carousel } from 'react-responsive-carousel';
import '../../Main.css'


export const CarrouselAgua = () => {

  return (

    <>
      <h2 className='texto'>Tu balance - Tu impacto en el agua:</h2>

      <div>

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators
          centerMode={false}
          className="">

          <div>
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Gracias por reciclar Aceite
            </h2>
            <img src={'../assets/Aceite.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>

          <div>
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Has logrado que no se contamine el agua de 10 bañeras
            </h2>
            <img src={'../assets/bañeras.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>

          <div>
            <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
              Gracias por reciclar Aceite
            </h2>
            <img src={'../assets/piscinaOlimpica.png'} alt="rectángulo" className="mancha mx-auto" />
          </div>

        </Carousel>

      </div>
    </>
  )
}
