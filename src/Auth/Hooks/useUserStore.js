import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { masterFetch } from "../../Api/fetch";
import { onError, onRegister } from "../../Store/Slices/userSlice";

export const useUserStore = () => {

    const {user, errorMessage} = useSelector(state => state.user)

    const dispatch = useDispatch();

    const navigate = useNavigate();

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

                navigate('/register')
            }

        } catch (error) {
            
            console.log('FAILED registerStart', error)
        }
    }

  return {

    user,
    errorMessage,
    registerStart
  }
}
