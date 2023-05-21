import { masterFetch } from "../../Api/fetch"

export const getUsers = async () => {

    const response = await masterFetch('api/users', "GET");

    if (!response.ok)
        console.log('error getUsers:', response)

    else
        return response.data

};


export const getPlaces = async () => {

    const response = await masterFetch('api/places', "GET");

    if (!response.ok)
        console.log('error getPlaces:', response)

    else
        return response.data

};
