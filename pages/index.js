import Layout from '../components/layout';
import Image from 'next/image';
import Meta from '../components/meta';
import HomeNews from '../components/homeNews';
import HomeContents from '../components/homeContents';
import KikanComics from '../components/kikanComics';
import KanrenComics from '../components/kanrenComics';

import styles from '../styles/Home.module.scss';

import master from '../storage/master.json';
import TwitterTimeline from '../components/twitterTimeline';
import TwitterShare from '../components/global/twitterShare';

import { LINE_STAMP_URL, SITE_FULL_TITLE } from '../lib/constraint';


export default function Home() {
	const authSNS = master.author_sns.slice();

	return (
		<Layout>
			<div className={styles.container}>
				<Meta />
				{/* コンテンツスタート */}
				<main className={styles.main}>
					<section className={styles.sectionWrapper}>
						<div className={styles.topInyou}>
							<Image width={386} height={200} objectFit="contain" src="https://mangacross.jp/images/comic/cSQw6TT0qND00AUZQf2I0cFqCAO08NGZq6yqLFEWbkM/image_sp/original.jpg?1647590065" alt="新刊のバナー" />
							<p className={styles.inyouText}>引用：「<a className="underline" href="https://mangacross.jp/comics/kamiinabotan" target="_blank" rel="noopener noreferrer">上伊那ぼたん、酔へる姿は百合の花</a>」マンガクロス（秋田書店）</p>
						</div>
						<div>
							<div className={styles.siteDescription}>
								<p className={styles.siteDescription__label}>はじめに</p>
								<p>{master.site_description}</p>
							</div>
						</div>
					</section>

					<section className={styles.sectionWrapper}>
						<h2>
							<p className="head__ja">あらすじ</p>
							<span className="head__en">Story</span>
						</h2>
						<p className={styles.arasuji}>上伊那ぼたんは２０歳の大学生。<br />
							入った寮の歓迎パーティで寮長のいぶきにハイボールを飲ませてもらうと酔った勢いでいぶきに絡み始めて・・・?<br />
							酔っ払いいちゃいちゃガールズコメディ！
						</p>
						<p className={styles.topInyou}>引用：マンガクロス「上伊那ぼたん、酔へる姿は百合の花」公式サイト</p>
					</section>

					<section className={styles.sectionWrapper}>
						{/* ニュース */}
						<HomeNews />
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
						<KikanComics />
					</section>

					<section className={styles.sectionWrapper}>
						<h2>
							<p className="head__ja">公式サイト</p>
							<span className="head__en">Official Site</span>
						</h2>
						<div>
							<a className="underline" href={master.published_url} target="_blank" rel="noopener noreferrer">「{master.title}」</a>
						</div>
					</section>

					<section className={styles.sectionWrapper}>
						<h2>
							<p className="head__ja">公式Twitter</p>
							<span className="head__en">Twitter</span>
						</h2>
						<a className="underline" href={master.official_twitter} target="_blank" rel="noopener noreferrer">@kamiinabotan</a>
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
								<Image className={styles.lineStamp__image} width={300} height={400} objectFit="contain" src="/assets/img/line-stamp.png" alt="LINEスタンプ" />
								<p className={styles.lineStamp__attention}>※クリックすると別ウィンドウが開きます</p>
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
									{
										authSNS.map( sns => {
											return (
												<li className={styles.authSNSItem} key={sns.name}>
													<a className="underline" href={sns.url}>{sns.name}</a>
												</li>
											)
										} )
									}
								</ul>
							</div>
							<div className={styles.authReleasedGoods}>
								<h3>著者関連書籍</h3>
								<KanrenComics />
							</div>
						</div>
					</section>

					<section className={styles.sectionWrapper}>
					<TwitterShare
						url={"https://yuriyoi.site"}
						title={SITE_FULL_TITLE}
						via="seventhseven"
						related={["seventhseven"]}
					/>
					</section>
				</main>
				{/* コンテンツエンド */}
			</div>
		</Layout>
	)
}
