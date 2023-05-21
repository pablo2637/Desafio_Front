import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { RegisterPage } from '../Auth/Pages';
import { LoginPage } from '../Auth/Pages/LoginPage';
import { Win1000Page } from '../Private/Pages';

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
                    path='win1000'
                    element={<Win1000Page />}
                />

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
