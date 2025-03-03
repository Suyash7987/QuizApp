import React from 'react';
import './Score.css';

function Score({ score, total, onRestart, answers, questions }) {
  return (
    <div className="score-container">
      <h2>Quiz Finished!</h2>
      <p>Your score is {score} out of {total}</p>
      <button onClick={onRestart}>Restart Quiz</button>

      <h3>Review Your Answers:</h3>
      <div className="review-container">
        {questions.map((question, index) => (
          <div key={index} className="review-card">
            <h4>Q{index + 1}: {question.question}</h4>
            <p>Your Answer: <span className={answers[index] === question.answer ? 'correct' : 'incorrect'}>
              {answers[index] || 'No Answer'}
            </span></p>
            {answers[index] !== question.answer && (
              <p>Correct Answer: <span className="correct">{question.answer}</span></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Score;
