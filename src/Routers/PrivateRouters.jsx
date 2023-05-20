import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { QrPage } from '../Private/Pages/QrPage';


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

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
