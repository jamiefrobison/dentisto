var Model = require('./userModel.js');
var jwt = require('jwt-simple');
var utils = require('../../config/utils.js');
module.exports = {
  signup: function (req, res) {
    var email = req.body.email;
    Model.User.findOne({ where: {email: req.body.email} })
    .then(function(user) {
      if (!user) {
        utils.hashpass(req.body.password, function(hashedPass) {
          Model.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber
          }).then(function(user) {
            if (user) {
              if (req.body.university) {
                Model.Student.create({
                  id: user.get('id'),
                  university: req.body.university
                }).then(function(student) {
                  if (student) {
                    var token = jwt.encode(student, 'secret');
                    res.json({token: token});
                  }
                });
              } else {
                Model.Patient.create({
                  id: user.get('id'),
                  address: req.body.address
                }).then(function(patient) {
                  if (patient) {
                    var token = jwt.encode(patient, 'secret');
                    res.json({token: token});
                  }
                });
              }
            } else {
              res.status(500).send();
            }
          });
        });
      } else {
        res.status(200).send('this account is already existed');
      }
    });
  },

  signin: function(req, res) {

  },

  profileInfo: function(req, res) {
    console.log(req.user);
  }

};