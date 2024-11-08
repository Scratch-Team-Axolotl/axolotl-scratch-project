import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../server/assets/ai-easy-cat-1.png';
import Image2 from '../../server/assets/ai-easy-portrait-1.png';

const Level1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Level 1</p>
      <img src={Image1} style={{ width: '500px', height: 'auto' }} />
      <img src={Image2} style={{ width: '500px', height: 'auto' }} />
      <div>
        <button
          onClick={() => navigate('/level2')}
          style={{ fontSize: '20px', padding: '10px 20px', marginTop: '20px' }}
        >
          Next Level
        </button>
      </div>{' '}
    </div>
  );
};

export default Level1;
