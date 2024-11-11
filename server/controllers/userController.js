const Player = require('../models/playerModel');
const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('Creating user with body:', req.body);
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        addingNameSuccess: false,
        error: 'Username is required',
      });
    }

    const existingUser = await Player.findOne({ username });
    if (existingUser) {
      console.log('Existing user found:', existingUser);
      res.locals.ssid = existingUser._id;
      return next();
    }

    const player = await Player.create({ username });
    console.log('New user created:', player);
    res.locals.ssid = player._id;
    return next();
  } catch (err) {
    console.error('Error in createUser:', err);
    return res.status(500).json({
      addingNameSuccess: false,
      error: 'Failed to create user: ' + err.message,
    });
  }
};

userController.verifyUser = (req, res, next) => {
  const { username } = req.body;

  Player.findOne({ username })
    .then((queryResult) => {
      if (!queryResult) return res.redirect('/');
      res.locals.ssid = queryResult._id;
      return next();
    })
    .catch((err) => {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    });
};

module.exports = userController;
