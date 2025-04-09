import React, { useState } from "react";
import easyData from "../json/EasyData.json";
import mediumData from "../json/MediumData.json";
import hardData from "../json/HardData.json";
import solutionMap from "../json/SolutionsMap.json";

const getSolutionsByDifficulty = (difficulty) => {
  const sourceMap = {
    Easy: easyData,
    Medium: mediumData,
    Hard: hardData,
  };
  const data = sourceMap[difficulty];
  return data.map((question) => {
    const solMeta = solutionMap.find(
      (item) => item.ID === question.ID || item.Title === question.Title
    );
    return {
      ...question,
      SolutionPath: solMeta ? solMeta.SolutionPath : "",
    };
  });
};

const SolutionList = ({ difficulty }) => {
  const [expanded, setExpanded] = useState(null);
  const [solutions, setSolutions] = useState({});

  const questions = getSolutionsByDifficulty(difficulty);

  const handleToggle = async (index, path) => {
    if (expanded === index) {
      setExpanded(null);
      return;
    }

    if (!solutions[path]) {
      try {
        const res = await fetch(`/${path}`);
        const text = await res.text();
        setSolutions((prev) => ({ ...prev, [path]: text }));
      } catch (err) {
        console.error("Failed to load solution:", err);
        setSolutions((prev) => ({ ...prev, [path]: "Error loading solution." }));
      }
    }

    setExpanded(index);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {questions.map((q, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">{q.Title}</h3>

          <details className="mb-2">
            <summary className="font-semibold text-blue-600 cursor-pointer">Approach</summary>
            <ul className="list-disc list-inside mt-2 text-gray-800">
              {q.Approach.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </details>

          <details className="mb-2">
            <summary className="font-semibold text-blue-600 cursor-pointer">Hints</summary>
            <ul className="list-disc list-inside mt-2 text-gray-800">
              {q.Hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          </details>

          {q.SolutionPath && (
            <div className="mt-2">
              <button
                onClick={() => handleToggle(index, q.SolutionPath)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                {expanded === index ? "Hide Solution" : "Show Solution"}
              </button>

              {expanded === index && (
                <pre className="mt-3 bg-gray-100 p-4 rounded overflow-x-auto text-sm whitespace-pre-wrap">
                  <code>{solutions[q.SolutionPath]}</code>
                </pre>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SolutionList;
