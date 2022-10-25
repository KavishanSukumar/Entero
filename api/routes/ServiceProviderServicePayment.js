import express from "express";
import pool from "../db.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getuser = await pool.query(
      "SELECT system_fee_type FROM service_provider WHERE userid=$1",
      [id]
    );

    res.json(getuser.rows[0]);
  } catch (err) {
    console.log(err.message);
    console.log("this is aerror message");
  }
});

export default router;
