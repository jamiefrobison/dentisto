var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

exports.hashpass = function(pass, cb) {
  bcrypt.hash(pass, null, null, function(err, hash) {
    if (err) {
      throw new Error(err);
    }
    cb(hash);
  });
};

exports.comparePass = function(pass, hash, cb) {
  bcrypt.compare(pass, hash, function(err, res) {
    if (err) {
      throw new Error(err);
    }
    cb(res);
  });
};

exports.decode = function (req, res, next) {
  var token = req.headers['x-access-token'];
  var user;
  if (!token) {
    return res.send(403); // send forbidden if a token is not provided
  }

  try {
    // decode token and attach user to the request
    // for use inside our controllers
    user = jwt.decode(token, 'secret');
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }

};