import { useState, useEffect, memo } from 'react';
import { useCookie } from '../lib/useCookie';
import { useRouter } from 'next/router';

export const useComfirmUseCookie = () => {
    const router = useRouter();
    const [isShowComfirmUseCookie, setIsShowComfirmUseCookie] = useState(true);
    const [isRefuseGa, setIsRefuseGa] = useState(false);
    const [comfirmDone, setComfirmDone] = useState(false);
    const [setting, setSetting] = useState(null);

    const { allDelete } = useCookie();

    const handler = (setting) => {
        /** 設定情報をStorageにセットする */
        localStorage.setItem('yuriyoiUseCookieSetting', JSON.stringify(setting));
        /** モーダルを閉じる */
        setIsShowComfirmUseCookie(false);
    };

    const showModal = () => {
        setComfirmDone(false);
        setIsShowComfirmUseCookie(true);
    };

    const handleComfirm = () => {
        handler({
            setting: {
                ga: true,
                ad: true,
                // liqour: true,
            },
        });
        setComfirmDone(true);
        router.reload();
    };

    const handleRefuse = () => {
        handler({
            ga: false,
            ad: false,
            // liqour: false,
        });
        setIsRefuseGa(true);
        setComfirmDone(true);
        allDelete();
        router.reload();
    };

    const resetSetting = () => {
        localStorage.removeItem('yuriyoiUseCookieSetting');
        setSetting(null);
        setIsShowComfirmUseCookie(true);
        setIsRefuseGa(false);
        setComfirmDone(false);
        router.reload();
    };

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('yuriyoiUseCookieSetting'));
        setSetting(res);

        if (setting) {
            setIsShowComfirmUseCookie(false);

            if (setting.ga === true) {
                setIsRefuseGa(false);
            }

            setComfirmDone(true);
        }
    }, []);

    const ComfirmUseCookieModal = memo(() => {
        return (
            <div
                className="fixed bottom-0 left-0 w-full p-24 frame"
                style={{ background: 'white', zIndex: 1000 }}
            >
                <p className="text_ms">
                    当サイトはアクセス解析のためにGoogle
                    Analyticsを使用しています。また、当サイトは広告配信のためにGoogle
                    AdSenseやその他のインターネット広告についてCookieを使用しています。Cookieの使用に同意しますか？
                </p>
                <div className="flex gap-16 mt-16">
                    <button className="text_ms cursor-pointer" onClick={() => handleComfirm()}>
                        同意する
                    </button>
                    <button className="text_ms cursor-pointer" onClick={() => handleRefuse()}>
                        すべて拒否する
                    </button>
                </div>
            </div>
        );
    });
    ComfirmUseCookieModal.displayName = 'ComfirmUseCookieModal';

    return {
        isShowComfirmUseCookie,
        setIsShowComfirmUseCookie,
        handler,
        ComfirmUseCookieModal,
        isRefuseGa,
        comfirmDone,
        setting,
        resetSetting,
        showModal,
    };
};
