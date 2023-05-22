import React from 'react'

import Aceite from '../../../public/assets/Aceite.png'
import '../../Main.css'




export const CarrouselAgua = () => {
  return (
    <>
    
    <h2>Tu balance - Tu impacto en el agua</h2>

    <div>
    <h2 className="absolute top-2/3 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-center font-semibold text-orange-500">
    Gracias por reciclar Aceite
    </h2>
    <img src={Aceite} alt="rectángulo" className="mancha mx-auto" />
    </div>

    


    </>

    
  )
}
