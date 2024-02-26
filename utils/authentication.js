const jwt = require('jsonwebtoken');
const jwtSecretKey = 'yourSecretKey';

const authenticateJWT = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
  
       req.username = user.username;
       next();
    });
};

module.exports = authenticateJWT;
