import { useEffect, useState } from 'react';

export const useScrollHandler = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 30;
            setScroll( scrollCheck );
        }

        document.addEventListener( "scroll", onScroll);
        return () => {
            document.removeEventListener( "scroll", onScroll );
        };
    }, [scroll, setScroll]);

    return scroll;
};