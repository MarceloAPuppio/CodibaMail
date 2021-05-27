require("dotenv").config();
const transporter = require("../mailer");
const sendMail = (req, res) => {
  try {
    /*
    EJEMPLO HARDCODEADO
    let fromName = "clientes@codiba.com";
    let toEmail = "marcelopuppio@gmail.com";
    let subject = "Probando nodemailer";
    let textBody = "aaaaaaaaaaaaaaa";
    let htmlBody = "<h1>Ahhhhhhhhhh</h1>";
    */
    console.log(req.body, req.method, req.headers);
    const { to, cc, subject, text, html } = req.body;
    //   if (!subject || typeof subject !== 'string') {
    //     throw new TypeError('Subject was not defined')
    //     return
    //   }
    //   if (!toEmail || typeof toEmail !== 'string') {
    //     throw new TypeError('To Email was not defined')
    //     return
    //   }
    let mailOptions = {
      from: process.env.FROM_EMAIL,
      to,
      cc,
      subject,
      text,
      html,
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error, "ERRORRRRR");
        throw new TypeError(error.message);
      }
      res.json({
        message: "Mensaje enviado exitosamente",
      });
    });
  } catch (error) {
    res.status(500);
    res.json({
      error: error.message,
    });
    console.error("Ocurrió un error:");
    console.error(error.message);
  }
};
const mailCtrl = { sendMail };
module.exports = mailCtrl;
