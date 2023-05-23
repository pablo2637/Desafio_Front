
import { useNavigate } from 'react-router-dom';


export const Allpuntos = ({ sums }) => {

  const navigate = useNavigate();

  const handleClick = () => navigate('/impacto');

  return (
    <div className="flex justify-around">
      <div className="w-40 mb-0 rounded-lg bg-slate-50 gridCoins grid justify-center text-left items-center">
        <div className='h-4/5 grid justify-end w-full'>
          <img className='w-auto h-full object-contain' src="../assets/coins.png" />
        </div>
        <p className="text-2xl font-bold">{sums.points}</p>
        <p className='col-span-full text-base text-center pb-1 font-medium'>Puntos acumulados</p>
      </div>

      <button onClick={handleClick} className="w-40 mb-0 rounded-lg bg-slate-50 gridPoints grid justify-center text-left items-center">
        <div className='h-4/5 grid justify-end'>
          <img className='w-auto h-full object-contain' src="../assets/impact.png" />
        </div>
        <p className="text-2xl font-bold">{parseInt(sums.liters * 1000)} l.</p>
        <p className='col-span-full text-base text-center pb-1 font-medium'>Impacto en el agua</p>
      </button>

    </div>
  )

}
