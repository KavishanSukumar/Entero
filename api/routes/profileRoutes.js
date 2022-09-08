import express from "express";
import pool from "../db.js";

const router = express.Router();


router.get('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const getUserProfile= await pool.query("SELECT name,email,contact_number,address FROM user WHERE userid=$1",[id])

        res.json(getUserProfile.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

router.get('/image/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const getUserProfileImage= await pool.query("SELECT image FROM user WHERE userid=$1",[id])

        res.json(getUserProfileImage.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})


router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,contact_number,address}=req.body;
        const updateProfile= await pool.query("UPDATE user SET name=$1,email=$2,contact_number=$3,address=$4 WHERE userid=$5 RETURNING *",[name,email,contact_number,address,id])

        res.json(updateProfile.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;