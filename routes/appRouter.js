const Router = require('express');
const router = new Router();

const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const schoolRoutes= require("./routes/schoolRoutes.js/schoolRoutes")
const studentRoutes= require("./routes/studentRoutes/studentRoutes")
const parentRoutes= require("./routes/parentRoutes/parentRoutes")
const journeyRoutes= require("./routes/journeyRoutes/journeyRoutes")
const luggageRoutes= require("./routes/luggageRoutes/luggageRoutes")
const vehicleTypeRoutes= require("./routes/vehiculeTyoeRoutes/vehiculeTypeRoutes")
const passengerLuggageLimitsIdRoutes= require("./routes/passengerLuggageLimitsRoutes/passengerLuggageLimitsRoutes")

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

module.exports = router;