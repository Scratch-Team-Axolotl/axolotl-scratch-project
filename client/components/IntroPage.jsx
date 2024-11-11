import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fakeTitanic from '../../server/assets/titantic_1_ai.png';
import realTitanic from '../../server/assets/titantic_2_real.png';
// /Users/jeetpatel/axolotl-scratch-project/server/assets/titantic_1_ai.png

const IntroPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const instructionString =
    'This game is about learning how to differentiate between fake and reality. You will be shown two photos in each level, and you must find the picture that is generated by AI. There will be 10 levels, and the difficulty level will increase every 3 levels. Enter your name and click continue to start the game! ';
  const tipString =
    'Investigate both of the picture examples below and try to look for a pattern to help you. Do you notice anything that could help you differentiate between the two? ';

  // added the handleStartGame function to start the game
  const handleStartGame = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert('Please enter a valid name!');
      return;
    }

    try {
      const response = await fetch('/api/addingPlayerName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.trim() }),
        credentials: 'include', // include cookies in the request
      });

      const data = await response.json();

      if (data.addingNameSuccess) {
        navigate('/level1');
      } else {
        throw new Error(data.error || 'Server response failed');
      }
    } catch (error) {
      console.error('Detailed error:', error);
      alert('Failed to start game: ' + error.message);
    }
  };

  //temporary styling
  //added two p tags for the instructions and the tips
  //added two images
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '20px',
        borderRadius: '8px',
        width: '1000px',
        height: 'auto',
        margin: '50px auto',
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to AImongus!!</h1>
      <p
        //added two p tags for the instructions and the tips
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          marginTop: '20px',
          textAlign: 'left',
        }}
      >
        <strong>Instructions:</strong> {instructionString}
      </p>
      <p
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          marginTop: '20px',
          textAlign: 'left',
        }}
      >
        <strong>Tips:</strong> {tipString}
      </p>
      <input
        //input box for user name
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
          // changed the button to start the game
          onClick={handleStartGame}
          style={{
            fontSize: '20px',
            padding: '10px 20px',
            marginTop: '15px',
            marginRight: '10px',
          }}
        >
          Start Game
        </button>
        <button
          // added the button for OAuth
          onClick={() => (window.location.href = '/api/auth/github')}
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '15px' }}
        >
          Sign in with GitHub
        </button>
      </div>
      <img
        //added two images
        src={fakeTitanic}
        style={{ width: '500px', height: '380px', marginTop: '15px' }}
      />
      <img
        src={realTitanic}
        style={{ width: '500px', height: '380px', marginTop: '15px' }}
      />
    </div>
  );
};

export default IntroPage;
