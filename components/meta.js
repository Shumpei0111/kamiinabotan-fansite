import Head from "next/head";

import { SITE_FULL_TITLE } from "../lib/constraint";
import master from '../storage/master.json';

export default function Meta(props) {
	const product_title = master.title;
    const title_tag = props.title ? `${props.title} | ${SITE_FULL_TITLE}` : SITE_FULL_TITLE;
    const url = props.url ? `https://yuriyoi.site${props.url}` : `https://yuriyoi.site`;
    const imgURL = "https://yuriyoi.site/assets/img/tw-card.png";
    const imgWidth = props.imgWidth ? props.imgWidth : 300;
    const imgHeight = props.imgHeight ? props.imgHeight : 157;

    return (
        <Head>
            <title>{title_tag}</title>
            {
                title_tag === SITE_FULL_TITLE ? (
                    <meta property="og:type" content="website" />
                ):(
                    <meta property="og:type" content="article" />
                )
            }
            <meta name="description" content={`塀先生著、秋田書店「マンガクロス」で連載中のマンガ「${product_title}」のファンサイトです。登場するキャラはもちろん、お酒の情報なども掲載しています！`} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title_tag} />
            <meta property="og:site_name" content={SITE_FULL_TITLE} />
            <meta property="og:description" content={`塀先生著、秋田書店「マンガクロス」で連載中のマンガ「${product_title}」のファンサイトです。登場するキャラはもちろん、お酒の情報なども掲載しています！`} />
            <meta property="og:image" content={imgURL} />
            <meta property="og:image:width" content={String(imgWidth)} />
            <meta property="og:image:height" content={String(imgHeight)} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@seventhseven" />
            <meta name="twitter:title" content={title_tag} />
            <meta name="twitter:description" content={`塀先生著、秋田書店「マンガクロス」で連載中のマンガ「${product_title}」のファンサイトです。登場するキャラはもちろん、お酒の情報なども掲載しています！`} />
            <meta name="twitter:image" content={imgURL} />
        </Head>
    )
}