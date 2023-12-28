import React, { useState } from "react";
import Question from "../Question/Question";
import MyButton from "../Button/MyButton";
import Result from "../Result/Result";
import { questions } from "./constants.js";

const Form = () => {
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");

    return (
        <main className="form">
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

export default Form;
