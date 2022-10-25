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


router.get("/",async (req,res)=>{
    try{    
      const customer_id = req.body.id;
       console.log(customer_id);
        const getCustomerAppointment1= await pool.query(
          // "SELECT * FROM appointment")
          "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, name  FROM appointment INNER JOIN users ON customer_id=userid WHERE customer_id::text=$1",         
          // "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, name  FROM appointment INNER JOIN users ON customer_id=userid WHERE customer_id::text=$1",
          [customer_id]
        );
       
    res.json(getCustomerAppointment1.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id",async (req,res)=>{
  try{    
    // const customer_id = req.body.id;
    const {id}=req.params;
     console.log(id);
      const getCustomerAppointment1= await pool.query(
        // "SELECT * FROM appointment")
        "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, name  FROM appointment INNER JOIN users ON customer_id=userid WHERE userid::text=$1",         
        // "SELECT appointment_id, to_char(date,'DD-MM-YYYY') as date, time, description, customer_id, sp_id, status, name  FROM appointment INNER JOIN users ON customer_id=userid WHERE customer_id::text=$1",
        [id]
      );
     
  res.json(getCustomerAppointment1.rows);
} catch (error) {
  console.error(error.message);
  res.status(500).send("Server Error");
}
});

// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(req.params);
//     const getCustomerAppointment2 = await pool.query(
//       "SELECT * FROM appointment WHERE customer_id=$1",
//       [id]
//     )

//     res.json(getCustomerAppointment2.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// })

router.post("/:id", async (req, res) => {
  try {
    const { date, time, description,sp_id } = req.body;
    console.log(date);

    const {id}=req.params;
    const newAppointment = await pool.query(
      "INSERT INTO appointment (date,time,description,customer_id,sp_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [date, time, description, id,sp_id]
    )
      console.log("k")
    res.json(newAppointment.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// router.put("/", async (req, res) => {
//   try {
//     const { id, date, time, description, status} = req.body;
    
//     const updateAppointment = await pool.query(
//       "UPDATE appointment SET date=$1,time=$2,description=$3,status=$4 WHERE appointment_id=$4",
//       [date, time, description, status, id])

//     res.json(updateAppointment.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    const { appointment_id, status} = req.body;
    
    const updateAppointment = await pool.query(
      "UPDATE appointment SET status=$1 WHERE appointment_id::=$1",
      [status, appointment_id])

    res.json({ status: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// router.put("/", async (req, res) => {
//   try {
//     const { id, date, time, description} = req.body;
//     const { reply } = req.body;
//     const updateAppointment = await pool.query(
//       "UPDATE appointment SET date=$1,time=$2,description=$3 WHERE appointment_id=$4",
//       [date, time, description, id])

//     res.json(updateAppointment.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteAppointment = await pool.query(
//       "DELETE FROM appointment WHERE appointment_id=$1",[id] )

//         res.json("Done deleting");
//     }
//     catch(err){
//         console.log(err.message);
//     }
// })

export default router;