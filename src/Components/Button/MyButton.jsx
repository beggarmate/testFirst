import React from "react";

const MyButton = ({
    setResult,
    setCurrentQuestion,
    currentQuestion,
    currentAnswer,
    setCurrentAnswer,
    result,
    questions,
    children,
    setShowResult,
    showResult,
}) => {
    return (
        <button
            onClick={() => {
                if (showResult) {
                    setCurrentQuestion(0);
                    setCurrentAnswer("");
                    setResult(0);
                    setShowResult(false);
                    return;
                }

                if (currentQuestion === questions.length) {
                    setShowResult(true);
                    return;
                }

                if (currentAnswer === questions[currentQuestion].trueAnswer) {
                    setResult(result + 1);
                }
                setCurrentQuestion(currentQuestion + 1);
                setCurrentAnswer("");
            }}
            disabled={
                currentAnswer || currentQuestion === questions.length
                    ? false
                    : true
            }
        >
            {children}
        </button>
    );
};

export default MyButton;
