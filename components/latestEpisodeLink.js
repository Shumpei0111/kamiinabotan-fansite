export default function LatestEpisodeLink() {
    const episode_num = '33';
    const episode_link = 'https://mangacross.jp/comics/kamiinabotan/36';
    const next_update = '10月25日(火)';

    return (
        <div>
            <p className="bold">最新{`${episode_num}`}話公開中！</p>
            <a className="underline" href={`${episode_link}`} target="_blank" rel="noreferrer noopener">{`${episode_link}`}</a>
            <p className="mt-16">次回更新日&nbsp;👉&nbsp;&nbsp;&nbsp;<span className="bold">{`${next_update}`}</span></p>
        </div>
    )
}