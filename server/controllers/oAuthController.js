const Player = require('../models/playerModel');
require('dotenv').config();
const oAuthController = {};

oAuthController.getTemporaryCode = (req, res, next) => {
  const temporaryCode = req.query.code;
  if (!temporaryCode) {
    return next('No temporary code received from GitHub');
  }
  res.locals.temporaryCode = temporaryCode;
  return next();
};

oAuthController.requestToken = async (req, res, next) => {
  try {
    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        body: JSON.stringify({
          code: res.locals.temporaryCode,
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    const data = await response.json();
    console.log('GitHub token response:', data);

    const githubToken = data.access_token;
    if (!githubToken) {
      return next('Failed to obtain access token from GitHub');
    }

    res.locals.token = githubToken;
    res.locals.ssid = githubToken;
    return next();
  } catch (err) {
    return next(`Error in requestToken: ${err}`);
  }
};

oAuthController.getGithubUsername = async (req, res, next) => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${res.locals.token}`,
        'User-Agent': 'AImongus-App',
      },
    });

    const data = await response.json();
    console.log('GitHub user data:', data);

    const githubUsername = data.login;
    if (!githubUsername) {
      return next('Failed to get GitHub username');
    }

    const player = await Player.findOneAndUpdate(
      { username: `github_username_${githubUsername}` },
      { username: `github_username_${githubUsername}` },
      { upsert: true, new: true }
    );

    console.log('Player database record:', player);
    res.locals.ssid = player._id;
    return next();
  } catch (err) {
    return next(`Error in getGithubUsername: ${err}`);
  }
};

module.exports = oAuthController;
