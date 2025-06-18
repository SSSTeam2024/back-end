const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email) => {
  return new Promise((resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport({
        service: `${process.env.EMAIL_SERVICE}`,
        auth: {
          user: `${process.env.EMAIL_USER}`,
          pass: `${process.env.EMAIL_PWD}`,
        },
      });

      // const transporter = nodemailer.createTransport({
      //   host: `${process.env.EMAIL_HOST}`,
      //   port: `${process.env.EMAIL_PORT}`,
      //   secure: true,
      //   auth: {
      // user: `${process.env.EMAIL_USER}`,
      // pass: `${process.env.EMAIL_PWD}`,
      // },
      // });

      // Set up email data
      const mailOptions = {
        from: {
          name: "Coach Hire Network",
          address: `${process.env.EMAIL_SERVICE}`,
        },
        to: email.to,
        subject: email.subject,
        html: email.body,
        attachments: [
          {
            filename: "logo.jpg",
            path: path.join(__dirname, "../../files/logo/", "logo.jpg"), // Adjust the file path based on your actual image location
            cid: "unique-image-id", // Unique ID for referencing the image in the HTML content
          },
        ],
      };

      // Send email
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.error(error.message);
          reject(error);
        }
        console.log("Email sent:", info.response);
        resolve(info.response);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  });
};

module.exports = {
  sendEmail,
};
