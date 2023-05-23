

/** DOCS
 * 
 * @param {String} url Url que vamos a enviar a través del método por el que entre al Back para hacer la solicitud.
 * @param {String} method Recibimos el método por el cual vamos a ejecutar la URL anterior, y debe recibirlo siempre en mayúsculas por haberlo declarado así en la función
 * @param {Object} [body] En caso de recibir un BODY, lo recibimos en formato objeto. De no recibir BODY, declaramos un OBJ vacío para que no interrumpa la petición.
 * @returns respuesta: sería la respuesta a la solicitud que estamos haciendo, y vendrá en formato Object.
 */
export const masterFetch = async (url, method, body = {}) => {

    const urlBase = import.meta.env.VITE_BACKURL;

    // urlBase = import.meta.env.VITE_BACKURLDATA;


    /**
     * @typedef {Object} options - Es el desglose de lo que requerimos en el fetch y que es necesario para traer la información.(method,body)
     */

    /**
     * @type {options}
     */
    let options = {};

    console.log('url', url, 'method', method, 'body', body,)

    const data = { ...body }

    try {
        if (method == "POST" || method == "PUT" || method == "DELETE") {

            options = {
                method,
                body: JSON.stringify(data),
                mode: 'cors',
                cache: 'force-cache',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }

        let respuesta = await fetch(`${urlBase}${url}`, options);

        /**
         * consulta realizada a través de parámetro URL y las OPTIONS (method,body)
         */
        let resp = await respuesta.json();

        console.log('esto es RESP en Fetch', resp)

        return resp;

    } catch (error) {

        console.log('FAILED while fetching', error)
    }
}



/** DOCS
 * 
 * @param {String} url Url que vamos a enviar a través del método por el que entre al Back para hacer la solicitud.
 * @param {String} method Recibimos el método por el cual vamos a ejecutar la URL anterior, y debe recibirlo siempre en mayúsculas por haberlo declarado así en la función
 * @param {Object} [body] En caso de recibir un BODY, lo recibimos en formato objeto. De no recibir BODY, declaramos un OBJ vacío para que no interrumpa la petición.
 * @returns respuesta: sería la respuesta a la solicitud que estamos haciendo, y vendrá en formato Object.
 */
export const masterFetchData = async (place_id) => {

    const urlBase = import.meta.env.VITE_BACKURLDATA;

    const form = new FormData();
    form.append('a', place_id);
    console.log('form', form);

    try {

        const options = {
            method: 'POST',
            body: form
        };
        console.log('options', options, 'url', urlBase);
        let respuesta = await fetch(urlBase, options);

        /**
         * consulta realizada a través de parámetro URL y las OPTIONS (method,body)
         */
        let resp = await respuesta.json();

        console.log('esto es RESP_DATA en Fetch', resp)

        return resp;

    } catch (error) {

        console.log('FAILED while fetching', error)
    }
}