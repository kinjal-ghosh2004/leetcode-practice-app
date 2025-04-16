const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.static("public")); // serves static solution files

// JSON data
const easy = require("./src/json/EasyData.json");
const medium = require("./src/json/MediumData.json");
const hard = require("./src/json/HardData.json");
const solutionMap = require("./src/json/SolutionsMap.json");

// Returns question list with embedded solution text
const getQuestionsWithSolutions = (questions) =>
  questions.map((q) => {
    const meta = solutionMap.find(
      (item) => item.ID === q.ID || item.Title === q.Title
    );
    const solutionPath = meta?.SolutionPath
      ? path.join(__dirname, "public", meta.SolutionPath)
      : null;

    let solution = "Solution not found.";
    if (solutionPath && fs.existsSync(solutionPath)) {
      solution = fs.readFileSync(solutionPath, "utf-8");
    }

    return {
      id: q.ID,
      title: q.Title,
      solution,
    };
  });

// API to get all questions with solutions by difficulty
app.get("/api/:difficulty", (req, res) => {
  const difficulty = req.params.difficulty;
  let questions;

  if (difficulty === "Easy") questions = easy;
  else if (difficulty === "Medium") questions = medium;
  else if (difficulty === "Hard") questions = hard;
  else return res.status(400).json({ error: "Invalid difficulty" });

  const withSolutions = getQuestionsWithSolutions(questions);
  res.json(withSolutions);
});

// API to fetch raw solution file
app.get("/solution", (req, res) => {
  const relPath = req.query.path;
  const fullPath = path.join(__dirname, "public", relPath);

  if (!fs.existsSync(fullPath)) {
    return res.status(404).send("Solution file not found.");
  }

  res.sendFile(fullPath);
});

app.get("/", (req, res) => res.send("API is running"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
