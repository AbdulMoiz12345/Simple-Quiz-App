import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Enter from './enter';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enter" element={<Enter />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
