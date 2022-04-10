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
        </Head>
    )
}