import React from 'react';
import GoogleAnalytics from '../components/global/googleAnalytics.js';
import { ComfirmUseCookie } from '../components/global/comfirmUseCookie.js';
import { useComfirmUseCookie } from '../hooks/useComfirmUseCookie.js';

import '../styles/globals.css';
import '../styles/util.scss';

function MyApp({ Component, pageProps }) {
    const { isShowComfirmUseCookie, handler } = useComfirmUseCookie();

    return (
        <div className="relative">
            <GoogleAnalytics />
            {isShowComfirmUseCookie && <ComfirmUseCookie callback={handler} />}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
