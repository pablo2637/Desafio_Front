import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThanksForVoting } from './ThanksForVoting'
import { useDispatch, useSelector } from 'react-redux'
import { onQuestion } from '../../Store/Slices/userSlice'


export const PointsObtained = ({ recycle }) => {

    const [screenOne, setScreenOne] = useState(0)

    const [thanksFor, setThanksFor] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch();


    const handleToggle = () => {

        const nro = screenOne;

        // if (nro == 2) nro == -1
        setScreenOne(nro + 1);
    }


    const handleVote = () => {

        setScreenOne(screenOne)
        setThanksFor(!thanksFor)
    }

    const handleAnswer = () => {

        dispatch(onQuestion(false));
        setScreenOne(-1)
    }


    return (

        <>  {
            (screenOne == 0) ?
                <article className="gcardContainer">

                    <div className="gCard">

                        <h3>Has ganado {recycle.points} puntos!</h3>

                        <p>Con {recycle.qty}L de aceite has ganado {recycle.points} puntos y has logrado salvar {recycle.qty * 100} litros de agua.
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

                (screenOne == 1) ?

                    <article className="gcardContainer">

                        <div className="gCard">

                            <h3>Ahora que has reciclado</h3>

                            <p>¿Gastarías tus {recycle.points} puntos en {recycle.place_id}?</p>

                            <img
                                // src={}
                                alt="Restaurant Picture"
                                className='mt-4 rounded p-4' />

                            <button>
                                <img
                                    onClick={handleToggle}
                                    className='mx-7 mt-3'
                                    src="\assets\noRed.png"
                                    alt="noIcon" />
                            </button>

                            <button>
                                <img
                                    onClick={handleToggle}
                                    className='mx-7 mt-3'
                                    src="\assets\yesBlue.png"
                                    alt="yesIcon" />
                            </button>

                            <button
                                onClick={handleAnswer}
                                className="group rounded h-8 w-11/12 bg-amber-600 text-base text-white hover:bg-amber-500 my-4">

                                Saltar

                            </button>
                        </div>

                    </article>

                    :

                    (screenOne == 2) &&

                    <ThanksForVoting />
        }
            {/* {
                (thanksFor) &&
                <ThanksForVoting />
            } */}

        </>
    )

}
