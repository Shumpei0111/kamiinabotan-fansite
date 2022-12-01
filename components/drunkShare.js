import { TwitterShareButton, TwitterIcon } from 'react-share';
import { SITE_FULL_TITLE } from '../lib/constraint';

export const DrunkShare = ({ liq }) => {
    const liqourName = liq.name;
    const sharePageTitle = `${liqourName}を飲んだよ！ | ${SITE_FULL_TITLE}`;

    const pageURL = `https://yuriyoi.site/liquorlist#${liq.id}`;

    return (
        <div className="frame">
            <TwitterShareButton url={pageURL} title={sharePageTitle} via="seventhseven">
                <div className="flex align-item-center">
                    <TwitterIcon size={30} round={true} />
                    <span>飲んだらシェアしよう！</span>
                </div>
            </TwitterShareButton>
        </div>
    );
};
