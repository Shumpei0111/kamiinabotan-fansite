import New from './global/new';

import news from '../storage/news';
import style from '../styles/Home.module.scss';

export default function HomeNews({ displayCondition }) {
    const _news = news.slice();
    const filterAdLink = (url) => {
        if (displayCondition) return true;
        if (!displayCondition && url.indexOf('amzn.to') > -1) return false;
        if (!displayCondition && url.indexOf('amzn.to') === -1) return true;
    };

    const item = (n) => {
        return filterAdLink(n.url) ? (
            <a className="underline" href={n.url} target="_blank" rel="noopener noreferrer">
                {n.head}
            </a>
        ) : (
            <span>{n.head}</span>
        );
    };

    return (
        <>
            <h2>
                <p className="head__ja">ニュース</p>
                <span className="head__en">News</span>
            </h2>
            <div className="relative">
                <ul className={`${style.newsList} ${style.newsList__bg}`}>
                    {_news.map((n, ind) => {
                        return (
                            <li className={style.newsList__item} key={ind}>
                                <p className={style.newsDate}>{n.date}</p>
                                {ind === 0 ? (
                                    <>
                                        <New />
                                        {item(n)}
                                    </>
                                ) : (
                                    <>{item(n)}</>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
