import getSanitizeHtml from '../lib/getSanitizeHTML';
import style from '../styles/kikanComics.module.scss';
import { BOOKS_LINK } from '../lib/constraint.js';

const { TSUKINO, TARACHINE } = BOOKS_LINK;

export default function KanrenComics() {
    const linkList = [
        {
            title: TSUKINO.title,
            html: TSUKINO.html,
            url: TSUKINO.url
        },
        {
            title: TARACHINE.vol1.title,
            html: TARACHINE.vol1.html,
            url: TARACHINE.vol1.url
        },
        {
            title: TARACHINE.vol2.title,
            html: TARACHINE.vol2.html,
            url: TARACHINE.vol2.ur
        }
    ];


    return (
        <div>
            <div className="flex">
                {
                    linkList.map( item => (
                        <div className={style.linkItem} key={item.title}>
                            <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(item.html)}}></div>
                            <a href={item.url} className="underline" target="_blank" rel="noopener noreferrer">{item.title}(Amazon)</a>
                        </div>
                        
                    ) )
                }
            </div>
        </div>
    )
}