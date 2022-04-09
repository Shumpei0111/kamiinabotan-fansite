import { useRouter } from "next/router";
import Link from "next/link";

import Meta from "./meta";
import Header from "./global/header";
import Footer from "./global/footer";

export default function Layout({ children }) {
    const router = useRouter();
    const isIndexPage = router.pathname === '/';

    return (
        <>
            <Meta />
            <div id="__kamiinaBotan__root__">
                <Header />
                <main>{children}</main>
                    {
                        isIndexPage ? false :
                        <div className="backHome">                        
                            <Link href="/"><a className="backHomeLink">ホームへ戻る</a></Link>
                        </div>
                    }
                <Footer />
            </div>
        </>
    )
}