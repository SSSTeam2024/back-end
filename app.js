const express = require('express');

const mongoose = require('mongoose');
const cors = require("cors");
const AppRouter = require('./routes/appRouter');

const app = express();
app.use(cors({
  origin:  '*',
  methods:["GET", "POST","DELETE","PUT"],
}));

app.use(express.static('files'));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
const port = 3000;

mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });




app.use('/api', AppRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
