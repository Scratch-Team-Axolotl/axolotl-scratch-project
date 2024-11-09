const Player = require('../models/playersModel');

const scoresController = {};
scoresController.uploadScore = async (req, res, next) => {
  try {
    // make sure to send the username and score in the request body
    const { username, score } = req.body;

    // Update player if exists, create if doesn't
    const updatedPlayer = await Player.findOneAndUpdate(
      { username },
      {
        username,
        score: score,
        lastPlayed: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json(updatedPlayer);
  } catch (err) {
    return next({
      log: 'Error in uploadScore: ' + err,
      status: 500,
      message: { err: 'Error uploading score' },
    });
  }
};

scoresController.getTopScores = async (req, res, next) => {
  try {
    const leaderboard = await Player.find()
      .sort({ score: -1 })
      .limit(10)
      .select('username score lastPlayed');

    res.status(200).json(leaderboard);
  } catch (err) {
    return next({
      log: 'Error in getTopScores: ' + err,
      status: 500,
      message: { err: 'Error retrieving leaderboard' },
    });
  }
};

module.exports = scoresController;
