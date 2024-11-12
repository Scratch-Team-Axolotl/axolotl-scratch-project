import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('/api/scores/leaderboard')
      .then((response) => response.json())
      .then((data) => setLeaderboard(data));
  }, []);

  return (
    <div className='leaderboard'>
      <div className='leaderboard-content'>
        <div>
          <h2>Leaderboard</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player, index) => (
              <tr key={player.username}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.score}</td>
                <td>{new Date(player.lastPlayed).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <video autoPlay loop muted playsInline>
                <source
                  src='https://videos.pexels.com/video-files/8784040/8784040-hd_1080_1920_24fps.mp4'
                  type='video/webm'
                />
              </video> */}
      </div>

      <button
        className='leaderboard-game-btn'
        onClick={() => (window.location.href = '/intro')}
      >
        New Game
      </button>
    </div>
  );
};

export default Leaderboard;
