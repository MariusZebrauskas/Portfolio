const express = require("express");
const app = express();
const PORT = process.env.PORT || 8800;
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// https force
const enforce = require("express-sslify");
const { default: axios } = require("axios");
// compares data
// const compression = require('compression');
dotenv.config();

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.send(`<h1>Ooops there was an error</h1>`);
  }
};
//middlewere

app.use(express.json());
// protect headers from hackers
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// info about requests
app.use(morgan("common"));
// cors alloow front to back comunicate
app.use(cors());

// routes
app.post("/message", (req, res) => {
  let message = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  try {
    // FIXME::send files++++++++++++++++++++++++++++++++++++++++++++++++++++++
    async function sendEmail() {
      // FIXME:test account + env data
      const emailAccount = {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASS,
      };
      // hvpp pkdo ntvd weap
      const transporter = nodemailer.createTransport({
        // host: "smtp.mail.yahoo.com",
        host: "smtp.gmail.com",

        port: 465,
        auth: {
          user: emailAccount.user,
          pass: emailAccount.pass,
        },
        secure: true, // true for 465, false for other ports
        tls: {
          rejectUnauthorized: false,
        },
      });

      let info = await transporter.sendMail({
        from: emailAccount.user, // sender address
        to: "zebrauskas.mar@gmail.com", // list of receivers
        subject: "Portfolio Portfolio Portfolio", // Subject line
        html: `<div>
          <h4>name: ${message.name} ,</h4>
          <h4>email: ${message.email} ,</h1>
          <h3>${message.message}</h3>
      </div>`,
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    sendEmail().catch(console.error);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false });

    console.log("err:", err);
  }
});

app.post("/ping", async (req, res) => {
  console.log("working I'm getting pinged");

  // Retrieve the scheduler URL from the request body
  const schedulerUrl = req.body.schedulerUrl;
  console.log("schedulerUrl", schedulerUrl);
  if (!schedulerUrl) {
    return res.status(400).send("Scheduler URL is required.");
  }

  try {
    await axios.get(schedulerUrl);
    console.log(`Scheduler app has been pinged successfully.`);
  } catch (error) {
    console.error(`Failed to ping the scheduler app: ${error}`);
    return res.status(500).send("Failed to ping the scheduler app.");
  }

  res.status(200).send("Pong");
});

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//error handler MAIN
app.listen(PORT, (req, res) => {
  console.log(`app is running on ${PORT}`);
});
