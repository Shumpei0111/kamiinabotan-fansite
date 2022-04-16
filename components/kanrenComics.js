import useSanitizeHtml from '../lib/useSanitizeHTML';
import style from '../styles/kikanComics.module.scss';

export default function KanrenComics() {
    const linkList = [
        {
            title: "月のテネメント",
            html: `<a href="https://www.amazon.co.jp/gp/product/475808307X?&linkCode=li3&tag=shumpei7g-22&linkId=170110d75a31ab46c2045d0273a4dfed&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=475808307X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=475808307X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/3JQcF2t"
        },
        {
            title: "たらちねパラドクス 第1巻",
            html: `<a href="https://www.amazon.co.jp/gp/product/4758082103?&linkCode=li3&tag=shumpei7g-22&linkId=7e84055219a0a435d0073589c8317118&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4758082103&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=4758082103" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/3uMP6Di"
        },
        {
            title: "たらちねパラドクス 第2巻",
            html: `<a href="https://www.amazon.co.jp/gp/product/4758082375?&linkCode=li3&tag=shumpei7g-22&linkId=8d75af28d6f1a599a07a4394ae775f91&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4758082375&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=4758082375" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/3uLvhMQ"
        }
    ];


    return (
        <div>
            <div className="flex">
                {
                    linkList.map( item => (
                        <div className={style.linkItem}>
                            <div dangerouslySetInnerHTML={{__html: useSanitizeHtml(item.html)}} key={item.title}></div>
                            <a href={item.url} className="underline" target="_blank">{item.title}(Amazon)</a>
                        </div>
                        
                    ) )
                }
            </div>
        </div>
    )
}