const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authenticateJWT = require('./utils/authentication');
const affiliateRoutes = require('./routes/affiliateRoutes/affiliateRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use('/auth', authRoutes);
//app.use(authenticateJWT); // Middleware for JWT authentication
app.use('/todos', todoRoutes);
app.use('/affiliate', affiliateRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
