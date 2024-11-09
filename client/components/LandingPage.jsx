import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImage from '../../server/assets/ai-axolotl.webp';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AImongUs</h1>
      <img src={LandingImage} alt='Landing' style={styles.image} />
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
  },
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default LandingPage;
