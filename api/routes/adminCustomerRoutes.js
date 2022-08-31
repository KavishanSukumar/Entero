import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getCustomer= await pool.query("SELECT userid,name,address,email,contact_number FROM users WHERE userrole='cs'")

        res.json(getCustomer.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        
        
        const updatecustomer= await pool.query("UPDATE customer SET status='d' WHERE userid=$1 RETURNING *",[id])

        res.json(updatecustomer.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;