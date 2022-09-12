import express from "express";
import pool from "../db.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import mailSender from "../utils/mail-helpers.js";

const router = express.Router();



router.post("/", async (req, res) => {
    
  try {
    const email = req.body.email;
    
    const users = await pool.query(
      "SELECT userid,name FROM users WHERE email=$1",
      [email]
    );
    if (users.rows.length === 0) {
        console.log("was here")
        return res.status(400).json({ message: "The given email does not exist" });
      }
      
      const expiry_time=(Date.now())%1000+3600;
      console.log(expiry_time)
      const userid=users.rows[0].userid;
    const subject="Set Password";
    
    const token = crypto.randomBytes(30).toString('hex');
    
    const newPasswordToken=await pool.query(
      "INSERT INTO password_token (userid, token,expiry_time) VALUES ($1, $2,$3) RETURNING *",
      [userid,token,expiry_time]
    );
    
      const link="http://localhost:3000/setpassword/"+userid+"/"+ newPasswordToken.rows[0].token
    const html=`<a href='${link}'>${link}</a><p>This link will expire in 1 hour</p>`

    const mail=await mailSender(email,subject,html)

    res.status(200).send({message:"A mail has been sent to your email.Please use it to set the password"});


    
    
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/:userid/:token", async (req, res) => {
    try {
      const { userid,token } =
        req.params;
        const password=req.body.password
      
      const users = await pool.query("SELECT * FROM password_token WHERE userid=$1 AND token=$2", [
        userid,token
      ]);
      if (users.rows.length === 0) {
        return res.status(400).send({message:"Invalid link"});
      }
      const DateNow=Date.now()%1000
      if(DateNow > users.rows[0].expiry_time){
        console.log('wow')
        return res.status(400).send({message:"Link has expired"});
      }
      
      const deleteToken=await pool.query(
        "DELETE FROM  password_token WHERE userid=$1",
        [userid]
      );
      const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const updatePassword=await pool.query("UPDATE users SET password=$1 WHERE userid=$2",[bcryptPassword,userid])
    
  
      res.status(200).send({message:"Password updated"});
  

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

export default router;
