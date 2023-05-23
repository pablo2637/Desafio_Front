import { useNavigate } from 'react-router-dom';

export const ThanksForVoting = () => {

    const navigate = useNavigate();

    const handleClose = () => {

        navigate(-1);
    }

    return (

        <>

            <div className="gcardContainer position2">

                <div className="gCard">
                    <button onClick={handleClose}>
                        <img
                            src="\assets\close.png"
                            alt="botón salir"
                            className="absolute top-2 right-2 cursor-pointer" />
                    </button>

                    <h3>¡Gracias por participar!</h3>

                    <p className='text-base'>
                        Has ganado <span className='text-[#f67f00]  font-medium'>1,000 puntos</span> para gastar en los restaurantes afiliados a las web.
                    </p>
                </div>

            </div>

        </>
    )
}