const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.creatTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  sercure: false,
  auth: {
    User: "docufix49@gmail.com",
    pass: "docufixapp"
  }
});

const mailOption = {
  from: "docufix49@gmail.com",
  to: "nnannachichi4@gmail.com",
  subject: "welcome",
  html: "thanks for being in class today"
};

app.get("/", (req, res) => {
  res.send("mail sent");
  transporter.sendMail(mailOption, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent");
    }
  });
});
