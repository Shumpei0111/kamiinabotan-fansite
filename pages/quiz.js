import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Meta from "../components/meta";

import appendQuiz from "../storage/quiz";

import style from "../styles/quiz.module.scss";
import Link from "next/link";

export default function Quiz() {
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

        setCorrectPoint(resultArray.length);
        setModalOn(true);

        document.body.classList.add("overflow-y-hidden");
    };

    const checkedResult = () => {
        setModalOn(false);
        document.body.classList.remove("overflow-y-hidden");
    };

    // もう一度クイズをやる
    const reloadQuiz = () => {
        router.reload();
    };

    // 再度クイズをやるボタンをクリックするとクエリストリングが付随するので削除する
    useEffect(() => {
        router.replace('/quiz', undefined, {shallow: true});
        const s = document.createElement("script");
		s.setAttribute("src", "https://platform.twitter.com/widgets.js");
		s.setAttribute("async", "true");
		document.head.appendChild(s);
    }, []);

    // Twitterにシェア
    const shareToTwitter = () => {
        const via = "@seventhseven";
    };

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

                                <div className="textCenter flex just-center">
                                    {!answered ?
                                        <button className={style.answerButton} onClick={(e) => setAnswer(e)}>回答する！</button>
                                        :
                                        <div className="flex just-center flex-column margin-0 gap-16">
                                            <button className={`${style.answerButton} ${style.answerButton__retry} margin-0`} onClick={reloadQuiz}>もう一度チャレンジする!</button>

                                            <Link href="/quiz/answer">
                                                <a className={`${style.answerButton} ${style.answerButton__checkanswer} margin-0`}>答えを見る</a>
                                            </Link>

                                        </div>
                                    }
                                </div>
                            </form>

                            <div className="mt-60 mb-60">
                                <p>作者の塀先生もクイズに参加していただけました！結果は残念ながら9問正解...</p>
                                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">10問中、9問正解しました！🍺<br />上伊那ぼたんクイズ10問／<a href="https://twitter.com/seventhseven?ref_src=twsrc%5Etfw">@seventhseven</a>より<br /> <a href="https://t.co/nAGQq4pmdq">https://t.co/nAGQq4pmdq</a><br /> <a href="https://twitter.com/hashtag/%E4%B8%8A%E4%BC%8A%E9%82%A3%E3%81%BC%E3%81%9F%E3%82%93?src=hash&amp;ref_src=twsrc%5Etfw">#上伊那ぼたん</a><br /> <br />カスなので普通に間違えた</p>&mdash; 塀(H3Y) 『上伊那ぼたん』3巻＆LINEスタンプ発売中 (@tonarinohey) <a href="https://twitter.com/tonarinohey/status/1522580508269740035?ref_src=twsrc%5Etfw">May 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>

                            {answered && modalOn ?
                                <div className={style.resultModal}>
                                    <h3 className="textCenter">結果発表</h3>

                                    <div className={style.resultModal__item}>
                                        <p>{quizLength}問中、<span className={style.resultModal__correnctPoint}>{correctPoint}問正解</span>です！</p>
                                        {correctPoint === quizLength ? <p>全問正解です！🎉🎉🎉</p> : <></>}
                                        {correctPoint < quizLength && correctPoint > 7 ?  <p>😆おしい！あと一歩です！</p> : <></>}
                                        {correctPoint < 6 && correctPoint > 3 ?  <p>✊まだまだこれから！</p> : <></>}
                                        {correctPoint <= 3 ? <p>👀もう一度原作を読んでみよう！</p> : <></>}
                                        <div>
                                            <button onClick={shareToTwitter} className={style.resultModal__share} aria-label="twitter">
                                                <a
                                                    className={style.resultModal__shareText}
                                                    href={`https://twitter.com/share?text=${quizLength}問中、${correctPoint}問正解しました！🍺%0a上伊那ぼたんクイズ10問／@seventhsevenより%0a&related=seventhseven&hashtags=上伊那ぼたん%0a&url=https://yuriyoi.site/quiz%0a`}
                                                    target="_blank" rel="noopener noreferrer"
                                                >Twitterに結果を投稿する</a>
                                            </button>

                                            <button className={style.resultModal__ok} onClick={checkedResult}>OK</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </>)}
        </Layout>
    )
};