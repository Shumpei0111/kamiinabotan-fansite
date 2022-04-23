import Link from 'next/link';
import { useRouter } from 'next/router';
import KanrenComics from '../components/kanrenComics';
import KikanComics from '../components/kikanComics';
import Layout from "../components/layout";
import Meta from '../components/meta';

const NotFoundPage = () => {
    const router = useRouter();
    
    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Meta title="ページが見つかりません" />
                    <div>
                        <h2>
                            <p className="head__ja">ページが見つかりません</p>
                            <span className="head__en">Sorry, Page Not Found</span>
                        </h2>
                        <div className="mt-32">
                            <p>申し訳ございません、ここには何もありません。。。</p>
                            <p>下記のコンテンツをお楽しみください！</p>
                        </div>
                        <div className="mt-60">
                            <h3>コンテンツ</h3>
                            <ul className="flex mt-32">
                                <li>
                                    <Link href="/characters"><a className="underline">▶︎ キャラクター一覧</a></Link>
                                </li>
                                <li>
                                    <Link href="/liquorlist"><a className="underline">▶︎ 登場するお酒一覧</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </Layout>
    )
};

export default NotFoundPage;