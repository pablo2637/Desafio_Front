import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { Logout, QrPage } from '../Private/Pages';


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
                    path='logout'
                    element={<Logout />}
                />

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
