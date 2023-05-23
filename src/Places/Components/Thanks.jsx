import { useNavigate } from 'react-router-dom';


export const Thanks = ({ name, points }) => {

    const navigate = useNavigate();

    const handleClose = () => {

        navigate(-1);
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

                    <h3>¡Gracias por reciclar!</h3>

                    <p className='text-base'>
                        {name} ha ganado <span className='text-[#f67f00] font-medium'>{points} puntos</span>.
                    </p>
                </div>

            </div>

        </>
    )
}