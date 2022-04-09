import * as style from '../../styles/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.madeBy}>
                <span>運営者：<a className="underline" href="https://twitter.com/seventhseven" target="_blank" rel="noopener noreferrer">Shumpei(twitter)</a></span>
            </div>
        </footer>
    )
}