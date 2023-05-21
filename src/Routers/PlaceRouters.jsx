import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { QrPage } from '../Private/Pages/QrPage';
import { Logout, RecycleQRpage } from '../Private/Pages';


export const PlaceRouters = () => {

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
                    path='scanqr'
                    element={<RecycleQRpage />}
                />

                <Route
                    path='logout'
                    element={<Logout />}
                />

                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
