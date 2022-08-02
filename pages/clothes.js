import { useRouter } from "next/router"
import Layout from "../components/layout"
import Meta from "../components/meta"
import Image from "next/image";
import H3 from '../components/partial/H3';
import H4 from "../components/partial/H4";

import getSanitizeHtml from '../lib/getSanitizeHTML';

import master from '../storage/master.json'
import clothesItems from '../storage/clothes.js';

import style from '../styles/clothes.module.scss';

export default function Clothes() {
    const router = useRouter();
    const TITLE = "ファッションで見る";

    return (
        <Layout title={TITLE}>
            {router.isFallback ? (
                <p>Loading...</p>
            ):(<>
                <Meta title={TITLE}></Meta>
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
                        <H3 text="Perfume" />
                        <div className="mb-24">
                            <H4 text="LAZY SUNDAY MORNING / Whispers in the Library" />
                            <Image src="/assets/img/perfume.png" objectFit="contain" width={400} height={320} alt="ぼたんが普段つけている香水" />
                            <p className="inyouText width-180">引用：<a className="underline" href="https://mangacross.jp/comics/kamiinabotan/34" target='_blank' rel='noopener noreferrer'>「{master.title}」第31話 p8</a></p>
                        </div>

                        <div>
                            <p className="mb-24">ぼたんは普段、マルジェラの香水を使っているようです。</p>
                            <p className="mb-24">例に挙げた<span className="bold">「レイジー サンデー モーニング」</span><span className="bold">「ウィスパーライブラリー」</span>は、メゾン・マルジェラの中でも「Maison Margiela Fragrances(メゾン マルジェラ フレグランス)」というラインのアイテムです。</p>
                            <p className="mb-24">ラベルにある<span className="bold">「REPLICA（レプリカ）」</span>は、<span className="bold">【記憶やムードを再現する】</span>という意味で名付けられました。中でもレプリカシリーズのフレグランスでもNo.1人気を誇るのがこの「レイジー サンデー モーニング」です。</p>

                            <div className="mb-60">
                                <p className="mb-8 bold">LAZY SUNDAY MORNING</p>
                                <p className="mb-24">コンセプトは2003年のフィレンツェ（花の都フローレンス）の晴れた朝がテーマの、フレッシュでゆっくりとした気分にぴったりのムスク。</p>
                                <p className="mb-24">洗い立てのリネンのような香りで、男女ともに使えるように調香されています。</p>
                                <p className="mb-24">ラインナップも充実していて、このオードトワレのフレグランスの他、キャンドルやハンドクリームでもこの香りを楽しむことができます。</p>

                                <div>
                                    <p className="bold">香り</p>
                                    <p className="ml-8">レモン, ウッド, 緑茶, オレンジ, ムスク, ジャスミン, すずらん, アンバーウッド</p>
                                    <p className="bold">容量</p>
                                    <p className="ml-8">10ml, 30ml, 100ml</p>
                                </div>
                                <div>
                                    <div className="inline-block">
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.margiela.lazySundayMorning.url) }}></div>
                                        <a href={clothesItems.margiela.lazySundayMorning.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="mb-8 bold">Whispers in the Library</p>
                                <p className="mb-24">コンセプトはその名の通り、オックスフォードの歴史ある図書館にゆっくりと流れる静寂な時間。古紙とワックスがけされた木の香りをイメージして調香されたフレグランスです。</p>
                                <p className="mb-24">トップノートはコショウのようなスパイシーな香りで、ミドル〜ラストにかけてお香のような甘い香りに移り変わります。</p>
                                <p className="mb-24">レイジーサンデーモーニングとともに、クセが少なく普段使いに適した香りといえるでしょう。</p>

                                <div>
                                    <p className="bold">香り</p>
                                    <p className="ml-8">コショウ、バニラ、ウッディ、シダー</p>
                                    <p className="bold">容量</p>
                                    <p className="ml-8">10ml, 30ml, 100ml</p>
                                </div>
                                <div>
                                    <div className="inline-block">
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.margiela.whispersInTheLibrary.url) }}></div>
                                        <a href={clothesItems.margiela.whispersInTheLibrary.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="mb-60">
                        <H3 text={`Kicks`} />
                        <div className="mb-24">
                            <H4 text={`${clothesItems.nike.AIR_PRESTO.name}`} />
                            <div className="flex">
                                <div className="mb-24 ">
                                    <Image src="/assets/img/nike_acronym.jpg" objectFit="contain" width={200} height={420} alt="エアプレストの引用" />
                                    <p className="inyouText width-180">引用：<a className="underline" href="https://amzn.to/39SUayc" target='_blank' rel='noopener noreferrer'>「{master.title}」第1巻 p139</a></p>
                                </div>
                                <div>
                                    <Image src={clothesItems.nike.AIR_PRESTO.item.imgUrl} objectFit="contain" width={260} height={300} alt={`${clothesItems.nike.AIR_PRESTO.name}の画像`} />
                                    <div className="flex">
                                        <p className="text_ms">引用：<a className="underline" href="https://www.nike.com/jp/launch/t/air-presto-mid-utility-acronym-white-black-dynamic-yellow">NIKE公式サイト</a>より</p>
                                        <a href={clothesItems.nike.AIR_PRESTO.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mb-24">「エアプレスト」シリーズは「足のためのTシャツ」というコンセプトで2000年にリリースされました。<br />リラックスした快適な履き心地を目指して作られ、伸縮性にすぐれたアッパーと、近未来的なデザインが特徴的です。</p>

                            <p className="mb-24"><span className="bold">ACRONYM（アクロニウム）</span>はアウトドアブランドのデザイナーとして経験を積んだErrolson Hugh(エロルソン・ヒュー)によって起ち上げられたブランドです。</p>

                            <p className="mb-24">これまでNIKEとアクロニウムは何度もコラボしており、毎回即完売になるほどの人気シリーズ。アイテムによってはプレ値で取引されることも多く、スニーカーファンの中でも注目されているアイテムのひとつです。</p>
                        </div>
                        
                        <div className={`${style.info} mt-32 mb-60`}>
                            <div className="mb-16">
                                <p className="bold mb-4">NIKE SNKRS</p>
                                <a className="underline" href="https://www.nike.com/jp/launch" target="_blank" rel="noopener noreferrer">https://acrnm.com/</a>
                            </div>
                            <div>
                                <p className="bold mb-4">ACRONYM</p>
                                <a className="underline" href="https://acrnm.com/" target="_blank" rel="noopener noreferrer">https://acrnm.com/</a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-60">
                        <H3 text={`Shop`} />

                        <H4 text="SALONE" />
                        <div>
                            <p>ぼたんといぶきで初めてのおでかけで訪れたセレクトショップ(店名は登場しなかった)。</p>
                            <p>作中では代官山にあるが、モデルとなったのは千葉・柏にあるSALONE(サローネ)というセレクトショップ。</p>
                            <p>お店の窓にはずらりとお酒のボトルが飾られているのがポイント。<br />アパレルと飲食できるフードスタンドが併設されている形態のお店です。</p>
                        </div>
                        <div className="mt-16 mb-16">
                            <Image width={400} height={600} objectFit="contain" src="/assets/img/comic_salone.jpg" alt="SALONEがモデルとなった店が登場するページ" />
                            <p className="inyouText">引用：<a className="underline" href="https://amzn.to/39SUayc" target='_blank' rel='noopener noreferrer'>「{master.title}」第1巻 p53</a></p>
                        </div>
                        <div className="mt-16 mb-16">
                            <p className="mb-16">モデルとなったSALONEさんの外観。</p>
                            <Image width={400} height={300} objectFit="contain" src="https://gigaplus.makeshop.jp/salone/icon/shop.jpg" alt="SALONEの外観" />
                            <Image width={400} height={240} objectFit="contain" src="https://gigaplus.makeshop.jp/salone/img/NEWTOP.jpg" alt="SALONEの外観" />
                            <p className="inyouText mb-16">引用：<a className="underline" href="http://salone-online.net/html/company.html" target="_blank" rel="noopener noreferrer">SALONE公式サイト</a></p>

                            <div className="mt-32 mb-60">
                                <div className={style.info}>
                                    <div className="bold mb-4">SALONE</div>
                                    <div>〒277-0852 千葉県柏市旭町1-4-7 タクビル1F</div>
                                    <div>TEL 04-7147-9959</div>
                                    <div>営業時間：アパレル12:00-19:00</div>
                                    <div>営業時間：カフェ・フードスタンド12:00スタート</div>
                                    <div className="ml-60">(ベルギービール・ウィスキー・ワイン・おまかせ料理)</div>
                                    <div>定休日：不定休</div>
                                    <div>HP：<a className="underline" href="http://salone-online.net/" target="_blank" rel="noopener noreferrer">http://salone-online.net/</a></div>
                                </div>
                            </div>

                            <p>SALONEは「<span className="bold">AURALEE(オーラリー)</span>」、「<span className="bold">BALENCIAGA(バレンシアガ)</span>」、「<span className="bold">MAISON MARGIELA(メゾン・マルジェラ)</span>」などの有名ブランドを扱うほか、「<span className="bold">EYEVAN(アイヴァン)</span>」や「<span className="bold">MYKITA(マイキータ)</span>」などのサングラスブランドもラインナップとしてあるのが特徴です。</p>

                            <div className="mt-32">
                                <H3 text="Blands" />
                                <H4 text="MAISON MARGIELA" />
                                <div>
                                    <p>メゾン・マルジェラは1988年にデザイナーのマルタン・マルジェラによって設立されたフランスの高級ブランド。オートクチュール風と既製服、2つのコレクションを発表しています。</p>
                                    <p className="mt-16">手がけるプロダクトとしては、レディースウェア、メンズウェア、ジュエリー、シューズ、オブジェ、フレグランス、ホームグッズなど多岐にわたっています。</p>
                                    <p className="mt-16">デザインの独創性はもちろんのこと、地下鉄の駅や街角などでライブショーを行ったり、デザインを引き立たせるためにモデルの顔を布で覆うなど、型破りな表現方法を行うのも特徴です。</p>
                                    <p>ファッション業界への影響力も強く、歴史に名を残すメゾンの1つと言われています。</p>
                                    <p className="mt-16">設立当初のブランド名は「メゾン・マルタン・マルジェラ」だったが、2015年に現在の「メゾン・マルジェラ」に解明されました。</p>
                                    <p className="mt-16">現在マルジェラ本人はクリエイティブ・デザイナーを退き、後任のジョン・ガリアーノが務めています。</p>
                                </div>
                                <div>
                                    <div className="mt-32 inline-block">
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.margiela.tabi.url) }}></div>
                                        <a href={clothesItems.margiela.tabi.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>

                                    <div className="mt-32 inline-block">                                
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.margiela.packT.url) }}></div>
                                        <a href={clothesItems.margiela.packT.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>
                                </div>

                                <div className={`${style.info} mt-32 mb-60`}>
                                    <p className="bold mb-4">MAISON MARGIELA</p>
                                    <a className="underline" href="https://www.maisonmargiela.com/" target="_blank" rel="noopener noreferrer">https://www.maisonmargiela.com/</a>
                                </div>
                            </div>

                            <div className="mt-32">
                                <H4 text="MYKITA" />
                                <div>
                                    <p>マイキータはドイツのアイウェアブランドです。特許を取得した画期的なアイデアや確かな技術力・特徴的なデザインと様々なコラボアイテムが存在しているのが特徴です。</p>
                                    <p className="mt-16">デザイン〜製造まですべてベルリンにある自社工房で行われており、最新技術を使ったハイテク加工と、手作業による丁寧な仕事によって作られています。</p>
                                    <p>MYKITAというブランド名は、ドイツ語で保育施設という意味の「KITA」と、英語の「MY」を組み合わせた造語です。これは、最初のオフィスが元々保育園であったことが由来となっています。</p>
                                    <p>ちなみに、ドイツは日本のように保育園・幼稚園、託児所などの区別はあまりなく、保育施設を総称してKita（Kindertagesstätte）と呼んでいます。</p>
                                </div>
                                {/* MYKITAの説明やリンクを載せる */}
                                <div>
                                    <div className="mt-32 inline-block">
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.mykita.eldermh1.url) }}></div>
                                        <a href={clothesItems.mykita.eldermh1.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>

                                    <div className="mt-32 inline-block">
                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(clothesItems.mykita.margielaCollabo.url) }}></div>
                                        <a href={clothesItems.mykita.margielaCollabo.shortUrl} className="underline bold text_ms" target='_blank' rel='noopener noreferrer'>Rakutenで見る</a>
                                    </div>

                                    <div className={`${style.info} mt-32 mb-60`}>
                                        <p className="bold mb-4">MYKITA</p>
                                        <a className="underline" href="https://mykita.com/" target="_blank" rel="noopener noreferrer">https://mykita.com/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </Layout>
    )
}