import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM login");
    res.json({ users: users.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await pool.query(
      "INSERT INTO login (id, uname, email, password) VALUES ($1,$2,$3,$4) RETURNING *",
      [req.body.id, req.body.uname, req.body.email, hashedPassword]
    );

    res.json({ user: newUser.rows[0] });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
