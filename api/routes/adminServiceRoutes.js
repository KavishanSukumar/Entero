import express from "express";
import pool from "../db.js";
import mailSender from "../utils/mail-helpers.js";
import crypto from "crypto";
import fs from "fs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getsp = await pool.query(
      "SELECT users.userid,users.name,users.address,users.email,users.contact_number,service_provider.br_no,service_provider.refreshment,service_provider.decoration,service_provider.hallservices,service_provider.photography,service_provider.birthday,service_provider.reception,service_provider.engagement,service_provider.wedding,service_provider.other,service_provider.status FROM users INNER JOIN service_provider ON users.userid=service_provider.userid"
    );

    res.json(getsp.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getSP = await pool.query(
      "SELECT status FROM service_provider WHERE userid=$1",
      [id]
    );
    if (getSP.rows[0].status === "a") {
      const updatesp = await pool.query(
        "UPDATE service_provider SET status='d' WHERE userid=$1 RETURNING *",
        [id]
      );
    } else {
      const updatesp = await pool.query(
        "UPDATE service_provider SET status='a' WHERE userid=$1 RETURNING *",
        [id]
      );
    }

    res.json({ message: "Status updated" });
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/serviceregister/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const status = req.body.status;
    const email = req.body.email;
    const br_file = req.body.br_file;

    if (status === "a") {
      const expiry_time = (Date.now() % 1000) + 3600;

      const userid = id;
      const subject = "Set Password";

      const token = crypto.randomBytes(30).toString("hex");

      const updateStatus = await pool.query(
        "UPDATE service_provider SET status='a' WHERE userid=$1",
        [id]
      );
      const newPasswordToken = await pool.query(
        "INSERT INTO password_token (userid, token,expiry_time) VALUES ($1, $2,$3) RETURNING *",
        [userid, token, expiry_time]
      );

      const link =
        "http://localhost:3000/setpasswordsp/" +
        userid +
        "/" +
        newPasswordToken.rows[0].token;
      const html = `<a href='${link}'>${link}</a><p>Set your password with this link</p>`;

      const mail = await mailSender(email, subject, html);
      return res.json({ message: "Form is accepted" });
    } else {
      fs.unlink(`../files/${br_file}`, () => {
        console.log("file deleted");
      });
      const deleteSp = await pool.query(
        "DELETE FROM service_provider WHERE userid=$1 ",
        [id]
      );

      return res.json({ message: "Form rejected" });
    }
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
