var Sequelize = require('sequelize');
var mysql = require('mysql');

// connecting database with my local host
var sequelize = new Sequelize('dentisto', 'root', 'L.I.M.S', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = sequelize;