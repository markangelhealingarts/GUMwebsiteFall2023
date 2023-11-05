// src/App.js
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/Hompage_content';
import LoginPage from './components/Login_content';
import SignupPage from './components/Signup_content';
import StartMoving from './components/StartMoving';
import ProfilePage from './components/Profile_content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css'; // Consider moving your main CSS here
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/start_moving" element={<StartMoving />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
