import { masterFetch } from "../../Api/fetch"


export const getReycles = async (id) => {

    const response = await masterFetch(`api/recycle/user/${id}`, 'GET');

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
}
