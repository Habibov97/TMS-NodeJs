const AppError = require('../utils/AppError');
const { encodedPayload } = require('../utils/jwt.utils');
const userService = require('./user.service');
const bcrypt = require('bcrypt');

const signIn = async (params) => {
  const user = await userService.findOne({ username: params.username });
  if (!user) throw new AppError('Unauthorized', 401);

  let checkPassword = await bcrypt.compare(params.password, user.password);
  if (!checkPassword) throw new AppError('Unauthorized', 401);

  const token = encodedPayload({ userId: user.id });
  if (!token) throw new AppError('Unauthorized', 401);

  user.password = undefined;

  return { user, token };
};

const authService = {
  signIn,
};

module.exports = authService;
