


  import express from "express";
import pool from "../db.js";


const router = express.Router();
router.put('/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        console.log('thid is user id'+id);
        const {appointcheck,chatcheck} = req.body;
        console.log('app -- '+appointcheck);
        console.log('chat -- '+chatcheck);
        const updatepackage = await pool.query("update portfolio set   appointment_enable=$1 , chat_enable=$2   where userid=$3 RETURNING *" , [appointcheck,chatcheck,id]);
        res.json(updatepackage.rows[0]);
        console.log('successfully updated the appointcheck in portfolio');
        
    } catch (error) {
      console.log(error.message)
      console.log('error in updating the appointcheck in portfolio');
      
    }
  });
  

  export default router;