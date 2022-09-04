import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";
import VoteButton from '../components/voteButton';
import MakerInfo from '../components/makerInfo';
import LiquorInyouLink from '../components/liquorInyouLink';
import LiquorSortContainer from '../components/liquorSortContainer';
import LiquorAffiLink from '../components/liquorAffiLink';
import LiquorItemTag from '../components/liquorItemTag';
import voteLiqourStatus from '../lib/usecase/voteLiqourStatus';

import liquorList from '../storage/liquors.js';
import { getVotedLiqourList } from '../lib/usecase/saveVoteLiqour';
import makerList from '../storage/markers.json';

import style from '../styles/liquor.module.scss';

export default function LiquorList() {
    const router = useRouter();
    const { q, rev } = router.query;
    const items = liquorList.data.slice();
    const makers = makerList.data.slice();
    const TITLE = "登場するお酒一覧";

    voteLiqourStatus.load();

    const putVotedState = id => voteLiqourStatus.put( id );

    getVotedLiqourList();

    ////////////////////////////////////////////////
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
            inyouURL: baseItem.inyouURL,
            maker: {
                name: _maker && _maker.name ? _maker.name : "",
                address: _maker && _maker.address ? _maker.address : "",
                url: _maker && _maker.url ? _maker.url : "",
                introduction: _maker && _maker.introduction ? _maker.introduction : "",
                twitter: _maker && _maker.twitter ? _maker.twitter : "",
            },
            genre: baseItem.genre,
            episode: ( (epi) => {
                if(!epi) return null;
                if(epi.indexOf(',') > 0) return epi.split(',').map(e => `#${e}`).join(' ');
                return `#${epi}`;
            } )(baseItem.episode),
            bookNumber: baseItem.book_number,
        };
    } );



    ////////////////////////////////////////////////
    // 表示リストの絞りこみ関数
    const base = groups.slice();
    const getListByGenres = (genre) => base.filter( item => item.genre === genre );
    const getListByBookNum = (num) => base.filter(item => item.bookNumber === num );


    ////////////////////////////////////////////////
    // 絞りこみの事前リスト
    const beers = getListByGenres("ビール");
    const cocktails = getListByGenres("カクテル");
    const wines = getListByGenres("ワイン");
    const whiskys = getListByGenres("ウイスキー");
    const sakes = getListByGenres("日本酒");
    const liqueurs = getListByGenres("リキュール");
    const shochus = getListByGenres("焼酎");
    const chuhai = getListByGenres("チューハイ");
    const mead = getListByGenres("蜂蜜酒");
    const etc = getListByGenres("その他");

    const book1 = getListByBookNum(1);
    const book2 = getListByBookNum(2);
    const book3 = getListByBookNum(3);

    const genreLists = [
        {name: "すべて", list:base, q: null},
        {name: "ビール", list:beers, q: "beer"},
        {name: "カクテル", list:cocktails, q: "cocktail"},
        {name: "ワイン", list:wines, q: "wine"},
        {name: "ウイスキー", list:whiskys, q: "whisky"},
        {name: "日本酒", list:sakes, q: "sake"},
        {name: "リキュール", list:liqueurs, q: "liqueur"},
        {name: "焼酎", list:shochus, q: "shochu"},
        {name: "チューハイ", list:chuhai, q: "shochu_highball"},
        {name: "蜂蜜酒", list:mead, q: "mead"},
        {name: "その他", list:etc, q: "etc"},
        {name: "1巻に登場するお酒", list:book1, q: "book1"},
        {name: "2巻に登場するお酒", list:book2, q: "book2"},
        {name: "3巻に登場するお酒", list:book3, q: "book3"}
    ];


    ////////////////////////////////////////////////
    // 状態管理変数
    const initList = genreLists[0].list.slice();
    const [currentDisplayList, setCurrentDisplayList] = useState(initList);
    const [currentInd, setCurrentInd] = useState(0);
    const [isChange, setChange] = useState(false);
    const [isReverse, setIsReverse] = useState(false);


    ////////////////////////////////////////////////
    // 絞りこみ実行関数
    const handleUpdateDisplayGenre = (ind) => {
        setChange(true);

        setTimeout(() => {
            const list = genreLists[ind].list.slice();
            setCurrentDisplayList(list);
            setCurrentInd(ind);
            const currentQuery = router.query;
            router.push({ query: { ...currentQuery, q: genreLists[ind].q } })
            setChange(false);
        }, 200);
    };



    ////////////////////////////////////////////////
    // リストを昇順・降順に変更する
    function getReverseList(list) { return list.slice().reverse() };
    const handleUpdateReverseList = () => {
        setChange(true);

        setTimeout(() => {
            const list = currentDisplayList.slice();
            const rList = getReverseList(list);
            setCurrentDisplayList(rList);
            setIsReverse( isReverse =! isReverse );

            const currentQuery = router.query;
            router.push({ query: { ...currentQuery, rev: isReverse} })
            setChange(false);
        }, 200);
    };


    ////////////////////////////////////////////////
    // 状態変更関数
    useEffect(() => {
        if(!router.isReady) return;

        let targetInd = 0;
        const getListByQuery = (query) => genreLists.filter( (item, ind) => {
            if(item.q === query) targetInd = ind;
            return item.q === query;
        });
        const narrowByQueryList = getListByQuery(q);

        const displayList = narrowByQueryList && narrowByQueryList[0] ? narrowByQueryList[0].list : genreLists[0].list;
        const resList = rev === 'true' || isReverse ? getReverseList(displayList) : displayList;
        setCurrentDisplayList(resList);
        setCurrentInd(targetInd);

    }, [q, rev, router, isReverse]);



    // TODO vote button
    const isWIP = true;


    ////////////////////////////////////////////////
    // レイアウト
    return (
        <Layout title={TITLE}>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (<>
                <Meta title={TITLE} />
                <main>
                    <h2>
                        <p className="head__ja">お酒一覧</p>
                        <span className="head__en">Liquor list</span>
                    </h2>

                    <p className={style.intro}>この作品はお酒が重要なアイテムとして登場します。舞台である秩父の地酒も多く登場しています。</p>

                    <LiquorSortContainer
                        _style={style}
                        handleUpdateReverseList={handleUpdateReverseList}
                        isReverse={isReverse}
                        genreLists={genreLists}
                        handleUpdateDisplayGenre={handleUpdateDisplayGenre}
                        currentInd={currentInd}
                    />

                    <div className={style.liquorContainer}>
                        <div className={`${style.liquorItemList} ${isChange ? style.changing : ""}`}>
                            {currentDisplayList.map( liq => {
                                return (
                                    <div className={style.liquorItemList__item} key={liq.id}>
                                        <p className={style.item__name}>{liq.name}</p>
                                        <LiquorItemTag _style={style} liq={liq} />
                                        <p className={style.item__description}>{liq.description}</p>
                                        
                                        { liq.url && !liq.imagePath ?
                                            <LiquorAffiLink _style={style} liq={liq} /> : <></>
                                        }

                                        { liq.imagePath ?
                                            <LiquorInyouLink _style={style} liq={liq} /> : <></>
                                        }

                                        { !isWIP?
                                            <VoteButton liqourId={liq.id} putVotedState={putVotedState} /> : <></>
                                        }

                                        <MakerInfo style={style} liq={liq} />
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                </main>
            </>)}
        </Layout>
    )
}