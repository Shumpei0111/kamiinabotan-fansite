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
                    <Meta title="キャラクター一覧" />
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
                        <div className={`${style.charaWrapper} relative`}>
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
                                            <p><span className="bold">衣装コンセプト：</span><span>{c.clothConcept}</span></p>
                                            { c.model ? (
                                                <div className={style.distillery}>
                                                    <p className="bold">モデルになった蒸留所</p>
                                                    <dl className={`flex ${style.distillery__container}`}>
                                                        <dt className={style.distillery__dt}>蒸留所名:</dt>
                                                        <dd className={style.distillery__dd}>{c.model.name}</dd>
                                                        <dt className={style.distillery__dt}>住所:</dt>
                                                        <dd className={style.distillery__dd}>{c.model.address}</dd>
                                                        <dt className={style.distillery__dt}>URL:</dt>
                                                        <dd className={style.distillery__dd}><a className="underline" href={c.model.url} target="_blank" rel="noopener noreferrer">{c.model.url}</a></dd>
                                                        <dt className={style.distillery__dt}>会社名:</dt>
                                                        <dd className={style.distillery__dd}>{c.model.company}</dd>
                                                    </dl>
                                                    <p className="text_ms">※名前の由来から推測した情報です。モデルがあることは明かされていないため、参考情報になります。</p>
                                                </div>
                                            ) : (
                                                <></>
                                            ) }
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