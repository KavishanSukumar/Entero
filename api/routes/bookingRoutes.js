import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getContact= await pool.query("")

        res.json(getContact.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;