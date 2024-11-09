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
import LandingPage from './components/LandingPage.jsx';
import IntroPage from './components/IntroPage.jsx';
import Level from './components/Level.jsx';

const App = () => {
  // added state for score here because it must persist across the level pages
  const [score, setScore] = useState(0);

  // from Quin: added all the separate level routes here
  // don't know how to simplify this
  // but at least there's not multiple level components
  // i had each route on one line but prettier ruined it when i saved
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/intro' element={<IntroPage />} />
        <Route
          path='/level1'
          element={
            <Level levelNumber={1} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level2'
          element={
            <Level levelNumber={2} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level3'
          element={
            <Level levelNumber={3} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level4'
          element={
            <Level levelNumber={4} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level5'
          element={
            <Level levelNumber={5} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level6'
          element={
            <Level levelNumber={6} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level7'
          element={
            <Level levelNumber={7} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level8'
          element={
            <Level levelNumber={8} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level9'
          element={
            <Level levelNumber={9} score={score} updateScore={setScore} />
          }
        />
        <Route
          path='/level10'
          element={
            <Level levelNumber={10} score={score} updateScore={setScore} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
