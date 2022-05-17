import New from "./global/new";

import news from "../storage/news";
import style from '../styles/Home.module.scss';

export default function HomeNews() {
	const _news = news.slice();

    return (
        <>
            <h2>
                <p className="head__ja">ニュース</p>
                <span className="head__en">News</span>
            </h2>
            <div className="relative">
                <ul className={`${style.newsList} ${style.newsList__bg}`}>
                    {_news.map( (n, ind) => {
                        return (
                            <li className={style.newsList__item} key={n.url}>
                                <p className={style.newsDate}>{n.date}</p>
                                {ind === 0 ?
                                    <>
                                        <New />
                                        <a className="underline" href={n.url} target="_blank" rel="noopener noreferrer">{n.head}</a>
                                    </>
                                    :
                                    <a className="underline" href={n.url} target="_blank" rel="noopener noreferrer">{n.head}</a>
                                }
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </>
    )
}