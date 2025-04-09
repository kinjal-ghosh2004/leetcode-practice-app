const fs = require("fs");
const path = require("path");
const mapFile = path.join(__dirname, "json", "SolutionsMap.json");

let map = require(mapFile);

map = map.map(entry => ({
  ...entry,
  SolutionPath: `${entry.ID}.py`
}));

fs.writeFileSync(mapFile, JSON.stringify(map, null, 2));
console.log("SolutionsMap.json updated ✅");
