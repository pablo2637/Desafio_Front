import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { Logout, QrPage } from '../Private/Pages';
import { MisPuntos } from '../Private/Pages/MisPuntos';
import { CarrouselAgua } from '../Private/Components/CarrouselAgua';


export const PrivateRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='generate'
                    element={<QrPage />}
                />

                <Route
                    path='mispuntos'
                    element={<MisPuntos />}
                />

                <Route
                    path='logout'
                    element={<Logout />}
                />


                <Route
                    path='/impacto'
                    element={<CarrouselAgua />}
                />

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
