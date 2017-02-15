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

exports.errorLogger = function (error, req, res, next) {
  console.error(error.stack);
  next(error);
};

exports.errorHandler = function (error, req, res, next) {
  res.status(500).send({error: error.message});
};

exports.decode = function (req, res, next) {
  var token = req.headers['x-access-token'];
  var user;
  if (!token) {
    return res.status(403).send(); // send forbidden if a token is not provided
  }
  
  try {
    user = jwt.decode(token, 'secret');
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }

};