import { deleteLocal, setLocal } from '../Helpers/localStorage';
import { validateToken } from '../Helpers/validateToken';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from '../Store/Slices/userSlice';
import { onRecommended } from '../Store/Slices/placesSlice';


export const useValidateToken = () => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const checkToken = async () => {

        setTimeout(async () => {
            const petition = await validateToken();

            if (petition.ok) {

                if (!user?.role) {


                    if (petition.user[0]?.recommended) {
                        const tmp = petition.user[0].recommended
                            .replaceAll("'", '').replaceAll('"', '')
                            .replaceAll('[', '').replaceAll(']', '')
                            .trim().split(',');

                        const array = [...tmp];

                        dispatch(onRecommended(array));
                    }
                    
                    dispatch(onLogin(petition.user[0]));
                }

                setLocal({ token: petition.token, role: petition.user[0].role });

            } else if (!petition.ok) {

                deleteLocal();
                dispatch(onLogout());
            }
        }, 3000)

    };


    return {
        checkToken
    }
}
