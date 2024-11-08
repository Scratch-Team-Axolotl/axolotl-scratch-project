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

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import IntroPage from './components/IntroPage.jsx';
import Level1 from './components/Level1.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/intro' element={<IntroPage />} />
        <Route path='/level1' element={<Level1 />} />
      </Routes>
    </div>
  );
};

export default App;
