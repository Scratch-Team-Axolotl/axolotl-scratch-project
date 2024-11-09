import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const IntroPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const instructionString = '';
  const tipString = '';

  return (
    <div
      style={{
        border: '2px solid black',
        padding: '20px',
        borderRadius: '8px',
        width: '1000px',
        height: '800px',
        margin: '50px auto',
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to AImongus!</h1>
      <p>hi</p>
      <input
        type='text'
        placeholder='Enter Your Name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          marginTop: '20px',
          textAlign: 'center',
        }}
      />
      <div>
        <button
          onClick={() => navigate('/level1')}
          //want to save username to leaderboard when we click continue
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '20px' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
