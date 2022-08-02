import master from '../../storage/master.json';
import { SITE_SUB_TITLE, SITE_TITLE, SITE_TITLE_EN } from '../../lib/constraint';
import Marquee from 'react-fast-marquee';
import * as style from '../../styles/header.module.scss';
import Link from 'next/link';
import { useScrollHandler } from '../../lib/useScrollHandler';

import { useState, useEffect } from 'react';

export default function Header(props) {
    const scroll = useScrollHandler();
    const hasAlert = true;

    const [ narrowViewClassName, setNarrowViewClassName ] = useState( "" );
    useEffect(() => {
        if(scroll) {
            setNarrowViewClassName("narrowView");
        } else {
            setNarrowViewClassName("");
        }
    }, [scroll]);

    return (
        <header id="gHeader" className={style.header}>
            {
                hasAlert ? (
                    <div className={style.alert}>
                        <Marquee speed={50} gradient={false}>
                            {/* <a href="https://amzn.to/37VR9MD" className={`underline ${style.marqueeText}`} target="_blank" rel="noopener noreferrer">「{master.title}」第３巻好評発売中！</a> */}
                            <a href="https://amzn.to/3SgDimN" className={`underline ${style.marqueeText}`} target="_blank" rel="noopener noreferrer">Kindle版第1巻が半額セール中！</a>
                        </Marquee>
                    </div>
                ) :
                <></>
            }
            <div className={`${style.siteTitleWrapper} ${narrowViewClassName}`}>
                <Link href="/">
                    <a className="relative">
                        <div className={style.siteTitleItem}>
                            <span className={`head__en ${style.title_en}`}>{SITE_TITLE_EN}</span>
                            <h1 className={style.siteTitle}>{SITE_TITLE}</h1>
                            <p className={`subTitle`}>{SITE_SUB_TITLE}</p>
                        </div>
                    </a>
                </Link>
            </div>
        </header>
    )
}