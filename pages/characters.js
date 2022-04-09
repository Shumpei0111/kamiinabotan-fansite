import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from "../lib/constraint";

import characters from '../storage/characters.json';
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
                    <article>
                        <Meta>
                            <title>
                                エピソードで見る | {SITE_FULL_TITLE}
                            </title>
                        </Meta>
                        <main className={style.charaMain}>
                            <div className={style.charaWrapper}>
                                {
                                    _characters.map( c => {
                                        return (
                                            <div className={style.charaItem} key={c.id}>
                                                <ruby>
                                                    <rt>{c.ruby}</rt>
                                                    <rb>{c.name}</rb>
                                                </ruby>
                                                <p className={style.charaIntro}>{c.introduction}</p>
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </main>
                    </article>
                </>
            )}
        </Layout>
    )
}