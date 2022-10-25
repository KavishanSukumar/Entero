import { date } from "azure-storage";
import express from "express";
import pool from "../db.js";
import mailSender from "../utils/mail-helpers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getBooking = await pool.query("SELECT * from booking");

    res.json(getBooking.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const getBooking = await pool.query("SELECT * from booking where userid_c=$1 ",[id]);
    
    res.json(getBooking.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const {date,time,location,eventName,userid_c,userid_s,package_id,price} = req.body;
    const x = new Date();
    const madeDate = x.getFullYear() + "-" + (x.getMonth()+1) + "-" + x.getDate();
    const madeTime = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();


    const makeBooking = await pool.query(
      "INSERT INTO booking (madeDate,madeTime,date,time,location,type,userid_c,userid_s,package_id,amount,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,'0') RETURNING *",
      [
        madeDate,
        madeTime,
        date,
        time,
        location,
        eventName,
        userid_c,
        userid_s,
        package_id,
        price,
      ]
    );

    const sp_id=makeBooking.rows[0].userid_s;

    const getServiceProvider=await pool.query("SELECT email FROM users WHERE userid=$1",[sp_id])

    const subject="Booking processing";
    
    
    
    const html="<p>We will let you know when your booking is accepted.</p>"

    const mail=await mailSender(getServiceProvider.rows[0].email,subject,html)

    res.json(makeBooking.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
