var db = require('../config.js');
var Sequelize = require('sequelize');

var User = db.define('User', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, field: 'phone_number', allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false }
});

var Student = db.define('Student', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  university: { type: Sequelize.STRING, allowNull: false }
});

var Patient = db.define('Patient', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  address: { type: Sequelize.STRING, allowNull: false }
});

Student.belongsTo(User, {foreignKey: 'id'});
Patient.belongsTo(User, {foreignKey: 'id'});

db.sync({
  force: true
});

module.exports = User;