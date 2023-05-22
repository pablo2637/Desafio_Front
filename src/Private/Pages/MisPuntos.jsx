
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Ofertas } from '../Components/Ofertas';
import { NavLink } from 'react-router-dom'
import { getReycles, sumLiters, sumRecycles } from '../../Public/helpers/getReycles';
import { onLoadPoints, onLoadPrevPoints, onLoadRecycles } from '../../Store/Slices/userSlice'
import { Allpuntos } from '../Components/Allpuntos';


export const MisPuntos = () => {

  const { user, points } = useSelector(state => state.user);
  const [sums, setSums] = useState({});
  const dispatch = useDispatch();


  const getUserRecycles = async () => {

    const response = await getReycles(user.user_id);

    if (response.ok) {

      const newSum = {
        liters: 0,
        points: 0
      };

      dispatch(onLoadRecycles(response.recycles));
      newSum.liters = sumLiters(response.recycles);
      newSum.points = sumRecycles(response.recycles);
      dispatch(onLoadPrevPoints(newSum.points));

      setSums(newSum);

      if (response.recycles[0].points)
        dispatch(onLoadPoints(true));

      else
        dispatch(onLoadPoints(false));
    }

  };


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
        <Allpuntos sums={sums} />
      </div>

      <div>
        <h3 className='mb-4 text-center text-2xl font-bold'>Ofertas Destacadas</h3>
      </div>

      <div className='z-[150]  divMapSearch relative'>
        <form >
          <input
            type="text"
            placeholder='Busca por ubicación'>
          </input>
          <img className='glass' src="../assets/glass.png" />
        </form>
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
