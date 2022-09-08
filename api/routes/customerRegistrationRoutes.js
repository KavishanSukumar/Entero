import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtTokens from "../utils/jwt-helpers.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

//register Customer
router.post("/", validInfo, async (req, res) => {
  try {
    const { fname, lname, email, contactNum, address, uname, password } =
      req.body;
    const name = fname + " " + lname;
    const users = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (users.rows.length !== 0) {
      return res.json({ status: false });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO users (email, password, name, contact_number, address, userrole) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, bcryptPassword, name, contactNum, address, "cs"]
    );
    const token = jwtTokens(newUser.rows[0].userid);

    res.json({ token, status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
