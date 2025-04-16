import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import easyData from "../json/EasyData.json";
import mediumData from "../json/MediumData.json";
import hardData from "../json/HardData.json";
import solutionMap from "../json/SolutionsMap.json";
import SolutionViewer from "./SolutionViewer";

const findSolution = (question) =>
  solutionMap.find(
    (item) => item.ID === question.ID || item.Title === question.Title
  );

const QuestionGenerator = () => {
  const location = useLocation();
  const defaultDiff = location.state?.difficulty || "Easy";
  const [difficulty, setDifficulty] = useState(defaultDiff);
  const [question, setQuestion] = useState(null);
  const [solutionPath, setSolutionPath] = useState("");
  const [isPremiumUser, setIsPremiumUser] = useState(false); // toggle for premium

  const dataMap = {
    Easy: easyData,
    Medium: mediumData,
    Hard: hardData,
  };

  const generateQuestion = () => {
    const questions = dataMap[difficulty];
    // Filter out premium-only questions if not a premium user
    const filtered = isPremiumUser
      ? questions
      : questions.filter((q) => {
          const sol = findSolution(q);
          return sol?.Premium !== "yes";
        });

    if (filtered.length === 0) {
      alert("No available questions in this category for free users!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    const selected = filtered[randomIndex];
    setQuestion(selected);

    const solMeta = findSolution(selected);
    setSolutionPath(solMeta ? solMeta.SolutionPath : "");
  };

  const currentSolution = question ? findSolution(question) : null;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Leetcode Practice
      </h1>

      {/* Premium Toggle */}
      <div className="flex justify-center items-center mb-4 gap-2">
        <label className="text-gray-700 font-medium">Are you subscribed to LeetCode Premium?</label>
        <input
          type="checkbox"
          checked={isPremiumUser}
          onChange={(e) => setIsPremiumUser(e.target.checked)}
          className="toggle toggle-primary"
        />
      </div>

      {/* Difficulty Buttons */}
      <div className="flex justify-center mb-6">
        {["Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => {
              setDifficulty(level);
              setQuestion(null);
              setSolutionPath("");
            }}
            className={`mx-2 px-4 py-2 rounded-lg border font-medium ${
              difficulty === level
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            } hover:bg-blue-700 hover:text-white transition`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={generateQuestion}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          Generate Question
        </button>
      </div>

      {/* Display Question */}
      {question && (
        <div className="mt-6 p-5 border rounded-xl bg-gray-50 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">{question.Title}</h2>
            {currentSolution?.Link && (
              <a
                href={currentSolution.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm hover:text-blue-800"
              >
                Link to Question
              </a>
            )}
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-700">Approach:</h3>
            <ul className="list-disc list-inside text-gray-800">
              {question.Approach.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">Hints:</h3>
            <details className="mt-2 text-gray-800 cursor-pointer">
              <summary className="underline text-blue-600">Show Hints</summary>
              <ul className="list-disc list-inside mt-2">
                {question.Hints.map((hint, idx) => (
                  <li key={idx}>{hint}</li>
                ))}
              </ul>
            </details>
          </div>

          {/* Solution Viewer */}
          {solutionPath && <SolutionViewer filePath={solutionPath} />}
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;
