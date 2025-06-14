import React from 'react';
import { Routes, Route } from 'react-router-dom';

import mainlogo from "./assets/logo/main-logo.png"; 
import desktopimg from "./assets/images/laptop.png";
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Team from './pages/Team/Team';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
