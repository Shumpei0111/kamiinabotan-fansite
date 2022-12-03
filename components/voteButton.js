import { useState, useEffect } from 'react';
import style from '../styles/voteButton.module.scss';

export default function VoteButton({ liqourId, putVotedState, votePoint }) {
    const _liquorId = liqourId;
    const [isDisplay, setDisplay] = useState(false);
    const [voteCounter, setVoteCounter] = useState(0);
    const [isVoted, setVoted] = useState(false);
    const [isWait, setWait] = useState(false);

    const wait = async (delay = 3000) => {
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
    const countUp = (counter) => setVoteCounter(counter + 1);
    const countDown = (counter) => setVoteCounter(counter - 1);

    const updateCount = (count) => {
        if (!isVoted) {
            // countUp(count);
            setVoted(true);
            console.log(_liquorId);
            putVotedState(_liquorId);
        } else {
            // countDown(count);
            setVoted(false);
            console.log(_liquorId);
            putVotedState(_liquorId);
        }
    };

    /////////////////////////////
    // クリックイベントのコールバック
    const handleVote = async () => {
        if (isWait) return;

        let count = voteCounter;
        updateCount(count);

        await updateVoteModal();
    };

    const buttonText = isVoted ? 'もう飲んだよ！' : 'まだ飲んでないよ';

    return (
        <div className={`${style.voteButtonContainer}`}>
            <span
                className={`${style.votedBody} ${style.voteHide} ${
                    isDisplay ? style.voteActive : ''
                }`}
            >
                ❤️🍺
            </span>

            <p className="bold mb-8">🍺 これ飲んだよカウンター</p>

            <div className={`flex align-item-center ${style.voteButtonWrapper}`}>
                <button
                    className={`${style.voteButton} ${isVoted ? style.isVotedButton : ''}`}
                    onClick={() => handleVote()}
                >
                    {buttonText}
                </button>
                <p className={`${style.voteResult}`}>{voteCounter}杯目</p>
            </div>
        </div>
    );
}
