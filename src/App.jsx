import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import FindLawyer from './pages/FindLawyer';
import Contact from './pages/Contact';
import ExpertSupport from './pages/ExpertSupport';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import LawyerDashboard from './pages/LawyerDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/find-lawyer" element={<FindLawyer />} />
            <Route path="/expert-support" element={<ExpertSupport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;