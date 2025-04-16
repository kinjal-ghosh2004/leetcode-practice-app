import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty;

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (!difficulty) {
      navigate("/");
      return;
    }
    setQuizQuestions(questions[difficulty] || []);
  }, [difficulty, navigate]);

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const updatedAnswers = [...userAnswers, selectedOption];
    setUserAnswers(updatedAnswers);
    setSelectedOption(null);

    const isLastQuestion = currentQuestionIndex + 1 === quizQuestions.length;

    if (isLastQuestion) {
      const score = updatedAnswers.reduce((acc, answer, index) => (
        answer === quizQuestions[index].correct ? acc + 1 : acc
      ), 0);

      navigate("/report", {
        state: {
          score,
          totalQuestions: quizQuestions.length,
          userAnswers: updatedAnswers,
          difficulty,
        },
      });
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  if (!quizQuestions.length) {
    return <p className="text-center mt-10">Loading quiz...</p>;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name="option"
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {currentQuestionIndex + 1 === quizQuestions.length ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;