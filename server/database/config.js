var Sequelize = require('sequelize');
var mysql = require('mysql');

// connecting database with my local host
var sequelize = new Sequelize('heroku_6418bb6b0a5b45a', 'b084ae3e58aa89', 'becb6734', {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  dialect: 'mysql'
});
module.exports = sequelize;