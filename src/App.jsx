import React, { useState } from "react";
import SolutionList from "./components/SolutionList";

function App() {
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">LeetCode Practice</h1>

      {/* Difficulty Buttons */}
      <div className="flex gap-4 mb-6">
        {["Easy", "Medium", "Hard"].map((diff) => (
          <button
            key={diff}
            onClick={() => setDifficulty(diff)}
            className={`px-4 py-2 rounded font-semibold ${
              difficulty === diff
                ? "bg-blue-500 text-white"
                : "bg-white border border-blue-500 text-blue-500"
            } hover:bg-blue-600 hover:text-white transition`}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* List of Questions + Solutions */}
      <SolutionList difficulty={difficulty} />
    </div>
  );
}

export default App;
