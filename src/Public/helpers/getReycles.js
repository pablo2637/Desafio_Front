import { masterFetch } from "../../Api/fetch"


export const getReycles = async (id, role) => {

    console.log('id', id, 'role', role);

    let response;
    if (role == 'place')
        response = await masterFetch(`api/recycle/place/${id}`, 'GET');

    else
        response = await masterFetch(`api/recycle/user/${id}`, 'GET');

    if (response.ok) {

        return {
            ok: true,
            recycles: response.data
        }

    }

    return {
        ok: false,
        msg: response.msg
    }


    return
};



export const sumRecycles = (recycles) => {

    let sum = 0;

    if (recycles)
        recycles.map(re => sum += re.reward);

    return sum;

};

export const sumLiters = (recycles) => {

    let sum = 0;
    if (recycles)
        recycles.forEach(re => sum += re.qty);

    return sum;

};
