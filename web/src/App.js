// src/App.js
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/Hompage_content';
import LoginPage from './components/Login_content';
import SignupPage from './components/Signup_content';
import StartMoving from './components/StartMoving';
import ProfilePage from './components/Profile_content';
import PasswordReset from './components/PasswordReset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
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
              <Route path="/password-reset" element={<PasswordReset />} />
            </Routes>
          </Layout>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
