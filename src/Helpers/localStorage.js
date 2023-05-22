export const setLocal = (data) => {

    localStorage.setItem('challenge', JSON.stringify(data));

}; //!FUNC-SETLOCAL


export const getLocal = () => {

    return JSON.parse(localStorage.getItem('challenge')) || {};

}; //!FUNC-GETLOCAL


export const deleteLocal = () => {

    localStorage.removeItem('challenge');

}; //!FUNC-SETLOCAL


export const setLocalCookies = (data) => {

    localStorage.setItem('cookies', data);

}; //!FUNC-SETLOCAL


export const getLocalCookies = () => {

    return localStorage.getItem('cookies') || false;

}; //!FUNC-GETLOCAL