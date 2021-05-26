require('dotenv').config()
const cors=require('cors');
const express =require('express')
const nodemailer = require('nodemailer')
const app= express();
app.use(cors())
app.use(express.json())
const PW= process.env.PW;
//creamos el transportador
const transporter = nodemailer.createTransport({
    // host: "codiba.mooo.com",
    service:"GMAIL",
    // port: 25,
    // secure:false,
    auth: {
      user: "marcelopuppio@gmail.com",
      pass: process.env.PW
  

    }
    // ,
    // tls:{
    //   ciphers:'SSLv3'
    // }
  })

app.get('/', (req, res) => {
    res.json({
      message: 'Mailer service is ready.'
    })
  })

  app.get('/send', (req, res) => {
    try {
    //   let fromName = (req.body.fromName || process.env.FROM_NAME)
    //   let toEmail = req.body.toEmail
    //   let subject = req.body.subject
    //   let textBody = req.body.textBody
    //   let htmlBody = req.body.htmlBody
  
    let fromName = "clientes@codiba.com"
    let toEmail = "marcelopuppio@gmail.com"
    let subject = "Probando nodemailer"
    let textBody = "aaaaaaaaaaaaaaa"
    let htmlBody = "<h1>Ahhhhhhhhhh</h1>"
    //   if (!subject || typeof subject !== 'string') {
    //     throw new TypeError('Subject was not defined')
    //     return
    //   }
    //   if (!toEmail || typeof toEmail !== 'string') {
    //     throw new TypeError('To Email was not defined')
    //     return
    //   }
  
      let mailOptions = {
        from:process.env.FROM_EMAIL,
        to: toEmail,
        subject: subject,
        text: textBody,
        html: htmlBody
      }
      console.log(mailOptions)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error, 'ERRORRRRR')
          throw new TypeError(error.message)
        }
        console.log('Mensaje %s enviado: %s', info.messageId, info.response)
        res.json({
          message: 'Mensaje enviado exitosamente'
        })
      })
    } catch (error) {
      res.status(500)
      res.json({
        error: error.message
      })
      console.error('Ocurrió un error:')
      console.error(error.message)
    }
  })

app.listen(3001, ()=>{console.log('servidor corriendo en puerto 3001')})