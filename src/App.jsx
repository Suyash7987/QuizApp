import { useEffect, useState } from 'react';
import Categories from './Components/Categories';
import questionsData from './questionsData';
import Quiz from './Components/Quiz';
import Score from './Components/Score';
import './App.css';

function App() {
  const categories = Object.keys(questionsData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [finalScore, setFinalScore] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setAnswers([]); // Clear previous answers when selecting a new category
  };

  const handleRestart = () => {
    setSelectedCategory(null);
    setFinalScore(null);
    setAnswers([]); // Reset answers on restart
  };

  const handleQuizEnd = (score, answers) => {
    setFinalScore(score);
    setAnswers(answers); // Store answers when the quiz ends
  };

  return (
    <div className="app-container">
      {!selectedCategory ? (
        <Categories
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      ) : finalScore !== null ? (
        <Score
          score={finalScore}
          total={questionsData[selectedCategory].length}
          onRestart={handleRestart}
          answers={answers}
          questions={questionsData[selectedCategory]}
        />
      ) : (
        <Quiz
          category={selectedCategory}
          questions={questionsData[selectedCategory]}
          onQuizEnd={handleQuizEnd}
        />
      )}
    </div>
  );
}

export default App;
