var db = require('../config.js');
var Sequelize = require('sequelize');
var UserModel = require('../users/UserModel.js');

var Case = db.define('Case', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: Sequelize.STRING, allowNull: false }
});

Case.belongsTo(UserModel.User);
UserModel.User.hasMany(Case);

db.sync();

exports.Case = Case;
