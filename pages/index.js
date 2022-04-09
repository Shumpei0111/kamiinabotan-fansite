import Layout from '../components/layout';
import Meta from '../components/meta';
import HomeNews from '../components/homeNews';
import HomeContents from '../components/homeContents';

import styles from '../styles/Home.module.scss';

import master from '../storage/master.json';


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
							<img className="" src="https://mangacross.jp/images/comic/cSQw6TT0qND00AUZQf2I0cFqCAO08NGZq6yqLFEWbkM/image_sp/original.jpg?1647590065" />
							<p className={styles.inyouText}>出典：「<a className="underline" href="https://mangacross.jp/comics/kamiinabotan" target="_blank" rel="noopener noreferrer">上伊那ぼたん、酔へる姿は百合の花</a>」マンガクロス（秋田書店）</p>
						</div>
						<div>
							<p className={styles.siteDescription}>
							<p className={styles.siteDescription__label}>はじめに</p>
								<p>{master.site_description}</p>
							</p>
						</div>
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
						<h2>作品詳細</h2>
					</section>

					<section className={styles.sectionWrapper}>
						<h2>作者紹介（敬称略）</h2>
						<div>
							<p>{master.author}</p>
							<div>
								<h3>SNS</h3>
								<ul>
									{
										authSNS.map( sns => {
											return (
												<li key={sns.name}>
													<a className="underline" href={sns.url}>{sns.name}</a>
												</li>
											)
										} )
									}
								</ul>
							</div>
						</div>
					</section>
				</main>
				{/* コンテンツエンド */}
			</div>
		</Layout>
	)
}
