const express = require('express');

const mongoose = require('mongoose');
const cors = require("cors");
const AppRouter = require('./routes/appRouter');

const app = express();
app.use(cors({
  origin:  'http://localhost:3001',
  methods:["GET", "POST"]
}));

app.use(express.static('files'));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
const port = 3000;
// const corsOptions = {
//   origin: 'http://localhost:3001',
//   credentials: true,
//   optionsSuccessStatus: 200,
// }
// app.use(cors(corsOptions));
// const server = http.createServer(app)
// const io= require('socket.io')(server,{
//   cors:{
//     origin:"*",
//     methods: ['GET', 'POST']
//   }
// });


mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); 
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/api', AppRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
