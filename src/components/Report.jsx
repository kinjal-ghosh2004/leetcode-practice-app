import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

function Report() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, userAnswers, difficulty } = location.state || {};

  // If no state is available, display error message
  if (!totalQuestions || !userAnswers) {
    return <div>Error: No quiz results available.</div>;
  }

  const handleGoToPractice = () => {
    navigate('/practice', { state: { difficulty } });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Quiz Completed! Your Score: {score}/{totalQuestions}
      </h2>
      <p className="mb-6 text-lg font-medium">
        {score >= totalQuestions * 0.8 
          ? "Great job! You're ready!" 
          : "Keep practicing, you'll get there!"}
      </p>

      <div className="space-y-6">
        {userAnswers.map((answer, index) => {
          const question = questions[difficulty][index];
          const isCorrect = answer === question.correct;
          return (
            <div key={index} className={`p-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'} rounded`}>
              <p className="font-semibold">{question.question}</p>
              <p>Your answer: {question.options[answer]}</p>
              <p className="text-sm text-gray-600">Correct answer: {question.options[question.correct]}</p>
              <p className="text-sm text-gray-600">Explanation: {question.explanation}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleGoToPractice}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Practice
      </button>
    </div>
  );
}

export default Report;
