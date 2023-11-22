// src/App.js
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/HompageContent';
import LoginPage from './components/LoginContent';
import SignupPage from './components/SignupContent';
import StartMoving from './components/StartMoving';
import ProfilePage from './components/ProfileContent';
import PasswordReset from './components/PasswordReset';
import Tidbits from './components/Tidbits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
import 'tailwindcss/tailwind.css';
import GuidingVideoContent from './components/GuidingVideoContent';

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
              <Route path="/tidbits" element={<Tidbits />} />
              <Route path="/easy" element={<GuidingVideoContent level={1} videoCollection={"GuidingVideos"}/>} />
              <Route path="/moderate" element={<GuidingVideoContent level={2} videoCollection={"GuidingVideos"}/>} />
              <Route path="/vigorous" element={<GuidingVideoContent level={3} videoCollection={"GuidingVideos"}/>} />
              <Route path="/easyTeaching" element={<GuidingVideoContent level={1} videoCollection={"TeachingVideos"}/>} />
              <Route path="/moderateTeaching" element={<GuidingVideoContent level={2} videoCollection={"TeachingVideos"}/>} />
              <Route path="/vigorousTeaching" element={<GuidingVideoContent level={3} videoCollection={"TeachingVideos"}/>} />
            </Routes>
          </Layout>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
