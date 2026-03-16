const Joi = require('joi');

const signIn = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const authValidation = {
  signIn,
};

module.exports = authValidation;
