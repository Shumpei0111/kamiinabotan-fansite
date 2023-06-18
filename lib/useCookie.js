import Cookies from 'js-cookie';

export const useCookie = () => {
    const allDelete = () => {
        Object.keys(Cookies.get()).forEach((cookieName) => {
            console.log(cookieName);
            Cookies.remove(cookieName);
        });
        // Cookies.remove(cookieName, { domain: 'rakuten.co.jp' });
    };

    return {
        allDelete,
    };
};
