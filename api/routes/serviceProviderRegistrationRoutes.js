import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtTokens from "../utils/jwt-helpers.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";
import multer from "multer";

const router = express.Router();



//register Customer
router.post("/", async (req, res) => {
  try {
    const { name, email, contactNum, address, brNo, services, events } =
      req.body;
    let hall = false;
    let decoration = false;
    let refreshment = false;
    let photography = false;
    let wedding = false;
    let reception = false;
    let engagement = false;
    let birthday = false;
    let other = false;
    if (services.includes("hall")) {
      hall = true;
    }
    if (services.includes("decoration")) {
      decoration = true;
    }
    if (services.includes("refreshment")) {
      refreshment = true;
    }
    if (services.includes("photography")) {
      photography = true;
    }
    if (events.includes("wedding")) {
      wedding = true;
    }
    if (events.includes("engagement")) {
      engagement = true;
    }
    if (events.includes("reception")) {
      reception = true;
    }
    if (events.includes("birthday")) {
      birthday = true;
    }
    if (events.includes("other")) {
      other = true;
    }

    const users = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (users.rows.length !== 0) {
      return res.json({ status: false });
    }
    const newUser = await pool.query(
      "INSERT INTO users (email, name, contact_number, address, userrole) VALUES ($1, $2, $3, $4, $5) RETURNING userid",
      [email, name, contactNum, address, "sp"]
    );
    console.log(newUser.rows[0].userid);
    const userid = newUser.rows[0].userid;

    const newUserService = await pool.query(
      "INSERT INTO service_provider (userid, br_no, dor, refreshment,decoration,hallservices,photography,birthday,reception,wedding,engagement,other,start_date,end_date,status) VALUES ($1, $2,current_date, $3, $4,$5,$6,$7,$8,$9,$10,$11,current_date,current_date + INTERVAL '10 day','n') RETURNING *",
      [
        userid,
        brNo,
        refreshment,
        decoration,
        hall,
        photography,
        birthday,
        reception,
        wedding,
        engagement,
        other,
      ]
    );

    // const token = jwtTokens(newUser.rows[0].userid);

    res.json({ userid, newUserService, status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
