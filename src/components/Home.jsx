import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = (difficulty) => {
    navigate("/quiz", { state: { difficulty } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to the Interview Guide
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Prepare for your coding interviews with curated questions and real-world challenges.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Choose a difficulty level below and start practicing now!
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Select a Difficulty Level
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleStartQuiz("Easy")}
            className="px-8 py-3 text-lg font-medium rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            Easy
          </button>
          <button
            onClick={() => handleStartQuiz("Medium")}
            className="px-8 py-3 text-lg font-medium rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            Medium
          </button>
          <button
            onClick={() => handleStartQuiz("Hard")}
            className="px-8 py-3 text-lg font-medium rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;