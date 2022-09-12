import express from "express";
import pool from "../db.js";
import mailSender from "../utils/mail-helpers.js";
import crypto from "crypto";
import fs from "fs"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getsp = await pool.query(
      "SELECT user.userid,user.name,user.address,user.email,user.contact_number,service_provider.br_no, service_provider.br_file,service_provider.package, service_provider.refreshment,service_provider.decoration,service_provider.hallservices,service_provider.photography,service_provider.birthday,service_provider.reception,service_provider.engagement,service_provider.wedding,service_provider.other,service_provider.status FROM user INNER JOIN service_provider ON user.userid=service_provider.userid"
    );

    res.json(getsp.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatesp = await pool.query(
      "UPDATE service_provider SET status='d' WHERE userid=$1 RETURNING *",
      [id]
    );

    res.json(updatesp.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/serviceregister/:id", async (req, res) => {
  try {
    const { id} = req.params;

    const status = req.body.status;
    const email=req.body.email;
    const br_file=req.body.br_file

    if (status === "a") {
      const expiry_time = (Date.now() % 1000) + 3600;

      const userid = updateSpReg.rows[0].userid;
      const subject = "Set Password";

      const token = crypto.randomBytes(30).toString("hex");

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
      return res.status(200).json({ message: "Form is accepted" });
    } else {
        fs.unlink(`../files/${br_file}`,()=>{
            console.log("file deleted")
        })
      const deleteSp = await pool.query(
        "DELETE FROM service_provider WHERE userid=$1 ",
        [id]
      );
      
      return res.status(200).json({ message: "Form rejected" });
    }
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
