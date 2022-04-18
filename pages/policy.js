import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE, SITE_URL } from '../lib/constraint.js';

import style from '../styles/policy.module.scss';

export default function Policy() {
    return (
        <Layout>
            <div>
                <Meta title="プライバシーポリシー" />
                <main>
                    <section className={style.introSection}>
                        <h2>
                            <p className="head__ja">プライバシーポリシー</p>
                            <span className="head__en">Privacy Policy</span>
                        </h2>
                        <p>本プライバシーポリシーは、{SITE_FULL_TITLE}（{SITE_URL}）（以下、「当サイト」とします。)の各種サービス（当サイトによる情報提供、各種お問合せの受付等）において、当サイトの訪問者（以下、「訪問者」とします。）の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。</p>
                    </section>
                    <div className={style.policyContainer}>
                        <div className={style.policy__section}>
                            <h3>基本方針</h3>
                            <p>当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。当サイトで収集した情報は、利用目的の範囲内で適切に取り扱います。</p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>適用範囲</h3>
                            <p>本プライバシーポリシーは、当サイトにおいてのみ適用されます。</p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>Amazonの広告配信について</h3>
                            <p>【{SITE_FULL_TITLE}】は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。<br />
                            第三者（Amazonや他の広告掲載者）がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookieを設定したり、認識したりする場合があります。</p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>アナリティクス</h3>
                            <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br />
                            このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。<br />
                            <br />
                            GoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能は Cookie を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br />
                            この規約に関して、詳しくは「<a className="underline" href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopner noreferrer">Googleアナリティクス利用規約</a>」をご覧ください。</p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>著作権について</h3>
                            <p>当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が<a className="underline" href="https://forms.gle/ubM94Xn2J5mouMzZ6" target="_blank" rel="noopener noreferrer">お問い合わせフォーム</a>からご連絡ください。できるだけ迅速に対応させて頂きます。<br />
                            </p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>免責事項</h3>
                            <p>当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br />
                            サービスの利用・商品の購入に関してましては、自己責任でお願いします。<br />
                            <br />
                            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤った情報の場合や、情報が古くなっていることもございます。<br />
                            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                            </p>
                        </div>
                        <div className={style.policy__section}>
                            <h3>プライバシーポリシーの変更について</h3>
                            <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
                        </div>
                        <div className={style.policy__section}>
                            <p>2022年4月17日 策定</p>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}