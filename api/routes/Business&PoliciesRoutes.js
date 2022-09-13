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

  


  
  //get all todos

  router.get("/", async (req, res) => {
    try {
      const allBpolicies = await pool.query("SELECT * FROM policies");
      res.json(allBpolicies.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a todo
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const policies = await pool.query("SELECT * FROM policies WHERE bpolicies_id = $1", [
        id
      ]);
  
      res.json(policies.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a todo
  
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { bpolicies } = req.body;
      const updateBpolicies = await pool.query(
        "UPDATE policies SET bpolicies = $1 WHERE bpolicies_id = $2",
        [bpolicies, id]
      );
  
      res.json("Business and Policies was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a todo
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteBpolicies = await pool.query("DELETE FROM policies WHERE bpolicies_id = $1", [
        id
      ]);
      res.json("Business and Policies was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  
  export default router;