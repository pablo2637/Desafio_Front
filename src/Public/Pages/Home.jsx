import { Map } from "../Components";
import { Carrousel } from "../Components/Carrousel";


export const Home = () => {

    return (
        <>
            <header>
                <p className='texto'>
                    ¡Reciclar aceite nunca fue tan fácil! Ahora tienes puntos de reciclaje más cercanos.
                </p>
            </header>

            <main>
                <Map />


                <Carrousel />
            </main>
        </>
    );
};
