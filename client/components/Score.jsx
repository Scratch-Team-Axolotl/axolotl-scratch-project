import React from 'react';

const Score = () => {
  return (
    <div className='page' id='score'>
      <div className='score-display'>
        <h1>GAME OVER</h1>
        <br />
        <h3>5/10</h3>
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
      <button className='start-button' to='/level1'>
        Start Over
      </button>
    </div>
  );
};

export default Score;
