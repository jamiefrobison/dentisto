var userController = require('../database/users/userController.js');
var utils = require('./utils.js');

module.exports = function (app, express) {
  app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);

  app.use('/profile', utils.decode);
  app.get('/profile', userController.profileInfo);

  app.use(utils.errorLogger);
  app.use(utils.errorHandler);
};

