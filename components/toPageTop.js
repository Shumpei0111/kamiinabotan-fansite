import { useState, useEffect } from "react";

const useTopCheckHandler = () => {
    const [topPosition, setTopPosition] = useState(true);

    useEffect(() => {
        const isTopCheck = () => {
            const scrollCheck = window.scrollY > 100;
            setTopPosition(scrollCheck);
        };

        document.addEventListener( "scroll", isTopCheck );
        return () => {
            document.removeEventListener( "scroll", isTopCheck );
        }
    }, [topPosition, setTopPosition]);

    return topPosition;
};

export default function ToTopPage() {
    const handleToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const checkHandler = useTopCheckHandler();

    const [ topPositionClassName, setTopPositionClassName ] = useState( "" );
    useEffect(() => {
        if(checkHandler) {
            setTopPositionClassName( "--show" ); // TODO: ページ遷移後もクラスが残ってしまう
        } else {
            setTopPositionClassName( "" );
        }
    }, [checkHandler]);


    return (
        <div id="toPageTopArrow" className={`to-page-top-container ${topPositionClassName}`} onClick={e => handleToTop(e)}>
            <div className="to-page-top">
                <a href="#gHeader">
                    <i className="to-page-top__icon arrow-top"></i>
                </a>
            </div>
        </div>
    )
}