import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Group from '../../../public/assets/Group.png'




export const IdCarrousel = () => {

  const { places, isLoading, recommended } = useSelector(state => state.places);
  const [filtered, setFiltered] = useState([])

  const ArrayRestaurants =
    ['YKh7lV87EPsKIr7pAodP5g',
      'wR7u4BTg1NZh-tLpWZZ3PA',
      '6XKoQ7qaMQOCXRTqQPX0CQ',
      'N0v1rM3xanvuLQvnDKbVvg',
      'HaCWv8C8TL277MHcKGtRRw',
      'J6Mq8jWYD9ntHd0u4OQr9A',
      '632SK7jfpRx2KQkCaWxGkg']


  const filteredRestaurants = () => {
    const placees = places.filter(place => recommended.find(p => p.trim() == place.id));

    setFiltered(placees)

  }

  useEffect(() => {
    filteredRestaurants()
  }, [places]);


  return (
    <>
      <div className='mt-28'>
        <p className="ml-4 mb-4 text-left text-2xl">
          <strong>Restaurantes donde podrás canjear los puntos</strong>
        </p>
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {filtered.length > 0 ? (
                <Carousel
                  infiniteLoop={true}
                  autoPlay={true}
                  showThumbs={false}
                  showStatus={false}
                  centerMode={true}
                  centerSlidePercentage={50}
                  interval={3000}
                  showIndicators={false}
                >

                  {filtered.map(restaurant => (

                    <div key={restaurant.id} className="relative w-44">

                      <div className="h-32 w-full">
                        <img src={restaurant.image_url} alt={restaurant.name} className="h-full w-full max-w-full rounded-sm" />
                      </div>
                      <p className="text-left font-medium text-base mt-1 mb-3">{restaurant.name}</p>

                      <div className='flex gap-1'>
                        <div className='w-10 h-10'>
                          <img src={Group} alt="moneda" className='imgCoin w-full h-full' />
                        </div>

                        <div className=''>
                          <p className='max-w max-h font-normal text-sm text-left'>Consigue descuentos desde 5 euros</p>
                        </div>
                      </div>

                    </div>

                  ))}
                </Carousel>
              ) : (
                <p className='text-center text-slate-500'>Aún no tienes recomendaciones.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
};


