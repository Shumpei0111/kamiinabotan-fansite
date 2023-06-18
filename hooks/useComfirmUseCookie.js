import { useState, useEffect } from 'react';

export const useComfirmUseCookie = () => {
    const [isShowComfirmUseCookie, setIsShowComfirmUseCookie] = useState(true);

    const handler = (setting) => {
        /** 設定情報をStorageにセットする */
        localStorage.setItem('yuriyoiUseCookieSetting', JSON.stringify(setting));
        /** モーダルを閉じる */
        setIsShowComfirmUseCookie(false);
    };

    useEffect(() => {
        const setting = localStorage.getItem('yuriyoiUseCookieSetting');
        if (setting) {
            setIsShowComfirmUseCookie(false);
        }
    }, []);

    return {
        isShowComfirmUseCookie,
        handler,
    };
};
