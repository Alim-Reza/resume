import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { OneColumnResume } from './OneColumn/OneColumnResume';
import TwoColumn from './TwoColumn/TwoColumn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-column" element={<OneColumnResume />} />
        <Route path="/double-column" element={<TwoColumn />} />
      </Routes>
    </Router>
  );
}

export default App;
