import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AdCard from './components/AdCard';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import PostAdPage from './pages/PostAdPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="ad-cards-container">
              <AdCard title="First Ad" description="This is the first ad." />
              <AdCard title="Second Ad" description="This is the second ad." />
            </div>
          } />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post-ad" element={<PostAdPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;