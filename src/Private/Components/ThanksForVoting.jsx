import {useNavigate, NavLink} from 'react-router-dom'


export const ThanksForVoting = () => {

    const navigate = useNavigate()

  return (


    <>
    
    <div className="gcardContainer">

        <div className="gCard">
            <NavLink
            to="/mispuntos">
                <img 
                src="\assets\close.png" 
                alt="botón salir" 
                className="absolute top-2 right-2 cursor-pointer"/>
            </NavLink>

            <h3>¡Gracias por participar!</h3>

            <p>
                Has ganado 1,000 puntos para gastar en los restaurantes afiliados a las web.
            </p>
        </div>

    </div>
    
    </>
  )
}
