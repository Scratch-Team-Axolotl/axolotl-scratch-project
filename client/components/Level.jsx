import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { levels } from './levelsData';
import Navbar from './Navbar';

const Level = ({ levelNumber, score, updateScore }) => {
  const navigate = useNavigate();
  // navbar button state
  const [isNavOpen, setIsNavOpen] = useState(false);

  // loads the images for the current level and the index of the correct answer:
  const { images, aiIndex } = levels[levelNumber - 1];
  // to send the users a message if they're right or wrong:
  const [feedback, setFeedback] = React.useState('');
  // to track if the user has guessed:
  const [hasGuessed, setHasGuessed] = useState(false);

  // handles the opening & closing of the sidebar
  const handleSidebarBtn = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleImageClick = (index) => {
    // make sure the user has not already guessed
    // (don't want multiple guess attempts in one level)
    // console.log("Hi, I'm inside handleClickImg");
    if (!hasGuessed) {
      setHasGuessed(true);
      // handling giving the users feedback on their guess
      if (index === aiIndex) {
        setFeedback('Correct!');
        updateScore((prevScore) => {
          return prevScore + 1;
        });
      } else {
      }
    }
  };

  const handleNextLevel = () => {
    if (levelNumber === levels.length) {
      // after the final level, navigate the user to the score page
      // assuming this is what we will use for the score route in App.jsx
      navigate('/score');
    } else {
      // otherwise navigate to the next level
      navigate(`/level${levelNumber + 1}`);
    }
  };

  // added some temporary basic styling here, we can remove that later
  return (
    <div className='level'>
      <Navbar handleSidebarBtn={handleSidebarBtn} isNavOpen={isNavOpen} />
      <div className='level-content'>
        <h1>Level {levelNumber}</h1>
        <p>Score: {score}</p>
        <p>{feedback}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              style={{ width: '200px', height: 'auto' }}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        {hasGuessed && (
          <button
            onClick={handleNextLevel}
            style={{ padding: '10px 20px', marginTop: '20px' }}
          >
            Next Level
          </button>
        )}
      </div>
    </div>
  );
};

export default Level;
