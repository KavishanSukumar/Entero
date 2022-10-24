import express from "express";
import pool from "../db.js";

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
    const sp_id = req.body.id;
    const appointments = await pool.query(
      "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, name  FROM appointment INNER JOIN users ON customer_id=userid WHERE sp_id::text=$1",
      [sp_id]
    );
    res.json(appointments.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
