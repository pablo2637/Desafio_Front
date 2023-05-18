import { useDispatch } from "react-redux"
import { masterFetch } from "../Api/fetch"
import { onLogout } from "../Store/Slices/userSlice"
import { getLocal, setLocal } from "./localStorage"
import {useNavigate} from 'react-router-dom'


export const validateToken = async () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const body = {

        token: getLocal()
    }

    try {
        
        const petition = await masterFetch('api/users/renew', 'POST', body)

        if (petition.ok) {

            setLocal(petition.token)

        }   else {

                setLocal('')

                dispatch(onLogout())

                navigate('/')
        }

    } catch (error) {
        
        console.log('Failed validating token:', error)
    }
}

