import master from '../../storage/master.json';
import { SITE_SUB_TITLE, SITE_TITLE } from '../../lib/constraint';
import Marquee from 'react-fast-marquee';
import * as style from '../../styles/header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.alert}>
                <Marquee speed={50} gradient={false}>
                    <a href="" className={`underline ${style.marqueeText}`}>「{master.title}」第３巻好評発売中！</a>
                </Marquee>
            </div>
            <div className={style.siteTitleWrapper}>
                <Link href="/">
                    <a><h1 className={style.siteTitle}>{SITE_TITLE}</h1></a>
                </Link>
                <p>{SITE_SUB_TITLE}</p>
            </div>
        </header>
    )
}