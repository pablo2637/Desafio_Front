import { useSelector } from "react-redux";
import { AcumulatedPoints } from "../Components/AcumulatedPoints"
import { useEffect, useState } from "react";

export const AcumulatedPage = () => {

  const { user, points, prevPoints, question, recycles } = useSelector(state => state.user);

  const [rec, setRec] =useState([])

  const getDiff = () => {

    const diff = [...recycles]

    let sum = 0;

    const array = []

    for(let i = 0; i<diff.length; i++) {

      sum += diff[i].reward
      const cosa = {

        ...diff[i],
        sum
      }
      array.push(cosa)
    }
    setRec(array)

    console.log(array)
  }



  useEffect(() => {

    getDiff();

  }, [])



  return (

    <>
    
      <h2 className='ml-4 text-gray-500'>Tu balance - Tus puntos acumulados:</h2>

      <div className="flex justify-around mt-12">
    
            <div className="w-40 mb-0 rounded-lg bg-slate-50 gridPoints grid justify-center text-left items-center">

                <div className='h-4/5 grid justify-end'>
                    <img className='w-auto h-full object-contain' src="../assets/coins.png" />
                </div>

                <p className="text-2xl font-bold">{prevPoints}</p>
                <p className='col-span-full text-base text-center pb-1 font-medium'>Puntos acumulados</p>

            </div>

        </div>

      {
        (rec) &&
        rec.map(recycle => (

          <AcumulatedPoints 
          key={recycle.rec_id}
          recycle={recycle}
          user={user}/>
        ))
      }
    
    </>
  )
}