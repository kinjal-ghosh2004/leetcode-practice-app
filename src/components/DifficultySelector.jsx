import React from "react";

function DifficultySelector({ difficulty, setDifficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div className="flex gap-4 mb-6">
      {levels.map((level) => {
        const isActive = difficulty === level;

        return (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`px-4 py-2 rounded font-semibold transition ${
              isActive
                ? "bg-blue-500 text-white"
                : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {level}
          </button>
        );
      })}
    </div>
  );
}

export default DifficultySelector;