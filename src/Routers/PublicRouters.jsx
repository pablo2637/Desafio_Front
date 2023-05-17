import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Public/Pages';


export const PublicRoutes = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />


                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
