import express from "express";
import pool from "../db.js";
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getSp = await pool.query("SELECT users.userid as userid, users.name as name,   service_provider.refreshment  as refreshment ,service_provider.decoration as decoration, service_provider.hallservices as hallservices,service_provider.photography as photography, service_provider.end_date as date FROM users INNER JOIN service_provider ON users.userid=service_provider.userid ORDER BY users.userid ASC ;")
        
        res.json(getSp.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;