var userController = require('../database/users/userController.js');

module.exports = function (app, express) {
  app.post('/signup', userController.signup);
  // app.post('/signin',userController.signin);
};

