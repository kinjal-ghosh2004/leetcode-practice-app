import React from "react";

function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <div className="flex gap-4 mb-6">
      {["Easy", "Medium", "Hard"].map((diff) => (
        <button
          key={diff}
          onClick={() => setDifficulty(diff)}
          className={`px-4 py-2 rounded font-semibold ${difficulty === diff
            ? "bg-blue-500 text-white"
            : "bg-white border border-blue-500 text-blue-500"
            } hover:bg-blue-600 hover:text-white transition`}
        >
          {diff}
        </button>
      ))}
    </div>
  );
}

export default DifficultySelector;
