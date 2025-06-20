const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: `${process.env.EMAIL_SERVICE}`,
      auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PWD}`,
      },
    });

    const mailOptions = {
      from: {
        name: "Coach Hire Network",
        address: "fourati.oussama9@gmail.com",
      },
      to: email.to,
      subject: email.subject,
      html: email.body,
      attachments: [
        {
          filename: "logo.jpg",
          path: path.join(__dirname, "../../files/logo/", "logo.jpg"),
          cid: "unique-image-id",
        },
      ],
    };
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendEmailToAdmin = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: `${process.env.EMAIL_SERVICE}`,
      auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PWD}`,
      },
    });

    const mailOptions = {
      from: {
        name: "Coach Hire Network",
        address: `${process.env.EMAIL_USER}`,
      },
      to: email.to,
      subject: email.subject,
      html: email.body,
    };

    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  sendEmail,
  sendEmailToAdmin,
};
