import React, { useState } from "react";

const Question = ({
    question,
    currentQuestion,
    currentAnswer,
    setCurrentAnswer,
    questions,
}) => {
    return (
        <div className="question">
            <h2 className="question__text">
                <p className="question__number">
                    Вопрос {currentQuestion + 1} из {questions.length}.{" "}
                </p>
                {question.text}
            </h2>
            <ul className="question__answers">
                {question.answers.map((answer, index) => (
                    <li
                        className={currentAnswer === answer ? "active" : null}
                        onClick={() => {
                            setCurrentAnswer(answer);
                        }}
                        key={index}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
