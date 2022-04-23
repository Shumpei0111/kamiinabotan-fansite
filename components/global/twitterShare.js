import { TwitterShareButton, TwitterIcon } from "react-share";

const TwitterShare = (props) => {
    const { url, title, via, related } = props;
    return (
        <div className="mt-32 mb-32">
            <div className="flex just-center mt-24">
                <TwitterShareButton
                    url={url}
                    title={title}
                    via={via}
                    related={related}
                >
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
            </div>
        </div>
    )
};

export default TwitterShare;