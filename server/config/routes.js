var userController = require('../database/users/userController.js');
var caseController = require('../database/cases/caseController.js');
var utils = require('./utils.js');

module.exports = function (app, express) {
  app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);

  app.use(utils.decode);
  app.get('/profile', userController.getProfile);
  app.post('/profile', userController.updateProfile);

  app.get('/lookup', caseController.lookup);
  // app.get('/mycases', caseController.fetchMyCases);
  app.post('/mycases', caseController.addNewCase);
  // app.delete('/removecase', caseController.removeCase);

  app.use(utils.errorLogger);
  app.use(utils.errorHandler);
};

