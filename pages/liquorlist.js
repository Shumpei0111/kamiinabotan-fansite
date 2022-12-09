import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Meta from '../components/meta';
import VoteButton from '../components/voteButton';
import MakerInfo from '../components/makerInfo';
import LiquorInyouLink from '../components/liquorInyouLink';
import LiquorSortContainer from '../components/liquorSortContainer';
import LiquorAffiLink from '../components/liquorAffiLink';
import LiquorItemTag from '../components/liquorItemTag';
import voteLiqourStatus from '../lib/usecase/voteLiqourStatus';
import { DrunkShare } from '../components/drunkShare';

import liquorList from '../storage/liquors.js';
import { createUserId, getVotedLiqourList } from '../lib/usecase/saveVoteLiqour';
import makerList from '../storage/markers.json';

import style from '../styles/liquor.module.scss';

export default function LiquorList() {
    const router = useRouter();
    const { q, rev } = router.query;
    const items = liquorList.data.slice();
    const makers = makerList.data.slice();
    const TITLE = '登場するお酒一覧';
    const [votedLiqours, setVotedLiqours] = useState([]);
    const [votedIds, setVotedIds] = useState({});
    const [userId, setUserId] = useState('');
    const [isDrunkIds, setIsDrunkIds] = useState([]);

    voteLiqourStatus.load();

    useEffect(() => {
        try {
            (async () => {
                setUserId(createUserId());

                const list = await getVotedLiqourList();
                setVotedLiqours([...list]);
            })();
        } catch (error) {
            console.warn(error.message);
        }
    }, [userId]);

    useEffect(() => {
        if (Array.from(votedLiqours)) {
            // 投票されたお酒のリストから件数を集約してn杯目のnの値に代入する数を作る
            const list = votedLiqours
                .filter((item) => item.isVote)
                .map((item) => item.liqourId)
                .reduce((prev, id) => {
                    prev[`liqourId${id}`] = (Number(prev[`liqourId${id}`]) || 0) + 1;
                    return prev;
                }, {});

            setVotedIds({ ...list });

            const selfDrunkList = votedLiqours
                .filter((item) => item.userId === userId)
                .filter((item) => item.isVote === true);
            setIsDrunkIds([...selfDrunkList]);
        }
    }, [votedLiqours]);

    const getDrunkStatus = (id) => {
        return isDrunkIds.find((item) => Number(item.liqourId) === id);
    };

    ////////////////////////////////////////////////
    // 表示用マージ配列
    const groups = items.map((item) => {
        const baseItem = item;
        const _maker = makers.find((maker) => {
            return maker.id === baseItem.marker_id;
        });
        return {
            id: baseItem.id,
            name: baseItem.name,
            description: baseItem.description,
            url: baseItem.url,
            imagePath: baseItem.imagePath,
            imageInyou: baseItem.imageInyou,
            inyouURL: baseItem.inyouURL,
            maker: {
                name: _maker && _maker.name ? _maker.name : '',
                address: _maker && _maker.address ? _maker.address : '',
                url: _maker && _maker.url ? _maker.url : '',
                introduction: _maker && _maker.introduction ? _maker.introduction : '',
                twitter: _maker && _maker.twitter ? _maker.twitter : '',
            },
            genre: baseItem.genre,
            episode: ((epi) => {
                if (!epi) return null;
                if (epi.indexOf(',') > 0)
                    return epi
                        .split(',')
                        .map((e) => `#${e}`)
                        .join(' ');
                return `#${epi}`;
            })(baseItem.episode),
            bookNumber: baseItem.book_number,
            voted: votedIds[`liqourId${baseItem.id}`] || 0,
            drunkList: isDrunkIds,
        };
    });

    ////////////////////////////////////////////////
    // 表示リストの絞りこみ関数
    const getListByGenres = (genre) => groups.filter((item) => item.genre === genre);
    const getListByBookNum = (num) => groups.filter((item) => item.bookNumber === num);

    ////////////////////////////////////////////////
    // 絞りこみの事前リスト
    const beers = getListByGenres('ビール');
    const cocktails = getListByGenres('カクテル');
    const wines = getListByGenres('ワイン');
    const whiskys = getListByGenres('ウイスキー');
    const sakes = getListByGenres('日本酒');
    const liqueurs = getListByGenres('リキュール');
    const shochus = getListByGenres('焼酎');
    const shochu_highball = getListByGenres('チューハイ');
    const mead = getListByGenres('蜂蜜酒');
    const etc = getListByGenres('その他');

    const book1 = getListByBookNum(1);
    const book2 = getListByBookNum(2);
    const book3 = getListByBookNum(3);

    const genreLists = [
        { name: 'すべて', list: groups, q: null },
        { name: 'ビール', list: beers, q: 'beer' },
        { name: 'カクテル', list: cocktails, q: 'cocktail' },
        { name: 'ワイン', list: wines, q: 'wine' },
        { name: 'ウイスキー', list: whiskys, q: 'whisky' },
        { name: '日本酒', list: sakes, q: 'sake' },
        { name: 'リキュール', list: liqueurs, q: 'liqueur' },
        { name: '焼酎', list: shochus, q: 'shochu' },
        { name: 'チューハイ', list: shochu_highball, q: 'shochu_highball' },
        { name: '蜂蜜酒', list: mead, q: 'mead' },
        { name: 'その他', list: etc, q: 'etc' },
        { name: '1巻に登場するお酒', list: book1, q: 'book1' },
        { name: '2巻に登場するお酒', list: book2, q: 'book2' },
        { name: '3巻に登場するお酒', list: book3, q: 'book3' },
    ];

    ////////////////////////////////////////////////
    // 状態管理変数
    const [currentDisplayList, setCurrentDisplayList] = useState(genreLists[0].list);
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
            router.push({ query: { ...currentQuery, q: genreLists[ind].q } });
            setChange(false);
        }, 200);
    };

    ////////////////////////////////////////////////
    // リストを昇順・降順に変更する
    function getReverseList(list) {
        return list.slice().reverse();
    }
    const handleUpdateReverseList = () => {
        setChange(true);

        setTimeout(() => {
            const list = currentDisplayList.slice();
            const rList = getReverseList(list);
            setCurrentDisplayList(rList);
            setIsReverse((isReverse = !isReverse));

            const currentQuery = router.query;
            router.push({ query: { ...currentQuery, rev: isReverse } });
            setChange(false);
        }, 200);
    };

    ////////////////////////////////////////////////
    // 状態変更関数
    useEffect(() => {
        if (!router.isReady) return;

        let targetInd = 0;
        const getListByQuery = (query) =>
            genreLists.filter((item, ind) => {
                if (item.q === query) targetInd = ind;
                return item.q === query;
            });
        const narrowByQueryList = getListByQuery(q);

        const displayList =
            narrowByQueryList && narrowByQueryList[0]
                ? narrowByQueryList[0].list
                : genreLists[0].list;
        const resList = rev === 'true' || isReverse ? getReverseList(displayList) : displayList;
        setCurrentDisplayList(resList);
        setCurrentInd(targetInd);
    }, [q, rev, router, isReverse, votedIds]);

    // TODO: vote button
    const isWIP = false;

    ////////////////////////////////////////////////
    // レイアウト
    return (
        <Layout title={TITLE}>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Meta title={TITLE} />
                    <main>
                        <h2>
                            <p className="head__ja">お酒一覧</p>
                            <span className="head__en">Liquor list</span>
                        </h2>

                        <p className={style.intro}>
                            この作品はお酒が重要なアイテムとして登場します。舞台である秩父の地酒も多く登場しています。
                        </p>

                        <LiquorSortContainer
                            _style={style}
                            handleUpdateReverseList={handleUpdateReverseList}
                            isReverse={isReverse}
                            genreLists={genreLists}
                            handleUpdateDisplayGenre={handleUpdateDisplayGenre}
                            currentInd={currentInd}
                        />

                        <div className={style.liquorContainer}>
                            <div
                                className={`${style.liquorItemList} ${
                                    isChange ? style.changing : ''
                                }`}
                            >
                                {currentDisplayList.map((liq) => {
                                    return (
                                        <div className={style.liquorItemList__item} key={liq.id}>
                                            <div
                                                id={liq.id}
                                                className={style.liquorItemList__nagative}
                                            >
                                                <p className={style.item__name}>{liq.name}</p>
                                                <LiquorItemTag _style={style} liq={liq} />
                                                <p className={style.item__description}>
                                                    {liq.description}
                                                </p>

                                                {liq.url && !liq.imagePath ? (
                                                    <LiquorAffiLink _style={style} liq={liq} />
                                                ) : (
                                                    <></>
                                                )}

                                                {liq.imagePath ? (
                                                    <LiquorInyouLink _style={style} liq={liq} />
                                                ) : (
                                                    <></>
                                                )}

                                                <DrunkShare liq={liq} />

                                                {!isWIP ? (
                                                    <VoteButton
                                                        liqourId={liq.id}
                                                        votePoint={liq.voted}
                                                        userId={userId}
                                                        isDrunk={getDrunkStatus(liq.id)}
                                                    />
                                                ) : (
                                                    <></>
                                                )}

                                                <MakerInfo style={style} liq={liq} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </main>
                </>
            )}
        </Layout>
    );
}
