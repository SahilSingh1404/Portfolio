import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import './App.css';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
