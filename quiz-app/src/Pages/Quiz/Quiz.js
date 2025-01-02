import React, { useState } from "react";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "./Quiz.css";
import Question  from "../../components/Question/Question"; 

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestion].category}</span>
            <span>Score: {score}</span>
          </div>

          <Question 
            currentQues={currentQuestion}
            setCurrQues={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
