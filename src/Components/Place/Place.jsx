import React, { useState } from "react";
import Question from "../Question/Question";
import MyButton from "../Button/MyButton";
import Result from "../Result/Result";
const questions = [
    { text: "2 + 2 ?", answers: ["2", "8", "9", "4"], trueAnswer: "4" },
    {
        text: "Выберите гласную букву",
        answers: ["а", "б", "г", "в"],
        trueAnswer: "а",
    },
    {
        text: "сколько месяцев в году?",
        answers: ["9", "13", "12", "10"],
        trueAnswer: "12",
    },
    {
        text: "H2O это:",
        answers: ["Вода", "Углерод", "Серебро", "Платина"],
        trueAnswer: "Вода",
    },
    {
        text: "Россия это:",
        answers: ["Страна", "Город", "Планета", "Созвездие"],
        trueAnswer: "Страна",
    },
];

const Place = () => {
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");

    return (
        <main className="place">
            {showResult ? (
                <Result result={result} questions={questions} />
            ) : null}
            {currentQuestion === questions.length ? null : (
                <Question
                    result={result}
                    currentQuestion={currentQuestion}
                    question={questions[currentQuestion]}
                    currentAnswer={currentAnswer}
                    setCurrentAnswer={setCurrentAnswer}
                    questions={questions}
                />
            )}

            <MyButton
                setResult={setResult}
                setCurrentQuestion={setCurrentQuestion}
                currentQuestion={currentQuestion}
                currentAnswer={currentAnswer}
                setCurrentAnswer={setCurrentAnswer}
                questions={questions}
                result={result}
                setShowResult={setShowResult}
                showResult={showResult}
            >
                {showResult
                    ? "Заново"
                    : currentQuestion === questions.length
                    ? "Закончить и показать результаты"
                    : "Дальше"}
            </MyButton>
        </main>
    );
};

export default Place;
