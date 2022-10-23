import { date } from "azure-storage";
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

router.post('/',async (req,res)=>{
    try{
        
        const getBooking= await pool.query("INSERT INTO booking (date,time,location,type,userid_c,userid_s,package_id,amount,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'0') RETURNING *",[date,time,location,eventName,])

        res.json(getBooking.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;