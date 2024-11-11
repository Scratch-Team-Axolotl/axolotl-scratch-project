const express = require('express');
require('dotenv').config();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const scoreController = require('../controllers/scoreController');
const oAuthController = require('../controllers/oAuthController');

const router = express.Router();

router.post(
  '/addingPlayerName',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.json({ addingNameSuccess: true });
  }
);

router.get('/scores/leaderboard', scoreController.getTopScores);

router.post('/scores', scoreController.uploadScore);

router.get('/auth/github', (req, res) => {
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URL}`;
  return res.redirect(302, githubUrl);
});

router.get(
  process.env.GITHUB_CALLBACK_API_ENDPOINT,
  oAuthController.getTemporaryCode,
  oAuthController.requestToken,
  oAuthController.getGithubUsername,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.redirect('/level1');
  }
);

module.exports = router;
