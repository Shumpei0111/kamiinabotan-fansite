import { useRouter } from "next/router";
import Image from "next/image";
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
                    <div className={style.charaMain}>
                        <h2>
                            <p className="head__ja">キャラクター一覧</p>
                            <span className="head__en">Characters</span>
                        </h2>
                        <p className={style.intro}>
                            秩父にある学生寮を舞台に、新入生で主人公の「ぼたん」や寮長の3年生の「いぶき」をはじめ、魅力的なキャラクターたちが暮らしています。
                        </p>
                        <div className={style.intro}>
                            <ul className={style.charaNameList}>
                                {
                                    _characters.map( c => {
                                        return (
                                            <li className={style.charaNameList__item} key={c.id}>
                                                <a className={style.charaNameList__name} href={`#${c.id}`}>{c.name}</a>
                                            </li>
                                        )
                                    } )
                                }
                            </ul>
                        </div>
                        <div className={style.charaWrapper}>
                            {
                                _characters.map( c => {
                                    return (
                                        <div id={c.id} className={style.charaItem} key={c.id}>
                                            <ruby>
                                                <rt>{c.ruby}</rt>
                                                <rb>{c.name}</rb>
                                            </ruby>
                                            {
                                                c.imgPath !== "" ?
                                                <div className={style.charaImage}>
                                                    <Image className={style.charaImage__image} src={c.imgPath} alt={`引用：「${master.title}」${c.ruby}の画像`} objectFit="contain" width={200} height={300} />
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
                    </div>
                </>
            )}
        </Layout>
    )
}