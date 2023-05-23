import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Group from '../../../public/assets/Group.png'




export const IdCarrousel = () => {

    const { places, isLoading } = useSelector(state => state.places);
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
        const placees =places.filter(place =>
        ArrayRestaurants.includes(place.id)
      );
            
      setFiltered(placees)
    
    }

    useEffect(() => {
        filteredRestaurants()
    }, [places]);


  return (
    <>
    <div className='mt-28'>
    <p className="ml-4 mb-4 text-center">
      <strong>Restaurante donde podrás canjear los puntos</strong>
    </p>
    <div className="max-w-4xl mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filtered.length > 0 ? (
            <Carousel
              showThumbs={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={80}
              interval={2000}
              showIndicators={false}
            >

{filtered.map(restaurant => (
                  <div key={restaurant.id} className="relative">
                    <div className="h-32 w-auto ml-10 mr-10">
                      <img src={restaurant.image_url} alt={restaurant.name} className="h-full w-auto max-w-full" />
                    </div>
                    <p className="text-center mt-2">{restaurant.name}</p>

                    <div className='flex'>
                    <div className='w-8 h-8  ml-4'>
                    <img src={Group} alt="moneda" className='max-w max-h'/>
                    </div>

                    <div className='w-64'>
                    <p className='max-w max-h'>Consigue descuentos desde 5 euros</p>
                    </div>
                    </div>
                   
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No se encontraron restaurantes con los IDs.</p>
            )}
          </div>
        )}
      </div>
      </div>
    </>
  )
};


