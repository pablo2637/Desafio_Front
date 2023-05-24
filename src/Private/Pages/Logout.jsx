import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { deleteLocal } from "../../Helpers/localStorage";
import { onLogout } from "../../Store/Slices/userSlice";
import { useNavigate } from 'react-router-dom';
import { onLogoutPlaces } from "../../Store/Slices/placesSlice";


export const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {

        deleteLocal();
        dispatch(onLogout());
        dispatch(onLogoutPlaces());

        navigate('/');
    };


    useEffect(() => {
        logout();

    }, []);

    return (
        <div>Cerrando sesión</div>
    )
}
