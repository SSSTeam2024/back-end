const compression = require("compression");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const AppRouter = require("./routes/appRouter");
const emailqueue = require("./services/emailQueueServices/emailQueueServices");
const emailTemplateService = require("./services/emailTemplateServices/emailTemplateService");
const cron = require("node-cron");
const emailSentServices = require("./services/emailSentServices/emailSentServices");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const QuoteDao = require("./dao/quoteDao/quoteDao");

const app = express();

localStorage.setItem("isSendingAllQueueEmails", "false");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(compression());
app.use(cors());
app.use(express.static("files"));
const port = 3000;

let socketUsers = {};

// Adjust the limit to accommodate larger payloads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect(process.env.MONGO_ATLAS_URL);

app.use("/api", AppRouter);

app.all("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

// Schedule tasks to be run on the server
cron.schedule("*/25 * * * * *", async () => {
  if (localStorage.getItem("isSendingAllQueueEmails") === "false") {
    const resultEmail = await emailqueue.getTheOldestEmailInQueue();
    // Send an email
    const mailOptions = {
      newEmail: resultEmail.newEmail,
      subject: resultEmail.subject,
      body: resultEmail.body,
      file: resultEmail.file,
      name: resultEmail.name,
    };
    await emailTemplateService
      .sendNewEmail(mailOptions, resultEmail.quote_Id)
      .then(async () => {
        await emailqueue.deleteEmailQueue(resultEmail._id).then(async () => {
          let quote = null;
          if (resultEmail.quote_Id !== undefined) {
            quote = await QuoteDao.getQuoteById(resultEmail.quote_Id);
            await emailSentServices.createEmailSent({
              date: resultEmail.date_email,
              quoteID: quote.quote_ref,
              subjectEmail: resultEmail.subject,
              from: resultEmail.sender,
              to: resultEmail.newEmail,
            });
          } else {
            await emailSentServices.createEmailSent({
              date: resultEmail.date_email,
              quoteID: null,
              subjectEmail: resultEmail.subject,
              from: resultEmail.sender,
              to: resultEmail.newEmail,
            });
          }
        });
      });
  }
});

io.on("connection", (socket) => {
  console.log("a user has connected");
  // Handle user connection
  socket.on("join", (username) => {
    socketUsers[socket.id] = username;
    console.log(socketUsers);
    console.log(`${username} has joined`);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    const username = socketUsers[socket.id];
    delete socketUsers[socket.id];
    console.log(socketUsers);
    console.log(`${username} has disconnected`);
    io.emit("live-tracking-disconnection-listening", username);
  });
  // Handle driver position sharing
  socket.on("live-tracking-driver-emit", (arg) => {
    console.log(arg);
    io.emit("live-tracking-listening", arg);
    if (arg.details.schoolId !== null) {
      io.emit("live-tracking-schools-listening", arg);
    }
    if (arg.details.companyId !== null) {
      io.emit("live-tracking-companies-listening", arg);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
