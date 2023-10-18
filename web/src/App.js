// src/App.js
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/Hompage_content';
import StartMoving from './components/StartMoving';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Consider moving your main CSS here
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/start_moving" element={<StartMoving />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
