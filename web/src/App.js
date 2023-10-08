// src/App.js
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/Hompage_content';
import './App.css'; // Consider moving your main CSS here
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
