import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from "../lib/constraint";

import liquorList from '../storage/liquors.js';
import makerList from '../storage/markers.json';

import getSanitizeHtml from '../lib/getSanitizeHTML';

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
                introduction: _maker && _maker.introduction ? _maker.introduction : "",
                twitter: _maker && _maker.twitter ? _maker.twitter : "",
            },
            genre: baseItem.genre,
            episode: ( (epi) => {
                if(epi.indexOf(',') > 0) return epi.split(',').map(e => `#${e}`).join(' ');
                return `#${epi}`;
            } )(baseItem.epidode),
            bookNumber: baseItem.book_number,
        };
    } );

    const base = groups.slice();
    const getListByGenres = (genre) => {
        return base.filter( item => item.genre === genre );
    }

    const beers = getListByGenres("ビール");
    const cocktails = getListByGenres("カクテル");
    const wines = getListByGenres("ワイン");
    const whiskys = getListByGenres("ウイスキー");
    const sakes = getListByGenres("日本酒");
    const liqueurs = getListByGenres("リキュール");
    const shochus = getListByGenres("焼酎");
    const etc = getListByGenres("その他");

    const genreLists = [
        {name: "すべて", list:base},
        {name: "ビール", list:beers},
        {name: "カクテル", list:cocktails},
        {name: "ワイン", list:wines},
        {name: "ウイスキー", list:whiskys},
        {name: "日本酒", list:sakes},
        {name: "リキュール", list:liqueurs},
        {name: "焼酎", list:shochus},
        {name: "その他", list:etc}
    ];

    const initList = genreLists[0].list.slice();
    const [currentDisplayList, setCurrentDisplayList] = useState(initList);
    const [currentInd, setCurrentInd] = useState(0);
    const [isChange, setChange] = useState(false);

    const handleUpdateDisplayGenre = (ind) => {
        setChange(true);

        setTimeout(() => {
            const list = genreLists[ind].list.slice();
            setCurrentDisplayList(list);
            setCurrentInd(ind);
            setChange(false);
        }, 200);
    };


    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Meta title="登場するお酒一覧" />
                    <main>
                        <h2>
                            <p className="head__ja">お酒一覧</p>
                            <span className="head__en">Liquor list</span>
                        </h2>

                        <p className={style.intro}>この作品はお酒が重要なアイテムとして登場します。舞台である秩父の地酒も多く登場しています。</p>

                        <div className={style.categoryContainer}>
                            <ul className={style.category}>
                                {
                                    genreLists.map( (item, index) => (
                                        <li onClick={()=>handleUpdateDisplayGenre(index)} className={`${style.category__item} ${currentInd === index ? style.current : ""}`} key={item.name}>
                                            <span className={style.category__item__name}>{item.name}</span>
                                            <span className={style.category__length}>{item.list.length}</span>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </div>

                        <div className={style.liquorContainer}>
                            <div className={`${style.liquorItemList} ${isChange ? style.changing : ""}`}>
                                {
                                    currentDisplayList.map( liq => {
                                        return (
                                            <div className={style.liquorItemList__item} key={liq.id}>
                                                <p className={style.item__name}>{liq.name}</p>
                                                <div className={style.item__meta}>
                                                    <p className={style.tag}>{liq.genre}</p>
                                                    <p className={style.tag}>{liq.episode}</p>
                                                    <p className={style.tag}>{liq.bookNumber}巻</p>
                                                </div>
                                                <p className={style.item__description}>{liq.description}</p>
                                                
                                                { liq.url && !liq.imagePath ?
                                                    <div className={style.item__imgEx}>
                                                        <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(liq.url) }}></div>
                                                        <p className='underline bold textCenter'>{liq.name} | Rakutenで購入する</p>
                                                    </div>
                                                    :
                                                    <></>
                                                }

                                                { liq.imagePath ?
                                                    <div className={style.item__imgEx}>
                                                        <Image width={240} height={200} objectFit="contain" src={liq.imagePath} />
                                                        <p className='text_ms textCenter'>引用：{liq.imageInyou}</p>
                                                    </div>
                                                    :
                                                    <></>
                                                }

                                                <div className={style.makerInfo}>
                                                    <p className={style.makerInfo__label}>メーカー情報</p>
                                                    <p>名前：{`${liq.maker.name ? liq.maker.name : "-"}`}</p>
                                                    <p>住所：{`${liq.maker.address ? liq.maker.address : "-" }`}</p>
                                                    <p>HP：<a className={`underline ${style.makerInfo__url}`} href={`${liq.maker.url ? liq.maker.url : ""}`} target="_blank" rel="noopener noreferrer">{`${liq.maker.url ? liq.maker.url : "-"}`}</a></p>
                                                    { liq.maker.introduction ?
                                                        <p>紹介：{liq.maker.introduction}</p>
                                                        :
                                                        <></>
                                                    }
                                                    { liq.maker.twitter ?
                                                        <p>Twitter：<a className="underline" href={`https://twitter.com/${liq.maker.twitter.toLowerCase()}`} target="_blank" rel="noopener noreferrer">{`@${liq.maker.twitter}`}</a></p>
                                                        :
                                                        <></>
                                                    }
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