const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email) => {
  try {
    // Create a transporter with desired email service configuration
    const transporter = nodemailer.createTransport({
      //host: "sandbox.smtp.mailtrap.io",
      //port: 2525,
      service: "gmail",
      auth: {
        user: "fourati.oussama9@gmail.com", //"1388e7461f6fd3", "fourati.oussama9@gmail.com"
        pass: "qitz cxsv qtlq heeg", //"76988076dd94e1"; "lwzd fdcr sclt cwfo"
      },
    });
    console.log("inside send email to user!!");
    // Set up email data
    const mailOptions = {
      from: {
        name: "Coach Hire Network",
        address: "fourati.oussama9@gmail.com",
      },
      to: email.to, //email.to, "fourati.oussama9@gmail.com"
      subject: email.subject,
      html: email.body,
      attachments: [
        {
          filename: "logo.jpg",
          path: path.join(__dirname, "../../files/logo/", "logo.jpg"), // Adjust the file path based on your actual image location
          cid: "unique-image-id", // Unique ID for referencing the image in the HTML content
        },
      ],
      //cc: ['dali.fatma20@gmail.com']
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("User Email sent:", info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendEmailToAdmin = async (email) => {
  try {
    // Create a transporter with desired email service configuration
    const transporter = nodemailer.createTransport({
      //host: "sandbox.smtp.mailtrap.io",
      //port: 2525,
      service: "gmail",
      auth: {
        user: "fourati.oussama9@gmail.com", //"1388e7461f6fd3", "fourati.oussama9@gmail.com"
        pass: "qitz cxsv qtlq heeg", //"76988076dd94e1"; "lwzd fdcr sclt cwfo"
      },
    });

    // Set up email data
    const mailOptions = {
      from: {
        name: "Coach Hire Network",
        address: "fourati.oussama9@gmail.com",
      },
      to: email.to, //email.to, "fourati.oussama9@gmail.com"
      subject: email.subject,
      html: email.body,
      // attachments: [
      //   {
      //     filename: "logo.jpg",
      //     path: path.join(__dirname, "../../files/logo/", "logo.jpg"), // Adjust the file path based on your actual image location
      //     cid: "unique-image-id", // Unique ID for referencing the image in the HTML content
      //   },
      // ],
      //cc: ['dali.fatma20@gmail.com']
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email to Admin sent:", info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  sendEmail,
  sendEmailToAdmin,
};
