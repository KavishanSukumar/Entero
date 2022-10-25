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

router.get("/serviceprovider/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const getBooking = await pool.query("SELECT * from booking where userid_s=$1 ",[id]);
    
    res.json(getBooking.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/bookingdetail/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const getBooking = await pool.query("SELECT * from booking where booking_id=$1 ",[id]);

    const getPackage=await pool.query("SELECT name,price from sp_packages where package_id=$1 ",[getBooking.rows[0].package_id])
    const getServiceProvider=await pool.query("SELECT name,address from users where userid=$1 ",[getBooking.rows[0].userid_s])

    const getCustomer=await pool.query("SELECT name,address from users where userid=$1 ",[getBooking.rows[0].userid_c])
    
    res.json({bookingDetail:getBooking.rows[0],packageDetail:getPackage.rows[0],serviceDetail:getServiceProvider.rows[0],customerDetail:getCustomer.rows[0]});
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

router.put("/cancelbooking/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const cancelBooking = await pool.query("UPDATE booking SET status='4' where booking_id=$1 returning *",[id])
    
    const subject="Booking cancelled";
    
    const getServiceProvider=await pool.query("SELECT email FROM users WHERE userid=$1",[cancelBooking.rows[0].userid_s])
    
    const html=`<p>The booking ID:${cancelBooking.rows[0].booking_id} has been cancelled by the customer.</p>`

    const mail=await mailSender(getServiceProvider.rows[0].email,subject,html)
    res.json({status:true})
    
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/cancelbookingsp/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const cancelBooking = await pool.query("UPDATE booking SET status='4' where booking_id=$1 returning *",[id])
    
    const subject="Booking cancelled";
    
    const getCustomer=await pool.query("SELECT email FROM users WHERE userid=$1",[cancelBooking.rows[0].userid_c])
    
    const html=`<p>The booking ID:${cancelBooking.rows[0].booking_id} has been cancelled by the service provider.</p>`

    const mail=await mailSender(getCustomer.rows[0].email,subject,html)
    res.json({status:true})
    
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/acceptbooking/:id", async (req, res) => {
  try {
    
    const {id}=req.params;
    const cancelBooking = await pool.query("UPDATE booking SET status='1' where booking_id=$1 returning *",[id])
    
    const subject="Booking cancelled";
    
    const getCustomer=await pool.query("SELECT email FROM users WHERE userid=$1",[cancelBooking.rows[0].userid_c])
    
    const html=`<p>The booking ID:${cancelBooking.rows[0].booking_id} has been accepted by the service provider.Please pay the fee to confirm the booking</p>`

    const mail=await mailSender(getCustomer.rows[0].email,subject,html)
    res.json({status:true})
    
  } catch (err) {
    console.log(err.message);
  }
});


export default router;
