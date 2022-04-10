import master from '../../storage/master.json';
import { SITE_SUB_TITLE, SITE_TITLE } from '../../lib/constraint';
import Marquee from 'react-fast-marquee';
import * as style from '../../styles/header.module.scss';
import Link from 'next/link';
import { useScrollHandler } from '../../lib/useScrollHandler';

import { useState, useEffect } from 'react';

export default function Header(props) {
    const _isLoading = props.isLoading;
    const scroll = useScrollHandler();

    const [ narrowViewClassName, setNarrowViewClassName ] = useState( "" );
    useEffect(() => {
        if(scroll) {
            setNarrowViewClassName("narrowView");
        } else {
            setNarrowViewClassName("");
        }
    });

    return (
        <header className={style.header}>
            <div className={style.alert}>
                <Marquee speed={50} gradient={false}>
                    <a href="" className={`underline ${style.marqueeText}`}>「{master.title}」第３巻好評発売中！</a>
                </Marquee>
            </div>
            <div className={`${style.siteTitleWrapper} ${narrowViewClassName}`}>
                <Link href="/">
                    <a><h1 className={style.siteTitle}>{SITE_TITLE}</h1></a>
                </Link>
                <p>{SITE_SUB_TITLE}</p>
            </div>
        </header>
    )
}