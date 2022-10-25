import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtTokens from "../utils/jwt-helpers.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

//register Service provider

router.post("/login", validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email= $1", [
      email,
    ]);
    //user exist or not
    if (user.rows.length === 0) {
      return res.json({ status: false });
    }
    
    //Password check
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.json({ status: false });
    }

    //status check for customer role and service role
    // if(user.rows[0].userrole==='cs'){
    //   const customer=await pool.query("SELECT status FROM customer WHERE userid=$1",[user.rows[0].userid])

    //   if(customer.rows[0].status != 'a'){
    //     return res.json({ status: false });
    //   }
    // }else if(user.rows[0].userrole==='sp'){
    //   const service_provider=await pool.query("SELECT status FROM service_provider WHERE userid=$1",[user.rows[0].userid])

    //   if(service_provider.rows[0].status != 'a'){
    //     return res.json({ status: false });
    //   }
    // }
    

    // JWT
    const token = jwtTokens(user.rows[0].userid);
    res.json({ token, status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/isverify", authorization, async (req, res) => {
  try {
    return res.json({ status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
