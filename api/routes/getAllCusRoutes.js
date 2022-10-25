import express from "express";
import pool from "../db.js";
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getCustomer= await pool.query("select users.userid as userid, users.name as name, users.join_date as date, customer.status as status from users inner join customer on  users.userid = customer.userid ")
        console.log(getCustomer);
        // select users.userid as userid, users.name as name, users.join_date as date, customer.status as status  where users.userid = customer.userid 
        res.json(getCustomer.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;