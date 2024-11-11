import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import LandingImage1 from '../../server/assets/ai-axolotl.webp';
// import LandingImage2 from '../../server/assets/ai-goblin-shark.png';
// import LandingImage3 from '../../server/assets/ai-pink-fairy-armadillo.png';
// import LandingImage4 from '../../server/assets/ai-red-lip-batfish.png';
import LandingVideo1 from '../../server/assets/landing_page_video_1.webm';
import LandingVideo2 from '../../server/assets/landing_page_video_2.webm';

const images = [LandingVideo1, LandingVideo2]; // Array of video imports

const videoLinks = [
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f3613f41-cafe-457f-96d7-743afe1072cd/transcode=true,original=true,quality=90/24_11_07_180634_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3c6ff24f-bc06-44ca-9197-6a6dfeac0845/transcode=true,original=true,quality=90/24_11_06_140231_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a53b958b-f81e-4251-92a8-a06e51a02743/transcode=true,original=true,quality=90/24_11_08_091335_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f9ca8e9a-2119-4a86-8041-c4e370e36706/transcode=true,original=true,quality=90/24_11_07_054107_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/acd25949-174a-4162-900c-cc720f863650/transcode=true,original=true,quality=90/24_11_06_140209_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/84cab29e-2b93-4e8e-8d76-44cc902f29a5/transcode=true,original=true,quality=90/24_11_06_050114_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f2c56456-17af-45a6-896e-96dd0eef7490/transcode=true,original=true,quality=90/24_11_06_162143_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/afb55a80-cfa6-48f6-b9db-f22bf29641c4/transcode=true,original=true,quality=90/24_11_08_160650_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5b4bcef1-bdcb-4945-90e1-12a5ba4fff47/transcode=true,original=true,quality=90/24_11_06_140134_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/08d1da70-57d5-4eef-9b21-03203f9d6ef1/transcode=true,original=true,quality=90/24_11_05_172007_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/facd56d4-4983-4c4e-9d03-7c65a4337370/transcode=true,original=true,quality=90/24_11_05_192313_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dd8c81ae-10bc-416c-9a0f-aef056762cd0/transcode=true,original=true,quality=90/24_11_06_162517_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/229a681b-8497-4ab0-8e61-b473466a1aa0/transcode=true,original=true,quality=90/24_11_04_115337_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9d9762fa-06f9-444b-a2ec-c8a9513b4079/transcode=true,original=true,quality=90/24_11_04_143327_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/43f3dcc7-9722-438f-99a5-e12c4a51d4a0/transcode=true,original=true,quality=90/24_11_06_162451_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ffed8ef3-5150-4049-a0d4-3b6c3d32bc4f/transcode=true,original=true,quality=90/24_11_04_181118_00001.webm',
  'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4037357b-545b-4999-8a17-dbfc658e1c21/transcode=true,original=true,quality=90/24_11_04_200307_00001.webm',
];
const LandingPage = () => {
  const navigate = useNavigate();

  // Cycle through images every 3 seconds
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000); // We can change the interval here
  //   return () => clearInterval(interval); // need this to cleanup the interval on unmount
  // }, []);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoLinks.length);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AImong Us</h1>

      {/* <img
      src={images[currentImageIndex]}
      alt='Slideshow'
      style={styles.image}
    /> */}

      <video
        style={{ border: '3px solid black', borderRadius: '10px' }}
        className='intro-vid'
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videoLinks[currentVideoIndex]} type='video/webm' />
      </video>

      <button className='intro-start-btn' onClick={() => navigate('/intro')}>
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
  // button: {
  //   fontSize: '20px',
  //   padding: '10px 20px',
  //   marginTop: '20px',
  //   cursor: 'pointer',
  //   borderRadius: '5px',
  // },
};

export default LandingPage;
