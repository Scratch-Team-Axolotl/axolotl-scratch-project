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
      <h2>Leaderboard</h2>
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
      <style>
        {`
            .leaderboard {
              margin: 20px;
              padding: 20 px;
              border: 1px solid #ddd;
              border-radius: 8px;
              background-color: #f9f9f9;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th,
            td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            `}
      </style>
    </div>
  );
};

export default Leaderboard;
