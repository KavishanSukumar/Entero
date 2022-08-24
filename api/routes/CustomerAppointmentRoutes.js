import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{    
        const getCustomerAppointment1= await pool.query("SELECT * FROM appointment");

    res.json(getCustomerAppointment1.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const getCustomerAppointment2 = await pool.query(
      "SELECT * FROM appointment WHERE contact_id=$1",
      [id]
    );

    res.json(getCustomerAppointment2.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { date, time, description } = req.body;
    const newAppointment = await pool.query(
      "INSERT INTO appointment (date,time,description) VALUES ($1,$2,$3) RETURNING *",
      [date, time, description]
    );

    res.json(newAppointment.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    const updateAppointment = await pool.query(
      "UPDATE appointment SET date=$1,time=$2,description=$3 WHERE appointment_id=$4",
      [date, time, description, id]
    );

    res.json("Done updating");
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAppointment = await pool.query(
      "DELETE FROM appointment WHERE appointment_id=$1",
      [id]
    );

        res.json("Done deleting");
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;