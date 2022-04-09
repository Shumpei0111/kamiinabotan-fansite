import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { SITE_FULL_TITLE } from "../lib/constraint";

import episode from '../storage/episodes.json';

export default function Episode() {
    const router = useRouter();
    const _episode = episode.data.slice();

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
                        <div>
                            {
                                _episode.map( epi => {
                                    return (
                                        <div key={epi.id}>
                                            <p>{epi.title}</p>
                                            <p>{epi.body}</p>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </article>
                </>
            )}
        </Layout>
    )
}