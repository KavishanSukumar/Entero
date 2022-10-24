import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        
        // const getCustomerEvent= await pool.query("SELECT name FROM users WHERE userrole='sp'");
         const getCustomerEvent= await pool.query("SELECT * FROM users INNER JOIN service_provider ON service_provider.userid=users.userid");
        res.json(getCustomerEvent.rows);
    }
    catch(err){
        console.log(err.message);
    };
});


























export default router;