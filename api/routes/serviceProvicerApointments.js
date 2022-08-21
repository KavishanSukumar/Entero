import express from "express";
import pool from "../db.js";

const router = express.Router();
//get all service provider appointments;
router.post("/", async (req, res) => {
  try {
    const sp_id = req.body.id;
    const appointments = await pool.query(
      "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, uname  FROM appointment INNER JOIN login ON customer_id=userid WHERE sp_id::text=$1",
      [sp_id]
    );
    res.json(appointments.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//update the action of the appointment
router.put("/", async (req, res) => {
  try {
    const { appointment_id, status } = req.body;
    const update = await pool.query(
      "UPDATE appointment SET status=$1 WHERE appointment_id::text=$2",
      [status, appointment_id]
    );
    res.json({ status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
