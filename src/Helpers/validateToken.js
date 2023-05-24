import { masterFetch } from "../Api/fetch"
import { getLocal } from "./localStorage"


export const validateToken = async () => {

    const { token, role } = getLocal();

    const body = { token }

    try {

        let petition = {};

        if (role) {

            if (role == 'place')
                petition = await masterFetch('api/places/renew', 'POST', body);

            else
                petition = await masterFetch('api/users/renew', 'POST', body);
        }

        return petition;

    } catch (error) {

        console.log('Failed validating token:', error)
    }
}

