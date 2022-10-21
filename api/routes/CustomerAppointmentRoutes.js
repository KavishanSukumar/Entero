import express from "express";
import pool from "../db.js";

const router = express.Router();

// const API_URL_USER = "http://localhost:4000/api/user/";

// async function getUser(userid) {
//   const res1 = await axios.post(API_URL_USER, {
//     userid,
//   });
//   setUserrole(res1.data.userrole);
// }


router.get('/',async (req,res)=>{
    try{    
        const getCustomerAppointment1= await pool.query("SELECT * FROM appointment")

    res.json(getCustomerAppointment1.rows);
  } catch (err) {
    console.log(err.message);
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const getCustomerAppointment2 = await pool.query(
      "SELECT * FROM appointment WHERE contact_id=$1",
      [id]
    )

    res.json(getCustomerAppointment2.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
})

router.post("/:id", async (req, res) => {
  try {
    const { date, time, description,sp_id } = req.body;
    const {id}=req.params;
    const newAppointment = await pool.query(
      "INSERT INTO appointment (date,time,description,customer_id,sp_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [date, time, description, id,sp_id]
    )

    res.json(newAppointment.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    const updateAppointment = await pool.query(
      "UPDATE appointment SET date=$1,time=$2,description=$3 WHERE appointment_id=$4",
      [date, time, description, id])

    res.json(updateAppointment.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAppointment = await pool.query(
      "DELETE FROM appointment WHERE appointment_id=$1",[id] )

        res.json("Done deleting");
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;