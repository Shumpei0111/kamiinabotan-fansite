import Layout from '../components/layout';
import Image from 'next/image';
import Meta from '../components/meta';
import HomeNews from '../components/homeNews';
import HomeContents from '../components/homeContents';
import KikanComics from '../components/kikanComics';
import KanrenComics from '../components/kanrenComics';
import LatestEpisodeLink from '../components/latestEpisodeLink';

import styles from '../styles/Home.module.scss';

import master from '../storage/master.json';
import TwitterTimeline from '../components/twitterTimeline';
import TwitterShare from '../components/global/twitterShare';
import TopViewTweet from '../components/TopViewTweet';
import New from '../components/global/new';
import { useComfirmUseCookie } from '../hooks/useComfirmUseCookie';
import { LINE_STAMP_URL, SITE_FULL_TITLE } from '../lib/constraint';
import Link from 'next/link';
import NewestKikanComic from '../components/newestKikanComic';

export default function Home({ buildDate }) {
    const authSNS = master.author_sns.slice();
    const { setting } = useComfirmUseCookie();
    console.log('setting:', setting);
    const displayCondition = !!(setting && setting.setting && setting.setting.ad === true);

    return (
        <Layout>
            <div className={styles.container}>
                <Meta />
                {/* コンテンツスタート */}
                <main className={styles.main}>
                    <p className='text-right text_ms'>最終更新日：{buildDate}</p>
                    <div className="mt-24 mb-24">
                        <New />
                        <p>地産地消Cafe&BarのClusterさんとのコラボアイテムがリリースされました！<br />2023年9月23日までの期間限定の受注生産のためおはやめに！</p>
                        <div className='pt-16 pb-16 bold underline'>
                            <Link href="https://clusterbeer.saleshop.jp/items/2033285" target="_blank" rel="noopener noreferrer">👕 販売リンク（別ウィンドウで開きます）</Link>
                        </div>
                        <TopViewTweet />
                    </div>

                    <div className="mt-24 mb-24">
                        <LatestEpisodeLink />
                    </div>

                    <section className={styles.sectionWrapper}>
                        <div className="mt-60">
                            <div className="flex">
                                <NewestKikanComic ad={displayCondition} />
                            </div>
                        </div>
                        <div className="mt-60">
                            <New />
                            <Link href="https://fantia.jp/fanclubs/491726">
                                <a target="_blank">
                                    <Image
                                        width={400}
                                        height={250}
                                        objectFit="contain"
                                        src="/assets/img/fantia-top.png"
                                        alt="_"
                                    />
                                </a>
                            </Link>
                            <p className="mt-24">
                                塀先生による<span className="bold">Fantia</span>
                                もスタートしました。
                            </p>
                            <p>こちらもお見逃しなく！</p>
                        </div>
                        <div className="mt-60 flex">
                            <div>
                                <Link href="https://tonarinohey.fanbox.cc/posts">
                                    <a target="_blank">
                                        <Image
                                            width={400}
                                            height={250}
                                            objectFit="contain"
                                            src="/assets/img/fanbox_top.png"
                                            alt="_"
                                        />
                                    </a>
                                </Link>
                                <p className="mt-24">
                                    塀先生による<span className="bold">PIXIV FANBOX</span>
                                    がスタートしました。
                                </p>
                                <p>
                                    先生自身による各話の振り返りなどのコンテンツを見ることができます。ぜひチェックしてください！
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <div className={styles.topInyou}>
                            {/* <Image width={386} height={200} objectFit="contain" src="https://mangacross.jp/images/comic/cSQw6TT0qND00AUZQf2I0cFqCAO08NGZq6yqLFEWbkM/image_sp/original.jpg?1647590065" alt="新刊のバナー" />
							<p className={styles.inyouText}>引用：「<a className="underline" href="https://mangacross.jp/comics/kamiinabotan" target="_blank" rel="noopener noreferrer">上伊那ぼたん、酔へる姿は百合の花</a>」マンガクロス（秋田書店）</p> */}
                        </div>
                        <div>
                            <div className={styles.siteDescription}>
                                <p className={styles.siteDescription__label}>はじめに</p>
                                <p>{master.site_description}</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        {/* ニュース */}
                        <HomeNews displayCondition={displayCondition} />
                    </section>

                    <section className={styles.sectionWrapper}>
                        {/* あらすじ */}
                        <h2>
                            <p className="head__ja">あらすじ</p>
                            <span className="head__en">Story</span>
                        </h2>
                        <p className={styles.arasuji}>
                            上伊那ぼたんは２０歳の大学生。
                            <br />
                            入った寮の歓迎パーティで寮長のいぶきにハイボールを飲ませてもらうと酔った勢いでいぶきに絡み始めて・・・?
                            <br />
                            酔っ払いいちゃいちゃガールズコメディ！
                        </p>
                        <p className={styles.topInyou}>
                            引用：マンガクロス「上伊那ぼたん、酔へる姿は百合の花」公式サイト
                        </p>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <div className={styles.contentsWrapper}>
                            {/* コンテンツ */}
                            <HomeContents />
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <h2>
                            <p className="head__ja">既刊</p>
                            <span className="head__en">Books</span>
                        </h2>
                        <div className="mb-24">
                            <KikanComics ad={displayCondition} bookNumbers={4} />
                        </div>
                        <div className="mb-24">
                            <h3>
                                <New />
                                第4巻書店特典まとめ
                            </h3>
                            <div className="frame">
                                <p>
                                    <a
                                        href="https://tonarinohey.fanbox.cc/posts/6168161?utm_campaign=manage_post_page&utm_medium=share&utm_source=twitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col flex-start gap-16"
                                    >
                                        <Image
                                            width={375}
                                            height={260}
                                            objectFit="contain"
                                            src="https://downloads.fanbox.cc/images/post/6168161/w/1200/oClle9VhQ9i8tyQvH8vNVMWU.jpeg"
                                            alt="第4巻 各書店の特典"
                                        />
                                        <span className="text_ms underline">
                                            引用：PIXIV FANBOX 上伊那ぼたん関連のお知らせ②
                                        </span>
                                    </a>
                                </p>
                                <div className="mt-24">
                                    <p className="bold">店舗特典</p>
                                    <dl className="mt-8">
                                        <div className="flex">
                                            <dt style={{ width: '140px' }}>メロンブックス</dt>
                                            <dd>
                                                <a
                                                    href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1907188"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    書き下ろし4Pリーフレット
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex">
                                            <dt style={{ width: '140px' }} className="mt-16">
                                                COMIC ZIN
                                            </dt>
                                            <dd className="mt-16">
                                                <a
                                                    href="https://shop.comiczin.jp/products/detail.php?product_id=10032133"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    イラストカード
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex">
                                            <dt style={{ width: '140px' }} className="mt-16">
                                                喜久屋書店（仙台店）
                                            </dt>
                                            <dd className="mt-16">
                                                <a
                                                    href="https://twitter.com/kikuya_sendai/status/1669690490764288000"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    特典ペーパー
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex">
                                            <dt style={{ width: '140px' }} className="mt-16">
                                                書泉
                                            </dt>
                                            <dd className="mt-16">
                                                <a
                                                    href="https://shosen.tokyo/?pid=175236510"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    書き下ろしイラストペーパー
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="mb-24">
                            <h3>第3巻まとめ</h3>
                            <div className="frame">
                                <div className="flex">
                                    <div>
                                        <p>
                                            第3巻の帯を<span className="bold">名取さな</span>
                                            さんが担当されました。
                                        </p>
                                        <Image
                                            width={250}
                                            height={368}
                                            objectFit="contain"
                                            src="https://pbs.twimg.com/media/FN-HdK4agAUCr3Q?format=jpg&name=large"
                                            alt="第3巻 帯イメージ"
                                        />
                                        <p className="inyouText">
                                            引用：
                                            <a
                                                className="underline"
                                                href="https://twitter.com/kamiinabotan/status/1504069741975326720?s=20&t=e6-v8nFljF1HGwOclZnAGA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                公式Twitter
                                            </a>
                                            より
                                        </p>
                                    </div>
                                    <div className="mt-32">
                                        <p className="bold">名取さなさんについて</p>
                                        <div className="text_ms">
                                            <p>
                                                おはようございナース🍆
                                                <br />
                                                こんにちは！名取さなです。
                                                <br />
                                                バーチャルサナトリウムに住んでいます。
                                                <br />
                                                インターネットの文化がすきです。
                                                <br />
                                                <br />
                                                Youtube以外ではこんなところで活動しています。
                                                <br />
                                                <br />
                                                ◆twitter
                                                <br />
                                                <a
                                                    className="underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://twitter.com/sana_natori"
                                                >
                                                    https://twitter.com/sana_natori
                                                </a>
                                                <br />
                                                ◆FANBOX
                                                <br />
                                                <a
                                                    className="underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.pixiv.net/fanbox/creator/30984332"
                                                >
                                                    https://www.pixiv.net/fanbox/creator/30984332
                                                </a>
                                                <br />
                                                ◆公式サイト
                                                <br />
                                                <a
                                                    className="underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://natorisana.com/"
                                                >
                                                    https://natorisana.com/
                                                </a>
                                            </p>
                                            <p className="mt-24">
                                                YouTubeチャンネル「
                                                <a
                                                    className="underline"
                                                    href="https://www.youtube.com/channel/UCIdEIHpS0TdkqRkHL5OkLtA/featured"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    さなちゃんねる
                                                </a>
                                                」より抜粋
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <h3>書店特典</h3>
                                    <div>
                                        <p>
                                            第3巻書店特典は色々な衣装を身に纏ったジンランのカード付き。
                                        </p>
                                        <a
                                            href="https://twitter.com/tonarinohey/status/1501172061066362884?s=20&t=AeHDw-sZ3D3M5ZKgz5bqGQ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                width={375}
                                                height={260}
                                                objectFit="contain"
                                                src="https://pbs.twimg.com/media/FNU7lNcaUAI1-IM?format=jpg&name=4096x4096"
                                                alt="第3巻 各書店の特典"
                                            />
                                        </a>
                                        <p className="inyouText">
                                            引用：
                                            <a
                                                className="underline"
                                                href="https://twitter.com/tonarinohey/status/1501172061066362884?s=20&t=AeHDw-sZ3D3M5ZKgz5bqGQ"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                塀先生Twitter
                                            </a>
                                            より
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <h2>
                            <p className="head__ja">公式サイト</p>
                            <span className="head__en">Official Site</span>
                        </h2>
                        <div>
                            <a
                                className="underline"
                                href={master.published_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                「{master.title}」
                            </a>
                        </div>
                        <div className="mt-32">
                            <LatestEpisodeLink />
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <h2>
                            <p className="head__ja">公式Twitter</p>
                            <span className="head__en">Twitter</span>
                        </h2>
                        <a
                            className="underline"
                            href={master.official_twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @kamiinabotan
                        </a>
                        <div className={styles.twitterTimeline}>
                            <TwitterTimeline />
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <h2>
                            <p className="head__ja">LINEスタンプ</p>
                            <p className="head__en">Goods</p>
                        </h2>

                        <div className={styles.lineStamp}>
                            <a href={LINE_STAMP_URL} target="_blank" rel="noopener noreferrer">
                                <Image
                                    className={styles.lineStamp__image}
                                    width={300}
                                    height={400}
                                    objectFit="contain"
                                    src="/assets/img/line-stamp.png"
                                    alt="LINEスタンプ"
                                />
                                <p className={styles.lineStamp__attention}>
                                    ※クリックすると別ウィンドウが開きます
                                </p>
                            </a>
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <h2>
                            <p className="head__ja">作者紹介（敬称略）</p>
                            <span className="head__en">Author</span>
                        </h2>
                        <div>
                            <p className={styles.authName}>{master.author}</p>
                            <div className={styles.authSNS}>
                                <ul className={styles.authSNSList}>
                                    {authSNS.map((sns) => {
                                        return (
                                            <li className={styles.authSNSItem} key={sns.name}>
                                                <a
                                                    className="underline"
                                                    href={sns.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {sns.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className={styles.authReleasedGoods}>
                                <h3>著者関連書籍</h3>
                                <KanrenComics displayCondition={displayCondition} />
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionWrapper}>
                        <TwitterShare
                            url={'https://yuriyoi.site'}
                            title={SITE_FULL_TITLE}
                            via="seventhseven"
                            related={['seventhseven']}
                        />
                    </section>
                </main>
                {/* コンテンツエンド */}
            </div>
        </Layout>
    );
}


export async function getStaticProps() {
    const now = new Date().toISOString();
    const dateObj = new Date(now);
    const buildDate =  `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;

    return {
        props: {
            buildDate
        },
    };
}