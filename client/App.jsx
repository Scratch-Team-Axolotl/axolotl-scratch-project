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
// import Level1 from './components/Level1.jsx';
import Score from './components/Score.jsx';
// import Container from 'react-bootstrap/Container';
import Level from './components/Level.jsx';
import Leaderboard from './components/Leaderboard.jsx';

const App = () => {
  // added state for score here because it must persist across the level pages
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');
  const gameLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/intro'
          element={<IntroPage username={username} setUsername={setUsername} />}
        />
        <Route
          path='/score'
          element={<Score score={score} username={username} />}
        />

        {gameLevels.map((lvl) => (
          <Route
            key={lvl}
            path={`/level${lvl}`}
            element={
              <Level levelNumber={lvl} score={score} updateScore={setScore} />
            }
          />
        ))}

        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
