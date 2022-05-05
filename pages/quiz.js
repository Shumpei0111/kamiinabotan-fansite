import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";

import appendQuiz from "../storage/quiz";

import style from "../styles/quiz.module.scss";

export default function Quiz() {
    const isRelease = true;
    const router = useRouter();

    const [answered, setAnswered] = useState(false);
    const [modalOn, setModalOn] = useState(false);

    // 正解のリスト
    const correctAnswers = appendQuiz.map( quiz => quiz.a );

    // ユーザの入力した結果を受け取る（初期値は1）
    const userAnswerList = appendQuiz.map( _ => 1 );

    // 正当数
    const [correctPoint, setCorrectPoint] = useState(0);
    
    // 問題数
    const quizLength = correctAnswers.length;

    // radioボタン変更したらuserAnswerListを更新する
    const handleChange = (e, index) => {
        const { id } = e.target;
        const userAnser = id.replace(/^Q[0-9]+_/, '');

        userAnswerList.splice( index, 1, Number(userAnser) );
    };

    // 正解数の算出
    const setAnswer = (e) => {
        e.preventDefault();

        setAnswered(true);
        const resultArray = correctAnswers.filter( (ans,ind) => userAnswerList[ind] === ans );
        console.log(correctAnswers, resultArray);

        setCorrectPoint(resultArray.length);
        setModalOn(true);
    };

    const checkedResult = () => setModalOn(false);

    return (
        <Layout>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (<>
                <Meta title="上伊那ぼたんクイズ" />
                <div>
                {modalOn ?
                    <div className={style.modalOnCover} />
                    :
                    <></>
                }
                {isRelease ? (
                    <div>
                        <h2>
                            <p className="head__ja">上伊那ぼたんクイズ</p>
                            <span className="head__en">QUIZ</span>
                        </h2>

                        <p className={style.intro}>10問のクイズに答えてあなたの「上伊那ぼたん力(ぢから)」をチェックしましょう！</p>

                        <div className={`relative ${style.quizContainer}`}>
                            {/** クイズ一覧 */}
                            <form className={style.quiz}>

                                {appendQuiz.map( (quiz, index) => (
                                    <div className={style.quizWrapper} key={quiz.id}>
                                        <h3 id={index}>{index+1}. {quiz.q}</h3>

                                        <ul className={style.quizList}>

                                            {quiz.choice.map( (q, ind) => (
                                                <li className={style.quizList__item} key={q}>

                                                    <label htmlFor={String(`Q${index}_${ind+1}`)}>
                                                    {ind === 0 ?
                                                        <input className="mr-8" type="radio" id={String(`Q${index}_${ind+1}`)} name={`Q${index}`} defaultChecked onChange={(e) => handleChange(e, index)} />
                                                        :
                                                        <input className="mr-8" type="radio" id={String(`Q${index}_${ind+1}`)} name={`Q${index}`} onChange={(e) => handleChange(e, index)} />}
                                                    {q}
                                                    </label>

                                                </li>
                                            ) )}

                                        </ul>
                                    </div>
                                ) )}

                                <div className="textCenter">
                                    {!answered ?
                                        <button className={style.answerButton} onClick={(e) => setAnswer(e)}>回答する！</button>
                                        :
                                        <button className={`${style.answerButton} ${style.answerButton__complete}`} onClick={(e) => e.preventDefault()}>回答しました</button>
                                    }
                                </div>
                            </form>
                            {answered && modalOn ?
                                <div className={style.resultModal}>
                                    <h3 className="textCenter">結果発表</h3>
                                    <div className={style.resultModal__item}>
                                        <p>{quizLength}問中、<span className={style.resultModal__correnctPoint}>{correctPoint}問正解</span>です！</p>
                                        <button className={style.resultModal__ok} onClick={checkedResult}>OK</button>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </div>
                ):( <></>
                )}
                </div>
            </>)}
        </Layout>
    )
};