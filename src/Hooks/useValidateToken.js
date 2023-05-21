import { deleteLocal, setLocal } from '../Helpers/localStorage';
import { validateToken } from '../Helpers/validateToken';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from '../Store/Slices/userSlice';


export const useValidateToken = () => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const checkToken = async () => {


        const petition = await validateToken();

        if (petition.ok) {

            if (!user?.role) dispatch(onLogin(petition.user[0]));

            setLocal({ token: petition.token, role: petition.user[0].role });

        } else if (!petition.ok) {

            deleteLocal();
            dispatch(onLogout());
        }
    };


    return {
        checkToken
    }
}
