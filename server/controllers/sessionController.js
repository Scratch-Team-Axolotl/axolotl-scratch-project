const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  const ssid = req.cookies.ssid;
  console.log('Checking ssid:', ssid);

  if (!ssid) {
    console.log('no ssid found in req.cookies.ssid');
    return res.redirect('/');
  }

  Session.findOne({ cookieId: ssid })
    .then((result) => {
      if (!result) {
        console.log('cannot find cookieId (ssid) in the session database');
        return res.redirect('/');
      }
      console.log('Session found:', result);
      return next();
    })
    .catch((err) => {
      return next(
        'Error in sessionController.isLoggedIn ' + JSON.stringify(err)
      );
    });
};

sessionController.startSession = (req, res, next) => {
  // if the session already exists in the Session database:
  Session.findOne({ cookieId: res.locals.ssid }).then((result) => {
    if (!result) {
      Session.create({ cookieId: res.locals.ssid })
        // lesson: have to use res.locals here
        // cannot use req.cookies.ssid!!
        // the cookie set up needs some time, so it won't be here yet, even if the setSSID middleware is before startSession middleware
        // Session.create({ cookieId: res.cookies.ssid })
        .then((session) => {
          console.log('session successfully created:', session);
          return next();
        })
        .catch((err) => {
          return next(
            'Error in sessionController.startSession ' + JSON.stringify(err)
          );
        });
    } else return next();
  });
};

module.exports = sessionController;
