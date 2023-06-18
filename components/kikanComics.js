import getSanitizeHtml from '../lib/getSanitizeHTML';
import style from '../styles/kikanComics.module.scss';
import { BOOKS_LINK } from '../lib/constraint.js';
import New from './global/new';

const { KAMIINA_BOTAN } = BOOKS_LINK;

export default function KikanComics() {
    const linkList = [
        {
            book_number: 1,
            title: KAMIINA_BOTAN.vol1.title,
            html: KAMIINA_BOTAN.vol1.html,
            url: KAMIINA_BOTAN.vol1.url,
        },
        {
            book_number: 2,
            title: KAMIINA_BOTAN.vol2.title,
            html: KAMIINA_BOTAN.vol2.html,
            url: KAMIINA_BOTAN.vol2.url,
        },
        {
            book_number: 3,
            title: KAMIINA_BOTAN.vol3.title,
            html: KAMIINA_BOTAN.vol3.html,
            url: KAMIINA_BOTAN.vol3.url,
        },
        {
            book_number: 4,
            title: KAMIINA_BOTAN.vol4.title,
            html: KAMIINA_BOTAN.vol4.html,
            url: KAMIINA_BOTAN.vol4.url,
        },
    ];

    const displayList = (() => {
        const arr = [];
        for (let i = 0; i < linkList.length; i++) {
            arr.push(linkList[i]);
        }
        return arr;
    })();

    return (
        <div>
            <div className="flex">
                {displayList.map((item, i) => (
                    <div className={style.linkItem} key={item.title}>
                        <div dangerouslySetInnerHTML={{ __html: getSanitizeHtml(item.html) }}></div>
                        {i === displayList.length - 1 && (
                            <div style={{ paddingBottom: '0.5rem' }}>
                                <New />
                            </div>
                        )}
                        <a
                            href={item.url}
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}(Amazon)
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
