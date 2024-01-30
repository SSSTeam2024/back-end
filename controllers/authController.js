const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    await authService.registerUser({ username, password });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.loginUser(username, password);
    res.cookie('access_token', result.accessToken, { httpOnly: true, secure: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
};

const logout = (req, res) => {
  res.clearCookie('access_token');
  res.sendStatus(200);
};

module.exports = {
  register,
  login,
  logout,
};
