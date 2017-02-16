var caseModel = require('./caseModel.js');
var userModel = require('../users/userModel.js');
var utils = require('../../config/utils.js');
var Sequelize = require('sequelize');
var db = require('../config.js');
module.exports = {
  lookup: function (req, res, next) {
    var userType = req.headers['user-type'] === 'student' ? 1 : 0;
    if(userType){
      var Query = 'SELECT cases.type, cases.description, users.name, users.email, users.phone_number, users.gender, patients.address FROM cases, users, patients WHERE cases.UserId = patients.id AND cases.UserId = users.id  order by cases.createdAt DESC';
    } else {
      var Query = 'SELECT cases.type, cases.description, users.name, users.email, users.phone_number, users.gender, students.university FROM cases, users, students WHERE cases.UserId = students.id AND cases.UserId = users.id  order by cases.createdAt DESC';
    }
    db.query(Query, { type: Sequelize.QueryTypes.SELECT }).then(function(cases){
      if(cases){
        res.json(cases);
      }
    });
  },

  addNewCase: function (req, res) {

  }
};