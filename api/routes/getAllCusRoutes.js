import express from "express";
import pool from "../db.js";
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getCustomer= await pool.query("SELECT * FROM users WHERE userrole='cs'")

        res.json(getCustomer.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;