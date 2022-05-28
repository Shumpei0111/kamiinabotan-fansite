import getSanitizeHtml from '../lib/getSanitizeHTML';
import style from '../styles/kikanComics.module.scss';

export default function KikanComics( props ) {
    const { bookNumbers } = props;

    const displayLength = Number(bookNumbers);

    const linkList = [
        {
            book_number: 1,
            title: "上伊那ぼたん、酔へる姿は百合の花 第1巻",
            html: `<a href="https://www.amazon.co.jp/%E4%B8%8A%E4%BC%8A%E9%82%A3%E3%81%BC%E3%81%9F%E3%82%93%E3%80%81%E9%85%94%E3%81%B8%E3%82%8B%E5%A7%BF%E3%81%AF%E7%99%BE%E5%90%88%E3%81%AE%E8%8A%B1-1-%E3%83%A4%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A3%E3%83%B3%E3%83%94%E3%82%AA%E3%83%B3%E3%83%BB%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E5%A1%80/dp/4253142362?pd_rd_w=vRpmR&pf_rd_p=ca6ccf00-9cde-4773-ae9e-625b2d7cc586&pf_rd_r=MK0VZEQG0WRFZBT9R97S&pd_rd_r=34d90fca-52bb-470d-9aa8-e6edf7913379&pd_rd_wg=Mgekt&pd_rd_i=4253142362&psc=1&linkCode=li3&tag=shumpei7g-22&linkId=7f047b0c8bef7d6d2d01f2160179a0f0&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4253142362&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=4253142362" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/3jLz6LK"
        },
        {
            book_number: 2,
            title: "上伊那ぼたん、酔へる姿は百合の花 第2巻",
            html: `<a href="https://www.amazon.co.jp/%E4%B8%8A%E4%BC%8A%E9%82%A3%E3%81%BC%E3%81%9F%E3%82%93%E3%80%81%E9%85%94%E3%81%B8%E3%82%8B%E5%A7%BF%E3%81%AF%E7%99%BE%E5%90%88%E3%81%AE%E8%8A%B1-2-%E3%83%A4%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A3%E3%83%B3%E3%83%94%E3%82%AA%E3%83%B3%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E5%A1%80/dp/4253142370?&linkCode=li3&tag=shumpei7g-22&linkId=f696d5673a3d10a29c8af6b18c9005ba&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4253142370&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=4253142370" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/36jdKC8"
        },
        {
            book_number: 3,
            title: "上伊那ぼたん、酔へる姿は百合の花 第3巻",
            html: ` <a href="https://www.amazon.co.jp/%E4%B8%8A%E4%BC%8A%E9%82%A3%E3%81%BC%E3%81%9F%E3%82%93%E3%80%81%E9%85%94%E3%81%B8%E3%82%8B%E5%A7%BF%E3%81%AF%E7%99%BE%E5%90%88%E3%81%AE%E8%8A%B1-3-%E3%83%A4%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A3%E3%83%B3%E3%83%94%E3%82%AA%E3%83%B3%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E5%A1%80/dp/4253142389?&linkCode=li3&tag=shumpei7g-22&linkId=b819e40cb2118a71ac824c133be917bd&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4253142389&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=shumpei7g-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=shumpei7g-22&language=ja_JP&l=li3&o=9&a=4253142389" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
            url: "https://amzn.to/37VR9MD"
        }
    ];

    const displayList = ( () => {
        const arr = [];
        for( let i = 0; i < displayLength; i++ ) {
            arr.push(linkList[i] );
        }
        return arr;
    } )();


    return(
        <div>
            <div className="flex">
                {
                    displayList.map( item => (
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