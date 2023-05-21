import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';
import { QrPage } from '../Private/Pages/QrPage';
import { RecycleQRpage } from '../Private/Pages';


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

                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
