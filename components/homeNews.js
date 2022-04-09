import news from "../storage/news";

export default function HomeNews() {
	const _news = news.slice();

    return (
        <>
            <h2>ニュース</h2>
            <div>
                <ul>
                    {_news.map( n => {
                        return (
                            <li key={n.text}>
                                <p>{n.date}</p>
                                <a className="underline" href={n.url} target="_blank" rel="noopener noreferrer">{n.text}</a>
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </>
    )
}