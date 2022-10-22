import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function mailSender(email,subject,html) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'entero.eventsmanage@gmail.com',
            pass: 'ixgjqulapuvmllvp'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
      });
      
      let mailDetails = {
        from: 'entero.eventsmanage@gmail.com',
        to: email,
        subject: subject,
        html: html
      };
      
    
        transporter.sendMail(mailDetails, function(error, info){
            if (error) {
              console.log(error);
              return "failed"
            } else {
              console.log('Email sent: ' + info.response);
              return "success";
            }
          });
    
  }
  
  export default mailSender;