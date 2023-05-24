import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, RegisterPlacePage } from '../Admin/Pages/';
import { Logout } from '../Private/Pages';


export const AdminRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='/detail/:user_id'
                    element={<RegisterPlacePage />}
                />

                <Route
                    path='/placeDetail/:place_id'
                    element={<RegisterPlacePage />}
                />


                <Route
                    path='place-register'
                    element={<RegisterPlacePage />}
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
