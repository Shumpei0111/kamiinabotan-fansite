import Image from "next/image";

export default function LiquorInyouLink({ _style, liq }) {
    return (
        <div className={_style.item__imgEx}>
            <Image width={240} height={200} objectFit="contain" src={liq.imagePath} alt={`引用：${liq.imageInyou}`} />
            <p className='text_ms textCenter'>
            引用：{ liq.inyouURL ?
                <a className="underline" href={liq.inyouURL} target="_blank" rel="noopener noreferrer">{liq.imageInyou}</a>
                :
                <>{liq.imageInyou}</>
            }
            </p>
        </div>
    );
};