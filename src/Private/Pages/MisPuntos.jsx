
import React from 'react'
import { Allpuntos } from '../../Public/Components/Allpuntos';
import { useSelector } from 'react-redux';
import { Ofertas } from '../Components/Ofertas';

export const MisPuntos = () => {

    const {user} = useSelector(state => state.user);
  return (
    <>
    
    <div className="bg-blue-300 my-4 py-8">
    <h2 className='mb-8 text-center'>Tu balance</h2>
    <Allpuntos user_id={user.user_id} />
  </div>

  <div >
    <h2 className='mb-8 text-center'>Ofertas Destacadas</h2>
    <div className="flex justify-center items-center">
    <button className="bg-orange-400 rounded-lg px-4 py-2 text-center">
        <p className="text-center">¿Quieres ganar 1.000 puntos?</p>
        <p className="text-center">¡Dime cuál es tu restaurante favorito!</p>
    </button>
    </div>
  </div>

<Ofertas/>

  </>
  )
}
