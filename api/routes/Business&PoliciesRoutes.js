import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const { bpolicies } = req.body;
      const newbpolicies = await pool.query(
        "INSERT INTO policies (bpolicies) VALUES($1) RETURNING *",
        [bpolicies]
      );
      res.json(bpolicies.row[0]);
    } catch (error) {
      console.error(error.message);
    //   res.status(500).send("Server Error");
    }
  });

  

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