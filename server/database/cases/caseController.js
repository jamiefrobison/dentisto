var caseModel = require('./caseModel.js');
var userModel = require('../users/userModel.js');
var utils = require('../../config/utils.js');
var Sequelize = require('sequelize');
var db = require('../config.js');
module.exports = {
  lookup: function (req, res, next) {
    var userType = req.headers['user-type'] === 'student' ? 1 : 0;

    if(userType){
      var Query = 'SELECT Cases.type, Cases.description, Users.name, Users.email, Users.phone_number, Users.gender, Patients.address FROM Cases, Users, Patients WHERE Cases.UserId = Patients.id AND Cases.UserId = Users.id  order by Cases.createdAt DESC';
    } else {
      var Query = 'SELECT Cases.type, Cases.description, Users.name, Users.email, Users.phone_number, Users.gender, Students.university FROM Cases, Users, Students WHERE Cases.UserId = Students.id AND Cases.UserId = Users.id  order by Cases.createdAt DESC';
    }
    db.query(Query, { type: Sequelize.QueryTypes.SELECT }).then(function(cases) {
      if (cases) {
        res.json(cases);
      } else {
        next(new Error('Opps, somthing went wrong.. please try again'));
      }
    });
  },

  addNewCase: function (req, res, next) {
    req.body['UserId'] = req.user.id;
    console.log(req.body);
    caseModel.Case.create(req.body).then(function(cases) {
      if (cases) {
        res.json({'message': 'your case has been issued successfully'});
      } else {
        next( new Error('Faild to addd a new case!'));
      }
    });
  },

  fetchMyCases: function (req, res, next) {
    caseModel.Case.findAll({ where: {UserId: req.user.id} }).then(function(cases) {
      if (cases) {
        res.status(200).send(cases);
      } else {
        next(new Error('Opps, we couldn\'t retrive your cases please try again :('));
      }
    });
  },

  removeCase: function (req, res, next) {
    caseModel.Case.destroy({ where: {id: req.headers.id} }).then(function(count) {
      if (count) {
        res.json({'message': 'your case has been deleted successfully!'});
      } else {
        next(new Error('Faild to delete this case'));
      }
    });
  }
};