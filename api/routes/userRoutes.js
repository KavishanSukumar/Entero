import express from "express";
import pool from "../db.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json({ users: users.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const userid = req.body.userid;
    const newUser = await pool.query(
      "SELECT * FROM users WHERE userid::text=$1",
      [userid]
    );
    const { password, ...user } = newUser.rows[0];
    res.json(user);
    return;
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/setpassword", async (req, res) => {
  try {
    const userid = req.body.userid;
    const newUser = await pool.query(
      "SELECT userid,name userrole FROM users WHERE email=$1",
      [email]
    );
    res.json(newUser.rows[0]);
    return;
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
