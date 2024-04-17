const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userDao = require("../dao/userDao");

const registerUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await userDao.createUser({ ...userData, password: hashedPassword });
};

const loginUser = async (username, password) => {
  const user = await userDao.findUserByUsername(username);

  if (!user) {
    throw new Error("User not found");
  }

  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ username: user.username }, "yourSecretKey");
    return { accessToken };
  } else {
    throw new Error("Incorrect password");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
