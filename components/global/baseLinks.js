import Link from 'next/link';

import New from './new';
import style from '../../styles/baseLinks.module.scss';

export default function BaseLinks() {
    return (
        <div className={style.baseLinksContaienr}>
            <ul className={style.baseLinksList}>
                <li className="relative">
                    <span className='head__en' role="presentation">Chara</span>
                    <Link href="/characters">
                        <a>キャラクターを見る</a>
                    </Link>
                </li>
                <li className="relative">
                    <span className='head__en' role="presentation">Liqour</span>
                    <Link className="relative" href="/liquorlist">
                        <a>お酒一覧を見る</a>
                    </Link>
                </li>
                <li className="relative">
                    <span className='head__en' role="presentation">Quiz</span>
                    <Link className="relative" href="/quiz">
                        <a>上伊那ぼたんクイズ</a>
                    </Link>
                </li>
                <li className="relative">
                    <span className='head__en' role="presentation">Fashion</span>
                    <Link className="relative" href="/clothes">
                        <a>ファッションで見る</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
