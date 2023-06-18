import React from 'react';
import '../styles/globals.css';
import '../styles/util.scss';

function MyApp({ Component, pageProps }) {
    return (
        <div className="relative">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
