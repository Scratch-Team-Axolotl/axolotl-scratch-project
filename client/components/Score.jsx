import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';

const Score = () => {
  return (
    <div className='page' id='score'>
      <div className='score-display'>
        <h1>GAME OVER</h1>
        <br />
        <h3>5.aaa/10</h3>
      </div>
      <div className='advice'>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
      </div>
      <div>
        {/* testing the image link */}
        <img src='https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0ded463a-9665-4578-b0a0-b5195ce9835c/original=true,quality=90/73BA569C1C9DEE1F5B730314A1BA1488B998C9DA1EC171D7EBB9F0F506887B76.jpeg' />
      </div>
      {/* added the leaderboard component */}
      <Leaderboard />
      {/* Modified the restart button a bit */}
      <button
        // added the button for OAuth
        onClick={() => (window.location.href = '/intro')}
        style={{ fontSize: '20px', padding: '10px 20px', marginTop: '15px' }}
        className='restart-button'
      >
        Start Over
      </button>
    </div>
  );
};

export default Score;
