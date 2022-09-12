import express from "express";
import pool from "../db.js";
import upload from "../middleware/files.js"
import mailSender from "../utils/mail-helpers.js";


const router = express.Router();




//register Customer
router.post("/",upload.single("file"), async (req,res) => {  
    
  try {
    const { name, email, contactNum, address, brNo, services,events } =
      req.body;
      
        let hall=false;
        let decoration=false;
        let refreshment=false;
        let photography=false;
        let wedding=false;
        let reception=false;
        let engagement=false;
        let birthday=false;
        let other=false;
      if(services.includes('hall')){
        hall=true
      }
      if(services.includes('decoration')){
        decoration=true
      }
      if(services.includes('refreshment')){
        refreshment=true
      }
      if(services.includes('photography')){
        photography=true
      }
      if(events.includes('wedding')){
        wedding=true;
      }
      if(events.includes('engagement')){
        engagement=true;
      }
      if(events.includes('reception')){
        reception=true;
      }
      if(events.includes('birthday')){
        birthday=true;
      }
      if(events.includes('other')){
        other=true;
      }
      
    
    const users = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (users.rows.length !== 0) {
      return res.json({ status: false });
    }
    const newUser = await pool.query(
      "INSERT INTO users (email, name, contact_number, address, userrole) VALUES ($1, $2, $3, $4, $5) RETURNING userid",
      [email,  name, contactNum, address, "sp"]
    );
    console.log(newUser.rows[0].userid)
    const userid=newUser.rows[0].userid;
    const brFile=req.filename;

    const newUserService=await pool.query("INSERT INTO service_provider (userid, br_no, br_file, dor, refreshment,decoration,hallservices,photography,birthday,reception,wedding,engagement,other,start_date,end_date,status) VALUES ($1, $2, $3,current_date, $4, $5,$6,$7,$8,$9,$10,$11,$12,current_date,current_date + INTERVAL '10 day','n') RETURNING *",
    [userid,brNo,brFile,refreshment,decoration,hall,photography,birthday,reception,wedding,engagement,other]);
    
    const subject="Registration Form Received";
    
    
    
    const html="<p>Thank you for registering for our system.We will process your registration form and reach within 2 working days.</p>"

    const mail=await mailSender(email,subject,html)

    res.status(200).send({message:"Mail sent"})

    


  //   // const token = jwtTokens(newUser.rows[0].userid);

  //   res.json({ newUser,newUserService });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.put("/:userid/:token", async (req, res) => {
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
    
    
    const deleteToken=await pool.query(
      "DELETE FROM  password_token WHERE userid=$1",
      [userid]
    );
    const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(password, salt);

  const updatePassword=await pool.query("UPDATE users SET password=$1 WHERE userid=$2",[bcryptPassword,userid])
  const updateStatus=await pool.query("UPDATE service_provider SET status='a' WHERE userid=$1",[userid])
  

    res.status(200).send({message:"Password set"});


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
