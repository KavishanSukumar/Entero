import express from "express";
import pool from "../db.js";

const Router = express.Router();

Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUserProfile = await pool.query(
      "SELECT image FROM users WHERE userid=$1",
      [id]
    );

    res.json(getUserProfile.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

export default Router;
