const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const AppRouter = require('./routes/appRouter');

const app = express();
app.use(cors());
app.use(express.static('files'));
const port = 3000;

// Adjust the limit to accommodate larger payloads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('mongodb+srv://sssteam2024:ogA6KY9XssmX4q6y@testbct.qxx75ys.mongodb.net/bctdb', { });

app.use('/api', AppRouter);

app.all('*', (req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
