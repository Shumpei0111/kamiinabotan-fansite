import getSanitizeHtml from '../lib/getSanitizeHTML';

export default function LiquorAffiLink({ _style, liq }) {
    return (
        <div className={_style.item__imgEx}>
            <div dangerouslySetInnerHTML={{__html: getSanitizeHtml(liq.url) }}></div>
            <p className='underline bold textCenter'>{liq.name} | { liq.url.indexOf("rakuten") > 0 ? <span>Rakutenで購入する</span> : <span>Amazonで購入する</span>}</p>
        </div>
    )
}