import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { masterFetch } from "../../Api/fetch";
import { onError, onLogin, onRegister } from "../../Store/Slices/userSlice";

export const useUserStore = () => {

    const {user, errorMessage} = useSelector(state => state.user)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginStart = async (form) => {

        try {
            
            const petition = await masterFetch('api/users/login', 'POST', form)

            if(petition.ok == false) {

                console.log('esto es petition.msg', petition.msg)

                dispatch(onError(petition.msg))

                setTimeout(() => {

                    dispatch(onError(''))
                }, 6000)

            }   else {

                const user = petition.data[0]
        
                dispatch(onLogin(user))

                navigate("/");
            }

            
    
        } catch (error) {
            
            console.log('FAILED loginStart:', error)
        }
    }

    const registerStart = async (form) => {

        try {
            
            const petition = await masterFetch('api/users', 'POST', form)

            if(petition.ok == false) {

                dispatch(onError(petition.errors))

                setTimeout(() => {

                    dispatch(onError(''))
                }, 6000)

            }   else {

                dispatch(onRegister(petition.data))

                navigate('/')
            }

        } catch (error) {
            
            console.log('FAILED registerStart', error)
        }
    }

  return {

    user,
    errorMessage,
    loginStart,
    registerStart
  }
}
