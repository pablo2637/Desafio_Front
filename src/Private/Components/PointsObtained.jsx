import {NavLink} from 'react-router-dom'

export const PointsObtained = () => {


  return (


    <>
        <article className="gcardContainer">

            <div className="gCard">

                <h3>Has ganado {} puntos!</h3> 
                
                <p>Con {} de aceite has ganado {} puntos y has logrado salvar {} litros de agua. 
                                        Muy bien, ¡ sigue así!</p>

                <img 
                src="\assets\500points.png" 
                alt="500points"
                className='mt-4' />

                <div className="centerContainer">
                    <NavLink 
                    to=""
                    className="group rounded h-8 w-11/12 bg-amber-600 text-base text-white hover:bg-amber-500 my-4">
                        Continuar

                    </NavLink>
                </div>
            </div>

        </article>
    </>
  )
}
