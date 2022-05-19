import { useRouter } from "next/router"
import Layout from "../components/layout"
import Meta from "../components/meta"
import Image from "next/image";

import getSanitizeHtml from '../lib/getSanitizeHTML';

import master from '../storage/master.json'
import clothesItems from '../storage/clothes.js';

import style from '../styles/clothes.module.scss';

export default function Clothes() {
    const router = useRouter();

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ):(<>
                <Meta title="ファッションで見る"></Meta>
                <div className={style.clothesMain}>
                    <h2>
                        <p className="head__ja">ファッションで見る上伊那ぼたん</p>
                        <span className="head__en">Clothes</span>
                    </h2>
                    
                    <div className={style.intro}>
                        <p>作品に関連するファッションやショップに関することをとりあげるページです。</p>

                        <p>登場するキャラクターにはそれぞれ衣装設計がなされていたり、実在するモチーフが散りばめられています。</p>

                        <p>それらを解剖しながら、どのような世界が広がっているか見ていきましょう。</p>
                    </div>

                    <div className="mb-60">
                        <h3>SALONE</h3>
                        <p>ぼたんといぶきで初めてのおでかけで訪れたセレクトショップ(店名は登場しなかった)。作中では代官山にあるが、モデルとなったのは千葉・柏にあるSALONE(サローネ)というセレクトショップ。</p>
                        <div className="mt-16 mb-16">
                            <Image width={400} height={600} objectFit="contain" src="/assets/img/comic_salone.jpg" alt="SALONEがモデルとなった店が登場するページ" />
                            <p className="inyouText">引用：「{master.title}」第1巻 p53</p>
                        </div>
                        <div className="mt-16 mb-16">
                            <p className="mb-16">モデルとなったショップはこちら。</p>
                            <Image width={400} height={300} objectFit="contain" src="https://gigaplus.makeshop.jp/salone/icon/shop.jpg" alt="SALONEの外観" />
                            <Image width={400} height={240} objectFit="contain" src="https://gigaplus.makeshop.jp/salone/img/NEWTOP.jpg" alt="SALONEの外観" />
                            <p className="inyouText mb-16">引用：<a className="underline" href="http://salone-online.net/html/company.html" target="_blank" rel="noopener noreferrer">SALONE公式サイト</a></p>
                            <p>SALONEは「<span className="bold">AURALEE</span>」、「<span className="bold">BALENCIAGA</span>」、「<span className="bold">MAISON MARGIELA</span>」などの有名ブランドを扱うほか、「<span className="bold">EYEVAN</span>」や「<span className="bold">MYKITA</span>」などのサングラスブランドもラインナップとしてあるのが特徴。</p>
                            <div className="mt-32">
                                <p>AURALEE</p>
                            </div>
                            <div className="mt-32">
                                <p>BALENCIAGA</p>
                            </div>
                            <div className="mt-32">
                                <p>MAISON MARGIELA</p>
                                {/* マルジェラの説明やリンクを載せる */}
                                <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.tabi.url) }}></div>
                                <a href="https://a.r10.to/hwKExP" className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </Layout>
    )
}