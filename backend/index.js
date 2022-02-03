const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;
const nodemailer = require('nodemailer');

// const cartRoutes = require('./routes/cart');
// const authRoutes = require('./routes/auth');
// const recoverRoutes = require('./routes/recover');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// https force
const enforce = require('express-sslify');
// compres data
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
app.use(morgan('common'));
// cors alloow front to back comunicate
app.use(cors());
// app.use(compression());

// https redirect

// if (process.env.NODE_ENV === 'production') {
//   app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }

// routes
app.post('/message', (req, res) => {
  let message = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  try {
    // FIXME::send files++++++++++++++++++++++++++++++++++++++++++++++++++++++
    async function sendEmail() {
      // FIXME:test account + env data
      const testAccount = {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASS,
      };

      const transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
        secure: true, // true for 465, false for other ports
        tls: {
          rejectUnauthorized: false,
        },
      });

      let info = await transporter.sendMail({
        from: testAccount.user, // sender address
        to: 'zebrauskas.mar@gmail.com', // list of receivers
        subject: 'Portfolio Portfolio Portfolio', // Subject line
        html: `<div>
          <h4>name: ${message.name} ,</h4>
          <h4>email: ${message.email} ,</h1>
          <h3>${message.message}</h3>
      </div>`,
      });

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    sendEmail().catch(console.error);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false });

    console.log('err:', err);
  }
});


app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//error handler MAIN
app.listen(PORT, (req, res) => {
  console.log(`app is running on ${PORT}`);
});

// FIXME: parasyti komentara drag mouse left or right po kuriniais

// FIXME: tikrasalbumo pavadinimas Muzikines pasakos
// 7 kuriinys Liūdnas Asiliukas
// 9 pasiklyde vaikai
