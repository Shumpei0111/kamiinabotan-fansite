export default function LiquorItemTag({ _style, liq }) {
    return (
        <div className={_style.item__meta}>
            <p className={_style.tag}>{liq.genre}</p>
            {liq.episode ? <p className={_style.tag}>{liq.episode}</p> : <></>}
            {liq.bookNumber ? <p className={_style.tag}>{liq.bookNumber}巻</p> : <></>}
        </div>
    )
}