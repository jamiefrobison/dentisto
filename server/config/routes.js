var userController = require('../database/users/userController.js');
var utils = require('./utils.js');

module.exports = function (app, express) {
  app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);

  app.use('/studentprofile', utils.decode);
  app.get('/studentprofile', userController.profileInfo);

  app.use(utils.errorLogger);
  app.use(utils.errorHandler);
};

