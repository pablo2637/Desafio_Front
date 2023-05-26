import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { masterFetch } from "../../Api/fetch";
import { onError, onLogin, onRegister } from "../../Store/Slices/userSlice";
import { onRecommended } from "../../Store/Slices/placesSlice";
import { setLocal } from "../../Helpers/localStorage";
import { useState } from "react";


export const useUserStore = () => {


    const { errorMessage, user } = useSelector(state => state.user);

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();



    const dispatchError = (error) => {

        dispatch(onError(error))

        setTimeout(() => {

            dispatch(onError(''))
        }, 6000)
    };



    const loginStart = async (form, place) => {

        try {

            setIsLoading(true);

            let petition;
            const regexEmail = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
            const regexPhone = new RegExp(/^[0-9]{2,}$/);


            if (form) {
                if (place == 'place') {
                    if (form?.phone) {
                        if (!regexPhone.test(form?.phone) && form?.phone != '') {

                            const err = 'El formato del teléfono no es válido';

                            dispatchError(err);
                            setIsLoading(false);
                            return;

                        }
                    }

                } else {

                    if (form?.email) {
                        if (!regexEmail.test(form?.email) && form?.email != '') {

                            const err = 'El formato del email no es válido';

                            dispatchError(err);
                            setIsLoading(false);
                            return;

                        }
                    }
                }
            }


            if (place == 'place')
                petition = await masterFetch('api/places/login', 'POST', form);

            else
                petition = await masterFetch('api/users/login', 'POST', form);



            if (petition.ok == false) {

                setIsLoading(false);
                dispatchError(petition.msg);

            } else {

                const user = petition.data[0]

                dispatch(onLogin(user));

                if (petition.data[0]?.recommended) {
                    const tmp = petition.data[0].recommended
                        .replaceAll("'", '').replaceAll('"', '')
                        .replaceAll('[', '').replaceAll(']', '')
                        .trim().split(',');

                    const array = [...tmp];

                    dispatch(onRecommended(array));
                }

                const token = petition.token;

                setLocal({ token, role: user.role })

                setIsLoading(false);

                navigate("/");
            }


        } catch (error) {

            console.log('FAILED loginStart:', error)
        }
    };



    const registerStart = async (form) => {

        try {

            const errs = {};
            setIsLoading(true);

            const regexName = new RegExp(/^[A-Za-z\-\s]+$/);
            const regexEmail = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
            const regexPass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);


            if (form) {
                if (form?.name) {
                    if (!regexName.test(form?.name) && form?.name != '')
                        errs.name = { msg: 'El nombre sólo puede contener letras' };
                }

                if (form?.last_name) {
                    if (!regexName.test(form?.last_name) && form?.last_name != '')
                        errs.last_name = { msg: 'El apellido sólo puede contener letras' };
                }

                if (form?.email) {
                    if (!regexEmail.test(form?.email) && form?.email != '')
                        errs.email = { msg: 'El formato del email no es válido' };
                }

                if (form?.password) {

                    if (!regexPass.test(form?.password) && form?.password != '')
                        errs.password = { msg: 'La contraseña debe tener al menos 8 caracteres, números, minúsculas, mayúsculas y un caracter especial' };

                    if (form?.name && form?.password.toLowerCase().includes(form?.name.toLowerCase()))
                        errs.password = {
                            msg: `${errs.password?.msg ? errs.password.msg + ", y" : 'El password'} no puede concidir con tu nombre`
                        };

                    if (form?.last_name && form?.password.toLowerCase().includes(form?.last_name.toLowerCase()))
                        errs.password = {
                            msg: `${errs.password?.msg ? errs.password.msg + ", y tampoco" : 'El password no'} puede concidir con tu apellido`
                        }
                }

                if (Object.entries(errs).length > 0) {

                    dispatchError(errs);
                    setIsLoading(false);
                    return;
                }
            }


            const petition = await masterFetch('api/users', 'POST', form)

            if (petition.ok == false) {
                setIsLoading(false);
                dispatchError(petition.errors);

            } else {

                dispatch(onRegister(petition.data[0]))

                const token = petition.token


                setLocal({ token, role: petition.data[0].user.role });
                setIsLoading(true);

                navigate('/')
            }

        } catch (error) {

            console.log('FAILED registerStart', error)
        }
    }


    return {
        isLoading,
        errorMessage,
        loginStart,
        registerStart
    }
}
