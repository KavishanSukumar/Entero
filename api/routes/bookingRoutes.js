import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getBooking= await pool.query("SELECT * from booking")

        res.json(getBooking.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;