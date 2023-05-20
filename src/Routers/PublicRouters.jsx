import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { RegisterPage } from '../Auth/Pages';
import { QrPage } from '../Private/Pages/QrPage';
import { LoginPage } from '../Auth/Pages/LoginPage';
import { RegisterPlacePage } from '../Client/Pages/RegisterPlacePage';
import { RecycleQRpage } from '../Private/Pages/RecycleQRpage';


export const PublicRoutes = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='register'
                    element={<RegisterPage />}
                />

                    <Route
                    path='generate'
                    element={<QrPage />}
                />

                <Route
                    path='login'
                    element={<LoginPage />}
                />

                <Route
                    path='place-register'
                    element={<RegisterPlacePage />}
                />

                <Route
                    path='scanQR'
                    element={<RecycleQRpage />}
                />  

                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
