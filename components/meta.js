import Head from "next/head";

import { SITE_FULL_TITLE } from "../lib/constraint";
import master from '../storage/master.json';

export default function Meta() {
	const product_title = master.title;

    return (
        <Head>
            <title>{SITE_FULL_TITLE}</title>
            <meta name="description" content={`マンガ「${product_title}」のファンサイトです。`} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap" rel="stylesheet"></link>
        </Head>
    )
}