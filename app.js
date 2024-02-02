const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const schoolRoutes= require("./routes/schoolRoutes.js/schoolRoutes")
const studentRoutes= require("./routes/studentRoutes/studentRoutes")
const parentRoutes= require("./routes/parentRoutes/parentRoutes")
const journeyRoutes= require("./routes/journeyRoutes/journeyRoutes")
const luggageRoutes= require("./routes/luggageRoutes/luggageRoutes")
const vehicleTypeRoutes= require("./routes/vehiculeTyoeRoutes/vehiculeTypeRoutes")
const passengerLuggageLimitsIdRoutes= require("./routes/passengerLuggageLimitsRoutes/passengerLuggageLimitsRoutes")
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use('/auth', authRoutes);
//app.use(authenticateJWT); // Middleware for JWT authentication
app.use('/todos', todoRoutes);
app.use('/authSchool',schoolRoutes);
app.use('/student',studentRoutes)
app.use('/parent',parentRoutes)

app.use('/journey',journeyRoutes)

app.use('/luggage',luggageRoutes)

app.use('/vehicleType',vehicleTypeRoutes)

app.use('/passengerLuggageLimit',passengerLuggageLimitsIdRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
