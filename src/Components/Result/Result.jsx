import React from "react";

const Result = ({ result, questions }) => {
    return (
        <div>
            <h2>Правильных ответов: {result}</h2>
            <h2>Неправильных ответов: {questions.length - result}</h2>
            <h2>
                Процент правильных ответов:{" "}
                {((result * 100) / questions.length).toFixed(2)}
            </h2>
        </div>
    );
};

export default Result;
