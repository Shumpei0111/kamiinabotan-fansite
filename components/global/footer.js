import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SITE_SUB_TITLE, SITE_TITLE, SITE_TITLE_EN } from '../../lib/constraint';
import { useComfirmUseCookie } from '../../hooks/useComfirmUseCookie';
import GoogleAnalytics from './googleAnalytics.js';

import * as style from '../../styles/footer.module.scss';

export default function Footer() {
    const {
        isShowComfirmUseCookie,
        setIsShowComfirmUseCookie,
        ComfirmUseCookieModal,
        isRefuseGa,
        comfirmDone,
        resetSetting,
        setting,
        showModal,
    } = useComfirmUseCookie();

    const GA = useMemo(() => {
        return function _GA() {
            if (!comfirmDone || isRefuseGa) return <></>;
            return <GoogleAnalytics isRefuseGa={isRefuseGa} />;
        };
    }, [comfirmDone, isRefuseGa]);

    useEffect(() => {
        if (setting) {
            setIsShowComfirmUseCookie(false);
        }
    }, [setting]);

    return (
        <div>
            <footer className={style.footer}>
                <p>🍸🍷</p>
                <div className={style.footerTitleWrapper}>
                    <p>{SITE_TITLE}</p>
                    <p>{SITE_TITLE_EN}</p>
                    <p>{SITE_SUB_TITLE}</p>
                </div>
                <div className={`${style.footerTitleWrapper} flex`}>
                    <p>
                        <Link href="/policy">
                            <a>プライバシーポリシー</a>
                        </Link>
                    </p>
                    <p>
                        <a
                            className="underline"
                            href="https://forms.gle/ubM94Xn2J5mouMzZ6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            お問い合わせ
                        </a>
                    </p>
                    <div onClick={() => showModal()} className="cursor-pointer">
                        <p>Cookieの管理</p>
                    </div>
                </div>
                <div className={style.madeBy}>
                    <span>
                        運営者：
                        <a
                            className="underline"
                            href="https://twitter.com/seventhseven"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Shumpei(twitter)
                        </a>
                    </span>
                </div>
            </footer>
            <GA />
            {isShowComfirmUseCookie && <ComfirmUseCookieModal comfirmDone={comfirmDone} />}
        </div>
    );
}
