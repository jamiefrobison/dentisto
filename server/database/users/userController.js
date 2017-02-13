var Model = require('./userModel.js');
var utils = require('../../config/utils.js');
module.exports = {
  signup: function (req, res) {
    console.log(req.body);
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
                    res.status(201).send('your account has been created successfully');
                  }
                });
              } else {
                Model.Patient.create({
                  id: user.get('id'),
                  address: req.body.address
                }).then(function(patient) {
                  if (patient) {
                    res.status(201).send('your account has been created successfully');
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
  }
};