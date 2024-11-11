const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (!res.locals.ssid) return next('Error: Missing ssid in setSSIDCookie');
  res.cookie('ssid', res.locals.ssid, { httpOnly: true });
  console.log('set this to cookies as ssid:' + res.locals.ssid);
  return next();
};

module.exports = cookieController;
