const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email, file) => {
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "fourati.oussama9@gmail.com",
    //     pass: "qitz cxsv qtlq heeg",
    //   },
    // });
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // e.g., smtp.gmail.com
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: "sales@coachhirenetwork.co.uk",
        pass: "Tunisiatrip2025@",
      },
    });
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
        address: "sales@coachhirenetwork.co.uk",
      },
      to: email.to,
      subject: email.subject,
      html: email.body,
      attachments: attachments,
    };
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        return console.error(error.message);
      }
      console.log("Email sent:", info.response);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  sendEmail,
};
