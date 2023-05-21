import { useEffect, useState } from "react";
import { Map } from "../Components";
import { Carrousel } from "../Components/Carrousel";
import { NavLink } from 'react-router-dom';
import { useValidateToken } from "../../Hooks/useValidateToken";


export const Home = () => {

    const [cookies, setCookies] = useState(false);
    const { checkToken } = useValidateToken();

    const handleCookiesClick = () => setCookies(!cookies);


    useEffect(() => {
        checkToken();

    }, []);

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

                {
                    (!cookies) &&
                    <div className="divCookies z-[1010] fixed left-0" >
                        <div className="flex justify-start items-center flex-col">
                            <h3 className="w-full text-left">Políticas sobre cookies</h3>
                            <p className="text-[0.6rem]">
                                Usamos cookies en nuestra página para proporcionarte una experiencia de navegación personalizada
                                y segura. Las cookies nos permiten entender tus preferencias y adaptar nuestras funcionalidades
                                para satisfacer tus necesidades
                            </p>

                            <button onClick={handleCookiesClick}>Aceptar</button>
                            <NavLink>PREFERENCIAS DE COOKIES</NavLink>
                        </div>
                    </div>
                }

            </main>
        </>
    );
};
