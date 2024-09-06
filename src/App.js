// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import './App.css'; // Importing the global styling

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:title" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
