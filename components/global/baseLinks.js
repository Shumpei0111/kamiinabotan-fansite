import Link from "next/link";

import style from '../../styles/baseLinks.module.scss';

export default function BaseLinks() {
    return (
        <div className={style.baseLinksContaienr}>
            <ul className={style.baseLinksList}>
                <li>
                    <Link href="/characters">
                        <a>キャラクターを見る</a>
                    </Link>
                </li>
                <li>
                    <Link href="/liquorlist">
                        <a>お酒一覧を見る</a>
                    </Link>
                </li>
                <li>
                    <Link href="/quiz">
                        <a>上伊那ぼたんクイズ</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}