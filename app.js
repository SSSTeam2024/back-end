const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const AppRouter = require('./routes/appRouter');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use('/api', AppRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
