import React from 'react';
import GoogleAnalytics from '../components/global/googleAnalytics.js';

import '../styles/globals.css';
import '../styles/util.scss';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics />

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
