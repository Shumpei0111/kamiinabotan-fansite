import { useState, useEffect } from 'react';
import style from '../styles/voteButton.module.scss';
import { updateVoteCount } from '../lib/usecase/saveVoteLiqour';

export default function VoteButton({ liqourId, votePoint, userId, isDrunk }) {
    const [isDisplay, setDisplay] = useState(false);
    const [voteCounter, setVoteCounter] = useState(0);
    const [isVoted, _] = useState(false);
    const [isWait, setWait] = useState(false);
    const [hadDrunk, setHadDrunk] = useState(false);

    const wait = async (delay = 1000) => {
        setWait(true);
        return new Promise((res) => {
            setTimeout(() => {
                setWait(false);
                res();
            }, delay);
        });
    };

    useEffect(() => {
        setVoteCounter(votePoint);
    }, [votePoint]);

    /////////////////////
    // 🍺 ふきだしの表示管理
    const updateVoteModal = async () => {
        if (!isDisplay && !isVoted) {
            setDisplay(true);

            await wait();
            setDisplay(false);
            return;
        }

        setDisplay(false);
    };

    ////////////////////
    // 得票数管理
    const countUp = () => setVoteCounter((prev) => prev + 1);

    /////////////////////////////
    // クリックイベントのコールバック
    const handleVote = async () => {
        if (isWait) return;

        if (!drunkState) {
            setHadDrunk((hadDrunk = !hadDrunk));
        }
        countUp();

        updateVoteCount({ liqourId, userId, isDrunk: hadDrunk });

        await updateVoteModal();
    };

    const drunkState = !!(isDrunk || hadDrunk);
    const buttonText = drunkState ? 'もう飲んだよ！' : 'まだ飲んでないよ';

    return (
        <div className={`${style.voteButtonContainer}`}>
            <span
                className={`${style.votedBody} ${style.voteHide} ${
                    isDisplay ? style.voteActive : ''
                }`}
            >
                ❤️🍺
            </span>

            <p className="bold mb-8">🍺 みんなの飲んだよカウンター</p>

            <div className={`flex align-item-center ${style.voteButtonWrapper}`}>
                <button
                    className={`${style.voteButton} ${drunkState ? style.isVotedButton : ''}`}
                    onClick={() => handleVote()}
                >
                    {buttonText}
                </button>
                <p className={`${style.voteResult}`}>{voteCounter}杯目</p>
            </div>
        </div>
    );
}
