export const setLocal = (data) => {

    localStorage.setItem('challenge',(data));

}; //!FUNC-SETLOCAL


export const getLocal = () => {

    return localStorage.getItem('challenge') || "";

}; //!FUNC-GETLOCAL