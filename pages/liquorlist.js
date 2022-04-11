import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from "../lib/constraint";

import liquorList from '../storage/liquors.json';
import makerList from '../storage/markers.json';

import style from '../styles/liquor.module.scss';

export default function LiquorList() {
    const router = useRouter();
    const items = liquorList.data.slice();
    const makers = makerList.data.slice();

    // 表示用マージ配列
    const groups = items.map( item => {
        const baseItem = item;
        const _maker = makers.find( maker => {
            return maker.id === baseItem.marker_id;
        } );
        return {
            id: baseItem.id,
            name: baseItem.name,
            description: baseItem.description,
            url: baseItem.url,
            imagePath: baseItem.imagePath,
            imageInyou: baseItem.imageInyou,
            maker: {
                name: _maker && _maker.name ? _maker.name : "",
                address: _maker && _maker.address ? _maker.address : "",
                url: _maker && _maker.url ? _maker.url : "",
                introduction: _maker && _maker.introduction ? _maker.introduction : ""
            }
        };
    } );

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Meta>
                        登場するお酒一覧 | {SITE_FULL_TITLE}
                    </Meta>
                    <main>
                        <h2>
                            <p className="head__ja">お酒一覧</p>
                            <span className="head__en">Liquor list</span>
                        </h2>
                        <p className={style.intro}>この作品はお酒が重要なアイテムとして登場します。舞台である秩父の地酒が多く登場しています。</p>
                        <div className={style.liquorContainer}>
                            <div className={style.liquorItemList}>
                                {
                                    groups.map( liq => {
                                        return (
                                            <div className={style.liquorItemList__item} key={liq.id}>
                                                <p className={style.item__name}>{liq.name}</p>
                                                <p className={style.item__description}>{liq.description}</p>
                                                { liq.imagePath ?
                                                    <div className={style.item__img}>
                                                        <img height="160" src={liq.imagePath} />
                                                        <p className={style.item__imgInyou}>引用：{liq.imageInyou}</p>
                                                    </div>
                                                    :
                                                    <></>
                                                }
                                                <div className={style.makerInfo}>
                                                    <p className={style.makerInfo__label}>メーカー情報</p>
                                                    <p>名前：{`${liq.maker.name ? liq.maker.name : "-"}`}</p>
                                                    <p>住所：{`${liq.maker.address ? liq.maker.address : "-" }`}</p>
                                                    <p>HP：<a className={`underline ${style.makerInfo__url}`} href={`${liq.maker.url ? liq.maker.url : ""}`}>{`${liq.maker.url ? liq.maker.url : "-"}`}</a></p>
                                                    <p>紹介：{`${liq.maker.introduction ? liq.maker.introduction : "-"}`}</p>
                                                </div>
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </main>
                </>
            )}
        </Layout>
    )
}