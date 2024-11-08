import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Intro Page</h1>
      <div>
        <button
          onClick={() => navigate('/level1')}
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '20px' }}
        >
          Continue
        </button>
      </div>{' '}
    </div>
  );
};

export default IntroPage;
