import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';


export const CarrouselAgua = () => {

  return (

    <>
      <article className=''>

      
          <h2 className=' mt-3 mb-4 ml-5 text-gray-500'>Tu balance - Tu impacto en el agua:</h2>

          <div>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showIndicators
              centerMode={false}
              className="">

              <div className='w-full'>
                <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
                  Gracias por reciclar Aceite
                </h2>
                <img src={'../assets/Aceite.png'} alt="rectángulo" className="w-full" />
              </div>

              <div>
                <h2 className="absolute top-2/3 mt-16 pt-4 left-1/2 transform -translate-x-1/2 font-semibold text-orange-500 leading-tight w-64">
                  Has logrado que no se contamine el agua de 10 bañeras
                </h2>
                <img src={'../assets/bañeras2.png'} alt="rectángulo" className="w-full" />
              </div>

              <div>
                <img src={'../assets/Pisicna.png'} alt="rectángulo" className="w-full" />
              </div>

            </Carousel>

            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="flex items-center justify-center rounded h-12 w-10/12 border-amber-500 border-2 p-2 text-base my-4 ">

                    <p
                        className="font-bold text-amber-500 text-center">
                        Enviar
                    </p>
                    <div>
                        <img
                            className="mx-2"
                            src="\assets\share_orange.png"
                            alt="gana1000" />
                    </div>

                </button>
            </div>

          </div>

        </article>
    </>
  )
}
