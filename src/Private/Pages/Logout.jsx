import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { deleteLocal } from "../../Helpers/localStorage";
import { onLogout } from "../../Store/Slices/userSlice";
import { useNavigate } from 'react-router-dom';


export const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {

        deleteLocal();
        dispatch(onLogout());

        navigate('/');
    };


    useEffect(() => {
        logout();

    }, []);

    return (
        <div>Cerrando sesión</div>
    )
}
