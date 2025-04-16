import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = (difficulty) => {
    navigate("/quiz", { state: { difficulty } }); // Passing difficulty through route state
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Select Quiz Difficulty</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleStartQuiz("Easy")}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Easy
        </button>
        <button
          onClick={() => handleStartQuiz("Medium")}
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Medium
        </button>
        <button
          onClick={() => handleStartQuiz("Hard")}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default Home;
