var Model = require('./userModel.js');
var jwt = require('jwt-simple');
var utils = require('../../config/utils.js');
module.exports = {
  signup: function (req, res, next) {
    Model.User.findOne({ where: {email: req.body.email} })
    .then(function(user) {
      if (!user) {
        utils.hashpass(req.body.password, function(hashedPass) {
          if (req.body.university) {
            var userType = 1;
          } else {
            var userType = 0;
          }
          Model.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
            type: userType
          }).then(function(user) {
            if (user) {
              if (user.get('type')) {
                Model.Student.create({
                  id: user.get('id'),
                  university: req.body.university
                }).then(function(student) {
                  if (student) {
                    var token = jwt.encode(student, 'secret');
                    res.json({token: token, type: 'student'});
                  }
                });
              } else {
                Model.Patient.create({
                  id: user.get('id'),
                  address: req.body.address
                }).then(function(patient) {
                  if (patient) {
                    var token = jwt.encode(patient, 'secret');
                    res.json({token: token, type: 'patient'});
                  }
                });
              }
            } else {
              next(new Error('server error, faild to create new user'));
            }
          });
        });
      } else {
        next(new Error('this account is already existed'));
      }
    });
  },

  signin: function(req, res, next) {
    console.log('this is signin');
    Model.User.findOne({where: {email: req.body.email}})
    .then(function(user) {
      if (user) {
        utils.comparePass(req.body.password, user.get('password'), function(validate) {
          if (validate) {
            if (user.get('type')) {
              Model.Student.findById(user.get('id')).then(function(student) {
                var token = jwt.encode(student, 'secret');
                res.json({token: token, type: 'student'});
              });
            } else {
              Model.Patient.findById(user.get('id')).then(function(patient) {
                var token = jwt.encode(patient, 'secret');
                res.json({token: token, type: 'patient'});
              });
            }
          } else {
            next(new Error('your password is not correct'));
          }
        });
      } else {
        next(new Error('email is not correct!'));
      }
    });
  },

  profileInfo: function(req, res) {
    console.log(req.user);
  }

};