import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { masterFetch } from "../../Api/fetch";
import { onError, onLogin, onRegister } from "../../Store/Slices/userSlice";
import { setLocal } from "../../Helpers/localStorage";

export const useUserStore = () => {

    const { errorMessage } = useSelector(state => state.user)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginStart = async (form, place) => {

        try {

            let petition;

            if (place)
                petition = await masterFetch('api/places/login', 'POST', form)

            else
                petition = await masterFetch('api/users/login', 'POST', form)

            if (petition.ok == false) {

                dispatch(onError(petition.msg))

                setTimeout(() => {

                    dispatch(onError(''))
                }, 6000)

            } else {

                const user = petition.data[0]

                dispatch(onLogin(user))

                const token = petition.token

                setLocal(token)

                navigate("/");
            }


        } catch (error) {

            console.log('FAILED loginStart:', error)
        }
    }

    const registerStart = async (form) => {

        try {

            const petition = await masterFetch('api/users', 'POST', form)

            if (petition.ok == false) {

                dispatch(onError(petition.errors))

                setTimeout(() => {

                    dispatch(onError(''))
                }, 6000)

            } else {

                dispatch(onRegister(petition.data))

                const token = petition.token

                setLocal(token)

                navigate('/')
            }

        } catch (error) {

            console.log('FAILED registerStart', error)
        }
    }

    return {

        errorMessage,
        loginStart,
        registerStart
    }
}
