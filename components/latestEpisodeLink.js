export default function LatestEpisodeLink() {
    const current_episode_num = '39';
    const current_episode_link = 'https://mangacross.jp/comics/kamiinabotan/42';
    const next_update_date = '5月30日(火)';

    return (
        <div>
            <p className="bold">最新{`${current_episode_num}`}話公開中！</p>
            <a
                className="underline"
                href={`${current_episode_link}`}
                target="_blank"
                rel="noreferrer noopener"
            >{`${current_episode_link}`}</a>
            <p className="mt-16">
                次回更新日&nbsp;👉&nbsp;&nbsp;&nbsp;
                <span className="bold">{`${next_update_date}`}</span>
            </p>
        </div>
    );
}
