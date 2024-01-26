const User = require('../models/user');

const createUser = async (userData) => {
  return await User.create(userData);
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

module.exports = {
  createUser,
  findUserByUsername,
};
