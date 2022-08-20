import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtTokens from "../utils/jwt-helpers.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

//register
router.post("/register", validInfo, async (req, res) => {
  try {
    const { uname, email, password } = req.body;
    const users = await pool.query("SELECT * FROM login WHERE email=$1", [
      email,
    ]);
    if (users.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO login (uname, email, password) VALUES ($1, $2, $3) RETURNING *",
      [uname, email, bcryptPassword]
    );
    const token = jwtTokens(newUser.rows[0].userid);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM login WHERE email= $1", [
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
    return res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
