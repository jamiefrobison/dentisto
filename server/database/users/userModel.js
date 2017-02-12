var db = require('../config.js');
var Sequelize = require('sequelize');

var User = db.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

db.sync();

module.exports = User;