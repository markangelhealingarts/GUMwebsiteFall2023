import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/HompageContent';
import LoginPage from './components/LoginContent';
import SignupPage from './components/SignupContent';
import StartMoving from './components/StartMoving';
import TidbitsPage from './components/Tidbits';
import ProfilePage from './components/ProfileContent';
import PasswordReset from './components/PasswordReset';
import PrivacyPolicy from './components/PrivacyPolicyContent';
import Contact from './components/ContactContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
import 'tailwindcss/tailwind.css';
import GuidingVideoContent from './components/GuidingVideoContent';
import VideoContent from './components/VideoContent'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/start_moving" element={<StartMoving />} />
              <Route path="/tidbits_blog" element={<TidbitsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/tidbits" element={<TidbitsPage />} />
              <Route path="/easy" element={<GuidingVideoContent level={1} videoCollection={"GuidingVideos"}/>} />
              <Route path="/moderate" element={<GuidingVideoContent level={2} videoCollection={"GuidingVideos"}/>} />
              <Route path="/vigorous" element={<GuidingVideoContent level={3} videoCollection={"GuidingVideos"}/>} />
              <Route path="/easyTeaching" element={<GuidingVideoContent level={1} videoCollection={"TeachingVideos"}/>} />
              <Route path="/moderateTeaching" element={<GuidingVideoContent level={2} videoCollection={"TeachingVideos"}/>} />
              <Route path="/vigorousTeaching" element={<GuidingVideoContent level={3} videoCollection={"TeachingVideos"}/>} />
              <Route path="/video/:videoLevel/:videoSession" element={<VideoContent />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
