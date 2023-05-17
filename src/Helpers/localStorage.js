export const setLocal = (data) => {

    localStorage.setItem('data', JSON.stringify(data));

}; //!FUNC-SETLOCAL


export const getLocal = () => {

    return JSON.parse(localStorage.getItem('data')) || {};

}; //!FUNC-GETLOCAL