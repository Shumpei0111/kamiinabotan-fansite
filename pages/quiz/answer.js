import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Meta from "../../components/meta";

import getSanitizeHtml from '../../lib/getSanitizeHTML';

import style from '../../styles/quiz.module.scss';

export default function Answer() {
    const router = useRouter();

    const nadurra = `<a href="https://hb.afl.rakuten.co.jp/ichiba/27534781.eb326777.27534782.0635bead/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fricaoh%2F198189%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJkb3duIiwiY29tIjoxLCJjb21wIjoiZG93biIsInByaWNlIjowLCJib3IiOjAsImNvbCI6MCwiYmJ0biI6MCwicHJvZCI6MCwiYW1wIjpmYWxzZX0%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hgb/27534781.eb326777.27534782.0635bead/?me_id=1192052&item_id=10006110&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fricaoh%2Fcabinet%2F199999%2F198189.jpg%3F_ex%3D240x240&s=240x240&t=pict" border="0" style="margin:2px" alt="" title=""></a>`;

    const haruyoi = `<a href="https://www.amazon.co.jp/%E6%98%A5%E5%AE%B5%E5%8D%81%E8%A9%B1-%E9%9A%8F%E7%AD%86%E9%9B%86-%E6%95%B0%E5%AD%A6%E8%80%85%E3%81%8C%E7%B6%B4%E3%82%8B%E4%BA%BA%E7%94%9F1-%E5%85%89%E6%96%87%E7%A4%BE%E6%96%87%E5%BA%AB-%E5%B2%A1/dp/4334741460?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=HC0PO6JD55GJ&keywords=%E6%98%A5%E5%AE%B5%E5%8D%81%E8%A9%B1&qid=1651771429&sprefix=%E6%98%A5%E5%AE%B5%E5%8D%81%E8%A9%B1%2Caps%2C380&sr=8-1&linkCode=li2&tag=shumpei7g-22&linkId=86a58442baea0c2eeca9da342f647c20&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4334741460&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li2&o=9&a=4334741460" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`;

    const akkeshi = `<a href="https://hb.afl.rakuten.co.jp/ichiba/275376a6.bbb95cf9.275376a7.1f4b956a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Faburajin%2Fakkeshi1-200%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJkb3duIiwiY29tIjoxLCJjb21wIjoiZG93biIsInByaWNlIjowLCJib3IiOjAsImNvbCI6MCwiYmJ0biI6MCwicHJvZCI6MCwiYW1wIjpmYWxzZX0%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hgb/275376a6.bbb95cf9.275376a7.1f4b956a/?me_id=1270768&item_id=10014710&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Faburajin%2Fcabinet%2Fshohin%2Fventure-whisky%2Fimgrc0096399598.gif%3F_ex%3D240x240&s=240x240&t=pict" border="0" style="margin:2px" alt="" title=""></a>`;

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
            <>
                <Meta title="上伊那ぼたんクイズ こたえ" />
                <div>
                    <h2>
                        <p className="head__ja">上伊那ぼたんクイズのこたえ</p>
                        <span className="head__en">Answer</span>
                    </h2>

                    <p className={style.intro}>クイズのこたえをチェックしよう！</p>

                    <div className={`${style.quizContainer} ${style.quizAnswerContainer}`}>
                        {/* クイズのこたえ */}
                        <div className={style.quiz}>
                            <div className={style.quizWrapper}>
                                <h3>1. 「上伊那ぼたん、酔へる姿は百合の花」の主な舞台はどこ？</h3>
                                <div>
                                    <h4>こたえ：秩父</h4>
                                    <p>第1話1p1コマ目で秩父麦酒ののぼりが写っていたりと舞台の説明がなされていますね。<br />また、連載版では「メゾン・マルジェラ」風の話数表記に、「Kamiina Botan CHICHIBU」と明記されています。</p>
                                    <p>
                                        <a className="mt-16 inline-block underline text_ms" href="https://twitter.com/kamiinabotan/status/1229355142102667265/photo/1" target="_blank" rel="noopener noreferrer">
                                        <Image width={448} height={640} objectFit="contain" src="https://pbs.twimg.com/media/EQ-L_DgVAAEGqsr?format=jpg&name=medium" />
                                        <br />引用：公式Twitterより(外部ウィンドウが開きます)</a>
                                    </p>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>2. 寮長のいぶきが一番好きなウイスキーの銘柄は？</h3>
                                <div className="inline-block">
                                    <h4>こたえ：グレンリベット</h4>
                                    <p>第14話で郡上先輩がいぶきのためにいちごウイスキーを作る回でわかりました。<br />いぶきの部屋にはアルケミエのアブサンが置いてあったり、IPAなども好んで飲むなど、和洋種類問わずお酒が好きな描写もあります。<br />ウイスキーでは、シングルモルトウイスキーの原点とも言われるグレンリベットが好みのようです。</p>
                                    <div className="inline-block mt-16" dangerouslySetInnerHTML={{__html: getSanitizeHtml(nadurra) }}></div><br />
                                    <a className="underline text_ms" href="https://a.r10.to/hMPy54" target="_blank" rel="noopener noreferrer">Rakutenで購入する(外部ウィンドウが開きます)</a>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>3. ジンランが放った、「有意思〜！」ってどんな意味？</h3>
                                <div>
                                    <h4>こたえ：おもしろ〜！</h4>
                                    <Image width={340} height={220} objectFit="contain" src="/assets/img/omoshiro.jpg" />
                                    <p className="text_ms">引用：「上伊那ぼたん、酔へる姿は百合の花」第2巻112ページ</p>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>4. 郡上先輩といぶきが2人でドライブした高原は何高原？</h3>
                                <div>
                                    <h4>こたえ：霧ヶ峰高原</h4>
                                    <p>第15話で郡上先輩はいぶきを連れ立って訪れた霧ヶ峰高原は、長野県諏訪市にある標高1600mある高原です。<br />高山植物が生い茂り、富士山や八ヶ岳連峰なども一望できます。上昇気流が発生しやすく、日本のグライダー発祥の地ともいわれています。<br />
                                    1000m下にある諏訪湖からの水蒸気を含んだ空気が上昇気流にのせて霧ヶ峰を覆うため、湖面との気温差は6度にもなる。半袖でやってきたいぶきはとても寒かっただろうと思います。
                                    </p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.581791566027!2d138.18571531569376!3d36.103681380097974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c53035a0200ad%3A0x76898a2056f9c6a!2z6LuK5bGx6IKp6aeQ6LuK5aC0!5e0!3m2!1sja!2sjp!4v1651771048728!5m2!1sja!2sjp" width="320" height="300" className="border-none mt-16" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>5. 5話で長瀞へ向かう際、電車内でいぶきが読んでいた文庫本のタイトルは？</h3>
                                <div className="inline-block">
                                    <h4>こたえ：春宵十話</h4>
                                    <p>春宵十話は岡潔による随筆集です。<br />岡氏は数学者ですが、スポーツや音楽、教育などについても触れられています。世間を避けながらも「情緒を数学にする」という考えを持っていた岡氏に対し、当時毎日新聞奈良支局にいた松村洋が「エッセイを書かないか」と長期間にわたり口説きに口説き、「口述なら」という形で実現した作品です。<br />
                                    口述という体裁のため、随筆といいながらも文章は先の松村氏がまとめたスタイルになっています。<br />
                                    毎日新聞に10日間連載されていました。</p>
                                    <div className="mt-16 inline-block" dangerouslySetInnerHTML={{__html: getSanitizeHtml(haruyoi) }}></div>
                                    <br />
                                    <a href="https://amzn.to/3FibKHx" target="_blank" rel="noopener noreferrer" className="mt-8 text_ms inline-block underline">Amazonで見る(外部ウィンドウが開きます)</a>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>6. 25話でいぶき・郡上先輩・ジンランで宅飲みした際、いぶきが出したウイスキーの銘柄は？</h3>
                                <div>
                                    <h4>こたえ：厚岸蒸留所ニューボーン第4弾ブレンデッド</h4>
                                    <Image width={340} height={220} objectFit="contain" src="/assets/img/akkeshi.jpg" />
                                    <p className="text_ms">引用：「上伊那ぼたん、酔へる姿は百合の花」第3巻103ページ</p>
                                    <p className="mt-16">厚岸蒸留所は北海道厚岸郡厚岸町にあります。「スコットランドの伝統的な製法でアイラモルトのようなウイスキーを造りたい」という思いから始まったこの蒸留所は2013年から試験熟成を開始したところからスタートしています。<br />2021年には「インターナショナル・スピリッツ・チャレンジ 2021」にて金賞・銀賞を受賞するなどの実力がある蒸留所です。</p>
                                    <a className="mt-8 text_ms inline-block underline" href="http://akkeshi-distillery.com/" target="_blank" rel="noopener noreferrer">厚岸蒸留所HPへ(外部ウィンドウが開きます)</a>
                                    <div className="mt-32" dangerouslySetInnerHTML={{__html: getSanitizeHtml(akkeshi) }}></div>
                                    <a className="underline text_ms" href="https://a.r10.to/hkkP5r" target="_blank" rel="noopener noreferrer">Rakutenで購入する(外部ウィンドウが開きます)</a>

                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>7. 作中で出てきた台湾ウイスキー、銘柄は何？</h3>
                                <div>
                                    <h4>こたえ：カバラン</h4>
                                    <Image width={340} height={420} objectFit="contain" src="/assets/img/kavalan.jpg" />
                                    <p className="text_ms">引用：「上伊那ぼたん、酔へる姿は百合の花」第3巻74ページ</p>
                                    <p className="mt-16">カバランは「いつか台湾でウイスキーを造る」と1970年代に台湾の飲料メーカーのティエンツァイ・リー氏が思い描き、2002年の台湾WTO加盟を機に蒸留所建設計画がスタート、2006年から試作品の蒸留が始まりました。台湾の気候では難しいとされるウイスキーの製造ですが、モルトの粉砕から熟成まですべて台湾で行うことに成功し、今日では多数の賞を受賞するにいたります。</p>
                                    <a className="mt-8 text_ms inline-block underline" href="https://www.kavalan.jp/" target="_blank" rel="noopener noreferrer">KAVALAN HPへ(外部ウィンドウが開きます)</a>

                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>8. 「宇宙について最も理解しがたいことは、それが理解可能ということである」誰の言葉？</h3>
                                <div>
                                    <h4>こたえ：アインシュタイン</h4>
                                    <p>「The most incomprehensible thing about the universe is that it is comprehensible.」の日本語訳とされるアインシュタインの言葉。<br />とされていますが、大元はJournal of the Franklin Institute Volume 221, Issue 3に掲載されている論文「Physik und realität (英訳：Physics and reality)」の次の一説(ドイツ語)を英訳したものが元になっているようです。<br />
                                    「Das ewig Unbegreifliche an der Welt ist ihre Begreiflichkeit.(英訳：The eternally incomprehensible thing about the world is its comprehensibility.)」</p>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>9. 15話の扉絵でいぶきが肩にかけているショルダーバッグのブランド名は？</h3>
                                <div>
                                    <h4>こたえ：KENZO</h4>
                                    <Image width={300} height={500} objectFit="contain" src="/assets/img/ibuki-tobira.jpg" />
                                    <p className="text_ms">引用：「上伊那ぼたん、酔へる姿は百合の花」第2巻83ページ</p>
                                    <p className="mt-16">MA-1ライクなブルゾン、ロールアップしたスキニーパンツとポンプフューリーに合わせたスタイリングで使用しています。衣装コンセプトは「ストレスフリー」であるいぶきですが、この回は郡上先輩と霧ヶ峰へ訪れた話なので、話の雰囲気にも合わせてカジュアルにまとめられています。<br />
                                    KENZOはデザイナー高田賢三が設立したファッションブランドで、初めてコレクションを発表したのは1970年。花柄や色彩に富んだコレクションは衝撃的で鮮烈なデビューを果たした。数年前には虎の顔がボディの前面に縫い付けられたスエットなどが流行ったこともありました。
                                    </p>
                                </div>
                            </div>

                            <div className={style.quizWrapper}>
                                <h3>10. 第24話、VERTEREでビールを買ったあと、いぶきとぼたんはどこで飲んだ？</h3>
                                <div>
                                    <h4>こたえ：氷川渓谷</h4>
                                    <p>VERTEREは奥多摩駅そばにある醸造所ですが、氷川渓谷も駅から徒歩6、7分で来れる場所です。流れが激しい多摩川ですが、こちらは広い洲や瀬があるため、キャンプや釣りなどが楽しめる人気スポットになっています。</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.699376212835!2d139.09490231568708!3d35.80731288016513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019371753b4693f%3A0x52e06b9d2eda1105!2z5rC35bed5riT6LC3!5e0!3m2!1sja!2sjp!4v1651776450757!5m2!1sja!2sjp" width="320" height="300" className="border-none mt-16" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>

                            <div className="textCenter mb-60">
                                <Link href="/quiz">
                                    <a className={`${style.answerButton} ${style.answerButton__retry} margin-0`} >もう一度チャレンジする!</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* ここまで */}
                </div>
            </>
            )}
        </Layout>
    )
}