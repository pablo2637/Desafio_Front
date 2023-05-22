
import React, { useEffect } from 'react'
import { Allpuntos } from '../../Public/Components/Allpuntos';
import { useDispatch, useSelector } from 'react-redux';
import { Ofertas } from '../Components/Ofertas';
import { NavLink } from 'react-router-dom'
import { getReycles } from '../../Public/helpers/getReycles';
import { onLoadPoints, onLoadRecycles } from '../../Store/Slices/userSlice'


export const MisPuntos = () => {

  const { user, points } = useSelector(state => state.user);
  const dispatch = useDispatch();


  const getUserRecycles = async () => {

    const response = await getReycles(user.user_id);
    console.log('response', response);

    if (response.ok) {

      dispatch(onLoadRecycles(response.recycles));

      if (response.recycles[0].points)
        dispatch(onLoadPoints(true));

      else
        dispatch(onLoadPoints(false));

    }

  }


  useEffect(() => {
    getUserRecycles();

  }, [points]);

  return (
    <>

    <div className='absolute top-0 left-0 z-[-1]'>
      <img src="../assets/rectangle.png" />
    </div>

      <div className=" my-8  pb-4">
        <h3 className='mb-8 text-center text-2xl font-bold'>Tu balance</h3>
        <Allpuntos user_id={user.user_id} />
      </div>

      <div >
        <h3 className='mb-4 text-center text-2xl font-bold'>Ofertas Destacadas</h3>
      </div>


      {
        (!points) &&
        <div className="flex justify-center items-center mb-4">
          <NavLink to={'/win1000'} className="bg-orange-400 rounded-lg px-4 py-2 text-center">
            <p className="text-center">¿Quieres ganar 1.000 puntos?</p>
            <p className="text-center">¡Dime cuál es tu restaurante favorito!</p>
          </NavLink>
        </div>
      }



      <Ofertas />

    </>
  )
}
