import express from "express";
import pool from "../db.js";


const router = express.Router();
router.get("/", async (req, res) => {
  try {

   
    const portfolio = await pool.query("select * from portfolio");
    res.json(portfolio.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}); 
router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;
    console.log('sp id is');
    console.log(req.params);
    const portfolio = await pool.query("select * from portfolio WHERE userid=$1", [id]);
    res.json(portfolio.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}); 

router.put('/:id', async(req,res)=>{
  try {
      const {id}=req.params;
      console.log('thid is user id'+req.params);
      const {description} = req.body;
      const updatepackage = await pool.query("update portfolio set  description=$1 where userid=$2 RETURNING *" , [description,id]);
      res.json(updatepackage.rows[0]);
      console.log('successfully updated the description in portfolio');
      
  } catch (error) {
    console.log(error.message)
    console.log('error in updating the description1 in portfolio');
    
  }
});


export default router;