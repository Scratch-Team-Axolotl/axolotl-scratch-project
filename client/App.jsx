/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage.jsx';
import IntroPage from './components/IntroPage.jsx';
import Level1 from './components/Level1.jsx';
import Score from './components/Score.jsx';
// import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/intro' element={<IntroPage />} />
      <Route path='/level1' element={<Level1 />} />
      <Route path='/score' element={<Score />} />
    </Routes>
  );
};

export default App;
