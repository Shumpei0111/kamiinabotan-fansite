import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Meta from "./meta";
import Header from "./global/header";
import BaseLinks from "./global/baseLinks";
import KikanComics from "./kikanComics";
import ToTopPage from "./toPageTop";
import Footer from "./global/footer";
import TwitterShare from "./global/twitterShare";
import { SITE_FULL_TITLE } from "../lib/constraint";

export default function Layout({ children }) {
    const pageTitle = children.props.children ? children.props.children.filter( children => (
        children.type.name === "Meta"
    ) ).map( item => ( item.props.title ) )
    .join( "" ) : "";

    const sharePageTitle = pageTitle ? `${pageTitle} | ${SITE_FULL_TITLE}` : `${SITE_FULL_TITLE}`;

    const router = useRouter();
    const isIndexPage = router.pathname === '/';
    const pageURL = `https://yuriyoi.site${router.asPath}`

    const [loading, setLoading] = useState( false );

    const handleStart = (url) => {
        if( url !== router.pathname ) { setLoading( true ); }
    }

    useEffect(() => {
        router.events.on( "routeChangeStart", handleStart );
        return () => { router.events.off( "routeChangeStart", handleStart ); }
    });

    return (
        <>
            <div id="__kamiinaBotan__root__">
                <Header isLoading={loading} />
                <BaseLinks />
                <main className="contents">{children}</main>
                    {
                        isIndexPage ? false :
                        <>
                            <p className="text-center">このコンテンツが「面白い」と思ったら、下記ボタンからTwitterでのシェアをお願いします！</p>
                            <TwitterShare
                                url={pageURL}
                                title={sharePageTitle}
                                via="seventhseven"
                                related={["seventhseven"]}
                            />
                            <div className="separate"></div>
                            <div className="mt-32">
                                <h3>既刊を読む</h3>
                                <KikanComics />
                            </div>
                            <div className="backHome">                        
                                <Link href="/"><a className="backHomeLink">ホームへ戻る</a></Link>
                            </div>
                        </>
                    }
                <ToTopPage />
                <Footer />
            </div>
        </>
    )
}