import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { masterFetch } from '../../Api/fetch';


export const Allpuntos = ({ user_id }) => {

  const [reward, setReward] = useState(null);
  const [liters, setliters] = useState(null);


  const fetchReward = async () => {
    try {

      if (user_id) {
        const response = await masterFetch(`api/recycle/${user_id}`, 'GET');
        const { data } = response;

        setReward(data[0].total_rewards);
      }
    } catch (error) {
      console.error('Error fetching reward:', error);
    }
  };

  useEffect(() => {

    fetchReward();

  }, []);

  useEffect(() => {
    // Calcula el valor proporcional
    if (reward !== null) {
      const puntos = 50; // Cada 50 puntos de reward
      const litros = 100; // 100 litros
      const calculatedPuntos = Math.floor(reward / puntos) * litros;
      setliters(calculatedPuntos);
    }
  }, [reward]);

  return (
    <div className="flex justify-around">
      <div className="w-40 rounded-lg bg-slate-50 gridPoints grid justify-center text-left items-center">
        <div className='h-4/5 grid justify-end'>
          <img className='w-auto h-full object-contain' src="../assets/coins.png" alt="" />
        </div>
        <p className="text-2xl font-bold">{reward}</p>
        <p className='col-span-full text-base text-center pb-1 font-medium'>Puntos acumulados</p>
      </div>

      <button className="w-40 rounded-lg bg-slate-50 gridPoints grid justify-center text-left items-center">
        <div className='h-4/5 grid justify-end'>
          <img className='w-auto h-full object-contain' src="../assets/impact.png" alt="" />
        </div>
        <p className="text-2xl font-bold">{liters} l.</p>
        <p className='col-span-full text-base text-center pb-1 font-medium'>Impacto en el agura</p>
      </button>
    </div>
  )

}
