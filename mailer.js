require("dotenv").config();
const nodemailer = require("nodemailer");
const PW = process.env.PW;
const HOST = process.env.HOST;
//creamos el transportador
const transporter = nodemailer.createTransport({
  /* PARA GMAIL. No hay que poner host, port, secure, nada
    service: "codiba.mooo.com",
    FIN PARA GMAIL
    */
  host: HOST,
  port: 25,
  secure: false,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.PW,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1",
  },
});

module.exports = transporter;
