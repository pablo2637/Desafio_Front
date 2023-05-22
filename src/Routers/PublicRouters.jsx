import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { RegisterPage } from '../Auth/Pages';
import { LoginPage } from '../Auth/Pages/LoginPage';
import { PointsObtained } from '../Private/Components/PointsObtained';

export const PublicRouters = () => {

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
                    path='login'
                    element={<LoginPage />}
                />

                <Route
                    path='points-obtained'
                    element={<PointsObtained />}
                />
                

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
