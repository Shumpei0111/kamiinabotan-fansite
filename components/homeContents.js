import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function HomeContents() {
    return (
        <>
            <h2>コンテンツ</h2>
            <ul className={styles.contentsItems}>
                <li className={styles.item}>
                    <Link href="/episode">
                        <a>エピソードを見る</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/characters">
                        <a>キャラクターを見る</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}