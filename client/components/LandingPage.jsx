import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImage from '../../server/assets/ai-axolotl.webp';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Game Title</h1>
      <img src={LandingImage} />
      <div>
        <button
          onClick={() => navigate('/intro')}
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '20px' }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
