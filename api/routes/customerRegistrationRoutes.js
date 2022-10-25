import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import jwtTokens from "../utils/jwt-helpers.js";
import mailSender from "../utils/mail-helpers.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

//register Customer
router.post("/", validInfo, async (req, res) => {
  try {
    const { fname, lname, email, contactNum, address, password } = req.body;
    const name = fname + " " + lname;
    const users = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    console.log("hello111");
    if (users.rows.length !== 0) {
      console.log("hello");
      return res.json({ status: false });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const joinDate =
      x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate();
    const newUser = await pool.query(
      "INSERT INTO users (email, password, name, contact_number, address,userrole,join_date) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING userid,email,name",
      [email, bcryptPassword, name, contactNum, address, "cs", joinDate]
    );

    const userid = newUser.rows[0].userid;
    const newUserCustomer = await pool.query(
      "INSERT INTO customer (userid, status) VALUES ($1, 'a') RETURNING *",

      [userid]
    );
    console.log("wow");

    const subject = "Verify your account";
    const token = crypto.randomBytes(30).toString("hex");
    const newEmailToken = await pool.query(
      "INSERT INTO email_validate (userid, token) VALUES ($1, $2) RETURNING *",
      [userid, token]
    );
    const link =
      "http://localhost:3000/emailverify/" +
      userid +
      "/" +
      newEmailToken.rows[0].token;
    const html = `<a href='${link}'>${link}</a>`;

    const mail = await mailSender(email, subject, html);

    res
      .status(200)
      .send({ message: "A mail has been sent to your email.Please verify it" });

    // const token = jwtTokens(newUser.rows[0].userid);

    // res.json({ token, status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/:userid/:token", async (req, res) => {
  try {
    const { userid, token } = req.params;

    const users = await pool.query(
      "SELECT * FROM email_validate WHERE userid=$1 AND token=$2",
      [userid, token]
    );
    if (users.rows.length === 0) {
      return res.status(200).send({ message: "Invalid link" });
    }

    const updateEmailValidate = await pool.query(
      "UPDATE users SET email_validated=true "
    );

    const deleteToken = await pool.query(
      "DELETE FROM  email_validate WHERE userid=$1",
      [userid]
    );

    res.status(200).send({ message: "Email verified" });

    // const token = jwtTokens(newUser.rows[0].userid);

    // res.json({ token, status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
