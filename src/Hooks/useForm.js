import { useState } from "react"

export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial);

    const [place, setPlace] = useState('user');


    const handlePlace = () => {

        const value = place == 'user' ? 'place' : 'user';

        setPlace(value);

        const newForm = { ...form }

        if (value == 'place') {

            if (newForm.email) {
                newForm.phone = newForm.email;
                delete newForm['email'];
            }

        } else {

            if (newForm.phone) {
                newForm.email = newForm.phone;
                delete newForm['phone'];
            }
        }

        setForm(newForm);
    }

    const handleChange = ({ target }) => {

        const { name, value } = target;


        if (form == '') return;

        setForm({
            ...form,
            [name]: value
        });

    };

    return {
        handlePlace,
        handleChange,
        form,
        place
    };

};