const compression = require('compression')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const AppRouter = require('./routes/appRouter');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(compression())
app.use(cors());
app.use(express.static('files'));
const port = 3000;

// Adjust the limit to accommodate larger payloads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use('/api', AppRouter);
app.use('/test', (req, res) => {
  res.end(
    "<div><p>Hello We are at test API!!!<p></div>"
  );
});
app.all('*', (req, res) => {
  res.status(404).send('404 - Not Found');
});

io.on("connection", (socket) => {
  console.log("hello socket");
  socket.on("live-tracking-driver-emit", (arg) => {
    console.log(arg);
    io.emit("live-tracking-companies-listening", arg);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
