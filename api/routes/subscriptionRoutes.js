import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getBooking= await pool.query("select * from subscriptionincome ;")

        res.json(getBooking.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

router.post('/',async (req,res)=>{
    try{
        const {serviceprovider,packagename,paydate,amount}=req.body;
        // console.log(packname+' '+packdes+' '+packprice+' '+itemList+' '+userid);
        const newpackage= await pool.query("INSERT INTO subscriptionincome (serviceprovider,packagename,paydate,amount) VALUES ($1,$2,$3,$4) RETURNING *",[serviceprovider,packagename,paydate,amount])
        console.log('successfully insert the subscription ');
        res.json(newpackage.rows[0]);
    }
    catch(err){
        console.log('error in inserting subscription package');
        console.log(err.message);
    }
})
export default router;