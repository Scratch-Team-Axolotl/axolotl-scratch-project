import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { endGameMsg } from './playerFB';
// import '../../server/assets/test-stars.png';

const Score = ({ score, username }) => {
  const navigate = useNavigate();

  const endGameMsg = {
    nice: `"Nice try, ${username} ! Take a closer look at the smaller details next time. AI-generated images often have subtle inconsistencies in textures, texts and shadows that don’t quite match up. Keep practicing, and you’ll start to spot these differences more easily!”`,
    good: `“Good job, ${username}! You’re picking up on some of the key differences, but a bit more practice could help you reach the next level. Try focusing on areas like facial expressions, background clarity, and lighting effects—AI sometimes struggles to make these look truly natural.”`,
    almost: `“You’re almost there, ${username}! You’ve got a sharp eye for details, but a few differences slipped through. AI images often miss the finer nuances in realistic lighting and texture. With a bit more attention, you’ll be able to spot them all!”`,
    incredible: `“Incredible, ${username}! You’ve got a flawless eye for detail and the instincts of a true pro! Spotting every difference with ease shows real skill—congratulations on achieving a perfect score. Keep honing that talent!”`,
    disclaimerLose: `“Disclaimer: This advice has been carefully crafted by AI… and we’re 99% sure it’s actually helpful!” — ChatGPT`,
    disclaimerWin: `“Disclaimer: AI-generated advice from an AI game. Who better to recognize talent than a flawless AI?” — ChatGPT`,
  };

  // Store above data properly and use fetch to bring it back for use in Score Display
  const fetchPlayerData = async () => {
    try {
      const response = await fetch('/api/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, score }),
      });
    } catch (error) {
      console.error('Detailed error:', error);
      alert('Failed to update score: ' + error.message);
    }
  };

  fetchPlayerData();

  return (
    <div className='score'>
      <div className='score-display'>
        <h1 className='game-over'>GAME OVER</h1>
        <div className='score-content'>
          {/* <img src='../../server/assets/test-stars.png' alt='' /> */}
          <h2 className='player-score'>{`Score: ${score} of 10`}</h2>
          <div className='score-msg'>
            <p className='player-feedback'>
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
