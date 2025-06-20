// emailQueue.js
const Queue = require("bull");
const nodemailer = require("nodemailer");
const emailService = require("./emailTemplateSendEmail");

// Email queue setup
const emailQueue = new Queue("emailQueue", {
  redis: {
    host: "www.coachhirenetwork.co.uk",
    port: 6379,
  },
});

// Define a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fourati.oussama9@gmail.com",
    pass: "qitz cxsv qtlq heeg",
  },
});

// Process jobs in the queue
emailQueue.process(async (job) => {
  const { to, subject, body, file } = job.data;
  let attachments = [
    {
      filename: "logo.jpg",
      path: path.join(__dirname, "../../files/logo/", "logo.jpg"),
      cid: "unique-image-id",
    },
  ];
  if (file !== undefined) {
    attachments.push({
      filename: file,
      path: path.join(__dirname, "../../files/attachmentFiles/", file),
      cid: "unique-image-id",
    });
  }
  const mailOptions = {
    from: {
      name: "Coach Hire Network",
      address: "fourati.oussama9@gmail.com",
    },
    to,
    subject,
    text: body,
    attachments: attachments,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
});

// Function to add a job to the queue
const addEmailJob = (emailData) => {
  emailQueue.add(emailData, {
    repeat: { cron: "*/10 * * * * *" }, // Cron syntax to run every hour
  });
};

module.exports = {
  addEmailJob,
};
