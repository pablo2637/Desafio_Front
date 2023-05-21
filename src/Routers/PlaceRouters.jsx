import { Route, Routes, Navigate } from 'react-router-dom';
import { QrPage } from '../Private/Pages/QrPage';
import { Logout, RecycleQRpage } from '../Private/Pages';
import { HomePage } from '../Places/Pages';


export const PlaceRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<HomePage />}
                />

                <Route
                    path='generate'
                    element={<QrPage />}
                />

                <Route
                    path='scanQR'
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
