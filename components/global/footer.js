import Link from 'next/link';
import { SITE_SUB_TITLE, SITE_TITLE, SITE_TITLE_EN } from '../../lib/constraint';

import * as style from '../../styles/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>🍸🍷</p>
            <div className={style.footerTitleWrapper}>
                <p>{SITE_TITLE}</p>
                <p>{SITE_TITLE_EN}</p>
                <p>{SITE_SUB_TITLE}</p>
            </div>
            <div className={`${style.footerTitleWrapper} flex`}>
                <p><Link href="/policy"><a>プライバシーポリシー</a></Link></p>
                <p><a className="underline" href="https://forms.gle/ubM94Xn2J5mouMzZ6" target="_blank" rel="noopener noreferrer">お問い合わせ</a></p>
            </div>
            <div className={style.madeBy}>
                <span>運営者：<a className="underline" href="https://twitter.com/seventhseven" target="_blank" rel="noopener noreferrer">Shumpei(twitter)</a></span>
            </div>
        </footer>
    )
}