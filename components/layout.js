import { useRouter } from "next/router";
import Link from "next/link";

import Meta from "./meta";
import Header from "./global/header";
import BaseLinks from "./global/baseLinks";
import KikanComics from "./kikanComics";
import ToTopPage from "./toPageTop";
import Footer from "./global/footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const router = useRouter();
    const isIndexPage = router.pathname === '/';

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
            <Meta />
            <div id="__kamiinaBotan__root__">
                <Header isLoading={loading} />
                <BaseLinks />
                <main className="contents">{children}</main>
                    {
                        isIndexPage ? false :
                        <>
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