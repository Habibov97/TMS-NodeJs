const jwt = require('jsonwebtoken');
const config = require('../config');
const AppError = require('./AppError');

const encodedPayload = (payload) => {
  let token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });
  return token;
};

const decodedPayload = (token) => {
  try {
    let decodeToken = jwt.verify(token, config.jwtSecret);
    if (!decode) throw new AppError('token is invalid');
    return decodeToken;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  encodedPayload,
  decodedPayload,
};
