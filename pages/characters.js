import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from "../lib/constraint";

import characters from '../storage/characters.json';
import master from '../storage/master.json'
import style from '../styles/chara.module.scss';

export default function Episode() {
    const router = useRouter();
    const _characters = characters.data.slice();

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Meta>
                        <title>
                            キャラクター一覧 | {SITE_FULL_TITLE}
                        </title>
                    </Meta>
                    <main className={style.charaMain}>
                        <h2>
                            <p className="head__ja">キャラクター一覧</p>
                            <span className="head__en">Characters</span>
                        </h2>
                        <div className={style.intro}>
                            秩父にある学生寮を舞台に、新入生で主人公の「ぼたん」や寮長の3年生の「いぶき」をはじめ、魅力的なキャラクターたちが暮らしています。
                        </div>
                        <div className={style.charaWrapper}>
                            {
                                _characters.map( c => {
                                    return (
                                        <div className={style.charaItem} key={c.id}>
                                            <ruby>
                                                <rt>{c.ruby}</rt>
                                                <rb>{c.name}</rb>
                                            </ruby>
                                            {
                                                c.imgPath !== "" ?
                                                <div className={style.charaImage}>
                                                    <img className={style.charaImage__image} src={c.imgPath} alt={`${c.ruby}の画像`} />
                                                    <p className={style.charaImage__inyouText}>引用：「{master.title}」{c.inyou}</p>
                                                </div>

                                                :
                                                <></>
                                            }
                                            <p className={style.charaIntro}>{c.introduction}</p>
                                            <p>衣装コンセプト：{c.clothConcept}</p>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </main>
                </>
            )}
        </Layout>
    )
}