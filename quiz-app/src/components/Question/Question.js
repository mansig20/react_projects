import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@mui/material";

const Question = ({
  currentQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currentQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currentQues + 1);
      setSelected();
    } else {
      setError("Please select an option first.");
    }
  };

  const handleQuit = () => {};

  return (
    <div className="question">
      <h1>Question {currentQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currentQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
