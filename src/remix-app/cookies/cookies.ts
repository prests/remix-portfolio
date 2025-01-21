import Cookies from 'js-cookie';

const getCookie = (key: string) => Cookies.get(key);

const setCookie = (key: string, value: string) => Cookies.set(key, value);

const deleteCookie = (key: string) => Cookies.remove(key);

export { deleteCookie, getCookie, setCookie };
