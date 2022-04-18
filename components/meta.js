import Head from "next/head";

import { SITE_FULL_TITLE } from "../lib/constraint";
import master from '../storage/master.json';

export default function Meta(props) {
	const product_title = master.title;
    const title_tag = props.title ? `${props.title} | ${SITE_FULL_TITLE}` : SITE_FULL_TITLE;

    return (
        <Head>
            <title>{title_tag}</title>
            <meta name="description" content={`マンガ「${product_title}」のファンサイトです。`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}