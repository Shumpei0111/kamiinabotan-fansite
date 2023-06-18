export function ComfirmUseCookie({ callback }) {
    const handleComfirm = () => {
        callback({
            setting: {
                ga: true,
                liqour: true,
            },
        });
    };

    const handleRefuse = () => {
        callback({
            ga: false,
            liqour: false,
        });
    };

    return (
        <div
            className="fixed bottom-0 w-full p-24 frame"
            style={{ background: 'white', zIndex: 1000 }}
        >
            <p>Cookieの使用に同意する</p>
            <div className="flex gap-16 mt-16">
                <button onClick={() => handleComfirm()}>同意する</button>
                <button onClick={() => handleRefuse()}>すべて拒否する</button>
            </div>
        </div>
    );
}
