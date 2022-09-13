import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getCustomerEvent= await pool.query("SELECT DISTINCT userid FROM service_provider")

        res.json(getCustomerEvent.rows);
    }
    catch(err){
        console.log(err.message);
    };
});


























export default router;