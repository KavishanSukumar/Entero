import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getsp= await pool.query("SELECT user.userid,user.name,user.address,user.email,user.contact_number,service_provider.br_no, service_provider.br_file,service_provider.package, service_provider.refreshment,service_provider.decoration,service_provider.hallservices,service_provider.photography,service_provider.birthday,service_provider.reception,service_provider.engagement,service_provider.wedding,service_provider.other FROM user INNER JOIN service_provider ON user.userid=service_provider.userid")

        res.json(getsp.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        
        const updatesp= await pool.query("UPDATE service_provider SET status='d' WHERE userid=$1 RETURNING *",[id])

        res.json(updatesp.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/serviceregister/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const {status}=req.body;
        
        const updateSpReg= await pool.query("UPDATE service_provider SET status=$1 WHERE userid=$2 RETURNING *",[status,id])

        res.json(updateSpReg.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;