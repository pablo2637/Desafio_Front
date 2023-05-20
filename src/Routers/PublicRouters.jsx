import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { RegisterPage } from '../Auth/Pages';
import { LoginPage } from '../Auth/Pages/LoginPage';

import { RecycleQRpage } from '../Private/Pages/RecycleQRpage';


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
                    path='scanQR'
                    element={<RecycleQRpage />}
                />  


                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
