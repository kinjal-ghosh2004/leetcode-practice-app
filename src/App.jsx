import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Quiz from "./components/Quiz";
import Report from "./components/Report";
import QuestionGenerator from "./components/QuestionGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/report" element={<Report />} />
        <Route path="/practice" element={<QuestionGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;