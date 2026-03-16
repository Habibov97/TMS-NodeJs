const User = require('../models');
const AppError = require('../utils/AppError');

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) throw new AppError('Unauthorized', 401);

  token = token.split(' ')[1];
  console.log(token);

  let payload = decodedPayload(token);
  if (!payload) throw new AppError('Unauthorized', 401);

  const user = await User.findOne({ where: { id: decoded.userId } });
  if (!user) throw new AppError('Unauthorized', 401);

  req.user = user;

  next();
};

module.exports = authMiddleware;
