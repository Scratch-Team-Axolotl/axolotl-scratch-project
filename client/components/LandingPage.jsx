import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImage1 from '../../server/assets/ai-axolotl.webp';
import LandingImage2 from '../../server/assets/ai-goblin-shark.png';
import LandingImage3 from '../../server/assets/ai-pink-fairy-armadillo.png';
import LandingImage4 from '../../server/assets/ai-red-lip-batfish.png';

const images = [LandingImage1, LandingImage2, LandingImage3, LandingImage4]; // Array of image imports

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // We can change the interval here

    return () => clearInterval(interval); // need this to cleanup the interval on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AImong Us</h1>
      <img
        src={images[currentImageIndex]}
        alt='Slideshow'
        style={styles.image}
      />
      <button onClick={() => navigate('/intro')} style={styles.button}>
        Start
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
    transition: 'opacity 0.5s ease-in-out', // Gives smooth transition effect
  },
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default LandingPage;
