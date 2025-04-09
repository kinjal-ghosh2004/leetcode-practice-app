// generateSolutionsMap.js

const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const workbook = xlsx.readFile("FinalExcel.xlsx");
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Optional: Normalize field names here if needed
const cleanedData = data.map(row => ({
  ID: row.ID,
  Title: row.Title,
  SolutionPath: row.SolutionPath,
  LeetcodeURL: row.LeetcodeURL,
}));

fs.writeFileSync(
  path.join(__dirname, "json", "SolutionsMap.json"),
  JSON.stringify(cleanedData, null, 2)
);

console.log("✅ SolutionsMap.json generated from FinalExcel.xlsx");
