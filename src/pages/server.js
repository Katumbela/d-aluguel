// const nodemailer = require('nodemailer');

// async function sendEmail(para, assunto, msg) {
//   // Configuração do transporte de email
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'arotec.unitelcode@gmail.com',
//       pass: 'ffrqzobbntqorbsi',
//     },
//   });

//   // Opções do email
//   const mailOptions = {
//     from: 'info@arotec.ao',
//     to: para,
//     subject: assunto,
//     text: msg,
//   };

//   // Envia o email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email enviado:', info.response);
//   } catch (error) {
//     console.error('Ocorreu um erro ao enviar o email:', error);
//   }
// }



