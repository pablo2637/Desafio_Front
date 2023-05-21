import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { masterFetch } from '../../Api/fetch';


export const Allpuntos = ({user_id}) => {

    // const user = useSelector(state => state.user);
    // const user_id = user ? user.user_id : '';
    const [reward, setReward] = useState(null);
    const [liters, setliters] = useState(null);


    const fetchReward = async () => {
        try {
            console.log("este es el user_id" + user_id)
          if (user_id) {
            const response = await masterFetch(`api/recycle/${user_id}`, 'GET');
            const { data } = response;
            
            setReward(data[0].total_rewards);
            console.log(total_rewards)
            console.log("esta es el responde" , response)
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

  return  (
    <div className="flex justify-between">
    <div className="w-1/2 p-4 rounded-lg bg-slate-50 mx-4">
      <p className="text-lg font-bold">Puntos Acumulados: {reward}</p>
    </div>
    <button className="w-1/2 p-4 rounded-lg bg-slate-50 mx-4">
    <div >
      <p className="text-lg font-bold">Impacto en el agua: {liters} L</p>
    </div>
    </button>
  </div>
  ) 
  
}
