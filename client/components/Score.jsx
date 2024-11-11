import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { endGameMsg } from './playerFB';
// import '../../server/assets/test-stars.png';

const Score = () => {
  const navigate = useNavigate();
  const player = 'Ghost'; // TEST: fake player's username
  const playerScore = 1; // TEST: fake player's score
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const endGameMsg = {
    nice: `"Nice try, ${player} ! Take a closer look at the smaller details next time. AI-generated images often have subtle inconsistencies in textures and shadows that don’t quite match up. Keep practicing, and you’ll start to spot these differences more easily!”`,
    good: `“Good job, ${player}! You’re picking up on some of the key differences, but a bit more practice could help you reach the next level. Try focusing on areas like facial expressions, background clarity, and lighting effects—AI sometimes struggles to make these look truly natural.”`,
    almost: `“You’re almost there, ${player}! You’ve got a sharp eye for details, but a few differences slipped through. AI images often miss the finer nuances in realistic lighting and texture. With a bit more attention, you’ll be able to spot them all!”`,
    incredible: `“Incredible, ${player}! You’ve got a flawless eye for detail and the instincts of a true pro! Spotting every difference with ease shows real skill—congratulations on achieving a perfect score. Keep honing that talent!”`,
    disclaimerLose: `“Disclaimer: This advice has been carefully crafted by AI… and we’re 99% sure it’s actually helpful!” — ChatGPT`,
    disclaimerWin: `“Disclaimer: AI-generated advice from an AI game. Who better to recognize talent than a flawless AI?” — ChatGPT`,
  };

  // Store above data properly and use fetch to bring it back for use in Score Display
  // const fetchPlayerData = async (req, res) => {

  //   try {
  //     const res = await fetch('/api/scores')
  //     const data = await res.json();
  //     setPlayerName(data.username)
  //     setScore(data.score)
  //   }
  // }

  return (
    <div className='score'>
      <div className='score-display'>
        <h1 className='game-over'>GAME OVER</h1>
        <div className='score-content'>
          {/* <img src='../../server/assets/test-stars.png' alt='' /> */}
          <h2 className='player-score'>{`Score: ${playerScore} of 10`}</h2>
          <div className='player-feedback'>
            <p>
              {score <= 3
                ? endGameMsg.nice
                : score <= 6
                ? endGameMsg.good
                : score <= 9
                ? endGameMsg.almost
                : score === 10
                ? endGameMsg.incredible
                : null}
            </p>
            <p className='disclaimer'>
              {score === 10
                ? endGameMsg.disclaimerWin
                : endGameMsg.disclaimerLose}
            </p>
          </div>
        </div>

        <button
          className='game-btn'
          onClick={() => (window.location.href = '/intro')}
        >
          New Game
        </button>
        <button className='leader-btn' onClick={() => navigate('/leaderboard')}>
          Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Score;
