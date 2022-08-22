export default function MakerInfo({ style, liq }) {

    return (
        <div className={style.makerInfo}>
            <p className={style.makerInfo__label}>メーカー情報</p>
            <p>名前：{`${liq.maker.name ? liq.maker.name : "-"}`}</p>
            <p>住所：{`${liq.maker.address ? liq.maker.address : "-" }`}</p>
            <p>HP：<a className={`underline ${style.makerInfo__url}`} href={`${liq.maker.url ? liq.maker.url : ""}`} target="_blank" rel="noopener noreferrer">{`${liq.maker.url ? liq.maker.url : "-"}`}</a></p>
            { liq.maker.introduction ?
                <p>紹介：{liq.maker.introduction}</p>
                :
                <></>
            }
            { liq.maker.twitter ?
                <p>Twitter：<a className="underline" href={`https://twitter.com/${liq.maker.twitter.toLowerCase()}`} target="_blank" rel="noopener noreferrer">{`@${liq.maker.twitter}`}</a></p>
                :
                <></>
            }
        </div>
    )
};