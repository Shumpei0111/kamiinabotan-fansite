import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from '../lib/constraint.js';
export default function Policy() {
    return (
        <Layout>
            <div>
                <Meta />
                <main>
                    <div>
                        <h2>Amazonの広告配信について</h2>
                        <p>【{SITE_FULL_TITLE}】は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
                    </div>

                </main>
            </div>
        </Layout>
    )
}