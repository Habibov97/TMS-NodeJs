const AppError = require('../utils/AppError');

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) next(new AppError(error.message, 400));

    req.body = value;
    next();
  };
};

module.exports = validationMiddleware;
