import React, { useState } from 'react';
import Timer from './Timer';
import './Quiz.css';

function Quiz({ category, questions, onQuizEnd }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const currentQuestion = questions[currentIndex];
  const time = 15;
  const [Endtime, setEndtime] = useState(time);

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setEndtime(time);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTimeUp = () => {
    handleNext();
  };

  const handleFinish = () => {
    onQuizEnd(score, answers);
  };

  return (
    <div className="quiz-container">
      <h2>{category} Quiz</h2>
      <div className="question-card">
        <h3>{currentQuestion.question}</h3>
        <Timer key={currentIndex} initialTime={Endtime} onTimeUp={handleTimeUp} />
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question-${currentIndex}`}
                value={option}
                checked={answers[currentIndex] === option}
                onChange={() => handleAnswer(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          {currentIndex < questions.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleFinish}>Finish</button>
          )}
          <button onClick={handleFinish} className="finish-button">
            Finish Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
