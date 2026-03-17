const User = require('../models/User.model');

const findOne = async (where) => {
  return await User.findOne({ where });
};

const userService = {
  findOne,
};

module.exports = userService;
