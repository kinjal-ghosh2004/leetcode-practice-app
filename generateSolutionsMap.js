const fs = require('fs');
const xlsx = require('xlsx');

// List of question IDs that are Premium
const premiumIds = [359, 681, 1153, 489, 248, 683, 642];

// Read SolutionsMap.json
const solutionsMapPath = './src/json/SolutionsMap.json';
const solutionsMap = JSON.parse(fs.readFileSync(solutionsMapPath, 'utf8'));

// Read the Excel file containing the links (make sure it's an .xlsx format)
const excelPath = './FinalExcel.xlsx';
const workbook = xlsx.readFile(excelPath);

// Get the first sheet in the Excel file
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the sheet to JSON
const excelData = xlsx.utils.sheet_to_json(sheet);

// Create a map from the Excel data where each ID/Title is mapped to the "Actual Link to problem"
const linksMap = excelData.reduce((map, row) => {
  if (row['Actual Link to problem'] && row['Title']) {
    map[row.Title] = row['Actual Link to problem'];
  }
  return map;
}, {});

// Add links and Premium attribute to SolutionsMap
solutionsMap.forEach(solution => {
  const link = linksMap[solution.Title] || linksMap[solution.ID]; // Search by Title or ID
  if (link) {
    solution.Link = link;
  }

  // Add Premium attribute based on the question ID
  solution.Premium = premiumIds.includes(solution.ID) ? 'yes' : 'no';
});

// Write the updated SolutionsMap back to the file
fs.writeFileSync(solutionsMapPath, JSON.stringify(solutionsMap, null, 2), 'utf8');

console.log('Updated SolutionsMap.json with links and Premium status!');
