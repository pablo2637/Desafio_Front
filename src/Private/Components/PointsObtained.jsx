import { useState } from 'react'
import { ThanksForVoting } from './ThanksForVoting'
import { useDispatch, useSelector } from 'react-redux'
import { onQuestion } from '../../Store/Slices/userSlice'


export const PointsObtained = ({ recycle }) => {

    const [screenOne, setScreenOne] = useState(0);

    const { places } = useSelector(state => state.places);

    const dispatch = useDispatch();


    const getPic = (place_id) => {

        const ind = places.findIndex(pl => pl.place_id == place_id);

        return ind != -1 ? places[ind].image_url : '';
    };


    const handleToggle = () => {

        const nro = screenOne;

        setScreenOne(nro + 1);
    };


    const handleAnswer = () => {

        dispatch(onQuestion(false));
        setScreenOne(-1)
    };


    return (

        <>  {
            (screenOne == 0) ?
                <article className="gcardContainer">

                    <div className="gCard">

                        <h3>Has ganado {recycle.reward} puntos!</h3>

                        <p>Con {recycle.qty}L de aceite has ganado {recycle.reward} puntos y has logrado salvar {recycle.qty * 1000} litros de agua.
                            Muy bien, ¡ sigue así!</p>

                        <img
                            src="\assets\500points.png"
                            alt="500points"
                            className='mt-4' />

                        <div className="centerContainer">
                            <button
                                onClick={handleToggle}
                                className=" rounded h-8 w-11/12 bg-amber-600 text-base text-white hover:bg-amber-500 my-4">
                                Continuar
                            </button>
                        </div>
                    </div>

                </article>
                :

                (screenOne == 1) &&

                <article className="gcardContainer">

                    <div className="gCard">

                        <h3 className='font-bold text-3xl'>Ahora que has reciclado</h3>

                        <p className='text-base font-normal'>¿Gastarías tus {recycle.reward} puntos en {recycle.place_name}?</p>

                        <div className='w-full mt-4 rounded-2xl'>
                            <img
                                src={getPic(recycle.place_id)}
                                alt="Restaurant Picture"
                                className='rounded-2xl' />
                        </div>

                        <button>
                            <img
                                onClick={handleAnswer}
                                className='mx-7 mt-3'
                                src="\assets\noRed.png"
                                alt="noIcon" />
                        </button>

                        <button>
                            <img
                                onClick={handleAnswer}
                                className='mx-7 mt-3'
                                src="\assets\yesBlue.png"
                                alt="yesIcon" />
                        </button>

                        <button
                            onClick={handleAnswer}
                            className="group rounded h-12 w-11/12 border-[#F67F00] border-2 p-2 text-base text-[#F67F00] hover:bg-amber-500 my-4">
                            Saltar
                        </button>
                    </div>

                </article>
        }

        </>
    )

}
