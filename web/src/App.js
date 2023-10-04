// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Consider moving your main CSS here
import 'tailwindcss/tailwind.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Footer />
            {/* Any Modals like "read-more" and "disclaimer" can be components too and included here */}
        </div>
    );
}

export default App;
