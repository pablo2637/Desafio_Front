import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { onQuestion } from '../../Store/Slices/userSlice';


export const ThanksForVoting = () => {


    const dispatch = useDispatch();

    const handleClose = () => {

        dispatch(onQuestion(false));

    }

    return (


        <>

            <div className="gcardContainer">

                <div className="gCard">
                    <button onClick={handleClose}>
                        <img
                            src="\assets\close.png"
                            alt="botón salir"
                            className="absolute top-2 right-2 cursor-pointer" />
                    </button>

                    <h3>¡Gracias por participar!</h3>

                    <p>
                        Has ganado 1,000 puntos para gastar en los restaurantes afiliados a las web.
                    </p>
                </div>

            </div>

        </>
    )
}